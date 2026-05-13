import HeroFrame from "@/assets/temp/company/hero4.png";

export default function Hero() {
  return (
    <div className="w-full h-auto">
      <div className="relative w-full h-auto bg-[#0B0F1A]">
        {/* ✅ mix-blend-lighten dipindah langsung ke <img> */}
        <div className="relative w-full h-auto z-10">
          <img
            src={HeroFrame}
            alt=""
            className="w-full h-full object-cover opacity-50 mix-blend-lighten"
          />
        </div>

        {/* ✅ Overlay merah sekarang tampil normal tanpa terpengaruh blend */}
        <div className="absolute inset-0 w-full h-full z-20">
          <div className="relative w-full h-full flex flex-col gap-y-10 justify-center items-center pt-10">
            <div className="w-full h-auto flex justify-center items-center">
              <div className="w-fit h-auto px-10 py-2 rounded-full border-[1px] border-[#096D7C] bg-[#021D21]">
                <p className="text-[#4FE4F8] font-[400] text-[14px]">
                  SALVION AI · COMPANY
                </p>
              </div>
            </div>
            <div className="w-full h-auto flex justify-center items-center">
              <p className="text-[68px] text-center text-[#FFFFFF] font-[600] leading-normal tracking-wider">
                Not the Next <br /> Health App. <br />{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] from-[10%] to-[#4FE4F8]">
                  The Platform <br /> Beneath Them.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
