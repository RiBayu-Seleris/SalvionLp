import { Outlet, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import navbarBg from "@/assets/navbar-bg.svg";
import Footer from "@/components/Footer";

const MainLayout = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <div className="absolute w-full mx-auto max-w-[1440px] h-auto z-10 top-0 left-1/2 -translate-x-1/2">
        <img src={navbarBg} alt="" className="w-full h-auto object-cover" />
      </div>
      <Navbar />

      <main className="relative w-full flex-1">
        <Outlet />
      </main>

      <div className="relative w-full h-auto mt-20 px-12 bg-gradient-to-b from-[#0B0F1A] to-[#123454] via-[#080F2C] py-10">
        <Footer />
      </div>
    </div>
  );
};
export default MainLayout;
