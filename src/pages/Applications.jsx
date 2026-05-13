import Hero from "@/sections/applications/Hero";
import Insurance from "@/sections/applications/Insurance";
import Workforce from "@/sections/applications/Workforce";
import Clinical from "@/sections/applications/Clinical";
import BuildOn from "@/sections/applications/BuildOn";

export default function Applications() {
  return (
    <div className="relative z-10 w-full h-auto flex flex-col items-center justify-center">
      <div className="w-full h-auto pt-[10%] ">
        <Hero />
      </div>
      <div className="w-full h-auto my-20">
        <Insurance />
      </div>
      <div className="w-full h-auto">
        <Workforce />
      </div>
      <div className="w-full h-auto">
        <Clinical />
      </div>
      <div className="w-full h-auto mt-32">
        <BuildOn />
      </div>
    </div>
  );
}
