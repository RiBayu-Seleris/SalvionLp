import ScrollCards from "@/sections/home/ScrollCards";
import Hero from "@/sections/home/Hero";
import Count from "@/sections/home/Count";
import Works from "@/sections/home/Works";
import AiSee from "@/sections/home/AiSee";
import Description from "@/sections/home/Description";
import Features from "@/sections/home/Features";
import Actionable from "@/sections/home/Actionable";
import Touchpoint from "@/sections/home/Touchpoint";
import ProductSDK from "@/sections/home/ProductSDK";
import Enterprise from "@/sections/home/Enterprise";
import RegulationRoadmap from "@/sections/home/RegulationRoadmap";
import PrivacyArchitecture from "@/sections/home/PrivacyArchitecture";
import Further from "@/sections/home/Further";
import Count2 from "@/sections/home/Count2";

import circleOne from "@/assets/circle-one.svg";
import SmartScan from "@/sections/home/SmartScan";
import Preventive from "@/sections/home/Preventive";
import RequestDemo from "@/sections/home/RequestDemo";
import Ready from "@/sections/home/Ready";

function Home() {
  return (
    <div className="relative z-10 w-full h-auto flex flex-col items-center justify-center">
      <div className="w-full h-screen pt-[11%] ">
        <Hero />
      </div>
      <div className="w-full h-auto py-14">
        <Count />
      </div>
      <div className="w-full h-auto">
        <Works />
      </div>
      <div className="w-full h-auto">
        <AiSee />
      </div>
      <div className="w-full h-auto py-20 overflow-x-hidden">
        <Description />
      </div>
      <div className="w-full h-auto">
        <Features />
      </div>
      <div className="w-full h-auto">
        <Actionable />
      </div>
      <div className="relative w-full h-auto my-14">
        <div className="absolute w-auto h-auto -right-[0%] -top-[2%]">
          <img src={circleOne} alt="" srcSet="" />
        </div>
        <ScrollCards />
      </div>
      <div className="w-full h-auto">
        <Touchpoint />
      </div>
      <div className="w-full h-auto my-20">
        <ProductSDK />
      </div>
      <div className="w-full h-auto">
        <Enterprise />
      </div>
      <div className="w-full h-auto my-20">
        <RegulationRoadmap />
      </div>
      <div className="w-full h-auto my-20">
        <PrivacyArchitecture />
      </div>
      <div className="w-full h-auto my-20">
        <Further />
      </div>
      <div className="w-full h-auto my-20">
        <SmartScan />
      </div>
      <div className="w-full h-auto mt-10 mb-20">
        <Count2 />
      </div>
      <div className="w-full h-auto">
        <Preventive />
      </div>
      <div className="w-full h-auto my-20">
        <RequestDemo />
      </div>
      <div className="w-full h-auto mt-10">
        <Ready />
      </div>
    </div>
  );
}

export default Home;
