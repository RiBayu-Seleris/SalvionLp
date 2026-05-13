import TextWithBadgeCenter from "@/components/TextWithBadgeCenter";
import CenterCircle from "@/assets/jsx-frame/science/CenterCircle";
import AtomIcon from "@/assets/icons/science/atom-icon.svg";
import Head from "@/assets/icons/science/head.svg";
import Camera from "@/assets/icons/science/camera.svg";
import Tetris from "@/assets/jsx-frame/applications/Tetris";

const cardData = [
  {
    icon: Head,
    description:
      "At the physical layer, Salvion AI exploits a phenomenon first observed in the 1970s: the surface of human skin reflects ambient light differently as blood volume changes with each cardiac cycle. These micro-reflectance variations encode rich cardiovascular information that can be decoded from standard video",
  },
  {
    icon: Camera,
    description:
      "Remote photoplethysmography (rPPG) is the computational method for extracting this information. Salvion's Signal Acquisition Layer implements a proprietary multi-channel rPPG algorithm that operates across variable lighting conditions, skin tones, and camera hardware.",
  },
];

const DOT_STYLE =
  "rounded-full bg-[#61D3CD] border border-[#61D3CD] shadow-[inset_-1px_-4px_4px_0_rgba(0,0,0,0.25),1px_0px_5.8px_0_rgba(97,211,205,0.7)]";
const LINE_STYLE = "flex-1 h-[2px] bg-[#61D3CD] self-center";
const CARD_STYLE =
  "relative w-[65%] shrink-0 bg-gradient-to-b from-[#07272C] to-[#0B0F1A] border border-[#6CE8F9] p-6 rounded-xl";
const ICON_WRAP =
  "w-14 h-14 flex justify-center items-center bg-gradient-to-b from-[#032428] to-[#0B0F1A] border border-[#92E7FC] rounded-xl p-2";

function Connector({ smallLeft = true }) {
  return (
    <div className="flex flex-row items-center w-full h-auto">
      <div className={`${smallLeft ? "w-3 h-3" : "w-5 h-5"} ${DOT_STYLE}`} />
      <div className={LINE_STYLE} />
      <div className={`${smallLeft ? "w-5 h-5" : "w-3 h-3"} ${DOT_STYLE}`} />
    </div>
  );
}

function Card({ icon, text }) {
  return (
    <div className={CARD_STYLE}>
      <div className="absolute inset-0 z-10">
        <Tetris />
      </div>
      <div className="relative z-20 flex flex-col gap-y-10">
        <div className={ICON_WRAP}>
          <img src={icon} alt="" className="w-full h-full" />
        </div>
        <p className="text-[18px] text-[#D7D7D7] font-[400]">{text}</p>
      </div>
    </div>
  );
}

export default function Signal() {
  return (
    <div className="w-full h-auto">
      <div className="relative w-full h-auto flex flex-col gap-y-16">
        <TextWithBadgeCenter
          text="SIGNAL SCIENCE"
          caption="Our system extracts blood flow signals from camera pixels in real-time with high accuracy."
          captionClass="max-w-5xl mx-auto text-[22px] leading-relaxed"
        >
          <h1 className="font-bold text-[#FFFFFF]">
            Visual Signal <span className="text-[#4FE4F8]">Processing.</span>
          </h1>
        </TextWithBadgeCenter>

        <div className="relative w-full h-auto px-12">
          <div className="relative w-full h-full flex flex-row gap-x-20">
            {/* Card Left */}
            <div className="w-full h-full flex justify-start items-start">
              <div className="w-full h-auto flex flex-row gap-x-4">
                <Card icon={cardData[0].icon} text={cardData[0].description} />
                <div className="w-full flex items-start pt-24 pr-[10.5%]">
                  <Connector smallLeft={true} />
                </div>
              </div>
            </div>

            {/* Card Right */}
            <div className="w-full h-full flex justify-end items-end mt-[18%]">
              <div className="w-full h-auto flex flex-row gap-x-4">
                <div className="w-full flex items-start pt-[23%] pl-[10.5%]">
                  <Connector smallLeft={false} />
                </div>
                <Card icon={cardData[1].icon} text={cardData[1].description} />
              </div>
            </div>

            {/* Center circle + orbiting dots */}
            <div className="absolute h-[500px] inset-0 flex items-center justify-center">
              <div className="relative w-full h-full p-16">
                <CenterCircle />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <img
                    src={AtomIcon}
                    alt=""
                    className="w-auto h-auto object-cover"
                  />
                </div>
                <div className="absolute inset-0 [transform-origin:center_center] [animation:orbitSpin_5s_linear_infinite]">
                  <div
                    className={`absolute w-5 h-5 top-[95px] left-[calc(50%-12px)] ${DOT_STYLE}`}
                  />
                </div>
                <div className="absolute inset-0 [transform-origin:center_center] [animation:orbitSpin_5s_linear_infinite_-2.5s]">
                  <div
                    className={`absolute w-5 h-5 top-[125px] left-[calc(50%-12px)] ${DOT_STYLE}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
