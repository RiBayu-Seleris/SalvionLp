import TextWithBadge from "@/components/TextWithBadge";
import BallFrame from "@/components/BallFrame";

export default function StartBuild() {
  return (
    <div className="w-full h-auto">
      <BallFrame
        blobs={[
          { color: [90, 50, 220], opacity: 0.4 }, // ungu terang
          { color: [30, 80, 200], opacity: 0.4 }, // biru terang
        ]}
      >
        <div className="w-full h-auto flex flex-col gap-y-6 justify-center items-center text-center py-48">
          <div className="w-full h-auto flex flex-col gap-y-20">
            <div className="w-full h-auto flex flex-col gap-y-3">
              <div className="w-full h-auto flex flex-col text-[42px]">
                <div className="w-full h-auto font-bold">
                  <h1 className="font-bold text-[#FFFFFF]">
                    Start building today
                  </h1>
                </div>
              </div>
              <div className="w-full max-w-4xl mx-auto h-auto flex flex-col text-[#D1D5DB]">
                <p className="text-[20px] px-20 font-[400]">
                  Get your API key, explore the docs, and integrate
                  physiological intelligence into your product in minutes.
                </p>
              </div>
            </div>
            <div className="w-full h-auto flex flex-row justify-center items-center gap-3">
              <button className="inline-flex items-center gap-1.5 h-auto px-10 py-3 rounded-full bg-[#3ef0e0] text-[#374151] font-medium text-[15px] hover:opacity-90 active:scale-[0.97] transition-all cursor-pointer border-none">
                Get API Key
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
            </div>
          </div>
        </div>
      </BallFrame>
    </div>
  );
}
