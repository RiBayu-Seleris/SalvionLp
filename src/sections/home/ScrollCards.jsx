import CardItem from "@/components/CardItem";
import { useEffect, useRef, useState } from "react";
import useScrollRotate from "@/hooks/useScrollRotate";
import useBreakpointValue from "@/hooks/useBreakpointValue";
import layers from "@/assets/layers.svg";
import { motion, AnimatePresence } from "framer-motion";
import TextNoBadge from "@/components/TextNoBadge";
import DeepFullCircle from "@/assets/jsx-frame/DeepFullCircle";
import useSvgRadius from "@/hooks/useSvgRadius";

const cards = [
  {
    title: "Salvion Multimodal Engine (SME) (Awal)",
    description:
      "SME adalah inti dari platform Salvion yang menggabungkan berbagai teknologi AI untuk memberikan solusi cerdas dan terintegrasi bagi bisnis Anda.",
  },
  {
    title: "Salvion Data Insights (SDI)",
    description:
      "SDI adalah alat analitik canggih yang memanfaatkan AI untuk memberikan wawasan mendalam tentang data bisnis Anda, membantu Anda membuat keputusan yang lebih baik.",
  },
  {
    title: "Salvion Customer Engagement (SCE)",
    description:
      "SCE adalah solusi AI yang dirancang untuk meningkatkan interaksi dengan pelanggan melalui chatbot pintar, personalisasi, dan otomatisasi layanan pelanggan.",
  },
  {
    title: "Salvion Process Automation (SPA)",
    description:
      "SPA adalah platform otomatisasi proses bisnis yang menggunakan AI untuk mengoptimalkan alur kerja, meningkatkan efisiensi, dan mengurangi biaya operasional.",
  },
  {
    title: "Salvion Predictive Analytics (SPA)",
    description:
      "SPA adalah alat analitik prediktif yang memanfaatkan AI untuk memproyeksikan tren masa depan, membantu bisnis Anda merencanakan strategi yang lebih efektif.",
  },
  {
    title: "Salvion AI Integration (SAI) (akhir)",
    description:
      "SAI adalah layanan integrasi AI yang memungkinkan bisnis Anda menggabungkan teknologi AI ke dalam sistem yang sudah ada, mempercepat transformasi digital Anda.",
  },
];

const BREAKPOINTS = {
  base: { centerX: 0, radius: 200 },
  md: { centerX: 0, radius: 280 },
  lg: { centerX: 0, radius: 100 },
  xl: { centerX: 0, radius: 390 }, // r SVG
};

function ScrollCards() {
  const containerRef = useRef(null);
  const scrollHeight = "200vh";
  const [activeIndex, setActiveIndex] = useState(0);

  // const rotate = useScrollRotate(cards.length, containerRef);
  const radius = useBreakpointValue(BREAKPOINTS); // ✅ referensi stabil

  const { rotate, activeIndexMotion } = useScrollRotate(
    cards.length,
    containerRef,
  );

  const svgRef = useRef(null);
  const { base, orbit } = useSvgRadius(svgRef);

  // ✅ ScrollCards.jsx
  useEffect(() => {
    const unsubscribe = activeIndexMotion.on("change", (v) => {
      setActiveIndex(Math.round(v));
    });
    return () => unsubscribe();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="relative w-full h-auto flex flex-col gap-y-32">
      <TextNoBadge
        text="DEEP TECHNOLOGY"
        title="The Engine"
        subtitle="Behind Every Scan"
        textColor1="#23DDF6"
        textColor2="white"
        caption="Built on a foundation of proprietary computer vision algorithms and massive, diverse datasets"
      />
      <div style={{ height: scrollHeight }} className="relative w-full">
        <div
          ref={containerRef}
          className="sticky top-0 w-full h-screen flex flex-row
                   items-center justify-between text-white overflow-hidden"
        >
          {/* Kiri: wheel cards */}
          <div className="relative w-[55%] shrink-0 h-screen ">
            {/* Container SVG + orbit, posisi absolut di tengah */}
            <div className="absolute w-auto h-full top-[0%] -left-[68%] py-16">
              {/* SVG */}
              <div ref={svgRef} className="w-auto h-full">
                <DeepFullCircle />
              </div>
            </div>
            {/* Anchor tepat di pusat SVG: 800*(393/786) ≈ 400, 800*(396/792) ≈ 400 */}
            <div className="absolute top-[50%] left-[0%]">
              {cards.map((card, index) => (
                <CardItem
                  key={index}
                  card={card}
                  index={index}
                  total={cards.length}
                  rotate={rotate}
                  centerX={0}
                  baseRadius={base}
                  orbitRadius={orbit}
                />
              ))}
            </div>
          </div>
          {/* Kanan: description — harus di dalam sticky agar tidak ikut scroll */}
          <div className="w-full h-full flex items-center justify-center overflow-hidden ">
            <img src={layers} alt="" className="w-full h-full object-cover" />
            {/* <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="max-w-md"
              >
                <p className="text-xs uppercase tracking-widest opacity-50 mb-3">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(cards.length).padStart(2, "0")}
                </p>
                <h2 className="text-2xl font-semibold mb-4">
                  {cards[activeIndex]?.title}
                </h2>
                <p className="text-base opacity-70 leading-relaxed">
                  {cards[activeIndex]?.description}
                </p>
              </motion.div>
            </AnimatePresence> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScrollCards;
