import TextWithBadge from "@/components/TextWithBadge";
import BallFrame from "@/components/BallFrame";
import circleOne from "@/assets/circle-one.svg";
import CpuIcon from "@/assets/jsx-icon/CpuIcon";
import Shield from "@/assets/jsx-icon/Shield";
import Database from "@/assets/jsx-icon/Database";
import ApiConnect from "@/assets/jsx-icon/ApiConnect";

const cardData = [
  {
    id: 1,
    icon: CpuIcon,
    title: "On-Device Processing",
    description:
      "Raw video never leaves the user's device. Only structured health data transmitted. Privacy-first by architecture, not policy.",
  },
  {
    id: 2,
    icon: Shield,
    title: "HIPAA Ready",
    description:
      "Full HIPAA compliance framework. BAA available. PHI handling documentation and audit log support for US healthcare deployments.",
  },
  {
    id: 3,
    icon: Database,
    title: "GDPR Compliant",
    description:
      "Data minimization, right to erasure, and consent management built into SDK and API layer — Article 9 health data compliant.",
  },
  {
    id: 4,
    icon: ApiConnect,
    title: "FHIR / HL7 Integration",
    description:
      "All scan outputs export as FHIR R4 Observation and DiagnosticReport resources — plug-and-play for any clinical EHR system.",
  },
];

export default function Enterprise() {
  return (
    <div className="w-full h-auto">
      <BallFrame>
        <div className="relative w-full h-auto flex flex-row gap-x-10 py-24 px-12">
          <div className="absolute w-fit h-auto -left-[15%] -top-[0%] z-10">
            <img src={circleOne} alt="" srcSet="" />
          </div>
          <div className="relative w-full h-auto flex flex-row z-20">
            <div className="w-full h-auto flex justify-center items-center">
              <TextWithBadge
                text="DATA & COMPLIANCE"
                caption="We believe health data is a fundamental human right. Salvion.ai processes 100% of facial streams securely on-device."
                captionClass="text-[20px] pr-24"
              >
                <div className="w-full h-auto flex flex-col text-[42px] gap-y-2">
                  <div className="w-full h-auto">
                    <h1 className=" font-bold text-white">Enterprise-Grade</h1>
                  </div>
                  <div className="w-full h-auto">
                    <h1 className="font-bold text-[#23DDF6]">
                      Security & Privacy
                    </h1>
                  </div>
                </div>
              </TextWithBadge>
            </div>
            <div className="w-[55%] shrink-0 h-auto grid grid-cols-2 gap-6">
              {cardData.map((data) => (
                <div
                  key={data.id}
                  className="w-full flex flex-col group justify-between border-[1.5px] border-[#585A5F] bg-[#090F1B] px-5 py-5 rounded-xl
                  hover:bg-gradient-to-t hover:from-[#341B0F] hover:to-[#0B0F1A] hover:border-[#623B3B] transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 shrink-0 flex justify-center items-center bg-[#151B27] border-[0.7px] border-[#2C323C] rounded-md p-1 text-[#FFFFFF] 
                  group-hover:text-[#F66623] group-hover:border-[#FC9292] transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(181,103,20,0.4)]"
                  >
                    <data.icon />
                  </div>
                  <div className="w-full flex flex-col gap-y-3 mt-8">
                    <p className="text-[#FFFFFF] font-medium">{data.title}</p>
                    <p className="text-[#DADADA] text-sm leading-relaxed">
                      {data.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BallFrame>
    </div>
  );
}
