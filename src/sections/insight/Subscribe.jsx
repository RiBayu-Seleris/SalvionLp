import TextWithBadge from "@/components/TextWithBadge";
import BallFrame from "@/components/BallFrame";

export default function Subscribe() {
  return (
    <div className="w-full h-auto">
      <BallFrame
        blobs={[
          { color: [90, 50, 220], opacity: 0.6 }, // ungu terang
          { color: [30, 80, 200], opacity: 0.6 }, // biru terang
          { color: [90, 50, 220], opacity: 0.6 }, // ungu terang
          { color: [30, 80, 200], opacity: 0.6 }, // biru terang
        ]}
      >
        <div className="w-full h-auto max-w-5xl mx-auto flex flex-row gap-x-0 justify-between items-center py-24">
          {/* Left: Text */}
          <div className="w-full h-auto max-w-md flex flex-col gap-y-3">
            <h1 className="text-[24px] font-bold text-white leading-snug">
              Subscribe to Signal Intelligence
            </h1>
            <p className="text-[20px] font-normal text-[#9CA3AF] leading-relaxed">
              Monthly analysis on the intersection of AI, physiological data,
              and health economics.
            </p>
          </div>

          {/* Right: Input + Button */}
          <div className="w-full h-auto flex flex-row items-center gap-x-5 flex-1 justify-end">
            <input
              type="email"
              placeholder="matz@ruby-lang.jp"
              className="flex-1 max-w-xs h-12 px-4 text-md text-[#D1D5DB] bg-[#0D2231] border border-[#2A4A60] rounded-lg outline-none placeholder:text-[#6B7280]"
            />
            <button className="h-12 px-8 bg-[#4EECD8] text-[#0A1F2E] text-[15px] font-bold rounded-lg whitespace-nowrap hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>
        </div>
      </BallFrame>
    </div>
  );
}
