import LineForm from "@/assets/jsx-frame/LineForm";
import InputForm from "@/components/InputForm";
import { useState } from "react";

import CardIconLeft from "@/components/CardIconLeft";
import GraphDot from "@/assets/icons/applications/graph-dot.svg";
import GraphUp from "@/assets/icons/applications/graph-up.svg";
import hexagon from "@/assets/icons/applications/hexagon.svg";
import Hands from "@/assets/temp/book-demo/hands2.svg";
// import Hands from "@/assets/temp/book-demo/hands3.png";

const cardData = [
  {
    id: 1,
    icon: GraphDot,
    title: "Real-time Signal Extraction",
    description:
      "Capture robust physiological data within seconds using standard optics. No specialized hardware required.",
    bgIcon: "#0A4850",
  },
  {
    id: 2,
    icon: GraphUp,
    title: "Enterprise-Grade Security",
    description:
      "Designed with deeply integrated privacy controls. On-device processing ensures minimal data exposure.",
    bgIcon: "#0A4850",
  },
  {
    id: 3,
    icon: hexagon,
    title: "Scale Globally",
    description:
      "Deploy instantly across iOS, Android, and Web platforms via our rigorously documented SDKs and APIs.",
    bgIcon: "#0A4850",
  },
];

const initialFormData = {
  fullname: "",
  workemail: "",
  company: "",
  industry: "",
  description: "",
};

