import Hero from "@/sections/company/Hero";
import Tag from "@/sections/company/Tag";
import Quotes from "@/sections/company/Quotes";
import Foundation from "@/sections/company/Foundation";
import Principle from "@/sections/company/Principle";
import IntelligenceEra from "../sections/company/IntelligenceEra";

export default function Company() {
  return (
    <div className="relative z-0 w-full h-auto flex flex-col items-center justify-center">
      <div className="w-full h-auto">
        <Hero />
      </div>
      <div className="w-full h-auto">
        <Tag />
      </div>
      <div className="w-full h-auto py-24">
        <Quotes />
      </div>
      <div className="w-full h-auto py-24">
        <Foundation />
      </div>
      <div className="w-full h-auto py-24">
        <Principle />
      </div>
      <div className="w-full h-auto pt-20">
        <IntelligenceEra />
      </div>
    </div>
  );
}
