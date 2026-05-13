// src/hooks/usePageLoading.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLoading } from "@/contexts/LoadingContext";

export function usePageLoading() {
  const location = useLocation();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, [location.pathname]);
}
