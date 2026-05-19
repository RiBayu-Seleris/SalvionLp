import { useRef, useState, useCallback, useEffect } from "react";

const SCAN_DURATION_MS = 30000;
const GAZE_AWAY_FRAMES = 3;

const FACE_OVAL_INDICES = [
  10, 338, 297, 332, 284, 251, 389, 356, 454, 323, 361, 288, 397, 365, 379, 378,
  400, 377, 152, 148, 176, 149, 150, 136, 172, 58, 132, 93, 234, 127, 162, 21,
  54, 103, 67, 109,
];

function pointInOval(px, py, cx, cy, rx, ry) {
  const dx = (px - cx) / rx;
  const dy = (py - cy) / ry;
  return dx * dx + dy * dy <= 1;
}

function isLookingAway(lm) {
  const nose = lm[1];
  const leftEar = lm[234];
  const rightEar = lm[454];
  const chin = lm[152];
  const forehead = lm[10];

  const faceW = Math.abs(leftEar.x - rightEar.x);
  const centerX = (leftEar.x + rightEar.x) / 2;
  const yawDev = Math.abs(nose.x - centerX) / faceW;
  if (yawDev > 0.26) return true;

  const faceH = Math.abs(chin.y - forehead.y);
  const centerY = (chin.y + forehead.y) / 2;
  const pitchDev = Math.abs(nose.y - centerY) / faceH;
  return pitchDev > 0.22;
}

function isHandCoveringFace(faceLm, handResults, canvasW, canvasH) {
  if (!handResults?.landmarks?.length) return false;
  let minX = Infinity,
    maxX = -Infinity,
    minY = Infinity,
    maxY = -Infinity;
  for (const p of faceLm) {
    const px = p.x * canvasW;
    const py = p.y * canvasH;
    if (px < minX) minX = px;
    if (px > maxX) maxX = px;
    if (py < minY) minY = py;
    if (py > maxY) maxY = py;
  }
  for (const handLm of handResults.landmarks) {
    let count = 0;
    for (const p of handLm) {
      const hx = p.x * canvasW;
      const hy = p.y * canvasH;
      if (hx >= minX && hx <= maxX && hy >= minY && hy <= maxY) {
        count++;
        if (count >= 3) return true;
      }
    }
  }
  return false;
}

// ─── Video rotation helpers ──────────────────────────────────────────────────
function getVideoRotation(video) {
  try {
    const track = video.srcObject?.getVideoTracks?.()[0];
    const settings = track?.getSettings?.() ?? {};
    const rotation = settings.rotation ?? 0;
    if (rotation === 90 || rotation === 270) return rotation;
  } catch {}
  return 0;
}

function drawVideoMirrored(ctx, video, W, H) {
  const rotation = getVideoRotation(video);
  ctx.save();
  ctx.translate(W / 2, H / 2);

  if (rotation === 90 || rotation === 270) {
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.scale(-1, 1);
    ctx.drawImage(video, -H / 2, -W / 2, H, W);
  } else {
    ctx.scale(-1, 1);
    ctx.drawImage(video, -W / 2, -H / 2, W, H);
  }

  ctx.restore();
}

