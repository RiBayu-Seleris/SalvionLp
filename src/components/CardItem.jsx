import { motion, useTransform, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";
import ProgressiveBlurOverlay from "./ProgressiveBlurOverlay";

function CardItem({
  card,
  index,
  total,
  rotate,
  centerX,
  baseRadius,
  orbitRadius,
}) {
  const baseAngle = (index / total) * Math.PI * 2;

  // 🔥 Gunakan orbit radius untuk X (melebar)
  const radiusX = orbitRadius;

  // 🔥 Gunakan base radius untuk Y (biar tetap nempel lingkaran)
  const radiusY = baseRadius * 0.88;

  const x = useTransform(rotate, (r) => {
    const cos = Math.cos(baseAngle + r);
    const baseX = centerX + cos * radiusX;

    const offset = cos > 0.3 ? 25 + ((cos - 0.3) / 0.7) * -190 : 25;

    return baseX + offset;
  });

  const y = useTransform(rotate, (r) => Math.sin(baseAngle + r) * radiusY);

  const active = useTransform(rotate, (r) => Math.cos(baseAngle + r));

  const scale = useTransform(active, (v) => (v > 0 ? 0.85 + v * 0.25 : 0.85));

  const opacity = useTransform(active, (v) => (v > 0 ? 0.5 + v * 0.5 : 0.5));

  const zIndex = useTransform(active, (v) => Math.round(v * 100 + 100));

  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(active, "change", (v) => {
    const next = v > 0.9;
    setIsActive((prev) => (prev === next ? prev : next));
  });

  return (
    <motion.div
      style={{
        x,
        y,
        scale,
        opacity,
        zIndex,
        position: "absolute",
        left: "50%",
        top: "50%",
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="w-auto h-auto flex flex-row gap-x-5 will-change-transform"
    >
      {/* Dot indicator */}
      <div className="w-auto h-auto flex justify-center items-center">
        <div
          className={clsx(
            "shrink-0 rounded-full bg-[#D9D9D9] transition-all duration-500 shadow-[0_0_22.8px_2px_rgba(130,218,225,0.8)]",
            isActive ? "w-10 h-10 border-[4px] border-[#82DCE2]" : "w-5 h-5",
          )}
        />
      </div>

      {/* Card */}
      <div
        className={clsx(
          "relative w-[460px] h-[180px] rounded-lg flex items-center justify-center transition-all duration-300",
          isActive
            ? "border border-[#82DCE2] bg-[conic-gradient(from_0deg_at_50%_50%,#82DCE2_0deg,#82DCE2_11.92deg,#0D6670_90.84deg,#0D6670_179.32deg,#0D6670_269.98deg,#82DCE2_348.36deg,#82DCE2_360deg)] shadow-[1px_0_7.6px_rgba(130,220,226,0.5)]"
            : "bg-[#0B1F21]",
        )}
      >
        {!isActive && <ProgressiveBlurOverlay />}

        <div className="w-full h-full flex flex-col justify-between items-center bg-[#0B1F21] rounded-lg px-5 py-4">
          <div className="w-full h-auto flex">
            <p className="text-[16px]">{card.title}</p>
          </div>
          <div className="w-full h-auto flex">
            <p className="text-[14px]">{card.description}</p>
          </div>
          <div className="flex w-full justify-between rounded-md flex-row">
            {[
              "Transformer Architecture",
              "Temporal Attention",
              "Multi-Signal Fusion",
            ].map((label, i) => (
              <div key={i} className="flex items-center gap-x-1.5">
                <span className="w-2 h-2 rounded-full shrink-0 bg-[#23DDF6]" />
                <span className="text-[12px] font-medium whitespace-nowrap text-[#23DDF6]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CardItem;
