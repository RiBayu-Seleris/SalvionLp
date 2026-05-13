export default function CardActionable({
  icon = "",
  title = "",
  value = "",
  status = null,
  borderColor = "",
}) {
  return (
    <div className="w-auto h-auto flex flex-col gap-y-4 px-2 py-3 bg-[#0B0F1A]/20 border-[1px] border-[#929499] rounded-xl">
      <div className="w-auto h-auto flex flex-row justify-start px-2 items-center gap-x-3">
        <div
          className="w-8 h-8 flex justify-center items-center bg-orange-500 p-2 rounded-lg border-[0.3px] bg-gradient-to-bl from-[#032428] to-[#0B0F1A]"
          style={{ borderColor: borderColor }}
        >
          <img src={icon} alt="" srcset="" className="w-full h-full" />
        </div>
        <div className="w-auto h-auto flex justify-center items-center">
          <p className="text-[14px] text-[#FFFFFF] font-[600]">{title}</p>
        </div>
      </div>
      <div className="w-auto h-auto flex flex-row justify-between items-center gap-x-16 pl-2 pr-2">
        <div className="w-auto h-auto flex justify-center items-center">
          <p
            className="text-[30px] font-sora"
            style={{ color: status?.color ?? "#F59E0B" }}
          >
            {value}
          </p>
        </div>
        <div className="w-auto h-auto flex justify-center items-center pt-4">
          <p
            className="text-[14px] text-nowrap"
            style={{ color: status?.color ?? "#F59E0B" }}
          >
            {status?.value ?? ""}
          </p>
        </div>
      </div>
    </div>
  );
}
