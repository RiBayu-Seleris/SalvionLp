import TextWithBadgeCenter from "@/components/TextWithBadgeCenter";
import WaveHero from "@/assets/jsx-frame/applications/WaveHero";
import FrameHero from "@/assets/temp/applications/frame-hero.png";
import HealthMonitor from "@/assets/jsx-icon/applications/HealthMonitor";
import ShieldPlus from "@/assets/jsx-icon/applications/ShieldPlus";
import Users from "@/assets/jsx-icon/applications/Users";
import Tetris from "@/assets/jsx-frame/applications/Tetris";

const cardData = [
  {
    id: 1,
    icon: ShieldPlus,
    title: "Insurance",
    description: "Underwriting built on biological reality.",
  },
  {
    id: 2,
    icon: Users,
    title: "Workforce",
    description: "Intelligence that moves ahead of risk.",
  },
  {
    id: 3,
    icon: HealthMonitor,
    title: "Clinical",
    description: "Monitoring without clinical friction.",
  },
];

export default function Hero() {
  return (
    <div className="relative w-full h-auto px-12">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={FrameHero}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Wave */}
      <div className="absolute inset-x-0 bottom-14">
        <WaveHero />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center gap-y-32 py-16">
        <TextWithBadgeCenter
          text="APPLICATIONS"
          caption="Salvion AI's platform outputs are configured for three distinct verticals — each with domain-specific calibration, output formatting, and integration architecture"
          captionClass="max-w-4xl mx-auto text-[22px] leading-relaxed"
        >
          <h1 className="font-bold text-[#23DDF6]">Intelligence Calibrated</h1>
          <h1 className="font-bold text-[#FFFFFF]">for Your Industry</h1>
        </TextWithBadgeCenter>

        <div className="w-full flex flex-row gap-x-20 px-6">
          {cardData.map((card, i) => (
            <div
              key={i}
              className="relative w-full bg-[#0B0F1A]/50 hover:bg-gradient-to-b hover:from-[#07272C] hover:to-[#0B0F1A] border border-[#2A2C33] rounded-2xl px-6 py-6 group hover:shadow-[1px_0px_19.5px_0_rgba(130,220,226,0.5)] hover:backdrop-blur-[16.8px] hover:scale-[1.02] hover:border-[#6CE8F9] transition duration-300 ease-in-out cursor-pointer overflow-hidden"
            >
              <div className="absolute w-full h-auto top-0 left-0 hidden group-hover:block transition-all duration-300 ease-in-out z-10">
                <Tetris />
              </div>
              <div className="relative z-20 w-full h-full flex flex-col gap-y-8">
                <div className="w-12 h-12 flex justify-center items-center bg-[#151B27] border-[1px] border-[#2C323C] group-hover:border-[#92E7FC] rounded-md text-[#FFFFFF] group-hover:text-[#23F6EF] p-3">
                  <card.icon />
                </div>
                <div className="flex flex-col gap-y-2.5">
                  <p className="text-[22px] text-white">{card.title}</p>
                  <p className="text-[16px] text-[#D7D7D7]">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
