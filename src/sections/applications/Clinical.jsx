import ClinicalSvg from "@/assets/temp/applications/clinical.svg";
import Lighting from "@/assets/temp/applications/gradient-lighting.svg";

import TextWithBadge from "@/components/TextWithBadge";
import Tetris from "@/assets/jsx-frame/applications/Tetris";

const Data = [
  {
    title: "Non-Invasive Early Screening",
    description:
      "Scalable physiological screening deployable across any device. Identify risk populations for clinical follow-up.",
  },
  {
    title: "Remote Physiological Monitoring",
    description:
      "Continuous monitoring of chronic patients without hardware deployment.",
  },
  {
    title: "Care Pathway Optimization",
    description:
      "Longitudinal signal data informs care protocol adjustment in real time.",
  },
];

export default function Clinical() {
  return (
    <div className="relative w-full bg-[#0B0F1A]">
      {/* Gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-bl from-[#0B0F1A] to-[#58A8B6] mix-blend-color" />

      {/* Lighting glow — stretch penuh ke semua sisi */}
      <img
        src={Lighting}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-60"
      />

      {/* Flex row */}
      <div className="relative w-full flex flex-row items-stretch pt-20">
        {/* Tetris overlay — ikuti tinggi flex row */}
        <div className="absolute left-0 top-0 w-[60%] h-full transition-all duration-300 ease-in-out z-10 ">
          <Tetris />
        </div>
        <div className="relative flex-1 pl-12 flex items-center z-20">
          <div className="relative w-full h-auto flex flex-col gap-y-2">
            <TextWithBadge
              text="CLINICAL"
              caption="Salvion AI resolves the access constraint in preventive medicine: any camera-equipped device becomes a continuous health monitoring instrument."
            >
              <div className="w-full h-auto flex flex-col text-[42px] gap-y-2">
                <div className="w-full h-auto">
                  <h1 className=" font-bold text-white">
                    Clinical intelligence
                  </h1>
                </div>
                <div className="w-full h-auto">
                  <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#23DDF6]">
                    without clinical friction
                  </h1>
                </div>
              </div>
            </TextWithBadge>
            <div className="w-full h-auto flex flex-col gap-y-10">
              {Data.map((item, i) => (
                <div className="w-full h-auto flex flex-col gap-y-4">
                  <div className="w-full h-auto flex flex-row gap-x-4">
                    <div className="w-auto h-auto flex justify-center items-center">
                      <div className="relative w-5 h-5">
                        <div className="absolute inset-0 rounded-full animate-ping opacity-75 bg-[#97F8F9]" />
                        <div className="relative w-5 h-5 rounded-full border-[1px] border-[#137A87] p-1">
                          <div className="w-full h-full rounded-full bg-[#97F8F9]" />
                        </div>
                      </div>
                    </div>
                    <div className="w-auto h-auto flex justify-center items-center">
                      <p className="text-[#FFFFFF] text-[18px]">{item.title}</p>
                    </div>
                  </div>
                  <div className="w-full h-auto flex flex-row gap-x-4">
                    <div className="w-5 h-auto shrink-0 flex justify-center items-center">
                      <div className="w-[3px] h-full bg-[#97F8F9] rounded-full" />
                    </div>
                    <div className="w-auto h-auto flex justify-center items-center pr-12">
                      <p className="text-[#D7D7D7] text-[18px] pr-32">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SVG kanan */}
        <div className="relative flex-1 mix-blend-lighten z-20 select-none">
          <img
            src={ClinicalSvg}
            alt=""
            className="w-full h-auto relative"
            onDragStart={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
          />
          <div className="absolute w-full h-[100px] bottom-0 left-0 z-20 bg-gradient-to-b from-[#020103]/0 to-[#020103]" />
        </div>
      </div>
    </div>
  );
}
