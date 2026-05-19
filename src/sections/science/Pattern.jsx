import TextWithBadge from "@/components/TextWithBadge";
import ComparisonTable from "@/components/ComparisonTable";

const headerTable = ["MODEL LAYER", "ARCHITECTURE", "PRIMARY FUNCTION"];
const capabilities = [
  { id: 1, label: "Signal Classifier" },
  { id: 2, label: "Risk Ensemble" },
  { id: 3, label: "Predictive Model" },
  { id: 4, label: "Behavioral Classifier" },
];

const tableData = [
  {
    id: 1,
    capabilityId: 1, // ref ke capabilities
    cells: ["1D-CNN / Transformer", "Cardiovascular pattern recognition"],
  },
  {
    id: 2,
    capabilityId: 2,
    cells: ["Gradient Boost + Bayesian", "Probabilistic health risk scoring"],
  },
  {
    id: 3,
    capabilityId: 3,
    cells: ["Survival Analysis + DNN", "Time-to-event prediction"],
  },
  {
    id: 4,
    capabilityId: 4,
    cells: ["ViT + Temporal CNN", "Cognitive & fatigue state detection"],
  },
];

export default function Pattern() {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto flex flex-col gap-y-10 px-12">
        <div className="max-w-6xl h-auto">
          <TextWithBadge
            text="AI MODELS"
            caption="Extracted physiological signals are processed by Salvion's AI Interpretation Engine — a layered architecture of domain-specific models trained on large-scale labeled datasets spanning multiple populations, health conditions, and clinical outcomes."
            captionClass="text-[18px]"
          >
            <div className="w-full h-auto flex flex-col text-[38px]">
              <h1 className="font-bold text-[#FFFFFF]">
                Pattern recognition & probabilistic modeling
              </h1>
            </div>
          </TextWithBadge>
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
    </div>
  );
}
