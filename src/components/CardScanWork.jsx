import Graphdot from "@/assets/icons/scanning/graphdot.jsx";

export default function CardScanWork() {
  return (
    <div className="w-full h-auto flex flex-row bg-gradient-to-r from-[#0D2224] to-[#07383E] border-[1px] border-[#82DCE2] shadow-[0_1px_17.2px_rgba(130,220,226,0.6)]">
      <div className="w-10 h-10 shrink-0 flex justify-center items-center bg-[#083339] border-[1px] border-[#199DAF]">
        <img src={Graphdot} alt="" srcset="" className="w-full h-full" />
      </div>
      <div className="w-full h-auto"></div>
    </div>
  );
}
