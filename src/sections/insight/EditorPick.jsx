import CardImgLeft from "@/components/CardImgLeft";

import Img1 from "@/assets/temp/insight/img1.svg";
import Img2 from "@/assets/temp/insight/img2.svg";
import SalvionIcon from "@/assets/icons/salvion-icon.svg";

const EditorData = [
  {
    id: 1,
    image: Img1,
    tag: "AI · RISK",
    time: "3 min read",
    title:
      "AI and the Future of Risk Assessment: From Actuarial Tables to Physiological Signals",
    author_logo: SalvionIcon,
    author: "Salvion Research Team",
    created_at: "Jan 2026",
  },
  {
    id: 2,
    image: Img2,
    tag: "INSURANCE",
    time: "3 min read",
    title:
      "The Adverse Selection Correction: Objective Biometrics and the End of Information Asymmetry",
    author_logo: SalvionIcon,
    author: "Salvion Research Team",
    created_at: "Feb 2026",
  },
];

export default function EditorPick() {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto flex flex-col gap-y-5 justify-center items-center px-6 lg:px-12">
        <div className="w-full h-auto flex">
          <p className="text-[#FFFFFF] text-[24px] font-[600]">Editor's Pick</p>
        </div>
        <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2 justify-between gap-6">
          {EditorData.map((data, index) => (
            <CardImgLeft
              key={index}
              image={data.image}
              tag={data.tag}
              time={data.time}
              title={data.title}
              author_logo={data.author_logo}
              author={data.author}
              created_at={data.created_at}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
