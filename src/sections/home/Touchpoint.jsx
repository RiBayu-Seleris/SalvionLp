import TextWithBadgeCenter from "@/components/TextWithBadgeCenter";
import FrameTouchpoint from "@/assets/temp/frame-line-touchpoint.svg";

const touchpointData = [
  {
    id: 1,
    title: "Healthcare & Telemedicine",
    subtitle: "Screen before they even sit down.",
    description:
      "Salvion AI eliminates the vital-signs bottleneck at every healthcare touchpoint. Pre-consultation screening delivers a complete health snapshot before the clinical encounter begins — giving physicians a data-rich starting point that",
    list: [
      "Pre-consultation automated health screening",
      "Telehealth vital signs capture without hardware",
      "Remote chronic disease monitoring (BP, diabetes)",
    ],
    tag: "API + SDK + White-Label Clinical Portal · FHIR Compatible",
  },
  {
    id: 2,
    title: "Insurance & Underwriting",
    subtitle: "Risk intelligence from the first customer touchpoint.",
    description:
      "For the first time, insurers can collect 30+ objective biometric health markers at the point of onboarding — in under 30 seconds, with no medical examiner, no lab visit, and no added friction. Underwriting based on actual individual",
    list: [
      "Life & health insurance risk assessment at onboarding",
      "Underwriting enhancement — 30+ objective markers",
      "Continuous policyholder health monitoring",
      "Fraud reduction via liveness-verified health data",
    ],
    tag: "Insurance API · Actuarial Integration · OJK Compliant",
  },
  {
    id: 3,
    title: "Corporate Wellness",
    subtitle: "Health intelligence that protects your workforce.",
    description:
      "Salvion AI turns every employee smartphone into a daily health checkpoint — enabling organizations to detect stress accumulation, burnout patterns, and metabolic risk at individual and population level, long before clinical symptoms",
    list: [
      "Daily employee health check-in — 30-second scan",
      "Burnout & chronic stress detection at population level",
      "Productivity health correlation analytics",
      "Group risk dashboard for HR & occupational health",
    ],
    tag: "Corporate Platform + HR Dashboard · GDPR Compliant",
  },
  {
    id: 4,
    title: "Consumer Health Apps",
    subtitle: "Your health lab, in your pocket.",
    description:
      "Via Salvion SDK, any consumer health, fitness, wellness, or lifestyle app gains the power to offer users a complete health assessment that previously required a clinical visit — dramatically higher engagement and genuine health",
    list: [
      "Daily health check with trend tracking",
      "Fitness optimization via HRV & metabolic metrics",
      "Nutrition & lifestyle personalization engine",
      "Sleep quality & recovery intelligence",
    ],
    tag: "Mobile SDK (iOS / Android) · Plug & Play",
  },
];

const cardDesign = {
  1: { textColor: "#23DDF6", borderColor: "#68D0E5", bgTag: "#021C21" },
  2: { textColor: "#BC75F5", borderColor: "#BC75F5", bgTag: "#200221" },
  3: { textColor: "#69F623", borderColor: "#69F623", bgTag: "#112102" },
  4: { textColor: "#F5BB75", borderColor: "#F5BB75", bgTag: "#211602" },
};

export default function Touchpoint() {
  return (
    <div className="w-full h-full flex flex-col gap-y-10">
      <TextWithBadgeCenter
        text="USE CASES"
        caption="Seamlessly integrate Salvion into your existing platforms."
      >
        <h1 className="font-bold text-[#FFFFFF]">
          Built for Every{" "}
          <span className="font-bold text-[#23DDF6]">Health Touchpoint</span>
        </h1>
      </TextWithBadgeCenter>
      <div className="relative w-full h-auto p-12">
        {/* Tambah inset-0 agar absolute mengikuti tinggi parent */}
        <div className="relative w-full h-full flex rounded-xl p-[4px] bg-gradient-to-b from-[#448D8F] to-[#23DDF6]">
          <div className="relative w-full h-full grid grid-cols-2 gap-14 rounded-xl p-10 bg-[#0B0F1A]">
            <div className="absolute inset-0 p-10">
              <img
                src={FrameTouchpoint}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute w-full h-[2.5px] bg-gradient-to-r from-[#0C101B] via-[#23DDF6] to-[#0B0F1A] top-1/2 -translate-y-1/2" />
            <div className="absolute w-[2.5px] h-full bg-gradient-to-b from-[#0C101B] via-[#23DDF6] to-[#0B0F1A] left-1/2 -translate-x-1/2" />
            {touchpointData.map((data, i) => {
              const theme = cardDesign[data.id] || {};
              return (
                <div
                  key={data.id}
                  className="relative z-20 w-full h-auto flex flex-col gap-y-10 justify-between items-start"
                >
                  <div className="w-full h-auto flex flex-col gap-y-5 justify-center items-start">
                    <div className="w-full h-auto flex justify-start items-center">
                      <p className="text-[#FFFFFF] font-[600]">{data.title}</p>
                    </div>
                    <div className="w-full h-auto flex justify-start items-center">
                      <p
                        className="font-[500]"
                        style={{ color: theme.textColor }}
                      >
                        "{data.subtitle}"
                      </p>
                    </div>
                    <div className="w-full h-auto flex justify-start items-center pr-0">
                      <p className="text-[#D7D7D7] font-[400] text-md">
                        {data.description}
                      </p>
                    </div>
                    <div className="w-full h-auto flex flex-col gap-y-3 justify-start items-start">
                      {data.list.map((list, i) => (
                        <div className="w-fit h-auto flex flex-row gap-x-2 justify-start items-center">
                          <div
                            className="w-2 h-2 shrink-0 flex justify-center items-center rounded-full"
                            style={{ backgroundColor: theme.textColor }}
                          ></div>
                          <p
                            className="font-[500] text-sm"
                            style={{ color: theme.textColor }}
                          >
                            {list}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="w-fit h-auto flex justify-start items-center border-[1px] rounded-full"
                    style={{
                      backgroundColor: theme.bgTag,
                      borderColor: theme.borderColor,
                    }}
                  >
                    <p className="text-[#FFFFFF] text-[14px] font-[400] px-5 py-2">
                      {data.tag}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
