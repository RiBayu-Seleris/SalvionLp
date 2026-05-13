import frameAiSee from "@/assets/temp/frame-face.png";
import WaveLeft from "@/assets/jsx-frame/WaveLeft";
import TextWithBadge from "@/components/TextWithBadge";
import imgBefore from "@/assets/temp/before2.png";
import imgAfter from "@/assets/temp/after2.png";
import AiTrace from "@/components/AiTrace";

export default function AiSee() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute w-fit h-auto bottom-0 -left-1 z-20">
        <WaveLeft />
      </div>
      <div className="absolute w-full h-full top-0 left-0 z-10">
        <img
          src={frameAiSee}
          alt=""
          srcSet=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative w-full h-full z-20">
        <div className="w-full h-full flex flex-row items-center justify-between px-12 gap-x-10 z-40">
          <div className="w-full h-full flex justify-center items-center">
            <div className="relative w-full h-auto flex flex-col gap-y-12 pl-12">
              <TextWithBadge
                text="SMART SCAN TECHNOLOGY"
                caption="Where you see a face, Salvion AI sees a rich real-time stream of physiological data invisible to the human eye."
                captionClass="text-[24px]"
              >
                <div className="w-full h-auto flex flex-col text-[42px] gap-y-2">
                  <div className="w-full h-auto">
                    <h1 className=" font-bold text-white">What You See.</h1>
                  </div>
                  <div className="w-full h-auto">
                    <h1 className="font-bold text-[#23DDF6]">
                      What Our AI Sees.
                    </h1>
                  </div>
                </div>
              </TextWithBadge>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <AiTrace
              beforeSrc={imgBefore}
              afterSrc={imgAfter}
              beforeLabel="Normal View"
              afterLabel="Salvion AI Vision"
              width="460px"
              initialPos={0.5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
