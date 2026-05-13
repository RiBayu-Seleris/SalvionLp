import ImgHero from "@/assets/temp/science/hero.svg";
import TextWithBadge from "@/components/TextWithBadge";
import LineHero from "@/assets/jsx-frame/science/LineHero";
import LineHero2 from "@/assets/jsx-frame/science/LineHero2";
// import LineHero from "@/assets/temp/science/line-hero.svg";

export default function Hero() {
  return (
    <div className="relative w-full h-auto flex flex-row py-[14%]">
      <div className="absolute w-auto h-auto inset-0 -left-[50%] z-10 overflow-hidden">
        <LineHero2 />
      </div>
      <div className="relative w-[50%] h-auto shrink-0 flex justify-center items-center pl-12 overflow-hidden z-20">
        <TextWithBadge
          text="SCIENCE"
          caption="Salvion AI is founded on two decades of validated research in visual signal processing, computational physiology, and probabilistic health modeling."
          captionClass="pr-24 text-[24px]"
        >
          <div className="w-full h-auto flex flex-col text-[42px] gap-y-2">
            <div className="w-full h-auto">
              <h1 className=" font-bold text-[#FFFFFF]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#05A5BA] to-[#4FE4F8]">
                  Credibility
                </span>{" "}
                is
              </h1>
            </div>
            <div className="w-full h-auto">
              <h1 className="font-bold text-[#FFFFFF]">
                built in the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#05A5BA] to-[#4FE4F8]">
                  signal
                </span>
              </h1>
            </div>
          </div>
        </TextWithBadge>
      </div>
      <div className="w-full h-auto flex bg-[#0B0F1A]">
        <div className="w-full h-auto flex justify-end items-center mix-blend-lighten">
          <img src={ImgHero} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
}
