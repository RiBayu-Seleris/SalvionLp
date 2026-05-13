import { useState, useRef, useCallback, useEffect } from "react";

/**
 * BeforeAfterSlider dengan animasi intro saat masuk viewport:
 * tengah (0.5) → geser ke kiri (0.05) → balik ke tengah (0.5)
 *
 * Props:
 *   beforeSrc   - URL / import gambar BEFORE (kiri)
 *   afterSrc    - URL / import gambar AFTER  (kanan)
 *   beforeLabel - teks label kiri  (default "Normal View")
 *   afterLabel  - teks label kanan (default "Salvion AI Vision")
 *   width       - lebar container  (default "460px")
 *   initialPos  - posisi awal 0-1  (default 0.5)
 */
export default function AiTrace({
  beforeSrc,
  afterSrc,
  beforeLabel = "Normal View",
  afterLabel = "Salvion AI Vision",
  width = "460px",
  initialPos = 0.5,
}) {
  const [pos, setPos] = useState(initialPos);
  const dragging = useRef(false);
  const wrapRef = useRef(null);
  const animRef = useRef(null); // simpan requestAnimationFrame id
  const hasAnimated = useRef(false); // cegah animasi jalan dua kali

  /* ---------- helpers ---------- */
  const clamp = (v) => Math.max(0, Math.min(1, v));

  const calcPos = useCallback((clientX) => {
    if (!wrapRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    setPos(clamp((clientX - rect.left) / rect.width));
  }, []);

  /* ---------- INTRO ANIMATION ---------- */
  // easing: ease-in-out cubic
  const easeInOut = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  const animateTo = useCallback((from, to, duration, onDone) => {
    const start = performance.now();
    const tick = (now) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      setPos(from + (to - from) * easeInOut(t));
      if (t < 1) {
        animRef.current = requestAnimationFrame(tick);
      } else {
        onDone && onDone();
      }
    };
    animRef.current = requestAnimationFrame(tick);
  }, []);

  const runIntroSequence = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    // Fase 1: tengah (0.5) → kiri (0.05) — 700ms
    animateTo(0.5, 0.05, 700, () => {
      // jeda sebentar di kiri, lalu…
      setTimeout(() => {
        // Fase 2: kiri (0.05) → tengah (0.5) — 800ms
        animateTo(0.05, 0.5, 800, null);
      }, 300);
    });
  }, [animateTo]);

  /* IntersectionObserver — trigger saat ≥40% komponen terlihat */
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runIntroSequence();
          observer.disconnect(); // cukup sekali
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [runIntroSequence]);

  /* ---------- mouse ---------- */
  const onMouseDown = (e) => {
    // Batalkan animasi yang sedang berjalan jika user mulai drag
    if (animRef.current) cancelAnimationFrame(animRef.current);
    dragging.current = true;
    calcPos(e.clientX);
  };

  useEffect(() => {
    const move = (e) => {
      if (dragging.current) calcPos(e.clientX);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
  }, [calcPos]);

  /* ---------- touch ---------- */
  const onTouchStart = (e) => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    dragging.current = true;
    calcPos(e.touches[0].clientX);
  };

  useEffect(() => {
    const move = (e) => {
      if (dragging.current) calcPos(e.touches[0].clientX);
    };
    const end = () => {
      dragging.current = false;
    };
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("touchend", end);
    return () => {
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", end);
    };
  }, [calcPos]);

  /* ---------- derived ---------- */
  const pct = `${(pos * 100).toFixed(2)}%`;

  /* ===================== RENDER ===================== */
  return (
    <div
      ref={wrapRef}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      style={{
        fontFamily: "'Rajdhani', sans-serif",
        display: "inline-block",
        width,
        position: "relative",
        cursor: "col-resize",
        userSelect: "none",
        touchAction: "none",
      }}
    >
      {/* SLIDER CONTAINER */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "3/4",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow:
            "0 0 0 1px rgba(0,229,255,.25), 0 0 40px rgba(0,229,255,.12), 0 20px 60px rgba(0,0,0,.8)",
        }}
      >
        {/* BEFORE image */}
        <img src={beforeSrc} alt="before" draggable={false} style={imgStyle} />

        {/* AFTER image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            clipPath: `inset(0 0 0 ${pct})`,
          }}
        >
          <img src={afterSrc} alt="after" draggable={false} style={imgStyle} />
        </div>

        {/* DIVIDER LINE */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: pct,
            width: 2,
            transform: "translateX(-50%)",
            background:
              "linear-gradient(to bottom, transparent, #00e5ff 15%, #00e5ff 85%, transparent)",
            boxShadow: "0 0 10px #00e5ff, 0 0 22px rgba(0,229,255,.45)",
            pointerEvents: "none",
          }}
        />

        {/* LABEL BAWAH */}
        <div className="absolute bottom-0 left-0 right-0 flex pointer-events-none">
          <div
            className="flex items-center justify-center py-3 overflow-hidden text-xs font-bold tracking-widest text-white/85 backdrop-blur-md bg-black/60"
            style={{ width: pct }}
          >
            <span className="whitespace-nowrap">{beforeLabel}</span>
          </div>
          <div
            className="flex flex-1 items-center justify-center py-3 overflow-hidden text-xs font-bold tracking-widest backdrop-blur-md bg-[rgba(0,20,30,0.78)] text-cyan-400"
            style={{ textShadow: "0 0 10px #00e5ff" }}
          >
            <span className="whitespace-nowrap">{afterLabel}</span>
          </div>
        </div>
      </div>

      {/* HANDLE KNOB */}
      <div
        className="w-8 h-8 absolute -translate-x-1/2 rounded-full flex items-center justify-center bg-white cursor-col-resize z-10 pointer-events-none"
        style={{
          left: pct,
          top: "calc(50% - 0px)",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 5.1px rgba(166,102,215,0.5)",
        }}
      >
        {/* LeftRightArrow SVG — ganti dengan import aslimu */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6366f1"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 21 12 15 6" />
          <polyline points="9 6 3 12 9 18" />
        </svg>
      </div>
    </div>
  );
}

/* ── shared styles ── */
const imgStyle = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  pointerEvents: "none",
  draggable: false,
};
