import CardDescription from "@/components/CardDescription";
const dummyCard = [
  {
    id: 1,
    title: "Blood Volume Pulse (rPPG)",
    subtitle:
      "Sub-pixel color variations reflecting blood flow — captured across 3 independent ROI channels for HR, HRV, SpO2, and BP estimation",
  },
  {
    id: 2,
    title: "3D Facial Mesh Reconstruction",
    subtitle:
      "68-point landmark model reconstructs facial geometry for body composition estimation and biological age inference",
  },
  {
    id: 3,
    title: "Micro-Movement Cardiac Signal (rBCG)",
    subtitle:
      "Imperceptible head micro-movements per heartbeat tracked via optical flow",
  },
];

export default function Description() {
  return (
    <div className="relative w-full h-auto flex">
      <div className="absolute top-3 left-0 w-full h-auto flex p-[2.5px] bg-gradient-to-r from-[#0B0F1A] via-[#23DDF6] to-[#0B0F1A] z-10">
        <div className=" w-full bg-gradient-to-r from-[#0B0F1A] via-[#23DDF6] to-[#0B0F1A] z-10"></div>
      </div>
      <div className="w-full h-auto flex flex-row justify-center items-stretch gap-x-14 px-12 z-20">
        {dummyCard.map((data, index) => {
          return (
            <div key={data.id} className="w-full h-full flex">
              <CardDescription title={data.title} subtitle={data.subtitle} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
