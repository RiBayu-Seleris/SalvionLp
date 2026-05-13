import { useEffect, useRef } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

export default function useScrollRotate(total, containerRef) {
  const displayProgress = useMotionValue(0);
  const activeIndexMotion = useMotionValue(0);
  const snapTimeout = useRef(null);
  const isSnapping = useRef(false);

  // ✅ Spring jauh lebih responsif — ngejar scroll cepat tanpa overshoot
  const smoothDisplay = useSpring(displayProgress, {
    stiffness: 400,
    damping: 40,
    mass: 0.3,
  });

  const rotate = useTransform(smoothDisplay, [0, 1], [0, Math.PI * 2]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const getScrollState = () => {
      const wrapper = el.parentElement;
      if (!wrapper) return null;

      const wrapperTop = wrapper.getBoundingClientRect().top;
      const wrapperHeight = wrapper.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrolled = -wrapperTop;
      const scrollable = wrapperHeight - viewportHeight;
      if (scrollable <= 0) return null;

      const raw = scrolled / scrollable;
      const clamped = Math.max(0, Math.min(1, raw));
      return { raw, clamped };
    };

    const getActiveIndex = (clamped) => {
      let bestIndex = 0;
      let bestDist = Infinity;
      for (let i = 0; i < total; i++) {
        const target = i === 0 ? 0 : 1 - i / total;
        let dist = Math.abs(clamped - target);
        if (dist > 0.5) dist = 1 - dist;
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = i;
        }
      }
      return bestIndex;
    };

    const handleScroll = () => {
      if (isSnapping.current) return;

      const state = getScrollState();
      if (!state) return;
      const { raw, clamped } = state;

      if (raw <= 0) {
        displayProgress.set(0);
        activeIndexMotion.set(0);
        return;
      }
      if (raw >= 1) {
        displayProgress.set(1);
        activeIndexMotion.set(total - 1);
        return;
      }

      displayProgress.set(clamped);
      activeIndexMotion.set(getActiveIndex(clamped));

      clearTimeout(snapTimeout.current);
      snapTimeout.current = setTimeout(() => {
        const state = getScrollState();
        if (!state) return;
        if (state.raw < 0 || state.raw > 1) return;

        const bestIndex = getActiveIndex(state.clamped);
        const snapTarget = bestIndex === 0 ? 0 : 1 - bestIndex / total;

        isSnapping.current = true;
        displayProgress.set(Math.max(0, Math.min(1, snapTarget)));
        activeIndexMotion.set(bestIndex);

        setTimeout(() => {
          isSnapping.current = false;
        }, 400); // ✅ Lebih cepat dari sebelumnya (600 → 400)
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(snapTimeout.current);
    };
  }, [containerRef, total]);

  return { rotate, activeIndexMotion };
}
