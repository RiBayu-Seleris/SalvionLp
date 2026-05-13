import Hero from "@/sections/insight/Hero";
import Highlight from "@/sections/insight/Highlight";
import EditorPick from "@/sections/insight/EditorPick";
import Blogs from "@/sections/insight/Blogs";
import Subscribe from "@/sections/insight/Subscribe";

export default function Insight() {
  return (
    <div className="relative z-10 w-full h-auto flex flex-col items-center justify-center">
      <div className="w-full h-auto pt-[11%]">
        <Hero />
      </div>
      <div className="w-full h-auto">
        <Highlight />
      </div>
      <div className="w-full h-auto py-20">
        <EditorPick />
      </div>
      <div className="w-full h-auto py-5">
        <Blogs />
      </div>
      <div className="w-full h-auto mt-20">
        <Subscribe />
      </div>
    </div>
  );
}
