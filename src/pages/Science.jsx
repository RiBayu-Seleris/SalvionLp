import Hero from "@/sections/science/Hero";
import Signal from "@/sections/science/Signal";
import Pattern from "@/sections/science/Pattern";
import Continous from "@/sections/science/Continous";

export default function Science() {
  return (
    <div className="relative z-10 w-full h-auto flex flex-col items-center justify-center">
      <div className="w-full h-auto ">
        <Hero />
      </div>
      <div className="w-full h-auto py-20">
        <Signal />
      </div>
      <div className="w-full h-auto my-20">
        <Pattern />
      </div>
      <div className="w-full h-auto mt-10">
        <Continous />
      </div>
    </div>
  );
}
