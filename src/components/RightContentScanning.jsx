import { useState, useEffect, useRef } from "react";
import GraphDot from "@/assets/icons/scanning/graphdot.jsx";

const Data = [
  {
    title: "Heart Rate",
  },
  {
    title: "Blood Pressure",
  },
  {
    title: "SpO₂ Level",
  },
  {
    title: "Stress Index (ANS)",
  },
  {
    title: "Respiratory Rate",
  },
  {
    title: "Blood Glucose",
  },
  {
    title: "Heart Rate Variability",
  },
  {
    title: "+ More Signals",
  },
];

function Card({ title, isActive, onMouseEnter, onMouseLeave }) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`
        group relative w-full h-auto flex flex-row gap-x-4 bg-[#0A0F1A]
        border px-3 py-4 rounded-lg cursor-pointer overflow-hidden justify-center items-center
        transition-all duration-300 ease-in-out
        ${
          isActive
            ? "border-[#82DCE2] shadow-[0_1px_17.2px_rgba(130,220,226,0.6)]"
            : "border-[#374151]"
        }
      `}
    >
      {/* Gradient overlay */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-r from-[#0D2224] to-[#07383E]
          pointer-events-none transition-opacity duration-300 ease-in-out
          ${isActive ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Icon */}
      <div
        className={`
          relative z-10 w-9 h-9 shrink-0 flex justify-start items-start
          rounded-lg p-2 border transition-all duration-300 ease-in-out
          ${
            isActive
              ? "text-[#23DDF6] bg-[#083339] border-[#199DAF]"
              : "text-[#FFFFFF] bg-[#111827] border-[#FFFFFF]"
          }
        `}
      >
        <GraphDot />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-auto flex justify-start items-start">
        <p className="text-[#D7D7D7] text-[14px] font-[400]">{title}</p>
      </div>
    </div>
  );
}

export default function RightContentScanning() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);
  const lastIndexRef = useRef(0);

  const startAutoPlay = (fromIndex) => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      lastIndexRef.current = (lastIndexRef.current + 1) % Data.length;
      setActiveIndex(lastIndexRef.current);
    }, 1500);
    // Sync lastIndexRef dengan fromIndex saat mulai
    lastIndexRef.current = fromIndex;
  };

  useEffect(() => {
    startAutoPlay(0);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleMouseEnter = (index) => {
    clearInterval(intervalRef.current);
    setIsHovering(true);
    setActiveIndex(index);
    lastIndexRef.current = index;
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    startAutoPlay(lastIndexRef.current);
  };

  return (
    <div className="w-full h-full flex flex-col gap-y-6 justify-between items-start">
      <div className="w-full h-auto flex flex-col gap-y-2 font-[600]">
        <p className="text-[16px] text-[#23DDF6]">SIGNAL INTELLIGENCE</p>
        <p className="text-[26px] text-[#FFFFFF]">
          Analyzing 30+ Health Signals
        </p>
        <p className="text-[16px] text-[#D1D5DB]">
          Real-time physiological intelligence from a single scan.
        </p>
      </div>
      <div className="w-full h-auto grid grid-cols-2 justify-between items-center gap-5">
        {Data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            isActive={activeIndex === index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
      <div className="w-full h-auto flex flex-col gap-y-6 justify-start items-start bg-[#021D21] border-[1px] border-[#096D7C] rounded-md px-4 py-5">
        <div className="w-full h-auto flex flex-col gap-y-2">
          <div className="w-full h-auto flex justify-start items-start">
            <p className="text-[#FFFFFF]">Explore what Salvion can unlock</p>
          </div>
          <div className="w-full h-auto flex justify-start items-start">
            <p className="text-[#D7D7D7] text-[16px] tracking-wide">
              See how AI-driven health intelligence can transform <br /> your
              business.
            </p>
          </div>
        </div>
        <div className="w-full h-auto flex justify-center items-center bg-[#162E39] border-[1px] border-[#585A5F] py-4 rounded-lg">
          <p>Talk to Sales</p>
        </div>
      </div>
    </div>
  );
}
