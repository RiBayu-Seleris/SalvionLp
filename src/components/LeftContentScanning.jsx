import { useState, useEffect, useRef } from "react";
import GraphDot from "@/assets/icons/scanning/graphdot.jsx";

const Data = [
  {
    title: "Ensure good lighting",
    description:
      "Accurate signal capture requires consistent ambient light. Avoid strong backlighting.",
  },
  {
    title: "Position face within frame",
    description:
      "Centre your face inside the detection guide. Keep 30–50 cm from the camera.",
  },
  {
    title: "Hold still for a few seconds",
    description:
      "Remain still while the AI captures your physiological waveform data.",
  },
  {
    title: "AI analyzes in real-time",
    description:
      "Salvion AI processes 30+ physiological signals instantly — no hardware needed.",
  },
];

function Card({
  number,
  title,
  description,
  isActive,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`
        group relative w-full h-auto flex flex-row gap-x-5 bg-[#0A0F1A]
        border p-4 rounded-lg cursor-pointer overflow-hidden
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
      <div className="relative z-10 w-full h-auto flex flex-col gap-y-3">
        <div className="w-full h-auto flex flex-row gap-x-3">
          <div className="w-auto h-auto flex justify-center items-center">
            <p className="text-[14px] text-[#9CA3AF] font-[400]">0{number}</p>
          </div>
          <div className="w-auto h-auto flex justify-center items-center">
            <p className="text-[16px] text-[#FFFFFF] font-[600]">{title}</p>
          </div>
        </div>
        <div className="w-full h-auto flex justify-center items-start">
          <p className="text-[#D7D7D7] text-[16px] font-[400]">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function LeftContentScanning() {
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
    <div className="w-full h-full flex flex-col gap-y-6 justify-center items-start">
      <div className="w-full h-auto flex flex-col gap-y-2 font-[600]">
        <p className="text-[16px] text-[#23DDF6]">STEP - BY - STEP</p>
        <p className="text-[22px] text-[#FFFFFF]">How the Scan Works</p>
      </div>
      <div className="w-full flex-1 flex flex-col justify-between items-center py-1.5">
        {Data.map((item, index) => (
          <Card
            key={index}
            number={index + 1}
            title={item.title}
            description={item.description}
            isActive={activeIndex === index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
      <div className="w-fit h-auto flex justify-start items-start bg-[#021D21] border-[1px] border-[#096D7C] rounded-md px-7 py-2">
        <p className="text-[#4FE4F8] font-[400] text-[16px] tracking-[2.5px]">
          Non-invasive · No hardware required
        </p>
      </div>
    </div>
  );
}
