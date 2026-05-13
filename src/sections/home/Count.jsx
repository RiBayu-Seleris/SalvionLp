// ✅ Page.jsx (atau di mana pun Anda pakai)
import CardCount from "@/components/CardCount.jsx";

const Data = [
  { target: 30, suffix: "+", label: "Health Markers" },
  {
    target: 30,
    suffixNode: <span className="text-[26px]">Second</span>, // ← JSX khusus, ukuran tetap kecil
    label: "Time per Scan",
  },
  { target: 94, suffix: "%", label: "Signal Confidence" },
  { target: 0, suffix: "", label: "Hardware Required" },
];

export default function Count() {
  return (
    <>
      <CardCount
        stats={Data}
        outerClassName="bg-gradient-to-r from-[#0B0F1A] via-[#138EBA] to-[#0B0F1A]"
        innerClassName="bg-gradient-to-r from-[#0B0F1A] via-[#072136] to-[#0B0F1A]"
        textColor="text-[#20C9E0]"
      />
    </>
  );
}
