import { useRef, useEffect } from "react";
import productCode from "@/assets/temp/product-code.svg";
import productAction from "@/assets/temp/product-action.svg";
import TextWithBadge from "@/components/TextWithBadge";

const cardData = [
  {
    title: "Custom Pipeline",
    description: "Enable/disable parameter modules. Pay per use.",
  },
  {
    title: "FHIR R4 Output",
    description: "Standards-compliant output for any EHR system",
  },
  {
    title: "Offline-First",
    description: "Full functionality without internet connection",
  },
];

const SCROLL_MULTIPLIER = 3;

export default function ProductSDK() {
  const sectionRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scroller = scrollerRef.current;
    if (!section || !scroller) return;

    const onScroll = () => {
      const { top, height } = section.getBoundingClientRect();
      const stickyH = window.innerHeight;
      const scrollableRange = height - stickyH;
      const progress = Math.min(Math.max(-top / scrollableRange, 0), 1);
      const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
      scroller.scrollLeft = progress * maxScrollLeft;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // Wrapper: tinggi 3x viewport supaya scroll bisa "berhenti" di sini
    <div
      ref={sectionRef}
      className="relative w-full"
      style={{ height: `${SCROLL_MULTIPLIER * 100}vh` }}
    >
      {/* Sticky: konten nempel, tinggi = 1 viewport */}
      <div className="sticky top-20 h-[calc(100vh-8rem)]">
        {/* ✅ Semua yang di bawah ini PERSIS sama dengan kode lama kamu */}
        <div className="absolute inset-0 px-12 z-10 rounded-xl">
          <div className="w-full h-full bg-gradient-to-r from-[#DCF9FF] via-[#055D73] to-[#04001C] rounded-xl" />
        </div>
        <div className="relative z-20 w-full h-auto flex flex-row justify-between gap-x-10 py-16">
          <div className="w-full h-auto pt-10">
            <div className="relative w-full h-auto flex justify-start">
              <div className="relative w-auto h-auto -left-[9%] ">
                <img src={productCode} className="w-auto h-auto" />
                <div className="absolute top-1/2 -translate-y-1/2 -right-[9%]">
                  <img src={productAction} className="w-auto h-auto" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-auto flex flex-col gap-y-8 items-start justify-between overflow-x-scroll">
            <div className="w-full h-auto pl-5">
              <TextWithBadge
                text="PRODUCT & SDK"
                caption="Integrate clinical-grade health scanning into your existing applications with our lightweight, fully-typed SDKs for Web, iOS, and Android."
                captionClass="text-[20px] pr-32"
              >
                <div className="w-full h-auto flex flex-col text-[42px] gap-y-2">
                  <div className="w-full h-auto">
                    <h1 className=" font-bold text-white">
                      Integrate in Days,
                    </h1>
                  </div>
                  <div className="w-full h-auto">
                    <h1 className="font-bold text-[#23DDF6]">Not Months</h1>
                  </div>
                </div>
              </TextWithBadge>
            </div>
            <div
              ref={scrollerRef}
              className="w-full h-auto flex flex-row gap-x-5 overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pl-8 pr-16 scroll-pl-5 py-3"
            >
              {cardData.map((data, index) => (
                <div
                  key={index}
                  className="snap-start shrink-0 w-auto h-auto p-[2px] bg-[linear-gradient(360deg,#F2FEFF_3.31%,#ECFDFF_25.23%,#F2FEFF_49.81%,#D1F8FC_75%,#E4F7F8_96.77%,#F9FFFF_100%)] shadow-[1px_0px_10.1px_0_rgba(130,220,226,0.5)] rounded-xl"
                >
                  <div className="w-[300px] h-auto flex flex-col justify-center items-center gap-y-5 bg-gradient-to-r from-[#0F2444] to-[#0F3554] rounded-xl p-5">
                    <div className="w-full h-auto">
                      <p className="text-[#FFFFFF]">{data.title}</p>
                    </div>
                    <div className="w-full h-auto">
                      <p className="text-[#D7D7D7]">{data.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
