import { useState, useEffect, useRef } from "react";
import CircleRight from "@/assets/circle-two.svg";
import ActionableFrame from "@/assets/temp/frame-actionable.png";
import TextWithStarBadge from "@/components/TextWithStarBadge";
import CircleGradient1 from "@/assets/jsx-icon/AllCircleGradient";
import CardActionable from "@/components/CardActionable";

import BloodGlucose from "@/assets/icons/actionable/blood-glucose.svg";
import BmiComposition from "@/assets/icons/actionable/bmi-composition.svg";
import Cardiovascular from "@/assets/icons/actionable/cardiovascular.svg";
import Hypertension from "@/assets/icons/actionable/hypertension.svg";
import StressIndex from "@/assets/icons/actionable/stress-index.svg";

const RADIUS_X = 260;
const RADIUS_Y = 180;
const CENTER_X = 390;
const CENTER_Y = 260;

const CardData = [
  {
    id: 1,
    icon: Cardiovascular,
    title: "Cardiovascular",
    value: "102",
    borderColor: "#22C55E",
    status: 4, // High Risk (HR > 100)
  },
  {
    id: 2,
    icon: BloodGlucose,
    title: "Blood Glucose",
    value: "145",
    borderColor: "#F59E0B",
    status: 3, // Elevated
  },
  {
    id: 3,
    icon: Hypertension,
    title: "Hypertension",
    value: "150",
    borderColor: "#EF4444",
    status: 4, // High Risk (systolic)
  },
  {
    id: 4,
    icon: BmiComposition,
    title: "BMI Composition",
    value: "27.4",
    borderColor: "#22C55E",
    status: 3, // Elevated
  },
  {
    id: 5,
    icon: StressIndex,
    title: "Stress Index",
    value: "72",
    borderColor: "#F59E0B",
    status: 3, // Elevated
  },
];

const StatusColor = [
  { id: 1, statusCode: 1, value: "Optimal", color: "#22C55E" },
  { id: 2, statusCode: 2, value: "Normal", color: "#3B82F6" },
  { id: 3, statusCode: 3, value: "Elevated", color: "#F59E0B" },
  { id: 4, statusCode: 4, value: "High Risk", color: "#EF4444" },
];

const getStatus = (code) => StatusColor.find((s) => s.statusCode === code);

export default function Actionable() {
  const [activeCard, setActiveCard] = useState(0);
  const angleRef = useRef(0);
  const rafRef = useRef(null);
  const lastRef = useRef(null);

  const [positions, setPositions] = useState(
    CardData.map((_, i) => {
      const angle = (i / CardData.length) * 2 * Math.PI - Math.PI / 2;
      return {
        x: Math.cos(angle) * RADIUS_X,
        y: Math.sin(angle) * RADIUS_Y,
      };
    }),
  );

  // Auto-advance active card
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % CardData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Orbit animation
  useEffect(() => {
    const speed = 360 / 36000;

    const tick = (ts) => {
      if (!lastRef.current) lastRef.current = ts;
      angleRef.current -= speed * (ts - lastRef.current);
      lastRef.current = ts;

      setPositions(
        CardData.map((_, i) => {
          const base = (i / CardData.length) * 360 - 90;
          const rad = (base + angleRef.current) * (Math.PI / 180);
          return {
            x: Math.cos(rad) * RADIUS_X,
            y: Math.sin(rad) * RADIUS_Y,
          };
        }),
      );

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="relative w-full h-auto flex py-20">
      <div className="relative w-full flex flex-row gap-x-10 justify-between items-center z-20 pl-12 py-0">
        <div className="w-[40%] h-auto shrink-0 flex justify-center items-center">
          <TextWithStarBadge
            text="AI INSIGHTS & RECOMMENDATIONS — KEY DIFFERENTIATOR"
            title="Actionable Intelligence"
            subtitle="Not Just Data"
            caption="Most health scanning platforms stop at numbers. Salvion AI goes further — interpreting every data point in context and generating personalized, prioritized recommendations that drive real behavior change and clinical decisions."
            captionClass="text-[18px]"
          />
        </div>

        <div className="relative w-full h-auto overflow-hidden">
          <div className="w-auto h-auto absolute -right-[10%] top-1/2 -translate-y-1/2 z-10">
            <img
              src={CircleRight}
              alt=""
              className="w-auto h-auto backdrop-blur-[89.34px] rounded-full"
            />
          </div>

          <div className="relative z-20 w-full h-[550px] flex justify-center items-center rounded-l-xl bg-[#FFFFFF]/10 border-[1px] border-[#8F8D91] backdrop-blur-[32px] shadow-[0_0.5px_0_1px_rgba(255,255,255,0.3)_inset,0_4px_40px_8px_rgba(0,0,0,0.4),0_0_0_0.5px_rgba(0,0,0,0.8)] overflow-hidden">
            <div className="absolute z-20 w-[500px] h-auto -right-[10%] top-1/2 -translate-y-1/2 overflow-hidden">
              <CircleGradient1 />
            </div>

            <div className="absolute top-6 left-6 z-30">
              <p className="text-[#FFFFFF] font-[600] text-[20px]">
                AI ANALYSIS
              </p>
            </div>

            <div className="relative z-20 w-full h-[500px]">
              {CardData.map((card, i) => (
                <div
                  key={card.id}
                  className={`absolute transition-[transform] duration-[400ms] ${
                    activeCard === i ? "z-10" : "z-[1]"
                  }`}
                  style={{
                    left: `${CENTER_X + positions[i].x}px`,
                    top: `${CENTER_Y + positions[i].y}px`,
                    transform: `translate(-50%, -50%) scale(${activeCard === i ? 1.2 : 1})`,
                    transitionTimingFunction:
                      "cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                >
                  <CardActionable
                    icon={card.icon}
                    title={card.title}
                    value={card.value}
                    borderColor={card.borderColor}
                    status={getStatus(card.status)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-10">
        <img
          src={ActionableFrame}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
