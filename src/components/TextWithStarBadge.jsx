import Star from "@/assets/icons/blue-star.svg";

export default function TextWithStarBadge({
  text = "",
  title = "",
  subtitle = "",
  caption = "",
  subcaption = "",
  color = "#6CE8F9",
  bgColor = "#021D21",
  borderColor = "#096D7C",
  captionClass = "",
}) {
  return (
    <div className="w-full h-auto flex flex-col gap-y-12">
      <div
        className="w-fit h-auto flex flex-row gap-x-2 border-[1px] px-5 py-1.5 rounded-full"
        style={{ borderColor: borderColor, backgroundColor: bgColor }}
      >
        <div className="w-auto h-auto flex justify-center items-center">
          <div className="relative w-3.5 h-3.5">
            <img src={Star} alt="" srcset="" />
          </div>
        </div>
        <div className="w-fit h-full flex justify-center items-center">
          <p className="font-[400] text-[14px]" style={{ color: color }}>
            {text}
          </p>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col gap-y-6">
        <div className="w-full h-auto flex flex-col text-[42px] gap-y-2">
          <div className="w-full h-auto">
            <h1 className=" font-bold text-[#23DDF6]">{title}</h1>
          </div>
          <div className="w-full h-auto">
            <h1 className=" font-bold text-white">{subtitle}</h1>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col text-[#F3F4F6] text-[20px]">
          <p className={`${captionClass}`}>{caption}</p>
        </div>
      </div>
    </div>
  );
}
