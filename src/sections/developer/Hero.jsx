import TextWithBadgeCenter from "@/components/TextWithBadgeCenter";
import BallFrame from "@/components/BallFrame";

export default function Hero() {
  return (
    <div className="relative w-full h-auto">
      {/* Content */}
      <BallFrame
        blobs={[
          { color: [15, 40, 90], opacity: 0.8 },
          { color: [10, 70, 85], opacity: 0.8 },
        ]}
      >
        <div className="relative z-10 w-full flex flex-col items-center gap-y-20 py-32">
          <TextWithBadgeCenter
            text="DEVELOPERS"
            caption="Salvion AI is built for integration. Every platform capability is exposed through a clean, well-documented API — enabling developers to embed physiological intelligence into any product in days, not months."
            captionClass="max-w-4xl mx-auto text-[18px] leading-relaxed px-5"
          >
            <h1 className="font-bold text-[#FFFFFF] text-[48px]">
              Signal Intelligence,
            </h1>
            <h1 className="font-bold text-[#23DDF6] text-[48px]">API-first.</h1>
          </TextWithBadgeCenter>
          <button className="w-fit h-auto py-2 px-10 bg-[#162E39] border-[1px] border-[#585A5F] rounded-full">
            <p className="text-[#FFFFFF] font-[500] text-[18px]">
              View Documentation
            </p>
          </button>
        </div>
      </BallFrame>
    </div>
  );
}
