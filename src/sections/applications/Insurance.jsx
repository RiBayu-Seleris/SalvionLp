// import Phone from "@/assets/temp/applications/phone.png";
import Phone from "@/assets/temp/applications/phone.svg";
import Pattern from "@/assets/temp/applications/pattern.svg";
import TextWithBadge from "@/components/TextWithBadge";
import CardIconLeft from "@/components/CardIconLeft";

import GraphDot from "@/assets/icons/applications/graph-dot.svg";
import GraphUp from "@/assets/icons/applications/graph-up.svg";
import hexagon from "@/assets/icons/applications/hexagon.svg";

const cardData = [
  {
    id: 1,
    icon: GraphDot,
    title: "Objective Risk Segmentation",
    description:
      "Replace demographic proxies with actual physiological risk indicators. Build portfolios with sharper risk distribution",
    bgIcon: "#0A4850",
  },
  {
    id: 2,
    icon: GraphUp,
    title: "Loss Ratio Management",
    description:
      "Continuous physiological monitoring enables dynamic portfolio reviews. Identify emerging claim risk before it crystallizes.",
    bgIcon: "#0A4850",
  },
  {
    id: 3,
    icon: hexagon,
    title: "Dynamic Premium Architecture",
    description:
      "Build health-based pricing products that reflect real-time physiological state.",
    bgIcon: "#0A4850",
  },
];

export default function Insurance() {
  return (
    <div className="w-full h-auto overflow-hidden">
      <div className="relative w-full h-auto bg-gradient-to-b from-[#0B0F1A] from-[21%] via-[#033637] via-[60%] to-[#0B0F1A] to-[91%]">
        <div className="relative flex justify-end w-auto h-auto -right-[10%] top-0">
          <img src={Phone} alt="" srcset="" className="w-auto h-[1000px]" />
        </div>
        <div className="absolute flex justify-end w-auto h-auto left-0 top-0">
          <img src={Pattern} alt="" srcset="" className="w-auto h-[1000px]" />
        </div>
        <div className="absolute inset-0 w-[50%] h-full flex flex-col justify-start items-start pl-[74px] gap-y-6 pt-10">
          <TextWithBadge
            text="INSURANCE"
            caption="Self-declared health information is the original adverse selection problem. Salvion AI replaces subjective data with objective physiological signals — creating an underwriting process grounded in what the body actually reveals."
          >
            <div className="w-full h-auto flex flex-col text-[42px] gap-y-2">
              <div className="w-full h-auto">
                <h1 className=" font-bold text-white">Underwriting built on</h1>
              </div>
              <div className="w-full h-auto">
                <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#23DDF6]">
                  biological reality.
                </h1>
              </div>
            </div>
          </TextWithBadge>
          <div className="w-full h-auto flex flex-col gap-y-10 pr-32">
            {cardData.map((data, i) => (
              <CardIconLeft
                icon={data.icon}
                title={data.title}
                description={data.description}
                bgIcon={data.bgIcon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
