import TextWithBadgeCenter from "@/components/TextWithBadgeCenter";
import ComparisonTable from "@/components/ComparisonTable";

const headerTable = [
  "Capability Area",
  "Conventional rPPG Platforms",
  "Salvion AI Advantage",
];

const capabilities = [
  { id: 1, label: "Output Depth" },
  { id: 2, label: "AI Architecture" },
  { id: 3, label: "Signal Modality" },
  { id: 4, label: "Scan Quality" },
  { id: 5, label: "Health Intelligence" },
  { id: 6, label: "Business Model" },
];

const tableData = [
  {
    id: 1,
    capabilityId: 1, // ref ke capabilities
    // rppg: "Vital signs only (HR, SpO₂, BR)",
    // salvion:
    //   "30+ markers: vitals + blood proxies + body composition + disease risk + AI recommendations",
    cells: [
      "Vital signs only (HR, SpO₂, BR)",
      "30+ markers: vitals + blood proxies + body composition + disease risk + AI recommendations",
    ],
  },
  {
    id: 2,
    capabilityId: 2,
    // rppg: "Traditional CNN / regression models",
    // salvion:
    //   "Transformer-based temporal attention — higher accuracy on low-quality camera input",
    cells: [
      "Traditional CNN / regression models",
      "Transformer-based temporal attention — higher accuracy on low-quality camera input",
    ],
  },
  {
    id: 3,
    capabilityId: 3,
    // rppg: "Single-modality rPPG only",
    // salvion:
    //   "Tri-modal fusion: rPPG + rBCG + 3D facial mesh — independent cross-validation",
    cells: [
      "Single-modality rPPG only",
      "Tri-modal fusion: rPPG + rBCG + 3D facial mesh — independent cross-validation",
    ],
  },
  {
    id: 4,
    capabilityId: 4,
    cells: [
      "Basic face detection gate",
      "EQS + Liveness Detection + per-channel Signal Confidence + Anti-spoofing",
    ],
  },
  {
    id: 5,
    capabilityId: 5,
    // rppg: "Raw data output only",
    // salvion:
    //   "Salvion Health Score™ + risk tier + Early Risk Signals™ + personalized recommendations",
    cells: [
      "Raw data output only",
      "Salvion Health Score™ + risk tier + Early Risk Signals™ + personalized recommendations",
    ],
  },
  {
    id: 6,
    capabilityId: 6,
    // rppg: "SDK licensing only",
    // salvion:
    //   "Platform ecosystem: SDK + API + Developer Portal + White-label Per-parameter billing",
    cells: [
      "SDK licensing only",
      "Platform ecosystem: SDK + API + Developer Portal + White-label Per-parameter billing",
    ],
  },
];

export default function Further() {
  return (
    <div className="w-full h-auto flex flex-col gap-y-10 px-12">
      <div className="w-full h-auto flex justify-center items-center ">
        <TextWithBadgeCenter
          text="COMPETITIVE POSITIONING"
          captionClass="text-[20px] px-20 font-[400]"
          caption="Salvion AI was built to answer a question existing platforms couldn't: What if a health screening platform was as intelligent as the data it collects?"
        >
          <h1 className="font-bold text-[#FFFFFF]">
            Why <span className="font-bold text-[#23DDF6]">Salvion AI</span>{" "}
            Goes Further
          </h1>
        </TextWithBadgeCenter>
      </div>
      <div className="w-full h-auto rounded-xl overflow-hidden border-[1px] border-[#6CE8F9]">
        <ComparisonTable
          capabilities={capabilities}
          tableData={tableData}
          columns={headerTable}
          columnWidths={["w-[30%]", "w-[30%]", "w-[40%]"]}
        />
      </div>
    </div>
  );
}
