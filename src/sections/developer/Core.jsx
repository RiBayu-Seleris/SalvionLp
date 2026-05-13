import FrameEndpoint from "@/assets/temp/developer/frame-core.png";
import TextWithBadge from "@/components/TextWithBadge";
import CodeEndpoints from "@/components/CodeEndpoints";
import PythonRequestCard from "@/components/PythonRequestCard";

export default function Core() {
  return (
    <div className="w-full h-auto bg-red-800/20">
      <div className="relative w-full h-auto">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={FrameEndpoint}
            alt=""
            srcset=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative w-full h-auto py-20 overflow-hidden">
          <div className="relative w-full h-full flex flex-row justify-between pl-12">
            <div className="relative w-[50%] h-full shrink-0 flex flex-col justify-center gap-y-5">
              <TextWithBadge
                text="QUICK START"
                caption="The Salvion API uses standard HTTP/REST conventions with JSON request and response bodies. Authentication is via bearer token."
              >
                <div className="w-full h-auto flex flex-col text-[42px] gap-y-2">
                  <div className="w-full h-auto">
                    <h1 className=" font-bold text-white">From key to</h1>
                  </div>
                  <div className="w-full h-auto">
                    <h1 className="font-bold text-[#FFFFFF]">
                      <span className="text-[#4FE4F8]">first insight</span> in
                      minutes.
                    </h1>
                  </div>
                </div>
              </TextWithBadge>
              <div className="w-full h-auto flex flex-col gap-y-14">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div className="w-full h-auto flex flex-col gap-y-5">
                    <div className="w-full h-auto flex flex-row gap-x-4">
                      <div className="w-auto h-auto flex justify-center items-center">
                        <div className="relative w-8 h-8 flex justify-center items-center bg-[#00D0F5]/10 border-[2px] border-[#00D0F5]/20 rounded-lg">
                          <p className="text-[#00F1F5] font-[700]">{i + 1}</p>
                        </div>
                      </div>
                      <div className="w-auto h-auto flex justify-center items-center">
                        <p className="text-[#FFFFFF] text-[18px]">
                          Non-Invasive Early Screening
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-auto flex flex-row gap-x-4">
                      <div className="w-8 h-16 shrink-0 flex justify-center items-center">
                        <div className="w-[2px] h-full bg-[#97F8F9] rounded-full" />
                      </div>
                      <div className="w-auto h-auto flex justify-center items-center pr-12">
                        <p className="text-[#D7D7D7] text-[16px]">
                          Scalable physiological screening deployable across any
                          device. Identify risk populations for clinical
                          follow-up.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-auto flex justify-end items-start">
              <div className="w-full h-auto flex flex-col justify-between items-end gap-y-10">
                <div className="w-full h-auto relative -right-[15%]">
                  <CodeEndpoints />
                </div>
                <div className="w-full h-auto relative right-[5%]">
                  <PythonRequestCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
