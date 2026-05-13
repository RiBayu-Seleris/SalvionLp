// import WaveArchitecture from "@/assets/jsx-frame/WaveArchitecture";
// import WaveArchitecture from "@/assets/jsx-frame/WaveArchitecture2";
import WaveArchitecture from "@/assets/jsx-frame/WaveArchitectureNoAnimate";

const PrivacyData = [
  {
    id: 1,
    title: "On-Device",
    description:
      "100% local inference. Raw video stays on device. Minimum latency. Full offline capability.",
  },
  {
    id: 2,
    title: "Hybrid Mode",
    description:
      "Edge preprocessing + optional cloud inference for enterprise analytics. Configurable.",
  },
  {
    id: 3,
    title: "Federated Learning",
    description:
      "Model improvement across distributed deployments without centralizing user data. Gradient updates only.",
  },
];

export default function PrivacyArchitecture() {
  return (
    <div className="relative w-full h-auto flex flex-col gap-y-10 px-12">
      <div className="w-full h-auto flex justify-center items-center">
        <div className="w-fit h-auto px-8 py-3 rounded-full border-[1px] border-[#096D7C] bg-[#021D21]">
          <p className="text-[#4FE4F8] font-[400] text-[14px]">
            Privacy Architecture — Processing Modes
          </p>
        </div>
      </div>
      <div className="w-full h-full relative">
        <div className="absolute inset-0 left-0 top-0">
          <WaveArchitecture />
        </div>
        <div className="relative w-full h-auto grid grid-cols-3 gap-x-14 pt-[5.5%] px-14 items-stretch">
          {PrivacyData.map((data, index) => (
            <div
              key={index}
              className="w-full flex flex-col gap-y-16 justify-center items-center"
            >
              <div className="w-full h-auto flex justify-center items-center ">
                <p className="text-[#FFFFFF] font-[600] text-[32px]">
                  {data.title}
                </p>
              </div>
              <div className="w-full flex-1 flex justify-center items-center bg-[#1B1D23] border-[1px] border-[#2A2C33] p-5 rounded-md">
                <p className="text-[#8E98A8] font-[400] text-[16px]">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
