import { useRef } from "react";
import PhoneFrame from "@/assets/temp/phone-frame.svg";
import Logo from "/logo.svg";
import { FaSignal, FaWifi, FaBatteryFull } from "react-icons/fa";
import { useFaceScanner } from "@/hooks/useFaceScanner";

const scannerStyles = `
  @keyframes ping-out {
    0% {
      transform: scale(1);
      opacity: 0.45;
    }

    100% {
      transform: scale(1.35);
      opacity: 0;
    }
  }

  .ring-1 {
    animation: ping-out 2.8s cubic-bezier(0.22, 1, 0.36, 1) infinite;
  }

  .ring-2 {
    animation: ping-out 2.8s cubic-bezier(0.22, 1, 0.36, 1) infinite 0.9s;
  }

  .ring-3 {
    animation: ping-out 2.8s cubic-bezier(0.22, 1, 0.36, 1) infinite 1.8s;
  }
`;

export default function FaceScanner() {
  const ellipseRef = useRef(null);

  const { videoRef, canvasRef, personDetected, isGazePaused, isDetecting } =
    useFaceScanner({ ellipseRef });

  return (
    <>
      <style>{scannerStyles}</style>

      <div className="w-full h-auto flex flex-col gap-y-10 mt-5">
        {/* ── Header ── */}
        <div className="w-full h-auto flex flex-col gap-y-5 justify-center items-center">
          <div className="w-full h-auto flex justify-center items-center">
            <p className="text-[#23DDF6] font-[600] text-[18px]">
              LIVE PRODUCT DEMO
            </p>
          </div>

          <div className="w-full h-auto flex flex-col gap-y-2 justify-center items-center">
            <p className="text-[#FFFFFF] font-[600] text-[38px]">
              AI Health Scanning, Reimagined
            </p>

            <p className="text-[#D1D5DB] font-[400] text-[16px] text-center">
              Salvion AI extracts 30+ physiological signals from a standard
              camera — in seconds, with no hardware.
            </p>
          </div>
        </div>

        {/* ── Main layout ── */}
        <div className="flex-1 w-full flex flex-row gap-4 px-6">
          {/* Kiri */}
          <div className="w-full h-full bg-red-600 flex flex-col gap-y-5 justify-between py-5 px-2">
            <div className="w-full h-auto bg-green-500 flex flex-col" />
            <div className="w-full flex-1 bg-green-500 flex flex-col" />
            <div className="w-full h-auto bg-green-500 flex" />
          </div>

          {/* Phone frame */}
          <div className="w-auto h-[810px] shrink-0">
            <div className="relative w-full h-full flex justify-center items-center">
              <img
                src={PhoneFrame}
                alt=""
                className="w-full h-full bg-transparent relative z-20"
              />

              <div className="absolute inset-0 flex-1 p-[15px] rounded-xl">
                <div className="w-full h-full flex flex-col justify-between items-start bg-[#161622] rounded-[30px] py-3.5">
                  {/* Status bar + logo */}
                  <div className="w-full h-auto flex flex-col gap-y-5">
                    <div className="w-full h-auto flex flex-row justify-between items-center px-6">
                      <p className="text-white text-[16px] font-[400]">9:41</p>

                      <div className="flex flex-row gap-x-2.5 items-center text-white">
                        <FaSignal />
                        <FaWifi />
                        <FaBatteryFull />
                      </div>
                    </div>

                    <div className="w-full h-auto flex justify-center items-center">
                      <img src={Logo} alt="" className="w-auto h-[60%]" />
                    </div>
                  </div>

                  {/* ── Face Scanner ── */}
                  <div className="w-full h-auto flex justify-center items-center">
                    <div className="relative flex items-center justify-center w-[270px] h-[270px]">
                      {/* Sonar Ping */}
                      <div className="ring-1 absolute w-[270px] h-[270px] rounded-full border border-[rgba(35,221,246,0.45)]" />

                      <div className="ring-2 absolute w-[270px] h-[270px] rounded-full border border-[rgba(35,221,246,0.35)]" />

                      <div className="ring-3 absolute w-[270px] h-[270px] rounded-full border border-[rgba(35,221,246,0.25)]" />

                      {/* Main Scanner Circle */}
                      <div className="relative w-[260px] h-[260px] rounded-full overflow-hidden bg-[#161622]">
                        {/* Video */}
                        <video
                          ref={videoRef}
                          className="absolute inset-0 w-full h-full object-cover invisible"
                          autoPlay
                          playsInline
                          muted
                        />

                        {/* Canvas */}
                        <canvas
                          ref={canvasRef}
                          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                        />

                        {/* Vignette */}
                        <div
                          className="absolute inset-0 pointer-events-none z-10"
                          style={{
                            background:
                              "radial-gradient(circle at center, transparent 35%, rgba(0,0,0,0.7) 100%)",
                          }}
                        />

                        {/* Main Border */}
                        <div
                          className="absolute inset-0 rounded-full pointer-events-none z-40"
                          style={{
                            boxShadow: isDetecting
                              ? "inset 0 0 0 2.5px #23DDF6, 0 0 20px rgba(35,221,246,0.35)"
                              : "inset 0 0 0 2px rgba(255,255,255,0.12)",
                            transition: "all .35s ease",
                          }}
                        />

                        {/* IDLE OVERLAY */}
                        {!personDetected && (
                          <div
                            className="absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none z-50"
                            style={{ background: "rgba(0,0,0,0.3)" }}
                          >
                            <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
                              <svg
                                className="w-5 h-5 text-white/30"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  cx="12"
                                  cy="8"
                                  r="4"
                                  strokeWidth="1.5"
                                />

                                <path
                                  d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </div>

                            <p className="text-white/60 text-[10px] font-medium">
                              Arahkan wajah
                            </p>
                          </div>
                        )}

                        {/* PAUSED OVERLAY */}
                        {personDetected && isGazePaused && (
                          <div
                            className="absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none z-50"
                            style={{ background: "rgba(0,0,0,0.45)" }}
                          >
                            <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center">
                              <svg
                                className="w-4 h-4 fill-white/50"
                                viewBox="0 0 16 16"
                              >
                                <rect
                                  x="3"
                                  y="2"
                                  width="3.5"
                                  height="12"
                                  rx="1"
                                />

                                <rect
                                  x="9.5"
                                  y="2"
                                  width="3.5"
                                  height="12"
                                  rx="1"
                                />
                              </svg>
                            </div>

                            <p className="text-white/40 text-[9px] font-mono uppercase tracking-widest">
                              Scan ditunda
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-auto flex" />
                </div>
              </div>
            </div>
          </div>

          {/* Kanan */}
          <div className="w-full h-full bg-red-600 py-5 px-2">kanan</div>
        </div>
      </div>
    </>
  );
}
