export default function CardDescription({ title = "", subtitle = "" }) {
  return (
    <div
      className="
      group w-full h-auto flex flex-col gap-y-14 justify-center items-center 
      transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
      hover:scale-105 hover:translate-y-1 will-change-transform 
    "
    >
      {/* Circle indicator */}
      <div className="w-full h-auto flex justify-center items-center">
        <div
          className="pt-0.5 group-hover:pt-0 w-6 h-6 rounded-full border-[4px] 
        transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] 
        group-hover:scale-[1.33] bg-[#D9D9D9] group-hover:bg-[#D9D9D9] 
        group-hover:border-[#20C9E0] shadow-[0_0_22.8px_2px_rgba(188,117,245,0.8)]"
        />
      </div>

      {/* Card body */}
      <div
        className="
        w-full h-full flex flex-col justify-start items-center rounded-xl cursor-pointer
        border-[1.5px] py-5 gap-y-3
        border-transparent bg-transparent
        transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
        group-hover:bg-[#0B0F1A]/20 group-hover:border-[#585A5F]
        group-hover:backdrop-blur-[5.5px] group-hover:shadow-[1px_0_66.2px_rgba(34,207,231,0.7)]
      "
      >
        <div className="w-full flex justify-center items-center text-center">
          <p className="font-semibold text-[#FFFFFF] text-[18px]">{title}</p>
        </div>
        <div className="w-full flex-1 flex items-start text-center">
          <p className="text-[#D7D7D7] text-[16px] px-5">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
