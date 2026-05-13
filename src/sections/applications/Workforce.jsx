import workForceSvg from "@/assets/temp/applications/workforce.svg";
import TextWithBadge from "@/components/TextWithBadge";
import Eye from "@/assets/jsx-icon/applications/Eye";
import Targeted from "@/assets/jsx-icon/applications/Targeted";
import GraphUp2 from "@/assets/jsx-icon/applications/GraphUp2";

const cardData = [
  {
    icon: Eye,
    title: "Continuous Health Visibility",
    description:
      "Real-time aggregated health trend data across the workforce — without individual data exposure",
  },
  {
    icon: Targeted,
    title: "Targeted Preventive Strategy",
    description:
      "Direct wellness investment to segments where risk is elevated",
  },
  {
    icon: GraphUp2,
    title: "Measurable ROI on Health Investment",
    description:
      "Quantify the financial impact of health interventions through before/after risk profile comparison",
  },
];

function CardDescription({ icon: Icon, title, description, key }) {
  return (
    <div
      key={key}
      className="w-full h-auto p-[1px] bg-[#2A2C33] rounded-xl group hover:bg-[conic-gradient(from_0deg_at_50%_50%,#82DCE2_0deg,#82DCE2_11.92deg,#0D6670_90.84deg,#0D6670_179.32deg,#0D6670_269.98deg,#82DCE2_348.36deg,#82DCE2_360deg)] transition-all duration-500 hover:scale-[1.10] cursor-pointer"
    >
      <div className="w-full h-full flex flex-row bg-[#0B0F1A] group-hover:bg-[linear-gradient(93.77deg,#0D2224_0.24%,#07383E_99.59%)] p-5 gap-x-4 rounded-xl">
        <div className="w-auto h-auto shrink-0 pt-0.5">
          <div className="w-6 h-6 flex justify-center items-center text-[#D1D5DB] group-hover:text-[#23DDF6]">
            <Icon />
          </div>
        </div>
        <div className="w-full h-auto flex flex-col justify-between gap-y-3 ">
          <div className="w-full h-auto">
            <p className="text-[#D1D5DB] text-[18px]">{title}</p>
          </div>
          <div className="w-full h-auto">
            <p className="text-[#D1D5DB] text-[12px]">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Workforce() {
  return (
    // bg-[#0B0F1A]
    <div className="relative w-full h-auto flex flex-col bg-[#0B0F1A] py-12">
      <div className="relative w-full h-auto flex flex-row gap-x-10">
        <div className="w-[45%] h-auto shrink-0 mix-blend-lighten">
          <img
            src={workForceSvg}
            alt=""
            srcset=""
            className="w-full h-full mix-blend-lighten"
          />
        </div>
        <div className="w-full h-auto flex justify-center items-center pr-16">
          <TextWithBadge
            text="WORKFORCE  ·  HEALTH INTELLIGENCE"
            caption="The cost of workforce health risk is measured in absenteeism, reduced productivity, and health benefit expenditure. Salvion makes the physiological signals that precede these outcomes visible and actionable"
          >
            <div className="w-full h-auto flex flex-col text-[42px] gap-y-2">
              <div className="w-full h-auto">
                <h1 className=" font-bold text-white">
                  Workforce intelligence that
                </h1>
              </div>
              <div className="w-full h-auto">
                <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#23DDF6]">
                  moves ahead of risk.
                </h1>
              </div>
            </div>
          </TextWithBadge>
        </div>
      </div>
      <div className="relative w-full h-auto flex flex-row top-[-42px] px-16">
        <div className="absolute z-10 left-0 top-1/2 -translate-y-1/2 w-full h-auto px-12">
          <div className="relative w-full h-0.5 bg-gradient-to-r from-[#0B0F1A] via-[#4FE4F8] to-[#0B0F1A]"></div>
        </div>
        <div className="relative z-20 w-full h-auto flex flex-row gap-x-14">
          {cardData.map((data, index) => (
            <CardDescription
              key={index}
              icon={data.icon}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
