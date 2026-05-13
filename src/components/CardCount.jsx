// ✅ Count.jsx
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.55, resetThreshold = 0.55) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const hasBeenVisible = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasBeenVisible.current = true;
          setInView(true);
        } else if (
          hasBeenVisible.current &&
          entry.intersectionRatio < resetThreshold
        ) {
          setInView(false);
          hasBeenVisible.current = false;
        }
      },
      { threshold: [0, resetThreshold, threshold, 1] },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, resetThreshold]);

  return { ref, inView };
}

function useCountUp(target, duration = 3000, delay = 0, start = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) {
      setValue(0);
      return;
    }
    let timeout;
    let raf;
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    timeout = setTimeout(() => {
      if (target === 0) {
        setValue(0);
        return;
      }
      const startTime = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        setValue(Math.round(easeOutCubic(progress) * target));
        if (progress < 1) raf = requestAnimationFrame(tick);
        else setValue(target);
      };
      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [start, target, duration, delay]);

  return value;
}

function StatItem({
  target,
  suffix = "",
  suffixNode,
  label,
  duration = 3000,
  delay = 0,
  start,
  textColor = "text-[#20C9E0]", // ← default fallback
  labelColor = "text-[#D1D5DB]", // ← default fallback
}) {
  const value = useCountUp(target, duration, delay, start);

  return (
    <div className="w-full h-auto flex flex-col justify-between items-center gap-y-1.5">
      <div className="w-full h-auto flex justify-center items-center">
        <p className={`text-[52px] ${textColor}`}>
          {value}
          {suffixNode ?? suffix}
        </p>
      </div>
      <div className="w-full h-auto flex justify-center items-center">
        <p className={`text-[20px] font-[400] ${labelColor}`}>{label}</p>
      </div>
    </div>
  );
}

export default function Count({
  stats = [],
  outerClassName = "",
  innerClassName = "",
  textColor, // ← global, berlaku untuk semua item
  labelColor, // ← global, berlaku untuk semua item
}) {
  const { ref, inView } = useInView(0.55, 0.55);

  return (
    <div
      ref={ref}
      className={`relative z-10 w-full h-auto py-[1px] ${outerClassName}`}
    >
      <div
        className={`w-full h-auto flex flex-row justify-between gap-x-10 items-center px-12 py-4 ${innerClassName}`}
      >
        {stats.map((stat, i) => (
          <StatItem
            key={i}
            target={stat.target}
            suffix={stat.suffix}
            suffixNode={stat.suffixNode}
            label={stat.label}
            delay={stat.delay ?? i * 180}
            start={inView}
            textColor={stat.textColor ?? textColor} // per-item > global > default
            labelColor={stat.labelColor ?? labelColor} // per-item > global > default
          />
        ))}
      </div>
    </div>
  );
}
