// src/hooks/useNavigateWithLoading.js
import { useNavigate } from "react-router-dom";
import { useLoading } from "@/contexts/LoadingContext";

export function useNavigateWithLoading() {
  const navigate = useNavigate();
  const { setIsLoading } = useLoading();

  const navigateTo = (path) => {
    setIsLoading(true); // loading muncul SEBELUM pindah halaman
    setTimeout(() => {
      navigate(path);
      setTimeout(() => setIsLoading(false), 3000);
    }, 50); // jeda kecil agar fade in sempat render
  };

  return navigateTo;
}
