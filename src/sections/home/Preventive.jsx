import TextWithBadgeCenter from "@/components/TextWithBadgeCenter";
import Layer from "@/assets/temp/salvion-layers.svg";
import AiChip from "@/assets/icons/preventive/ai-chip.svg";
import AiBrain from "@/assets/icons/preventive/ai-brain.svg";
import Monitor from "@/assets/icons/preventive/monitor.svg";
import People from "@/assets/icons/preventive/people.svg";

const leftCards = [
  {
    id: 1,
    icon: AiChip,
    badge: "Coming Q3 2026",
    badgeColor: "#22C55E",
    title: "AI Health Twin",
    description:
      "AI HealthA continuously updated digital health profile evolving with every scan — building a comprehensive longitudinal biological picture over",
  },
  {
    id: 2,
    icon: AiBrain,
    badge: "Research Phase",
    badgeColor: "#F66623",
    title: "Predictive Disease Modeling",
    description:
      "Multi-year disease trajectory modeling predicting onset risk windows for hypertension, diabetes, and cardiovascular events.",
  },
];

const rightCards = [
  {
    id: 1,
    icon: Monitor,
    badge: "In Development",
    badgeColor: "#4FE4F8",
    title: "Longitudinal Health Tracking",
    description:
      "Tracking parameter trends over weeks, months, and years — detecting gradual deterioration patterns and measuring intervention",
  },
  {
    id: 2,
    icon: People,
    badge: "Enterprise Beta",
    badgeColor: "#E123F6",
    title: "Population Analytics Dashboard",
    description:
      "Aggregate anonymized health intelligence for corporate, insurer, and public health customers to monitor community wellness trends.",
  },
];

const CardItem = ({ icon, badge, badgeColor, title, description }) => (
  <div className="w-[75%] h-auto shrink-0 bg-[#090F1B] border-[1.5px] border-[#585A5F] flex flex-col gap-y-6 justify-between px-6 py-5 rounded-md">
    <div className="w-full h-auto flex flex-row justify-between">
      <div className="w-auto h-auto flex justify-center items-center">
        <div className="w-10 h-10 flex justify-center items-center bg-[#151B27] border-[0.6px] border-[#2C323C] rounded-md">
          <img src={icon} alt="" />
        </div>
      </div>
      <div className="w-auto h-auto flex justify-center items-center">
        <p className="font-[600] text-[18px]" style={{ color: badgeColor }}>
          {badge}
        </p>
      </div>
    </div>
    <div className="w-full h-auto flex flex-col gap-y-3 justify-center items-start">
      <p className="text-[#FFFFFF] text-[20px] font-[600]">{title}</p>
      <p className="text-[#DADADA] text-[16px]">{description}</p>
    </div>
  </div>
);

const ConnectorLine = ({ direction = "right" }) => (
  <div className="w-full h-auto mt-[6%] flex flex-row items-center self-start">
    {direction === "left" && (
      <div className="relative w-full h-[2px] bg-white rounded-full"></div>
    )}
    <div className="relative w-3 h-3 bg-white shrink-0 rounded-full"></div>
    {direction === "right" && (
      <div className="relative w-full h-[2px] bg-white rounded-full"></div>
    )}
  </div>
);

export default function Preventive() {
  return (
    <div className="w-full h-auto flex flex-col gap-y-10">
      <div className="w-full h-auto flex justify-center items-center">
        <TextWithBadgeCenter
          text="ADVANCED & ROADMAP"
          captionClass="text-[20px] px-20 font-[400]"
          caption="Salvion AI evolves from point-in-time assessment into a continuous, longitudinal AI Health Intelligence Ecosystem."
        >
          <h1 className="font-bold text-[#FFFFFF]">
            The Future of Preventive{" "}
            <span className="font-bold text-[#23DDF6]">
              Health Intelligence
            </span>
          </h1>
        </TextWithBadgeCenter>
      </div>

      <div className="relative w-full h-full">
        <div className="relative z-10 w-full h-auto flex justify-center items-center">
          <img src={Layer} alt="" className="w-auto h-full" />
        </div>

        <div className="absolute z-20 inset-0 flex flex-row justify-between px-8 gap-x-32">
          {/* Left Column */}
          <div className="relative top-[12%] w-full h-full flex flex-col justify-start gap-y-24">
            {leftCards.map((card) => (
              <div
                key={card.id}
                className="w-full h-auto flex flex-row gap-x-4 pr-[10%]"
              >
                <CardItem
                  {...card}
                  badgeColor={card.badgeColor}
                  icon={card.icon}
                />
                <ConnectorLine direction="right" />
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="relative bottom-[2%] w-full h-full flex flex-col justify-end gap-y-24">
            {rightCards.map((card) => (
              <div
                key={card.id}
                className="w-full h-auto flex flex-row gap-x-4 pl-[10%]"
              >
                <ConnectorLine direction="left" />
                <CardItem
                  {...card}
                  badgeColor={card.badgeColor}
                  icon={card.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
