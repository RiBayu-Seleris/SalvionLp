import Hero from "@/sections/developer/Hero";
import Core from "@/sections/developer/Core";
import Integration from "@/sections/developer/Integration";
import StartBuild from "@/sections/developer/StartBuild";

export default function Developer() {
  return (
    <div className="relative z-10 w-full h-auto flex flex-col items-center justify-center">
      <div className="w-full h-auto pt-[10%] ">
        <Hero />
      </div>
      <div className="w-full h-auto my-20">
        <Core />
      </div>
      <div className="w-full h-auto">
        <Integration />
      </div>
      <div className="w-full h-auto">
        <StartBuild />
      </div>
    </div>
  );
}
