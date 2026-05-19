import LineGrid from "@/assets/temp/company/grid-line.svg";
import Tetris from "@/assets/jsx-frame/applications/Tetris";

const Data = [
  {
    title:
      "Biological signals are the highest-fidelity health data that exists.",
    description:
      "Surveys, self-reports, and periodic examinations are approximations of health state. The body's continuous physiological output is the unfiltered ground truth. Our platform is built to access that ground truth, not approximate it.",
  },
  {
    title:
      "Scale requires simplicity. Power does not require complexity at the interface.",
    description:
      "The signal processing science behind Salvion is genuinely complex. The interface that enterprises and developers experience should not be.",
  },
  {
    title: "Privacy is not a compliance checkbox. It is a design principle.",
    description:
      "We have designed Salvion AI from first principles to extract signal intelligence without retaining individual biometric data. No video is stored. No identity is retained.",
  },
  {
    title:
      "The value of intelligence is in the decisions it enables — not in the data itself.",
    description:
      "We measure our success not by the volume of signals processed, but by the quality of decisions our outputs enable.",
  },
];

export default function Principle() {
  return (
    <div className="w-full h-auto">
      <div className="relative w-full h-auto">
        <div className="relative w-full h-auto flex flex-col gap-y-10 py-20 z-20 px-12">
          <div className="w-fit h-auto">
            <p className="text-[28px] font-[600] text-[#FFFFFF]">
              FIRST PRINCIPLES
            </p>
          </div>
          <div className="w-full h-auto flex flex-col gap-y-12">
            {Data.map((item, i) => (
              <div className="w-[60%] h-auto flex flex-col gap-y-4">
                <div className="w-full h-auto flex flex-row gap-x-4">
                  <div className="w-auto h-auto flex justify-center items-center">
                    <div className="relative w-5 h-5">
                      <div className="absolute inset-0 rounded-full animate-ping opacity-75 bg-[#97F8F9]" />
                      <div className="relative w-5 h-5 rounded-full border-[1px] border-[#137A87] p-1">
                        <div className="w-full h-full rounded-full bg-[#97F8F9]" />
                      </div>
                    </div>
                  </div>
                  <div className="w-auto h-auto flex justify-center items-center">
                    <p className="text-[#FFFFFF] text-[22px]">{item.title}</p>
                  </div>
                </div>
                <div className="w-full h-auto flex flex-row gap-x-4">
                  <div className="w-5 h-auto shrink-0 flex justify-center items-center">
                    <div className="w-[3px] h-full bg-[#97F8F9] rounded-full" />
                  </div>
                  <div className="w-auto h-auto flex justify-center items-center pr-12">
                    <p className="text-[#D7D7D7] text-[18px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="absolute inset-0 w-full h-full z-10"
          style={{
            background:
              "linear-gradient(110deg, #04001C 15%, #055D73 65%, #DCF9FF 100%)",
            backgroundSize: "100% 115%",
            backgroundPosition: "0 10%",
          }}
        >
          <div className="absolute top-0 right-0 w-[70%] h-full">
            <img src={LineGrid} alt="" srcset="" className="w-full h-full" />
          </div>
          <div className="absolute right-0 top-0 w-[70%] h-full transition-all duration-300 ease-in-out z-10 ">
            <Tetris />
          </div>
        </div>
      </div>
    </div>
  );
}
