import heroImage from "@/assets/temp/hero-img2.png";
import hypertension from "@/assets/temp/hypertension.svg";
import glucose from "@/assets/temp/glucose.svg";
import pressure from "@/assets/temp/pressure.svg";
import bmi from "@/assets/temp/body-mass.svg";
import temperature from "@/assets/temp/temperature.svg";
import wave from "@/assets/temp/wave.png";
import ArrowRight from "@/assets/jsx-icon/ArrowRight2";
import circleOne from "@/assets/circle-one.svg";
import TextWithBadge from "@/components/TextWithBadge";

export default function Hero() {
  return (
    <div className="relative w-full h-full flex flex-row justify-between gap-x-2">
      <div className="absolute w-fit h-auto -left-[15%] -top-[0%]">
        <img src={circleOne} alt="" srcSet="" />
      </div>
      <div className="relative w-[45%] shrink-0 h-full flex pt-14 z-20">
        <div className="relative w-full h-auto flex flex-col gap-y-12 pl-12">
          <TextWithBadge
            text="NOW IN CLINICAL VALIDATION · SOUTHEAST ASIA"
            caption="Salvion AI transforms any smartphone or laptop camera into a
            clinical-grade health screening platform — delivering 30+ validated
            health markers in under 30 seconds."
            subcaption="No wearables. No hardware. No friction."
          >
            <div className="w-full h-auto flex flex-col text-[42px] gap-y-2">
              <div className="w-full h-auto">
                <h1 className=" font-bold text-white">Your Camera</h1>
              </div>
              <div className="w-full h-auto">
                <h1 className="font-bold text-[#23DDF6]">
                  Your Health Intelligence
                </h1>
              </div>
            </div>
          </TextWithBadge>
          <div className="w-full h-auto flex flex-row gap-x-5">
            <div className="w-fit h-auto bg-white text-[#374151] px-12 py-3 flex flex-row gap-x-3 items-center rounded-full">
              <p className="">Start Free Trial</p>
              <ArrowRight className="w-5 h-5" />
            </div>
            <div className="w-fit h-auto px-12 py-3 rounded-full border-[1px] border-[#585A5F] bg-[#162E39]">
              <p className="text-[#FFFFFF]">See How It Works</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full relative flex items-end justify-center z-10">
        {/* Hypertension */}
        <div className="absolute w-fit h-auto z-20 -top-7 right-10 animate-float-a cursor-pointer">
          <div className="animate-fade-up [animation-delay:0ms] transition-transform duration-300 hover:scale-110 origin-center">
            <img
              src={hypertension}
              alt="Hypertension"
              className="w-auto h-auto"
            />
          </div>
        </div>

        {/* Glucose */}
        <div className="absolute w-fit h-auto z-20 top-5 left-10 animate-float-b cursor-pointer">
          <div className="animate-fade-up [animation-delay:120ms] transition-transform duration-300 hover:scale-110 origin-center">
            <img src={glucose} alt="Glucose" className="w-auto h-auto" />
          </div>
        </div>

        {/* Pressure */}
        <div className="absolute w-fit h-auto z-20 top-[32%] left-[12%] animate-float-c cursor-pointer">
          <div className="animate-fade-up [animation-delay:240ms] transition-transform duration-300 hover:scale-110 origin-center">
            <img
              src={pressure}
              alt="Blood pressure"
              className="w-auto h-auto"
            />
          </div>
        </div>

        {/* BMI */}
        <div className="absolute w-fit h-auto z-20 bottom-[30%] left-[30%] animate-float-d cursor-pointer">
          <div className="animate-fade-up [animation-delay:360ms] transition-transform duration-300 hover:scale-110 origin-center">
            <img src={bmi} alt="BMI" className="w-auto h-auto" />
          </div>
        </div>

        {/* Temperature */}
        <div className="absolute w-fit h-auto z-20 bottom-[15%] left-[5%] animate-float-e cursor-pointer">
          <div className="animate-fade-up [animation-delay:480ms] transition-transform duration-300 hover:scale-110 origin-center">
            <img
              src={temperature}
              alt="Temperature"
              className="w-auto h-auto"
            />
          </div>
        </div>

        {/* <div className="w-full h-full flex justify-center items-center">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-full object-right object-cover"
          />
        </div> */}
      </div>

      <div className="w-full h-auto absolute bottom-0 z-0">
        <img src={wave} alt="" srcSet="" className="w-full h-full" />
      </div>
    </div>
  );
}
