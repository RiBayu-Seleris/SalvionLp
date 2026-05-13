const PlatformData = [
  { name: "Salvion Smart Scan™" },
  { name: "Vital Signs Monitoring" },
  { name: "Disease Risk Prediction" },
  { name: "Body Composition AI" },
  { name: "SDK & API Platform" },
];

const SolutionsData = [
  { name: "Healthcare & Telemedicine" },
  { name: "Insurance Underwriting" },
  { name: "Corporate Wellness" },
  { name: "Consumer Health Apps" },
];

const TechnologyData = [
  { name: "rPPG + rBCG Signal Fusion" },
  { name: "Transformer Architecture" },
  { name: "On-Device AI Processing" },
  { name: "FHIR / HL7 Compatible" },
];

const CompanyData = [
  { name: "About Salvion AI" },
  { name: "Developer Docs" },
  { name: "Privacy Policy" },
  { name: "Terms of Service" },
  { name: "Contact Sales" },
];

export default function Footer() {
  const columns = [
    { title: "Platform", data: PlatformData },
    { title: "Solutions", data: SolutionsData },
    { title: "Technology", data: TechnologyData },
    { title: "Company", data: CompanyData },
  ];

  return (
    <div className="w-full h-auto flex flex-col gap-y-14">
      <div className="w-full h-auto flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-[25%] h-auto shrink-0 flex flex-col gap-5">
          <div className="w-full h-auto">
            <img
              src="/logo-color.svg"
              alt=""
              className="w-auto h-full object-contain"
            />
          </div>
          <div className="w-full h-auto">
            <p className="text-[#FFFFFF] text-[16px]">
              AI-powered health intelligence from any camera. No wearables
              required
            </p>
          </div>
        </div>

        <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-5">
          {columns.map((col) => (
            <div
              key={col.title}
              className="w-full h-auto flex flex-col gap-y-2 lg:gap-y-5"
            >
              <p className="text-white font-semibold text-[20px]">
                {col.title}
              </p>
              <div className="w-fit h-auto flex flex-col gap-y-3">
                {col.data.map((item) => (
                  <p
                    key={item.name}
                    className="text-[#9ca3af] text-[14px] cursor-pointer hover:text-white transition-colors"
                  >
                    {item.name}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-auto border-t border-[#2d3f55]">
        <p className="text-[#737373] text-sm py-6">
          &copy; 2025 Salvion AI · Powered by Salvion Technologies Pte Ltd
        </p>
      </div>
    </div>
  );
}
