// src/components/ProgressBar.jsx
import { useEffect, useState } from "react";
import { useLoading } from "@/contexts/LoadingContext";

export default function ProgressBar() {
  const { isLoading } = useLoading();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let interval;
    if (isLoading) {
      setVisible(true);
      setProgress(10);
      interval = setInterval(() => {
        setProgress((prev) => (prev < 90 ? prev + 10 : prev));
      }, 200);
    } else {
      setProgress(100);
      setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 400);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "3px",
        width: `${progress}%`,
        backgroundColor: "#6366f1", // ganti sesuai warna tema
        transition: "width 0.2s ease",
        zIndex: 9999,
      }}
    />
  );
}
