import { useEffect, useRef } from "react";

const DEFAULT_BLOBS = [
  {
    x: 0.6,
    y: 0.25,
    vx: 0.0022,
    vy: 0.0026,
    r: 0.65,
    color: [90, 34, 204],
    opacity: 0.9,
  },
  {
    x: 0.22,
    y: 0.65,
    vx: -0.0019,
    vy: -0.0023,
    r: 0.65,
    color: [153, 26, 26],
    opacity: 0.88,
  },
];

// Nilai posisi/gerak default per-index, dipakai kalau parent tidak kirim x/y/vx/vy/r
const BLOB_DEFAULTS = [
  { x: 0.6, y: 0.25, vx: 0.0022, vy: 0.0026, r: 0.65 },
  { x: 0.22, y: 0.65, vx: -0.0019, vy: -0.0023, r: 0.65 },
  { x: 0.45, y: 0.8, vx: 0.0017, vy: -0.002, r: 0.55 }, // ✦ tambah
  { x: 0.55, y: 0.95, vx: 0.0025, vy: -0.001, r: 0.55 }, // ✦ tambah
];

// Inisialisasi hanya sekali — merge props dengan BLOB_DEFAULTS

export default function BallFrame({ children, blobs = DEFAULT_BLOBS }) {
  const canvasRef = useRef(null);
  const animBlobsRef = useRef(null);

  // Inisialisasi hanya sekali — merge props dengan BLOB_DEFAULTS
  if (!animBlobsRef.current) {
    animBlobsRef.current = blobs.map((b, i) => ({
      ...(BLOB_DEFAULTS[i] ?? BLOB_DEFAULTS[i % BLOB_DEFAULTS.length]), // ✦ cycling
      ...b,
    }));
  }

  // Sync warna/opacity saat props berubah
  useEffect(() => {
    blobs.forEach((b, i) => {
      if (animBlobsRef.current[i]) {
        animBlobsRef.current[i].color = b.color;
        animBlobsRef.current[i].opacity = b.opacity;
      }
    });
  }, [blobs]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      // Jangan set 0 — tunggu sampai canvas punya ukuran
      if (w > 0 && h > 0) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    // Pakai ResizeObserver supaya dapat ukuran yang benar setelah layout
    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas);
    resize();

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      // Guard: skip frame kalau canvas masih 0
      if (!W || !H) return;

      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = "screen";

      for (const b of animBlobsRef.current) {
        const bx = b.x * W;
        const by = b.y * H;
        const br = b.r * Math.min(W, H);
        const [r, g, bl] = b.color;

        const grad = ctx.createRadialGradient(bx, by, 0, bx, by, br);
        grad.addColorStop(0, `rgba(${r},${g},${bl},${b.opacity})`);
        grad.addColorStop(
          0.45,
          `rgba(${r},${g},${bl},${(b.opacity * 0.55).toFixed(3)})`,
        );
        grad.addColorStop(1, `rgba(${r},${g},${bl},0)`);

        ctx.beginPath();
        ctx.arc(bx, by, br, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
    };

    const update = () => {
      for (const b of animBlobsRef.current) {
        b.x += b.vx;
        b.y += b.vy;
        const pad = b.r * 0.25;
        if (b.x < pad || b.x > 1 - pad) {
          b.vx *= -1;
          b.x = Math.max(pad, Math.min(1 - pad, b.x));
        }
        if (b.y < pad || b.y > 1 - pad) {
          b.vy *= -1;
          b.y = Math.max(pad, Math.min(1 - pad, b.y));
        }
      }
    };

    const loop = () => {
      update();
      draw();
      animId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}
