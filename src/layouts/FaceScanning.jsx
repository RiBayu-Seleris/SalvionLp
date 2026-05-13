import { Outlet, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import navbarBg from "@/assets/navbar-bg.svg";
import Footer from "@/components/Footer";

const FaceScanning = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <div className="absolute w-full h-auto z-10 top-0 left-0">
        <img src={navbarBg} alt="" className="w-full h-auto object-cover" />
      </div>
      <Navbar />

      <main className="relative w-full flex-1">
        <Outlet />
      </main>
    </div>
  );
};
export default FaceScanning;
