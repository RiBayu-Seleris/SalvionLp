export default function TextNoBadge({
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
  captionClass = "",
}) {
  return (
    <div className="w-full h-auto flex flex-col gap-y-5 justify-center items-center text-center">
      <div className="w-fit h-full flex justify-center items-center">
        <p className="font-[400] text-[14px]" style={{ color: color }}>
          {text}
        </p>
      </div>
      <div className="w-full h-auto flex flex-col gap-y-5">
        <div className="w-full h-auto flex flex-col text-[42px] gap-y-2">
          <div className="w-full h-auto">
            <h1 className="font-bold" style={{ color: textColor1 }}>
              {title}{" "}
              <span className="font-bold" style={{ color: textColor2 }}>
                {subtitle}
              </span>
            </h1>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col text-[#D1D5DB] text-[20px]">
          <p className={`${captionClass}`}>{caption}</p>
        </div>
      </div>
    </div>
  );
}
