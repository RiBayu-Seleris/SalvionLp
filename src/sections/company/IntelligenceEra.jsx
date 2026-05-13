import TextWithBadge from "@/components/TextWithBadge";
import BallFrame from "@/components/BallFrame";

import BuildOnIcon from "@/assets/icons/applications/buildon-icon.svg";

export default function IntelligenceEra() {
  return (
    <div className="w-full h-auto">
      <BallFrame blobs={[{ color: [5, 74, 108], opacity: 0.5 }]}>
        <div className="w-full h-auto flex flex-col gap-y-6 justify-center items-center text-center py-44">
          <div className="w-full h-auto flex flex-col">
            <div className="w-full h-auto flex justify-center items-center">
              <div class="w-16 h-16 rotate-45 bg-blue-500 border-[1px] border-[#30C9DE] flex items-center justify-center rounded-xl bg-gradient-to-bl from-[#032428] to-[#0B0F1A] shadow-[0_0_14.63px_0_rgba(48,201,222,0.4)]">
                <img
                  src={BuildOnIcon}
                  alt=""
                  srcset=""
                  className="w-auto h-auto -rotate-45"
                />
              </div>
            </div>
            <div className="w-full h-auto flex justify-center items-center mt-16">
              <div className="w-fit h-auto px-10 py-2 rounded-full border-[1px] border-[#096D7C] bg-[#021D21]">
                <p className="text-[#4FE4F8] font-[400] text-[14px]">
                  SALVION AI · COMPANY
                </p>
              </div>
            </div>
            <div className="w-full h-auto flex flex-col gap-y-6 my-14">
              <div className="w-full h-auto font-bold max-w-3xl mx-auto">
                <h1 className="font-bold text-[#FFFFFF] text-[48px] text-center leading-snug">
                  The organizations <br /> that build on <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#4FE4F8] to-[#2F8692]">
                    Salvion AI
                  </span>{" "}
                  <br />
                  build ahead of risk.
                </h1>
              </div>
              <div className="w-full max-w-3xl mx-auto h-auto flex flex-col text-[#D1D5DB]">
                <p className="text-[20px] font-[400] ">
                  Whether you are designing insurance products, managing
                  workforce health strategy, or building digital health
                  platforms — the intelligence layer that Salvion provides will
                  change what you can know and when you can act.
                </p>
              </div>
            </div>
            <div className="w-full h-auto flex flex-row justify-center items-center gap-10">
              <button className="inline-flex items-center gap-1.5 h-auto px-10 py-3 rounded-full bg-[#3ef0e0] text-[#0a1a2e] font-medium text-[15px] hover:opacity-90 active:scale-[0.97] transition-all cursor-pointer border-none">
                REQUEST A DEMONSTRATION
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button className="inline-flex items-center justify-center h-auto px-10 py-3 rounded-full bg-[#1e2440] text-white font-medium text-[15px] border border-white/10 hover:opacity-90 active:scale-[0.97] transition-all cursor-pointer">
                DEVELOPER DOCUMENTATION
              </button>
            </div>
          </div>
        </div>
      </BallFrame>
    </div>
  );
}
