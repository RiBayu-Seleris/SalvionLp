import {
  motion,
  useScroll,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import userPlus from "@/assets/icons/user-plus.svg";
import userMirror from "@/assets/icons/user-mirror.svg";
import signal from "@/assets/icons/signal.svg";
import circleOne from "@/assets/circle-one.svg";

export default function WavePathScroll() {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });

  const [pathLength, setPathLength] = useState(0);
  const [positions, setPositions] = useState(null); // null = belum siap

  const items = [
    {
      id: 1,
      icon: userPlus,
      title: "Face Positioning & Environment Calibration",
      description:
        "AI-guided framing ensures optimal face alignment and lighting. Environmental Quality Score (EQS) computed in real time. Liveness Detection activates simultaneously.",
    },
    {
      id: 2,
      icon: userMirror,
      title: "Real-Time Video Capture 20-30 Seconds",
      description:
        "Contactless video acquisition across 6 active facial ROI zones: forehead, cheeks, periocular left/right, and nose bridge for maximum signal richness.",
    },
    {
      id: 3,
      icon: signal,
      title: "Signal Stabilization & Anti-Noise AI",
      description:
        "Illumination normalization, motion artifact removal, and temporal consistency validation. Frames below quality threshold are excluded automatically.",
    },
    {
      id: 4,
      icon: userPlus,
      title: "Multimodal Biosignal Extraction",
      description:
        "Transformer AI simultaneously extracts rPPG (blood flow), rBCG (cardiac micro-movement), and 3D facial mesh data into a 512-dim unified health feature vector.",
    },
    {
      id: 5,
      icon: userPlus,
      title: "Health Scoring & Risk Classification",
      description:
        "30+ parameters computed, risk tiers classified (Low/Medium/High), Salvion Health Score generated, and personalized recommendations delivered instantly.",
    },
  ];

  // Helper: hitung posisi berdasarkan progress value
  const calcPositions = (p, pLength) => {
    if (!pathRef.current || pLength === 0) return null;

    const svg = pathRef.current.ownerSVGElement;
    const ctm = pathRef.current.getScreenCTM();
    const container = sectionRef.current?.querySelector(".relative");
    if (!container) return null;

    const containerRect = container.getBoundingClientRect();

    // Berapa item yang tampil sekaligus di layar
    const visibleCount = 3;
    // Index item "aktif" di tengah berdasarkan scroll
    const activeIndex = p * (items.length - 1);

    return items.map((_, i) => {
      // Posisi relatif item ini terhadap item aktif (-1 = kiri, 0 = tengah, 1 = kanan, dst)
      const offset = i - activeIndex;

      // Hanya tampilkan item yang dalam jangkauan visibleCount
      const halfVisible = (visibleCount - 1) / 2; // = 1

      // Mapping offset ke posisi di path (0 = kiri, 0.5 = tengah, 1 = kanan)
      //   const pathT = 0.5 + offset / visibleCount;
      const pathT = 0.5 + offset / 3.3;
      const clamped = Math.max(0, Math.min(1, pathT));
      const len = clamped * pLength;

      const point = pathRef.current.getPointAtLength(len);
      const svgPoint = svg.createSVGPoint();
      svgPoint.x = point.x;
      svgPoint.y = point.y;
      const screenPoint = svgPoint.matrixTransform(ctm);

      // Fade berdasarkan jarak dari center
      const dist = Math.abs(offset);
      let opacity = 1;
      if (dist > halfVisible)
        opacity = Math.max(0, 1 - (dist - halfVisible) / 0.5);

      return {
        x: screenPoint.x - containerRect.left,
        y: screenPoint.y - containerRect.top,
        opacity,
      };
    });
  };

  // Setelah path siap, langsung hitung posisi awal dari current scroll value
  useEffect(() => {
    if (pathRef.current) {
      const pLength = pathRef.current.getTotalLength();
      setPathLength(pLength);

      // Hitung posisi awal dari nilai scroll saat ini (bukan 0)
      const initialP = smoothProgress.get();
      const initialPositions = calcPositions(initialP, pLength);
      if (initialPositions) setPositions(initialPositions);
    }
  }, []);

  useMotionValueEvent(smoothProgress, "change", (p) => {
    if (!pathRef.current || pathLength === 0) return;
    const newPositions = calcPositions(p, pathLength);
    if (newPositions) setPositions(newPositions);
  });

  return (
    <section
      ref={sectionRef}
      style={{ height: `${items.length * 100}vh` }}
      className="relative w-full h-auto flex flex-col"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute w-auto h-auto -right-[15%] top-0">
          <img src={circleOne} alt="" srcSet="" className="w-auto h-auto" />
        </div>
        <div className="absolute top-[15%] w-full h-auto flex flex-col items-center font-inter">
          <div className="w-full h-auto flex justify-center items-center">
            <p className="text-[#23DDF6] font-[600]">HOW IT WORKS</p>
          </div>
          <div className="w-full h-auto flex justify-center items-center">
            <p className="text-[42px] font-[600] text-[#FFFFFF]">
              From Face to Full{" "}
              <span className="text-[#23DDF6]">Health Report</span> in 30
              Seconds
            </p>
          </div>
          <div className="w-full h-auto flex justify-center items-center">
            <p className="text-[#FFFFFF]">
              From Face to Full Health Report in 30 Seconds
            </p>
          </div>
        </div>
        <div className="relative w-full h-full ">
          {/* SVG PATH */}
          <svg
            // width="1512"
            // height="59"
            viewBox="0 0 1512 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-[40%] left-0 w-full"
          >
            <path
              ref={pathRef}
              d="M-36 57.7048L198.692 8.11206C264.564 -5.80747 333.896 1.63231 395.514 28.7664C473.256 63.0017 563.422 64.6483 642.361 33.2689C716.957 3.6158 801.028 3.49153 875.452 33.5744C953.191 64.9974 1040.31 63.8071 1117.16 30.2719L1121.61 28.3306C1183.64 1.26309 1252.59 -5.67184 1318.77 8.5019L1548.5 57.7048"
              stroke="url(#paint0_linear_588_2858)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_588_2858"
                x1="-36"
                y1="34.7048"
                x2="1548.5"
                y2="34.7048"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0B0F1A" />
                <stop offset="0.5" stopColor="#138EBA" />
                <stop offset="1" stopColor="#0B0F1A" />
              </linearGradient>
            </defs>
          </svg>

          {/* ITEMS — hanya render kalau posisi sudah siap */}
          {positions &&
            items.map((item, i) => {
              const pos = positions[i];
              if (!pos) return null;

              return (
                <motion.div
                  key={i}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    x: pos.x,
                    y: pos.y,
                    opacity: pos.opacity,
                    translateX: "-50%",
                    translateY: "-37%", // ← anchor dari bawah card
                  }}
                  className="w-[400px] flex flex-col justify-center items-center gap-y-8"
                >
                  {/* Circle ini yang "menempel" ke path — harus selalu di bawah */}
                  <div className="w-full h-auto flex flex-col justify-center items-center gap-y-10">
                    <div className="w-16 h-16 flex justify-center items-center border-[1px] border-[#9AEFFB] bg-gradient-to-br from-[#032428] to-[#0B0F1A] shadow-[0_0_19.5px_rgba(20,137,181,0.4)] rounded-xl">
                      <img src={item.icon} alt="" srcSet="" />
                    </div>
                    <div className="w-10 h-10 flex justify-center items-center border border-[#6CE8F9] bg-[#1C6A72] rounded-full">
                      <p className="text-[#FFFFFF] font-[600]">{item.id}</p>
                    </div>
                  </div>
                  <div className="w-full h-auto flex flex-col gap-y-5">
                    <div className="w-full h-auto flex justify-center items-center">
                      <p className="text-[#FFFFFF] text-[24px] text-center px-10">
                        {item.title}
                      </p>
                    </div>
                    <div className="w-full h-auto flex justify-center items-center ">
                      <p className="text-[#D7D7D7] text-[14px] text-center">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
