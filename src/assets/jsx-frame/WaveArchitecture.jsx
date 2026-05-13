import { useEffect, useRef } from "react";

const COLORS = [
  [220, 124, 31],
  [205, 152, 62],
  [193, 176, 90],
  [132, 189, 141],
  [98, 197, 170],
  [193, 176, 90],
];

const SPEED = 0.04;
const PHASE = [0, 0.12, 0.24];
const NUM_STOPS = 24;

function lerp(a, b, t) {
  return [
    Math.round(a[0] + (b[0] - a[0]) * t),
    Math.round(a[1] + (b[1] - a[1]) * t),
    Math.round(a[2] + (b[2] - a[2]) * t),
  ];
}

function samplePalette(t) {
  t = ((t % 1) + 1) % 1;
  const scaled = t * (COLORS.length - 1);
  const i = Math.floor(scaled);
  const f = scaled - i;
  return lerp(COLORS[i % COLORS.length], COLORS[(i + 1) % COLORS.length], f);
}

const PATH_DATA = [
  {
    d: "M1290.05 255.329H113.784C57.0007 255.329 10.9688 209.296 10.9688 152.514C10.9688 95.5433 57.1521 49.3599 114.122 49.3599H160.875L293.036 30.5437C323.824 26.1602 355.183 32.5431 381.809 48.613C420.43 71.9232 468.144 74.3985 508.971 55.21L538.082 41.5278C593.698 15.3878 658.381 16.9785 712.646 45.8207L750.287 65.8275C810.231 97.6882 883.315 91.2662 936.784 49.4397C976.842 18.1047 1028.72 6.12615 1078.46 16.7286L1216.49 46.15C1226.5 48.284 1236.7 49.3599 1246.94 49.3599H1290.05C1346.93 49.3599 1393.03 95.4675 1393.03 152.344C1393.03 209.221 1346.93 255.329 1290.05 255.329Z",
    opacity: 0.95,
  },
  {
    d: "M1299.8 255.329H123.534C66.7507 255.329 20.7188 209.296 20.7188 152.514C20.7188 95.5433 66.9021 49.3599 123.873 49.3599H170.625L302.786 30.5437C333.574 26.1602 364.933 32.5431 391.559 48.613C430.18 71.9232 477.894 74.3985 518.721 55.21L547.832 41.5278C603.448 15.3878 668.131 16.9785 722.396 45.8207L760.037 65.8275C819.981 97.6882 893.065 91.2662 946.534 49.4397C986.592 18.1047 1038.47 6.12615 1088.21 16.7286L1226.23 46.15C1236.25 48.284 1246.45 49.3599 1256.69 49.3599H1299.8C1356.68 49.3599 1402.78 95.4675 1402.78 152.344C1402.78 209.221 1356.68 255.329 1299.8 255.329Z",
    opacity: 0.6,
  },
  {
    d: "M1280.3 255.329H104.034C47.2507 255.329 1.21875 209.296 1.21875 152.514C1.21875 95.5433 47.4021 49.3599 104.372 49.3599H151.125L283.286 30.5437C314.074 26.1602 345.433 32.5431 372.059 48.613C410.68 71.9232 458.394 74.3985 499.221 55.21L528.332 41.5278C583.948 15.3878 648.631 16.9785 702.896 45.8207L740.537 65.8275C800.481 97.6882 873.565 91.2662 927.034 49.4397C967.092 18.1047 1018.97 6.12615 1068.71 16.7286L1206.74 46.15C1216.75 48.284 1226.95 49.3599 1237.19 49.3599H1280.3C1337.18 49.3599 1383.28 95.4675 1383.28 152.344C1383.28 209.221 1337.18 255.329 1280.3 255.329Z",
    opacity: 0.4,
  },
];

export default function WaveArchitecture() {
  const svgRef = useRef(null);
  const frameRef = useRef(null);
  const gradientsRef = useRef([]);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const pathEls = svg.querySelectorAll("path[data-wave]");
    const defs = svg.querySelector("defs");

    // Bersihkan gradien lama kalau ada
    gradientsRef.current.forEach(({ grad }) => {
      if (grad.parentNode) grad.parentNode.removeChild(grad);
    });
    gradientsRef.current = [];

    pathEls.forEach((path, li) => {
      const len = path.getTotalLength();
      const grad = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "linearGradient",
      );
      grad.setAttribute("id", "wg" + li);
      grad.setAttribute("gradientUnits", "userSpaceOnUse");

      // Set koordinat gradien dari ujung ke ujung path
      const p0 = path.getPointAtLength(0);
      const pEnd = path.getPointAtLength(len);
      grad.setAttribute("x1", p0.x);
      grad.setAttribute("y1", p0.y);
      grad.setAttribute("x2", pEnd.x);
      grad.setAttribute("y2", pEnd.y);

      const stops = [];
      for (let si = 0; si <= NUM_STOPS; si++) {
        const frac = si / NUM_STOPS;
        const stop = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "stop",
        );
        stop.setAttribute("offset", (frac * 100).toFixed(2) + "%");
        grad.appendChild(stop);
        stops.push(stop);
      }

      defs.appendChild(grad);
      path.setAttribute("stroke", `url(#wg${li})`);

      gradientsRef.current.push({ grad, stops, len });
    });

    const animate = (ts) => {
      const t = (ts / 1000) * SPEED;

      gradientsRef.current.forEach((gradInfo, li) => {
        const { stops } = gradInfo;
        const phase = PHASE[li];

        stops.forEach((stop, si) => {
          const frac = si / NUM_STOPS;
          const colorT = frac - t + phase;
          const opacityT = Math.abs(
            Math.sin((frac - t * 2 + phase) * Math.PI * 2.5),
          );
          const c = samplePalette(colorT);
          const opacity = 0.3 + opacityT * 0.7;
          stop.setAttribute("stop-color", `rgb(${c[0]},${c[1]},${c[2]})`);
          stop.setAttribute("stop-opacity", opacity.toFixed(3));
        });
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <svg
      ref={svgRef}
      className="w-full h-auto"
      viewBox="0 0 1404 258"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs />
      {PATH_DATA.map(({ d, opacity }, i) => (
        <path
          key={i}
          data-wave={i}
          d={d}
          strokeWidth="1.82812"
          strokeLinecap="round"
          opacity={opacity}
        />
      ))}
    </svg>
  );
}
