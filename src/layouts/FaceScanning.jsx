import { Outlet, Link, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import navbarBg from "@/assets/navbar-bg.svg";
import Footer from "@/components/Footer";

const FaceScanning = () => {
  const location = useLocation();

  if (location.pathname === "/result") {
    return (
      <main className="relative w-full h-full flex">
        <Outlet />
      </main>
    );
  }

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <div className="absolute w-full mx-auto max-w-[1440px] h-auto z-10 top-0 left-1/2 -translate-x-1/2">
        <img src={navbarBg} alt="" className="w-full h-auto object-contain" />
      </div>
      <Navbar />

      <main className="relative w-full h-full flex">
        <Outlet />
      </main>
    </div>
  );
};
export default FaceScanning;