export function useFaceScanner({ ellipseRef, onScanComplete } = {}) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [cameraActive, setCameraActive] = useState(false);
  const [personDetected, setPersonDetected] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [isGazePaused, setIsGazePaused] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const internals = useRef({
    faceLandmarker: null,
    handLandmarker: null,
    stream: null,
    arAnimId: null,
    pulseT: 0,
    lastArTime: -1,
    isUnmounted: false,
    gazeAwayCount: 0,
    scanStartMs: null,
    accumulatedMs: 0,
    pauseStartMs: null,
    cachedOval: null,
    cachedScanGrad: null,
    cachedScanGradY: -1,
    lastGazeLmKey: null,
    lastGazeResult: false,
    isGazePausedRef: false,
    personDetectedRef: false,
    scanCompleteRef: false,
  });

  const invalidateOvalCache = useCallback(() => {
    internals.current.cachedOval = null;
  }, []);

  function getOvalInCanvasSpace(canvas) {
    if (internals.current.cachedOval) return internals.current.cachedOval;
    const ellipse = ellipseRef?.current;
    if (!ellipse) return null;
    const svgEl = ellipse.closest("svg");
    if (!svgEl) return null;
    const svgRect = svgEl.getBoundingClientRect();
    const ellipseRect = ellipse.getBoundingClientRect();
    if (svgRect.width === 0 || svgRect.height === 0) return null;
    const centerXScreen =
      ellipseRect.left + ellipseRect.width / 2 - svgRect.left;
    const centerYScreen =
      ellipseRect.top + ellipseRect.height / 2 - svgRect.top;
    const scaleX = canvas.width / svgRect.width;
    const scaleY = canvas.height / svgRect.height;
    internals.current.cachedOval = {
      cx: centerXScreen * scaleX,
      cy: centerYScreen * scaleY,
      rx: (ellipseRect.width / 2) * scaleX,
      ry: (ellipseRect.height / 2) * scaleY,
    };
    return internals.current.cachedOval;
  }

  function getScanGrad(ctx, scanY) {
    const c = internals.current;
    if (c.cachedScanGrad && Math.abs(scanY - c.cachedScanGradY) < 1)
      return c.cachedScanGrad;
    const g = ctx.createLinearGradient(0, scanY - 12, 0, scanY + 12);
    g.addColorStop(0, "rgba(74,222,128,0)");
    g.addColorStop(0.5, "rgba(74,222,128,0.18)");
    g.addColorStop(1, "rgba(74,222,128,0)");
    c.cachedScanGrad = g;
    c.cachedScanGradY = scanY;
    return g;
  }

  // ─── Draw ───────────────────────────────────────────────────────────────────
  function drawMesh(lm, canvas) {
    const ctx = canvas.getContext("2d");
    if (!ctx || !videoRef.current) return;
    const W = canvas.width;
    const H = canvas.height;
    const c = internals.current;
    const paused = c.isGazePausedRef;

    ctx.clearRect(0, 0, W, H);

    // ✅ Pakai helper — auto-koreksi rotasi
    drawVideoMirrored(ctx, videoRef.current, W, H);

    const tess = window.__FL_TESS;
    if (!tess) return;

    c.pulseT += paused ? 0 : 0.016;
    const scanY = H * 0.5 + Math.sin(c.pulseT) * H * 0.4;
    const band = H * 0.26;
    const bandInv = 1 / band;

    ctx.save();
    ctx.translate(W, 0);
    ctx.scale(-1, 1);
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = 0.55;

    for (let i = 0; i < tess.length; i++) {
      const { start, end } = tess[i];
      const a = lm[start];
      const b = lm[end];
      const midY = (a.y + b.y) * 0.5 * H;
      const dist = Math.abs(midY - scanY);
      if (dist > band) continue;
      const norm = 1 - dist * bandInv;
      const ease = norm * norm;
      const alpha = paused ? 0.06 + ease * 0.12 : 0.1 + ease * 0.52;
      const lum = Math.round(180 + ease * 75);
      ctx.strokeStyle = `rgba(${lum},${lum},${lum},${alpha})`;
      ctx.beginPath();
      ctx.moveTo(a.x * W, a.y * H);
      ctx.lineTo(b.x * W, b.y * H);
      ctx.stroke();
    }

    if (!paused) {
      const la = 0.1 + 0.04 * Math.sin(c.pulseT * 3.5);
      ctx.fillStyle = `rgba(74,222,128,${la})`;
      ctx.fillRect(0, scanY - 0.5, W, 1.5);
    }
    ctx.restore();

    if (!paused) {
      ctx.save();
      ctx.fillStyle = getScanGrad(ctx, scanY);
      ctx.fillRect(0, scanY - 12, W, 24);
      ctx.restore();
    }
  }

  function drawIdleFrame(canvas) {
    const ctx = canvas.getContext("2d");
    if (!ctx || !videoRef.current) return;
    const W = canvas.width;
    const H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    // ✅ Pakai helper — auto-koreksi rotasi
    drawVideoMirrored(ctx, videoRef.current, W, H);
  }

  // ─── Pause / resume ─────────────────────────────────────────────────────────
  function pauseScan() {
    const c = internals.current;
    if (c.isGazePausedRef) return;
    c.isGazePausedRef = true;
    c.pauseStartMs = performance.now();
    setIsGazePaused(true);
  }

  function resumeScan() {
    const c = internals.current;
    if (!c.isGazePausedRef) return;
    if (c.pauseStartMs !== null)
      c.accumulatedMs += performance.now() - c.pauseStartMs;
    c.isGazePausedRef = false;
    c.pauseStartMs = null;
    c.gazeAwayCount = 0;
    setIsGazePaused(false);
  }

  // ─── Main predict loop ──────────────────────────────────────────────────────
  function arPredict() {
    const c = internals.current;
    if (c.isUnmounted) return;
    if (document.hidden) {
      c.arAnimId = requestAnimationFrame(arPredict);
      return;
    }

    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (
      !c.faceLandmarker ||
      !c.handLandmarker ||
      !video ||
      video.readyState < 2
    ) {
      c.arAnimId = requestAnimationFrame(arPredict);
      return;
    }

    const vw = video.videoWidth || 640;
    const vh = video.videoHeight || 480;
    if (canvas.width !== vw || canvas.height !== vh) {
      canvas.width = vw;
      canvas.height = vh;
      c.cachedOval = null;
    }

    const now = performance.now();
    if (now === c.lastArTime) {
      c.arAnimId = requestAnimationFrame(arPredict);
      return;
    }

    let faceResult, handResult;
    try {
      faceResult = c.faceLandmarker.detectForVideo(video, now);
      handResult = c.handLandmarker.detectForVideo(video, now);
    } catch {
      c.arAnimId = requestAnimationFrame(arPredict);
      return;
    }

    if (faceResult?.faceLandmarks?.length > 0) {
      if (!c.personDetectedRef) {
        c.personDetectedRef = true;
        setPersonDetected(true);
      }

      const lm = faceResult.faceLandmarks[0];
      const cw = canvas.width;
      const ch = canvas.height;

      const oval = getOvalInCanvasSpace(canvas);
      let faceInOval = true;
      if (oval) {
        const { cx, cy, rx, ry } = oval;
        faceInOval = FACE_OVAL_INDICES.every((idx) => {
          const p = lm[idx];
          return p ? pointInOval(p.x * cw, p.y * ch, cx, cy, rx, ry) : true;
        });
      }

      const lookingAway = isLookingAway(lm);
      const handCovering = isHandCoveringFace(lm, handResult, cw, ch);

      if (!faceInOval || lookingAway || handCovering) {
        c.gazeAwayCount++;
        if (c.gazeAwayCount >= GAZE_AWAY_FRAMES) {
          c.personDetectedRef = false;
          setPersonDetected(false);
          pauseScan();
        }
      } else {
        c.gazeAwayCount = 0;
        if (c.isGazePausedRef && c.pauseStartMs !== null) {
          c.accumulatedMs += now - c.pauseStartMs;
          c.pauseStartMs = null;
        }
        if (c.isGazePausedRef) resumeScan();

        if (c.scanStartMs === null) {
          c.accumulatedMs = 0;
          c.pauseStartMs = null;
          c.scanStartMs = performance.now();
          setScanProgress(1);
        }
      }

      if (c.scanStartMs !== null && !c.scanCompleteRef) {
        const elapsed = c.isGazePausedRef
          ? Math.max(
              0,
              (c.pauseStartMs ?? now) - c.scanStartMs - c.accumulatedMs,
            )
          : Math.max(0, now - c.scanStartMs - c.accumulatedMs);

        const pct = Math.min(100, (elapsed / SCAN_DURATION_MS) * 100);
        setScanProgress(pct);

        if (pct >= 100) {
          c.scanCompleteRef = true;
          setScanComplete(true);
          onScanComplete?.();
        }
      }

      drawMesh(lm, canvas);
    } else {
      if (c.personDetectedRef) {
        c.personDetectedRef = false;
        setPersonDetected(false);
      }
      c.gazeAwayCount = 0;
      pauseScan();
      drawIdleFrame(canvas);
    }

    c.lastArTime = now;
    c.arAnimId = requestAnimationFrame(arPredict);
  }

  // ─── Init MediaPipe ─────────────────────────────────────────────────────────
  async function initFaceLandmarker() {
    const { FaceLandmarker, HandLandmarker, FilesetResolver } =
      await import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/vision_bundle.mjs");
    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm",
    );
    internals.current.faceLandmarker = await FaceLandmarker.createFromOptions(
      vision,
      {
        baseOptions: {
          modelAssetPath:
            "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
          delegate: "GPU",
        },
        outputFaceBlendshapes: false,
        runningMode: "VIDEO",
        numFaces: 1,
      },
    );
    internals.current.handLandmarker = await HandLandmarker.createFromOptions(
      vision,
      {
        baseOptions: {
          modelAssetPath:
            "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",
          delegate: "GPU",
        },
        runningMode: "VIDEO",
        numHands: 2,
      },
    );
    window.__FL_TESS = FaceLandmarker.FACE_LANDMARKS_TESSELATION;
  }

  // ─── Camera ─────────────────────────────────────────────────────────────────
  const initFaceTracker = useCallback(async () => {
    const c = internals.current;
    try {
      await initFaceLandmarker();
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: 640, height: 480 },
        audio: false,
      });
      c.stream = stream;
      if (!videoRef.current || c.isUnmounted) return;
      videoRef.current.srcObject = stream;
      videoRef.current.onloadeddata = () => {
        if (c.isUnmounted) return;
        setCameraActive(true);

        const ro = new ResizeObserver(invalidateOvalCache);
        if (canvasRef.current) ro.observe(canvasRef.current);
        c._resizeObserver = ro;

        arPredict();
      };
    } catch (err) {
      console.error("FaceTracker init error:", err);
    }
  }, []);

  // ─── Cleanup ────────────────────────────────────────────────────────────────
  const cleanup = useCallback(() => {
    const c = internals.current;
    c.isUnmounted = true;
    cancelAnimationFrame(c.arAnimId);
    c._resizeObserver?.disconnect();
    if (c.stream) {
      c.stream.getTracks().forEach((t) => t.stop());
      c.stream = null;
    }
    if (c.faceLandmarker) {
      c.faceLandmarker.close();
      c.faceLandmarker = null;
    }
    if (c.handLandmarker) {
      c.handLandmarker.close();
      c.handLandmarker = null;
    }
    if (videoRef.current) videoRef.current.srcObject = null;
    c.cachedOval = null;
    c.cachedScanGrad = null;
    c.lastGazeLmKey = null;
  }, []);

  // ─── Lifecycle ──────────────────────────────────────────────────────────────
  useEffect(() => {
    internals.current.isUnmounted = false;
    initFaceTracker();
    return cleanup;
  }, []);

  return {
    videoRef,
    canvasRef,
    cameraActive,
    personDetected,
    scanProgress,
    isGazePaused,
    scanComplete,
    isDetecting: personDetected && !isGazePaused,
  };
}