export default function BookDemo() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);

  const goToStep2 = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const goBack = () => setStep(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const buildPayload = () => ({
    ...formData,
    timestamp: new Date().toISOString(),
  });

  const handleSubmit = async () => {
    const payload = buildPayload();
    try {
      console.log("Submitting demo request with payload:", payload);
    } catch (error) {
      console.error("Error submitting demo request:", error);
    }
  };

  return (
    <div className="w-full h-auto pt-[11%]">
      <div className="relative w-full h-auto bg-gradient-to-r from-[#04001C] from-[16%] to-[#3CD0FF] overflow-hidden">
        {/* LineForm sebagai background decoration — absolute, tidak mempengaruhi tinggi */}
        <div className="absolute inset-0 z-10 py-20 pointer-events-none">
          <LineForm />
        </div>

        {/* Main content — normal flow, tinggi ditentukan oleh konten */}
        <div className="relative z-20 flex flex-row gap-x-20 justify-between px-12 py-0">
          {/* LEFT — Hero + Cards */}
          <div className="w-full flex flex-col justify-center gap-y-12 py-24">
            <div className="w-fit flex flex-row gap-x-2 border-[1px] bg-[#02211C] border-[#23DDF6] px-5 py-1.5 rounded-full">
              <p className="font-[400] text-[14px] text-[#4FE4F8]">
                Get Started
              </p>
            </div>

            <div className="w-full flex flex-col gap-y-6">
              <div className="flex flex-col text-[46px] gap-y-2">
                <h1 className="font-bold text-white">
                  Experience the Future of
                </h1>
                <h1 className="font-bold text-[#23DDF6]">Health Screening</h1>
              </div>
              <div className="text-[#D1D5DB] text-[20px]">
                <p>
                  See how Salvion.ai can integrate seamlessly into your
                  platform. Request a personalized demo to explore our
                  clinical-grade vital sign extraction technology.
                </p>
              </div>
            </div>

            <div className="w-full flex flex-col gap-y-10 pr-32">
              {cardData.map((data) => (
                <CardIconLeft
                  key={data.id}
                  icon={data.icon}
                  title={data.title}
                  description={data.description}
                  bgIcon={data.bgIcon}
                />
              ))}
            </div>
          </div>

          {/* RIGHT — Form Card, self-stretch mengikuti tinggi row */}
          <div className="w-full flex items-end pt-[14%]">
            <div className="relative w-full self-stretch bg-[#0D203E]/70 border-[1px] border-b-0 border-[#FFFFFF]/20 rounded-t-3xl flex flex-col">
              {/* Step Indicator */}
              <div className="flex-shrink-0 w-full flex flex-row justify-between items-center gap-x-5 px-8">
                {[1, 2].map((s) => (
                  <div
                    key={s}
                    className="relative w-full flex flex-col gap-y-1 py-5"
                  >
                    <p
                      className={`text-[20px] font-semibold transition-colors duration-300 ${
                        step >= s ? "text-[#23DDF6]" : "text-[#D1D5DB]"
                      }`}
                    >
                      Step {s}
                    </p>
                    <p
                      className={`text-[14px] transition-colors duration-300 ${
                        step >= s ? "text-[#FFFFFF]" : "text-[#9CA3AF]"
                      }`}
                    >
                      {s === 1
                        ? "Request Your Demo Access"
                        : "Ready to Biometric Scan"}
                    </p>
                    <div className="absolute bottom-0 left-0 w-full h-auto">
                      <div
                        className={`h-[2px] bg-gradient-to-r from-[#97F8F9] to-[#599293]/0 transition-all duration-300 ${
                          step >= s ? "w-full" : "w-0"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Content area */}
              <div className="relative flex-1 min-h-0">
                {/* STEP 1 — Form */}
                <div
                  className={`absolute inset-0 overflow-y-auto transition-all duration-300 ${
                    step === 1
                      ? "opacity-100 translate-x-0 pointer-events-auto"
                      : "opacity-0 -translate-x-6 pointer-events-none"
                  }`}
                >
                  <form
                    onSubmit={goToStep2}
                    className="h-full flex flex-col gap-y-8 justify-center px-8 py-10"
                  >
                    <div className="w-full flex flex-row gap-x-6">
                      <InputForm
                        label="Full Name"
                        name="fullname"
                        text="Full Name"
                        value={formData.fullname}
                        onChange={handleChange}
                      />
                      <InputForm
                        label="Work Email"
                        name="workemail"
                        text="Work Email"
                        type="email"
                        value={formData.workemail}
                        onChange={handleChange}
                      />
                    </div>
                    <InputForm
                      label="Company Name"
                      name="company"
                      text="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                    />
                    <InputForm
                      label="Industry"
                      name="industry"
                      text="Industry"
                      value={formData.industry}
                      onChange={handleChange}
                    />
                    <InputForm
                      label="Description of Use Case (optional)"
                      name="description"
                      text=""
                      value={formData.description}
                      as="textarea"
                      onChange={handleChange}
                    />

                    <button
                      type="submit"
                      className="w-full py-3 bg-[#23DDF6] border border-[#23DDF6] rounded-md font-semibold text-[#1F2937]"
                    >
                      Request Demo
                    </button>
                    <p className="text-white/40 text-[12px] text-center">
                      By submitting, you agree to our Privacy Policy and Terms
                      of Service.
                    </p>
                  </form>
                </div>

                {/* STEP 2 — Confirm */}
                <div
                  className={`absolute inset-0 overflow-y-auto transition-all duration-300 ${
                    step === 2
                      ? "opacity-100 translate-x-0 pointer-events-auto"
                      : "opacity-0 translate-x-6 pointer-events-none"
                  }`}
                >
                  <div className="relative w-full h-full ">
                    <div className="absolute left-10 top-[9%] z-20">
                      <div className="w-auto h-auto flex flex-col gap-y-16">
                        <div className="w-auto h-auto flex flex-col gap-y-3 text-[#FFFFFF] font-[600]">
                          <div className="w-fit h-auto">
                            <p className="text-[28px] ">
                              Pre - Scan: Get Ready
                            </p>
                          </div>
                          <div className="w-fit h-auto">
                            <p className="text-[16px] font-[400]">
                              Please proceed to the next step to <br /> try the
                              face scanning demo.
                            </p>
                          </div>
                        </div>
                        <div className="w-fit h-auto px-6 py-2.5 bg-[#23DDF6] rounded-lg">
                          <p className="text-[#1F2937] font-[500]">
                            Start Scanning
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute w-auto h-auto right-0 bottom-0 z-10">
                      <img
                        src={Hands}
                        alt=""
                        srcset=""
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
