import LineForm from "@/assets/jsx-frame/LineForm";
// import LineForm from "@/assets/temp/line-form.svg";
import InputForm from "@/components/InputForm";
import { useState } from "react";

const initialFormData = {
  fullname: "",
  workemail: "",
  company: "",
  industry: "",
  Description: "",
};

export default function RequestDemo() {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const buildPayload = () => {
    return {
      ...formData,
      timestamp: new Date().toISOString(),
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = buildPayload();
    try {
      console.log("Submitting demo request with payload:", payload);
    } catch (error) {
      console.error("Error submitting demo request:", error);
    }
  };

  return (
    <div className="relative w-full h-auto bg-gradient-to-r from-[#04001C] from-[16%] to-[#3CD0FF] overflow-hidden">
      <div className="relative w-full h-auto left-0 top-0 z-10">
        <LineForm />
      </div>
      <div className="absolute z-20 left-0 top-0 inset-0 flex flex-row gap-x-20 justify-between px-12">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="w-full h-auto flex flex-col gap-y-8">
            <div className="w-fit h-auto flex flex-row gap-x-2 border-[1px] bg-[#02211C] border-[#23DDF6] px-5 py-1.5 rounded-full">
              <div className="w-fit h-full flex justify-center items-center">
                <p className="font-[400] text-[14px] text-[#4FE4F8]">
                  Get Started
                </p>
              </div>
            </div>
            <div className="w-full h-auto flex flex-col gap-y-6">
              <div className="w-full h-auto flex flex-col text-[46px] gap-y-2">
                <div className="w-full h-auto">
                  <h1 className="font-bold text-white">
                    Experience the Future of
                  </h1>
                </div>
                <div className="w-full h-auto">
                  <h1 className="font-bold text-[#23DDF6]">Health Screening</h1>
                </div>
              </div>
              <div className="w-full h-auto flex flex-col gap-y-8 text-[#D1D5DB] text-[20px]">
                <p className="">
                  See how Salvion.ai can integrate seamlessly into your
                  platform. Request a personalized demo to explore our
                  clinical-grade vital sign extraction technology.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full pt-12">
          <div className="w-full h-full bg-[#0D203E]/70 border-x-[1px] border-t-[1px] border-[#FFFFFF33]/20 rounded-t-3xl">
            <form
              onSubmit={handleSubmit}
              className="w-full h-auto flex flex-col gap-y-6 justify-center items-center px-8 py-12"
            >
              <div className="w-full h-auto flex flex-row gap-x-6 justify-between items-center">
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
                name="submit"
                className="w-full h-auto py-3 justify-center items-center bg-[#23DDF6] border-[1px] border-[#23DDF6] rounded-md shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
              >
                <p className="text-[#1F2937] font-[600]">Request Demo</p>
              </button>
              <p className="text-[#FFFFFF] font-[400] text-[14px]">
                By submitting this form, you agree to our Privacy Policy and
                Terms of Service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
