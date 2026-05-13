export default function CodeEndpoints() {
  const endpoints = [
    { method: "POST", path: "/v1/sessions/create" },
    { method: "GET", path: "/v1/sessions/{id}/status" },
    { method: "POST", path: "/v1/sessions/{id}/frames" },
    { method: "GET", path: "/v1/sessions/{id}/insight" },
    { method: "GET", path: "/v1/insights/{id}/report" },
    { method: "POST", path: "/v1/analysis/batch" },
    { method: "GET", path: "/v1/population/{cohort_id}" },
    { method: "POST", path: "/v1/webhooks/register" },
  ];

  return (
    <div className="w-full h-auto">
      <div className="relative w-auto rounded-xl bg-[#060B14] border border-[#1B2A3A] shadow-[0_0_80px_10px_rgba(0,255,200,0.15)]">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-[#1B2A3A] bg-[#0B1220] rounded-t-xl">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs tracking-widest text-gray-400 ml-3">
            CORE ENDPOINTS.
          </span>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col gap-4">
          {endpoints.map((item, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 px-4 py-3 rounded-lg border border-[#123040] bg-gradient-to-r from-[#071A24] to-[#030B12] hover:from-[#0A2A30] hover:to-[#04161A] transition-all duration-300 cursor-pointer"
            >
              {/* Method Badge */}
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-md ${
                  item.method === "GET"
                    ? "bg-teal-900/40 text-teal-300"
                    : "bg-yellow-900/40 text-yellow-300"
                }`}
              >
                {item.method}
              </span>

              {/* Path */}
              <span className="text-xs text-cyan-300 font-mono tracking-wide">
                {item.path}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
