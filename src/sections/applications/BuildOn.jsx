import TextWithBadge from "@/components/TextWithBadge";
import BallFrame from "@/components/BallFrame";

import BuildOnIcon from "@/assets/icons/applications/buildon-icon.svg";

export default function BuildOn() {
  return (
    <div className="w-full h-auto">
      <BallFrame blobs={[{ color: [5, 74, 108], opacity: 0.5 }]}>
        <div className="w-full h-auto flex flex-col gap-y-6 justify-center items-center text-center py-44">
          <div className="w-full h-auto flex flex-col gap-y-20">
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
            <div className="w-full h-auto flex flex-col gap-y-6">
              <div className="w-full h-auto flex flex-col">
                <div className="w-full h-auto font-bold">
                  <h1 className="font-bold text-[#FFFFFF] text-[58px]">
                    Build on{" "}
                  </h1>
                  <h1 className="font-bold text-[#23DDF6] text-[58px]">
                    Physiological Intelligence
                  </h1>
                </div>
              </div>
              <div className="w-full max-w-4xl mx-auto h-auto flex flex-col text-[#D1D5DB]">
                <p className="text-[20px] px-20 font-[400] ">
                  Integrate clinical-grade biometric analysis into your platform
                  with our developer-first SDKs and APIs
                </p>
              </div>
            </div>
            <div className="w-full h-auto flex flex-row justify-center items-center gap-5">
              <button className="inline-flex items-center gap-1.5 h-auto px-10 py-3 rounded-full bg-[#3ef0e0] text-[#0a1a2e] font-medium text-[15px] hover:opacity-90 active:scale-[0.97] transition-all cursor-pointer border-none">
                Explore Platform
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
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </BallFrame>
    </div>
  );
}
