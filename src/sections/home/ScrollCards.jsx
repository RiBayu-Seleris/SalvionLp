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
    title: "Salvion Multimodal Engine (SME)",
    description:
      "SME is the core intelligence engine of the Salvion platform, combining multiple AI technologies to deliver smart, adaptive, and integrated business solutions.",
  },
  {
    title: "Salvion Data Insights (SDI)",
    description:
      "SDI is an AI-powered analytics solution that transforms complex business data into actionable insights, enabling faster and more informed decision-making.",
  },
  {
    title: "Salvion Customer Engagement (SCE)",
    description:
      "SCE is an intelligent customer engagement solution designed to improve interactions through AI chatbots, personalized experiences, and automated customer support.",
  },
  {
    title: "Salvion Process Automation (SPA)",
    description:
      "SPA is an AI-driven automation platform that streamlines business workflows, increases operational efficiency, and reduces manual processes and costs.",
  },
  {
    title: "Salvion Predictive Analytics (SPA)",
    description:
      "SPA is a predictive analytics solution that uses AI and data modeling to forecast trends, identify opportunities, and support strategic business planning.",
  },
  {
    title: "Salvion AI Integration (SAI)",
    description:
      "SAI is an AI integration service that helps businesses seamlessly implement and connect AI technologies with existing systems to accelerate digital transformation.",
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
