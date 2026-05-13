import { useEffect, useState } from "react";

export default function useSvgRadius(svgContainerRef) {
  const [radius, setRadius] = useState({
    base: 390,
    orbit: 390,
  });

  useEffect(() => {
    const el = svgContainerRef.current;
    if (!el) return;

    const getMultiplier = () => {
      const w = window.innerWidth;

      if (w >= 1536) return 1.2; // ❗ jangan terlalu besar
      if (w >= 1280) return 1.68;
      if (w >= 1024) return 1.1;
      if (w >= 768) return 1.05;
      return 1;
    };

    const update = () => {
      const rect = el.getBoundingClientRect();

      const scale = Math.min(rect.width, rect.height) / 786;

      const baseRadius = 390 * scale;
      const orbitRadius = baseRadius * getMultiplier();

      setRadius({
        base: baseRadius,
        orbit: orbitRadius,
      });
    };

    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return radius;
}
