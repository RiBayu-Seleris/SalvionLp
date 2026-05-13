import ImgHero from "@/assets/temp/science/hero.svg";
import TextWithBadgeCenter from "@/components/TextWithBadgeCenter";
import BallFrame from "@/components/BallFrame";
// import FrameLine from "@/assets/temp/insight/line-hero.svg";
import FrameLine from "@/assets/jsx-frame/insight/LineHero";

export default function Hero() {
  return (
    <div className="w-full h-auto">
      <div className="relative w-full h-auto">
        <div className="w-full h-auto">
          {/* <img src={FrameLine} alt="" srcset="" /> */}
          <FrameLine />
        </div>
        <div className="absolute inset-0 flex justify-center items-center pb-20">
          <BallFrame
            blobs={[
              { color: [90, 50, 220], opacity: 0.4 },
              { color: [30, 80, 200], opacity: 0.4 },
            ]}
          >
            <div className="w-full h-auto mt-[10%]">
              <TextWithBadgeCenter
                text="APPLICATIONS"
                caption="Analysis and perspective on the future of health intelligence, risk prediction, and the convergence of AI and biological data."
                captionClass="max-w-4xl mx-auto text-[22px] leading-relaxed"
              >
                <div className="w-full h-auto flex flex-col text-[66px]">
                  <h1 className="font-bold text-[#FFFFFF]">Intelligence</h1>
                  <h1 className="font-bold text-[#FFFFFF]">
                    Worth <span className="text-[#23DDF6]">Reading</span>
                  </h1>
                </div>
              </TextWithBadgeCenter>
            </div>
          </BallFrame>
        </div>
      </div>
    </div>
  );
}
