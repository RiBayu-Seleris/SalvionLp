import { useEffect, useRef, useState } from "react";

export default function WaveLeft() {
  const paths = [
    "M1.48122 92.3449L-202.662 1104.6C-202.662 1150.62 -165.359 1187.92 -119.343 1187.92C-73.1747 1187.92 -35.7484 1150.5 -35.7484 1104.33L-35.7484 1066.44L-20.5 959.341C-16.9477 934.391 -22.1203 908.978 -35.1431 887.401C-54.0334 856.103 148.104 758.403 163.654 725.317L174.742 701.726C195.926 656.655 194.637 604.239 171.263 560.263L155.05 529.759C129.231 481.182 134.435 421.957 168.331 378.626C193.724 346.164 203.431 304.121 194.839 263.813L170.997 151.956C169.267 143.842 168.395 135.575 168.395 127.279L168.395 92.3448C168.395 46.2509 131.03 8.88721 84.9382 8.88721C38.8462 8.88721 1.48122 46.2509 1.48122 92.3449Z",
    "M1.48122 84.4479L-202.662 1096.7C-202.662 1142.72 -165.359 1180.02 -119.343 1180.02C-73.1747 1180.02 -35.7484 1142.6 -35.7484 1096.43L-35.7484 1058.54L-20.5 951.44C-16.9477 926.49 -22.1203 901.077 -35.1431 879.5C-54.0334 848.202 148.104 750.506 163.654 717.42L174.742 693.829C195.926 648.758 194.637 596.341 171.263 552.366L155.05 521.862C129.231 473.284 134.435 414.059 168.331 370.729C193.724 338.267 203.431 296.224 194.839 255.916L170.997 144.063C169.267 135.945 168.395 127.678 168.395 119.382L168.395 84.4479C168.395 38.354 131.03 0.990237 84.9382 0.990239C38.8462 0.990241 1.48122 38.354 1.48122 84.4479Z",
    "M1.48122 100.247L-202.662 1112.51C-202.662 1158.52 -165.359 1195.83 -119.343 1195.83C-73.1747 1195.83 -35.7484 1158.4 -35.7484 1112.23L-35.7484 1074.34L-20.5 967.243C-16.9477 942.292 -22.1203 916.88 -35.1431 895.303C-54.0334 864.005 148.104 766.305 163.654 733.22L174.742 709.629C195.926 664.558 194.637 612.141 171.263 568.166L155.05 537.662C129.231 489.084 134.435 429.859 168.331 386.529C193.724 354.066 203.431 312.023 194.839 271.715L170.997 159.859C169.267 151.745 168.395 143.477 168.395 135.181L168.395 100.247C168.395 54.1535 131.03 16.7898 84.9382 16.7898C38.8462 16.7898 1.48122 54.1535 1.48122 100.247Z",
  ];

  const pathRefs = useRef([]);
  const [lengths, setLengths] = useState([]);

  const drawDuration = 4; // lebih lama = lebih smooth
  const delayStep = 1.2;
  const pauseAfterAll = 1;

  const totalCycle = paths.length * delayStep + drawDuration + pauseAfterAll;

  // ambil panjang asli tiap path
  useEffect(() => {
    const lens = pathRefs.current.map((p) => (p ? p.getTotalLength() : 3000));
    setLengths(lens);
  }, []);

  const keyframesCSS = paths
    .map((_, i) => {
      const DASH = lengths[i] || 3000;

      const startTime = i * delayStep;
      const endTime = startTime + drawDuration;

      const startPct = (startTime / totalCycle) * 100;
      const endPct = (endTime / totalCycle) * 100;

      return `
        @keyframes draw-path-${i} {
          0% {
            stroke-dashoffset: ${DASH};
            opacity: 0;
          }

          ${startPct.toFixed(2)}% {
            stroke-dashoffset: ${DASH};
            opacity: 0;
          }

          ${endPct.toFixed(2)}% {
            stroke-dashoffset: 0;
            opacity: 1;
          }

          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }
      `;
    })
    .join("\n");

  return (
    <>
      <style>{keyframesCSS}</style>

      <svg width="208" height="851" viewBox="0 0 208 851" fill="none">
        {paths.map((d, i) => (
          <path
            key={i}
            ref={(el) => (pathRefs.current[i] = el)}
            d={d}
            stroke="url(#gradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray={lengths[i] || 3000}
            strokeDashoffset={lengths[i] || 3000}
            style={{
              animation: `draw-path-${i} ${totalCycle}s cubic-bezier(0.33, 1, 0.68, 1) infinite`,
            }}
          />
        ))}

        <defs>
          <linearGradient id="gradient" x1="105" y1="0" x2="105" y2="1200">
            <stop offset="0%" stopColor="#154D67" />
            <stop offset="50%" stopColor="#5AB7C1" />
            <stop offset="100%" stopColor="#62C3C5" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}
