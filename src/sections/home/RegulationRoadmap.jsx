import frameCard from "@/assets/temp/CPU-Frame.svg";
import CPU from "@/assets/temp/CPU-Frame.svg";
import Maps from "@/assets/temp/Maps-Frame.svg";

const cardData = [
  {
    id: 1,
    frame: CPU,
    title: "Indonesia & Southeast Asia Regulatory Readiness",
    description:
      "Salvion AI is developed with full awareness of Indonesia's health data regulations (PP 71/2019, PMK 20/2019), OJK insurtech frameworks, and PDPI personal data protection law — ensuring compliant deployment across the Indonesian healthcare and insurance ecosystem and broader SEA markets including Malaysia, Singapore, Philippines, and Vietnam.",
    bgFrom: "#7CEFFF",
    bgVia: "#397EE4",
    bgTo: "#1B0536",
  },
  {
    id: 2,
    frame: Maps,
    title: "Clinical-Grade Validation Roadmap",
    description:
      "Salvion AI is on a structured clinical validation pathway, currently in active partnership clinical trials across primary care settings in Southeast Asia. Targeted certifications include ISO 13485 (medical device quality management), CE marking for European markets, and BPOM classification for Indonesia. All accuracy benchmarks are independently validated against reference clinical devices.",
    bgFrom: "#FD9EFF",
    bgVia: "#9E1F3E",
    bgTo: "#270511",
  },
];

export default function RegulationRoadmap() {
  return (
    <div className="w-full h-auto grid grid-cols-2 gap-10 px-12">
      {cardData.map((data, index) => (
        <div
          key={index}
          className="relative w-full h-auto px-10 py-10 rounded-xl overflow-hidden"
          style={{
            background: `linear-gradient(to right, ${data.bgFrom}, ${data.bgVia}, ${data.bgTo})`,
          }}
        >
          {/* frameCard stretch mengisi parent */}
          <div className="absolute inset-0 mix-blend-luminosity top-0 z-10">
            <img
              src={data.frame}
              alt=""
              className="w-auto h-full object-contain opacity-40"
            />
          </div>
          <div className="absolute inset-0 bg-[#05010D]/60 z-20" />

          <div className="relative w-full h-auto flex flex-col justify-between items-center gap-y-12 z-20">
            <div className="w-full h-auto flex">
              <p className="text-[#FFFFFF] font-[600] text-[20px]">
                {data.title}
              </p>
            </div>
            <div className="w-full h-auto flex">
              <p className="text-[#D7D7D7] font-[400] text-[16px] leading-relaxed">
                {data.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
