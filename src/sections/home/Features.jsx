import CardFeature from "@/components/CardFeature";
import VitalSign from "@/assets/icons/features/vital-signs.svg";
import HealthIndices from "@/assets/icons/features/health-indices.svg";
import BodyComposition from "@/assets/icons/features/body-composition.svg";
import MentalWellness from "@/assets/icons/features/mental-wellness.svg";
import BloodMarkers from "@/assets/icons/features/blood-markers.svg";
import DiseaseRisk from "@/assets/icons/features/disease-risk.svg";
import NetTop from "@/assets/temp/net-top-only2.svg";
import NetBottom from "@/assets/temp/net-bottom-only2.svg";
import WaveRight from "@/assets/jsx-frame/WaveRight.jsx";
import TextWithBadgeCenter from "@/components/TextWithBadgeCenter";

const FeaturesData = [
  {
    id: 1,
    icon: VitalSign,
    title: "Vital Signs",
    subtitle: "Real-Time Vital Signs Monitoring",
    bgFrom: "#341B0F",
    bgTo: "#0B0F1A",
    borderIcon: "#FC9292",
    borderCard: "#623B3B",
    capabilities: [
      "Heart Rate (HR) — ±2 bpm accuracy",
      "HRV — RMSSD, SDNN, LF/HF spectral",
      "Blood Pressure (Systolic/Diastolic)",
      "SpO2 — multi-wavelength rPPG",
      "Respiratory Rate",
      "Cardiac Output composite index",
    ],
  },
  {
    id: 2,
    icon: HealthIndices,
    title: "Health Indices",
    subtitle: "Advanced Health Scoring Indices",
    bgFrom: "#18340F",
    bgTo: "#0B0F1A",
    borderIcon: "#BBFC92",
    borderCard: "#4B623B",
    capabilities: [
      "Salvion Health Score™ (0–100 scale)",
      "Cardiovascular Risk Score",
      "Vascular Age vs chronological age",
      "Stress Index — ANS balance",
      "Metabolic Score proxy",
      "Early Risk Signals™",
    ],
  },
  {
    id: 3,
    icon: BodyComposition,
    title: "Body Composition",
    subtitle: "Facial Video Body Composition",
    bgFrom: "#0F3234",
    bgTo: "#0B0F1A",
    borderIcon: "#92E7FC",
    borderCard: "#3B5C62",
    capabilities: [
      "BMI & Body Shape Analysis",
      "Body Fat % — visceral & subcutaneous",
      "Muscle / Protein / Bone Mass (kg)",
      "Body Water % & hydration status",
      "BMR — basal metabolic rate",
      "Biological Age & Skin Vascular Age",
    ],
  },
  {
    id: 4,
    icon: MentalWellness,
    title: "Mental Wellness",
    subtitle: "Mental Wellness Indicators",
    bgFrom: "#342C0F",
    bgTo: "#0B0F1A",
    borderIcon: "#FCF992",
    borderCard: "#625A3B",
    capabilities: [
      "Stress Level Index",
      "Burnout Risk Flag",
      "Mental Fatigue Indicator",
      "Sleep Quality Proxy",
      "Mood & Affect Baseline (micro-expr)",
    ],
  },
  {
    id: 5,
    icon: BloodMarkers,
    title: "Blood Markers",
    subtitle: "Non-Invasive Blood Marker Estimation",
    bgFrom: "#320F34",
    bgTo: "#0B0F1A",
    borderIcon: "#EC92FC",
    borderCard: "#623B5F",
    capabilities: [
      "Blood Glucose (fasting & post-prandial)",
      "Total Cholesterol proxy",
      "Hemoglobin (anemia screening)",
      "Uric Acid — gout risk marker",
      "HbA1c — 3-month glucose control",
    ],
  },
  {
    id: 6,
    icon: DiseaseRisk,
    title: "Disease Risk",
    subtitle: "AI Disease Risk Prediction",
    bgFrom: "#130F34",
    bgTo: "#0B0F1A",
    borderIcon: "#929AFC",
    borderCard: "#3B3C62",
    capabilities: [
      "Hypertension Risk (severity tier)",
      "Type 2 Diabetes Risk",
      "Cardiovascular Disease (10-yr model)",
      "Hypercholesterolemia Risk",
      "Heart Attack & Stroke Risk",
      "Abnormal Fasting Glucose signal",
    ],
  },
];

export default function Features() {
  return (
    <div className="relative w-full h-auto flex flex-col justify-center items-center gap-y-0 py-20">
      <div className="absolute w-auto h-auto right-0 top-[18%] z-20">
        <WaveRight />
      </div>
      <div className="w-full h-auto flex justify-center items-center ">
        <TextWithBadgeCenter
          text="FEATURES & CAPABILITIES"
          caption="A single 30-second scan provides a holistic view of your health"
        >
          <h1 className="font-bold text-[#FFFFFF]">
            A Complete{" "}
            <span className="font-bold text-[#23DDF6]">
              Health Intelligence Suite
            </span>
          </h1>
        </TextWithBadgeCenter>
      </div>
      <div className="relative w-full h-auto flex flex-col justify-center items-center gap-y-10">
        <div className="absolute w-full h-auto top-0 left-0 z-10">
          <img src={NetTop} alt="" />
        </div>
        <div className="absolute w-full h-auto bottom-0 left-0 z-10">
          <img src={NetBottom} alt="" />
        </div>
        {/* <div className="relative w-full h-auto flex flex-col justify-center items-center"></div> */}
        <div className="relative w-full h-auto grid grid-cols-3 px-16 py-20 gap-10 z-20">
          {FeaturesData.map((feature, index) => {
            return (
              <CardFeature
                icon={feature.icon}
                bgFrom={feature.bgFrom}
                bgTo={feature.bgTo}
                borderIcon={feature.borderIcon}
                borderCard={feature.borderCard}
                title={feature.title}
                subtitle={feature.subtitle}
                capabilities={feature.capabilities}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
