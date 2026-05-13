import { useState, useEffect } from "react";

export default function useBreakpointValue(values) {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;

      if (w >= 1440 && values.lg) return setValue(values.xl);
      if (w >= 1024 && values.lg) return setValue(values.lg);
      if (w >= 768 && values.md) return setValue(values.md);
      if (w >= 640 && values.sm) return setValue(values.sm);
      return setValue(values.base);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [values]);

  return value;
}
