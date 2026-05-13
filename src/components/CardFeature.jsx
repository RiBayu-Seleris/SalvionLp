import BlueChecklist from "@/assets/icons/features/blue-checklist.svg";

export default function CardFeature({
  icon = null,
  title = "",
  subtitle = "",
  capabilities = [],
  bgFrom = "",
  bgTo = "",
  borderIcon = "",
  borderCard = "",
}) {
  return (
    <div
      className="w-full h-full flex flex-col gap-y-3 justify-start items-start p-5 rounded-xl"
      style={{
        border: `1.5px solid ${borderCard}`,
        background: `linear-gradient(to bottom right, ${bgFrom}, ${bgTo})`,
      }}
    >
      <div className="w-full h-auto flex flex-row gap-x-3">
        <div
          className="w-12 h-12 shrink-0 p-2 flex justify-center items-center rounded-xl"
          style={{
            border: `1px solid ${borderIcon}`,
            background: `linear-gradient(to top right, ${bgFrom} 0%, ${bgTo} 100%)`,
          }}
        >
          <img src={icon} alt="" className="w-full h-full" />
        </div>
        <div className="w-full h-full flex flex-col justify-center gap-y-2">
          <p className="text-[14px] text-white font-semibold">{title}</p>
          <p className="text-[#DADADA] text-[12px] font-normal">{subtitle}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-y-3.5">
        {capabilities.map((item, i) => (
          <div
            key={i}
            className="w-full h-auto flex flex-row justify-center items-center gap-x-3"
          >
            <div className="w-5 h-5 shrink-0 flex justify-center items-center rounded-full">
              <img src={BlueChecklist} alt="" className="w-full h-full" />
            </div>
            <div className="w-full h-auto flex items-center">
              <p className="text-[14px] font-normal text-white">{item}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
