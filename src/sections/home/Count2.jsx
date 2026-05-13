// ✅ Page.jsx (atau di mana pun Anda pakai)
import CardCount from "@/components/CardCount.jsx";

const Data = [
  {
    target: 30,
    suffixNode: <span className="text-[36px]">S</span>, // ← JSX khusus, ukuran tetap kecil
    label: "Scan Durations",
  },
  { target: 30, suffix: "+", label: "Health Markers" },
  { target: 0, suffix: "", label: "Hardware Needed" },
  { target: 94, suffix: "%", label: "Signal Confidence" },
  { target: 1, suffix: "X", label: "Scan = Full Report" },
];

export default function Count2() {
  return (
    <>
      <CardCount stats={Data} textColor="text-[#FFFFFF]" />
    </>
  );
}
