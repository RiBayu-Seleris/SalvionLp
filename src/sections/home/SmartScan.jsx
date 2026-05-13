import { useState, useEffect, useRef } from "react";
import TextWithBadge from "@/components/TextWithBadge";
import circleOne from "@/assets/circle-one.svg";
import PositionCalibrate from "@/assets/temp/Smart-Scan/position-calibrate.svg";
import Second from "@/assets/temp/Smart-Scan/30-second.svg";
import AiAnalysis from "@/assets/temp/Smart-Scan/ai-analysis.svg";
import Score from "@/assets/temp/Smart-Scan/score.svg";
import Recommendation from "@/assets/temp/Smart-Scan/recommendation.svg";

const SmartScanData = [
  {
    id: 1,
    title: "Position & Calibrate",
    image: PositionCalibrate,
    description:
      "Center your face within the frame. The AI automatically detects facial landmarks and calibrates lighting conditions for optimal signal quality.",
  },
  {
    id: 2,
    title: "30 Second Scan",
    image: Second,
    description:
      "Stay still for 30 seconds while the camera captures subtle color variations in your skin caused by blood flow beneath the surface.",
  },
  {
    id: 3,
    title: "AI Analysis",
    image: AiAnalysis,
    description:
      "Our proprietary AI engine processes over 30 biomarkers in real time, cross-referencing millions of data points to ensure accurate results.",
  },
  {
    id: 4,
    title: "Health Score",
    image: Score,
    description:
      "Receive a comprehensive health score based on your scan, highlighting key metrics like heart rate, stress levels, and oxygen saturation.",
  },
  {
    id: 5,
    title: "Recommendations",
    image: Recommendation,
    description:
      "Get personalized health recommendations tailored to your results, helping you take actionable steps toward better well-being.",
  },
];

const AUTO_INTERVAL = 2000;

export default function SmartScan() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const isHoveringRef = useRef(false);

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isHoveringRef.current) {
        setActiveIndex((prev) => (prev + 1) % SmartScanData.length);
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
    // resume auto-play dari index terakhir yang di-hover
    startAutoPlay();
  };

  const activeData = SmartScanData[activeIndex];

  return (
    <div className="relative w-full h-auto">
      <div className="absolute w-fit h-auto -left-[15%] -top-[20%]">
        <img src={circleOne} alt="" srcSet="" />
      </div>
      <div className="w-full h-auto flex flex-col gap-y-10">
        <div className="relative w-full h-auto flex flex-col gap-y-20 pl-12">
          <TextWithBadge
            text="SIGNATURE FEATURE"
            caption="30 seconds. 30+ health markers. Zero hardware. One camera. The new standard for preventive health intelligence."
            captionClass="text-[20px] max-w-xl leading-normal"
          >
            <div className="w-full h-auto flex flex-col text-[42px] gap-y-2">
              <div className="w-full h-auto">
                <h1 className="font-bold text-white">Salvion Smart Scan™</h1>
              </div>
              <div className="w-full h-auto">
                <h1 className="font-bold text-[#23DDF6]">
                  The World's Most Comprehensive <br /> Contactless Health Scan
                </h1>
              </div>
            </div>
          </TextWithBadge>
        </div>

        {/* Cards Row */}
        <div className="relative w-full h-auto">
          <div className="absolute z-10 top-1/2 -translate-y-1/2 w-full h-0.5 bg-gradient-to-r from-[#0B0F1A] via-[#4FE4F8] to-[#0B0F1A]" />
          <div className="relative z-20 w-full flex flex-row gap-x-10 justify-between items-center px-6 py-4">
            {SmartScanData.map((data, i) => {
              const isActive = activeIndex === i;
              return (
                <div key={i} className="flex-1 px-8 py-4">
                  <div
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={handleMouseLeave}
                    className={`group w-full p-[1px] rounded-xl transition-all duration-300 origin-center cursor-pointer
                      ${isActive ? "scale-[1.35]" : "scale-100"}
                      bg-[conic-gradient(from_0deg_at_50%_50%,#0B7F8D_0deg,#0B7F8D_11.92deg,#0A4F57_165deg,#096E7A_179.32deg,#0A4F57_196.15deg,#0B7F8D_348.36deg,#0B7F8D_360deg)]`}
                  >
                    <div
                      className={`w-full h-full rounded-xl flex flex-col justify-center items-center gap-y-4 p-5 transition-all duration-300
                        ${isActive ? "bg-gradient-to-r from-[#0D1520] to-[#0A3035]" : "bg-gradient-to-r from-[#0B0F1A] to-[#072427]"}`}
                    >
                      {/* Number badge */}
                      <div className="w-full flex justify-center">
                        <div
                          className={`w-6 h-6 flex justify-center items-center bg-[#1C6A72] rounded-full transition-all duration-300
                            ${isActive ? "border border-[#4FE4F8] shadow-[0_3px_12px_rgba(79,228,248,0.45)]" : "border border-[#6CE8F9] shadow-[0_3px_6px_rgba(52,201,177,0.25)]"}`}
                        >
                          <span className="text-white font-semibold font-poppins">
                            {data.id}
                          </span>
                        </div>
                      </div>

                      {/* Image */}
                      <div
                        className={`relative w-full h-auto flex justify-center transition-all duration-300
                          ${isActive ? "mix-blend-normal" : "mix-blend-luminosity"}`}
                      >
                        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#151823]/0 via-[#091820] to-[#092025] mix-blend-lighten" />
                        <img
                          src={data.image}
                          alt=""
                          className={`relative z-20 w-full h-full transition-all duration-300
                            ${isActive ? "mix-blend-normal" : "mix-blend-lighten"}`}
                        />
                      </div>

                      {/* Title */}
                      <div className="w-full flex justify-center">
                        <p
                          className={`text-[14px] transition-colors duration-300 text-center
                            ${isActive ? "text-[#4FE4F8]" : "text-white"}`}
                        >
                          {data.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Card Deskripsi — Dinamis */}
        <div className="w-full h-auto flex justify-center items-center px-12 mt-10">
          <div className="w-full h-auto flex flex-row gap-x-5 bg-gradient-to-b from-[#032428] to-[#0B0F1A] border-[1.5px] border-[#3B5C62] backdrop-blur-[5.5px] rounded-xl py-7 px-6">
            <div
              key={`icon-${activeIndex}`}
              className="anim-fade-scale-in w-auto h-auto flex justify-center items-center"
            >
              <div className="w-16 h-16 shrink-0 flex justify-center items-center rounded-lg bg-gradient-to-bl from-[#032428] to-[#0B0F1A] border-[0.65px] border-[#3B5C62]">
                <span className="text-[#4FE4F8] font-[600] font-poppins text-[28px]">
                  {activeData.id}
                </span>
              </div>
            </div>

            <div
              key={`text-${activeIndex}`}
              className="anim-fade-slide-up w-auto h-auto flex flex-col justify-between items-start gap-y-2"
            >
              <p className="text-[#FFFFFF] font-[600] text-[18px]">
                Step {activeData.id} - {activeData.title}
              </p>
              <p className="text-[#FFFFFF] font-[400] text-[14px]">
                {activeData.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
