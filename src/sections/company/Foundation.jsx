const FoundationData = [
  {
    tag: "VISION",
    title:
      "A world where health risk is known before it becomes a health event.",
    description:
      "We exist to close the information gap between the signals the human body continuously generates and the decisions that health, insurance, and organizational systems need to make.",
  },
  {
    tag: "POSITIONING",
    title:
      "The intelligence layer that regulated industries have been waiting for.",
    description:
      "Salvion AI occupies a position that did not previously exist: a scientifically validated, enterprise-deployable, API-first physiological intelligence platform.",
  },
  {
    tag: "PHILOSOPHY",
    title: "Signal integrity before output confidence. Evidence before claim.",
    description:
      "Every design decision in Salvion AI is filtered through a single test: does this make the output more reliable, or merely more impressive?",
  },
];

export default function Foundation() {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto flex flex-row gap-x-16 px-12 items-stretch">
        {FoundationData.map((item, i) => (
          // Buat card flex-col dengan h-full agar mengisi penuh
          <div className="w-full flex flex-col justify-between items-start gap-y-6 h-full">
            <div className="w-fit h-auto flex bg-[#00D0F5]/10 border-[1px] border-[#00D0F5]/30 px-10 py-1.5 rounded-full">
              <p className="text-[14px] text-[#4FE4F8] font-[400]">
                {item.tag}
              </p>
            </div>
            <div className="w-full h-auto flex flex-col gap-y-3">
              <div className="w-full h-auto flex">
                <p className="text-[#E2E2E8] font-[700] text-[20px]">
                  {item.title}
                </p>
              </div>
              <div className="w-full h-auto flex">
                <p className="text-[#B9CBBD] font-[400] text-[16px]">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
