export default function TextWithBadge({
  text = "",
  title = "",
  subtitle = "",
  caption = "",
  subcaption = "",
  color = "#6CE8F9",
  textColor1 = "",
  textColor2 = "",
  bgColor = "#021D21",
  borderColor = "#096D7C",
  captionClass = "text-[20px]",
  children,
}) {
  return (
    <div className="w-full h-auto flex flex-col gap-y-6 justify-center items-center text-center">
      <div
        className="w-fit h-auto flex flex-row gap-x-2.5 border-[1px] px-5 py-1.5 rounded-full"
        style={{ borderColor: borderColor, backgroundColor: bgColor }}
      >
        <div className="w-auto h-auto flex justify-center items-center">
          <div className="relative w-3 h-3">
            <div
              className="absolute inset-0 rounded-full animate-ping opacity-75"
              style={{ backgroundColor: color }}
            />
            <div
              className="relative w-3 h-3 rounded-full"
              style={{ backgroundColor: color }}
            />
          </div>
        </div>
        <div className="w-fit h-full flex justify-center items-center">
          <p className="font-[400] text-[14px]" style={{ color: color }}>
            {text}
          </p>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col gap-y-5">
        <div className="w-full h-auto flex flex-col text-[42px]">
          <div className="w-full h-auto font-bold">{children}</div>
        </div>
        <div className="w-full h-auto flex flex-col text-[#D1D5DB]">
          <p className={`${captionClass} font-[400]`}>{caption}</p>
        </div>
      </div>
    </div>
  );
}
