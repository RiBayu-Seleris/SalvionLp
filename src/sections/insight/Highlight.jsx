import FrameHighlight from "@/assets/temp/insight/frame-highlight.svg";
import SalvionIcon from "@/assets/icons/salvion-icon.svg";
import ImgHighlight from "@/assets/temp/insight/img-highlight.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

export default function Highlight() {
  return (
    <div className="w-full h-auto">
      <div className="relative w-full h-auto pl-12 py-12">
        <div className="relative w-full h-auto z-20 flex flex-row gap-x-10 overflow-hidden">
          <div className="w-full h-auto flex flex-col gap-y-10">
            <div className="w-full h-auto flex flex-row gap-x-5">
              <div className="w-fit h-auto px-6 py-2 bg-[#021D21] border-[1px] border-[#096D7C] rounded-lg">
                <p className="text-[14px] text-[#4FE4F8] font-[400]">
                  PREDICTIVE HEALTH
                </p>
              </div>
              <div className="w-fit h-auto flex justify-center items-center">
                <p className="text-[#9CA3AF] font-[400]">3 min ago</p>
              </div>
            </div>
            <div className="w-full h-auto flex flex-col gap-y-5 pr-12">
              <div className="w-full h-auto">
                <p className="text-[32px] text-[#FFFFFF] font-[600]">
                  The Shift Toward Predictive Health Intelligence: Why Reactive
                  Medicine is a Financial Architecture Problem
                </p>
              </div>
              <div className="w-full h-auto">
                <p className="text-[20px] text-[#D1D5DB] font-[400]">
                  The healthcare system was not designed to prevent illness — it
                  was designed to respond to it. This is not a medical failure.
                  It is an information failure — and AI is beginning to resolve
                  it.
                </p>
              </div>
            </div>
            <div className="w-full h-auto flex flex-row justify-between items-center">
              <div className="w-full h-auto flex flex-row gap-x-3.5 justify-center items-center">
                <div className="w-9 h-9 shrink-0 flex justify-center items-start">
                  <img
                    src={SalvionIcon}
                    alt=""
                    srcset=""
                    className="w-full h-full"
                  />
                </div>
                <div className="w-full h-auto flex flex-col justify-between items-center">
                  <div className="w-full h-auto">
                    <p className="text-[#495367]">Salvion Research Team</p>
                  </div>
                  <div className="w-full h-auto">
                    <p className="text-[#96A2BE]">Q1 2025</p>
                  </div>
                </div>
              </div>
              <div className="w-auto h-auto flex flex-row justify-center items-center gap-x-2 pr-12">
                <div className="w-fit h-auto flex justify-center items-center">
                  <p className="text-[#4FE4F8] text-[18px] text-nowrap">
                    Continue Reading
                  </p>
                </div>
                <div className="w-6 h-6 flex justify-center items-center">
                  <img
                    src={ArrowUpRight}
                    alt=""
                    srcset=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[55%] h-auto shrink-0 flex flex-row justify-between items-center py-10">
            <div className="relative w-full h-auto flex justify-center items-center -right-[13%] rounded-xl bg-[#FFFFFF]/30 p-6 border-[1px] border-[#8CA4AC] shadow-[-3px_1px_14.2px_0_rgba(103,189,208,0.6)]">
              <img
                src={ImgHighlight}
                alt=""
                srcset=""
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 w-full h-full">
          <img
            src={FrameHighlight}
            alt=""
            srcset=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
