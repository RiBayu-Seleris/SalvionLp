import { useState, useEffect, useRef } from "react";
import TextWithBadge from "@/components/TextWithBadge";
import BallFrame from "@/components/BallFrame";

import LineGraph from "@/assets/temp/science/line-graph.svg";
import LineSharpGraph from "@/assets/temp/science/line-sharp-graph.svg";
import BarGraphUp from "@/assets/temp/science/bar-graph-up.svg";
import BubleGraph from "@/assets/temp/science/buble-graph.svg";
import circleOne from "@/assets/circle-one.svg";

const CardData = [
  {
    value: "91.4%",
    label: "CLINICAL CONCORDANCE · HRV",
    graph: LineGraph,
  },
  {
    value: "±1.8",
    label: "BPM · HEART RATE ACCURACY",
    graph: BarGraphUp,
  },
  {
    value: "0.87",
    label: "AUC · RISK STRATIFICATION",
    graph: LineSharpGraph,
  },
  {
    value: "MULTI",
    label: "VALIDATED SKIN TONE COVERAGE",
    graph: BubleGraph,
  },
];

const AUTO_INTERVAL = 2000;

export default function Continous() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const isHoveringRef = useRef(false);

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isHoveringRef.current) {
        setActiveIndex((prev) => (prev + 1) % CardData.length);
      }
    }, AUTO_INTERVAL);
  };

  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleMouseEnter = (index) => {
    isHoveringRef.current = true;
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    isHoveringRef.current = false;
    startAutoPlay();
  };

  return (
    <div className="relative w-full h-auto">
      <div className="absolute w-fit h-auto -left-[15%] -top-[2%]">
        <img src={circleOne} alt="" className="w-full h-full" />
      </div>

      <BallFrame>
        <div className="w-full flex flex-row gap-x-5 justify-between items-center py-40 px-12">
          {/* LEFT TEXT */}
          <div className="w-full">
            <TextWithBadge
              text="VALIDATION"
              caption="Salvion AI operates on a continuous validation architecture. Model performance is evaluated against clinical reference standards on an ongoing basis."
              captionClass="pr-10 text-[22px]"
            >
              <div className="w-full text-[42px]">
                <h1 className="font-bold text-[#FFFFFF]">
                  Continuous <span className="text-[#4FE4F8]">learning</span>
                </h1>
              </div>
            </TextWithBadge>
          </div>

          {/* RIGHT CARDS */}
          <div className="w-[55%] shrink-0">
            <div className="grid grid-cols-2 gap-8 auto-rows-fr">
              {CardData.map((card, i) => {
                const isActive = activeIndex === i;
                return (
                  <div
                    key={i}
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={handleMouseLeave}
                    className={`group w-full h-full flex flex-col gap-y-2 justify-between px-4 pb-4 pt-5 rounded-md cursor-pointer transition-all duration-300 ease-in-out
                      ${
                        isActive
                          ? "border-[1.5px] border-[#3B5C62] bg-gradient-to-b from-[#0F3234] to-[#0B1A1A] scale-[1.05]"
                          : "border-[1.5px] border-[#585A5F] bg-[#090F1B] scale-100"
                      }`}
                  >
                    {/* TOP CONTENT */}
                    <div className="w-full flex flex-row gap-x-2 justify-between items-center min-h-[80px]">
                      {/* VALUE */}
                      <p
                        className={`text-[42px] font-[500] transition-colors duration-300
                          ${isActive ? "text-[#4FE4F8]" : "text-[#FFFFFF]"}`}
                      >
                        {card.value}
                      </p>

                      {/* GRAPH */}
                      <div
                        className={`w-[60%] h-[60px] shrink-0 flex justify-center items-center transition-all duration-300
                          ${isActive ? "mix-blend-normal" : "mix-blend-luminosity"}`}
                      >
                        <img
                          src={card.graph}
                          alt=""
                          className="w-full h-full object-fill"
                        />
                      </div>
                    </div>

                    {/* LABEL */}
                    <div className="w-full">
                      <p className="text-[#FFFFFF] text-sm leading-snug">
                        {card.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </BallFrame>
    </div>
  );
}
