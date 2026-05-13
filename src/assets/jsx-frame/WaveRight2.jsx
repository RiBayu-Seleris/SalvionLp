import { useEffect, useRef, useState } from "react";

export default function WaveRight() {
  const pathRef = useRef(null);
  const [length, setLength] = useState(3000);

  const duration = 4;

  useEffect(() => {
    if (pathRef.current) {
      setLength(pathRef.current.getTotalLength());
    }
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes draw-wave-right {
            0% {
              stroke-dashoffset: ${length};
              opacity: 0;
            }
            20% {
              opacity: 1;
            }
            100% {
              stroke-dashoffset: 0;
              opacity: 1;
            }
          }
        `}
      </style>

      <svg
        width="1344"
        height="847"
        viewBox="0 0 1344 847"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <g clipPath="url(#clip0_114_1239)">
          <path
            ref={pathRef}
            d="M1299.45 8.97624C1368.78 -7.63636 1571.86 -79.9895 1571.86 -154.998C1571.86 -230.006 1520.32 -292.882 1451 -309.627C1526.13 -298.819 1583.89 -233.706 1583.89 -154.998C1583.89 -76.2891 1374.58 -1.74598 1299.45 8.97624Z"
            // 👇 penting
            fill="none"
            stroke="url(#paint0_linear_114_1239)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={length}
            strokeDashoffset={length}
            style={{
              animation: `draw-wave-right ${duration}s cubic-bezier(0.33,1,0.68,1) infinite`,
            }}
          />
        </g>

        <defs>
          <linearGradient
            id="paint0_linear_114_1239"
            x1="1159.85"
            y1="-437.765"
            x2="534.204"
            y2="195.817"
          >
            <stop offset="0%" stopColor="#1D3E36" />
            <stop offset="50%" stopColor="#269B7F" />
            <stop offset="100%" stopColor="#1D3E36" />
          </linearGradient>

          <clipPath id="clip0_114_1239">
            <rect width="1344" height="847" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
