import TextWithBadgeCenter from "@/components/TextWithBadgeCenter";

import CodeTag from "@/assets/icons/developer/code-tag.svg";
import MobileTag from "@/assets/icons/developer/mobile-tag.svg";
import Signal from "@/assets/icons/developer/signal.svg";
import MultiCube from "@/assets/icons/developer/multi-cube.svg";

const CardData = [
  {
    icon: CodeTag,
    title: "Platform SDK",
    description:
      "Native SDKs for Python, JS/TS, Java, and Swift. Seamlessly bridge your backend with our core intelligence engine.",
    tags: ["PIP INSTALL SALVION-SDK", "NPM I @SALVION/SDK"],
  },
  {
    icon: MobileTag,
    title: "Mobile Integration",
    description:
      "iOS and Android SDKs optimized for camera pipeline processing. High-performance frame capture with zero lag.",
  },
  {
    icon: Signal,
    title: "Edge Deployment",
    description:
      "Signal acquisition and lightweight inference models available for on-device deployment — reducing latency to sub-50ms.",
  },
  {
    icon: MultiCube,
    title: "Enterprise Infrastructure",
    description:
      "Private cloud deployment (AWS, Azure, GCP), dedicated tenant architecture, and VPC-peering support.",
  },
];

export default function Integration() {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto flex flex-col gap-y-20 justify-start items-center py-20 px-12">
        <TextWithBadgeCenter
          text="SDK & INTEGRATION"
          caption="Salvion AI evolves from point-in-time assessment into a continuous, longitudinal AI Health Intelligence Ecosystem."
          captionClass="max-w-4xl mx-auto text-[22px] leading-relaxed"
        >
          <h1 className="font-bold text-[#FFFFFF]">
            Built for real-world{" "}
            <span className="text-[#23DDF6]">integration</span>
          </h1>
        </TextWithBadgeCenter>

        <div className="relative w-full h-auto grid grid-cols-2 border-[2px] gap-5 bg-[#111318] border-[#54B2C1]/20 rounded-xl overflow-hidden p-2">
          <div className="absolute w-full h-[2px] bg-[#54B2C1]/20 top-1/2 left-0 -translate-y-1/2" />
          <div className="absolute w-[2px] h-full bg-[#54B2C1]/20 top-0 left-1/2 -translate-x-1/2" />
          {CardData.map((item, i) => (
            <div key={i} className="w-full h-auto p-8">
              <div className="w-full h-auto flex flex-col gap-y-8">
                {/* Top */}
                <div className="w-full h-auto flex flex-row justify-between items-center">
                  <div className="w-10 h-10">
                    <img src={item.icon} alt="" className="w-full h-full" />
                  </div>

                  {item.tags && (
                    <div className="flex gap-x-4">
                      {item.tags.map((tag, idx) => (
                        <div
                          key={idx}
                          className="py-1.5 px-5 bg-[#00D0F5]/10 border border-[#00D0F5]/30 rounded-full"
                        >
                          <p className="text-[#4FE4F8] text-[12px]">{tag}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-y-3">
                  <p className="text-[#E2E2E8] font-[700] text-[20px]">
                    {item.title}
                  </p>
                  <p className="text-[#B9CBBD] text-[16px]">
                    {item.description}
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
