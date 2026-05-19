import { useRef, useState, useEffect } from "react";
import PhoneFrame from "@/assets/temp/phone-frame.svg";
import Logo from "/logo.svg";
import { FaSignal, FaWifi, FaBatteryFull } from "react-icons/fa";
import { useFaceScanner } from "@/hooks/useFaceScanner";
import HrWave from "@/assets/icons/scanning/hr-scan.svg";
import WaveHr from "@/assets/icons/scanning/WaveHr";
import Lamp from "@/assets/icons/scanning/lamp.svg";
import Sun from "@/assets/icons/scanning/sun.svg";
import Person from "@/assets/icons/scanning/person.svg";
import Relax from "@/assets/icons/scanning/relax.svg";
import LeftContentScanning from "@/components/LeftContentScanning";
import RightContentScanning from "@/components/RightContentScanning";

const InfoData = [
  {
    icon: Sun,
    title: "Ensure good lighting",
  },
  {
    icon: Person,
    title: "Keep your face in the frame",
  },
  {
    icon: Relax,
    title: "Hold still and relax",
  },
];

const scannerStyles = `
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes pulse-ring {
    0%, 100% { opacity: 0.3; }
    50%       { opacity: 0.7; }
  }
  @keyframes ping-out {
    0%   { transform: scale(1); opacity: 0.6; }
    100% { transform: scale(1.7); opacity: 0; }
  }

  .ring-1 { animation: pulse-ring 3s ease-in-out infinite 0s; }
  .ring-2 { animation: pulse-ring 3s ease-in-out infinite 0.4s; }
  .ring-3 { animation: pulse-ring 3s ease-in-out infinite 0.8s; }

  .rings-layer {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.6s ease;
  }
  .rings-layer.visible   { opacity: 1; pointer-events: none; }
  .rings-layer.invisible { opacity: 0; pointer-events: none; }

  .conic-spin { animation: spin-slow 8s linear infinite; }
  .inner-counter-spin { animation: spin-slow 8s linear infinite reverse; }

  .conic-border {
    background: conic-gradient(
      from 180deg at 50% 50%,
      #161622 -17.25deg,
      #162022  27.48deg,
      #23DDF6  50.21deg,
      #161622  68.13deg,
      #161622 101.82deg,
      #23DDF6 126.55deg,
      #161622 157.10deg,
      #161622 200.03deg,
      #23DDF6 232.52deg,
      #161622 256.56deg,
      #161622 295.48deg,
      #23DDF6 310.00deg,
      #161622 342.75deg,
      #162022 387.48deg
    );
    box-shadow: 0 1px 8.6px 0 rgba(160, 235, 247, 0.5);
  }

  .sonar-ring {
    position: absolute;
    width: 290px;
    height: 290px;
    border-radius: 50%;
    border: 1.5px solid #23DDF6;
    pointer-events: none;
  }
  .s1 { animation: ping-out 2s ease-out infinite 0s; }
  .s2 { animation: ping-out 2s ease-out infinite 0.67s; }
  .s3 { animation: ping-out 2s ease-out infinite 1.33s; }

  @keyframes bracket-pulse {
    0%, 100% { opacity: 0.5; }
    50%       { opacity: 1; }
  }
  .br {
    position: absolute;
    width: 16px;
    height: 16px;
    border-color: #23DDF6;
    border-style: solid;
    animation: bracket-pulse 2s ease-in-out infinite;
    pointer-events: none;
  }
  .br-tl { top: 0;    left: 0;  border-width: 2px 0 0 2px; animation-delay: 0s;   }
  .br-tr { top: 0;    right: 0; border-width: 2px 2px 0 0; animation-delay: 0.2s; }
  .br-bl { bottom: 0; left: 0;  border-width: 0 0 2px 2px; animation-delay: 0.4s; }
  .br-br { bottom: 0; right: 0; border-width: 0 2px 2px 0; animation-delay: 0.6s; }
`;

const SCAN_DURATION = 30;

export default function FaceScanner() {
  const ellipseRef = useRef(null);

  const { videoRef, canvasRef, personDetected, isGazePaused, isDetecting } =
    useFaceScanner({ ellipseRef });

  // elapsed in milliseconds for smooth progress, stored as ref to avoid re-render on every RAF tick
  const elapsedMsRef = useRef(0);
  const [elapsedMs, setElapsedMs] = useState(0);
  const rafRef = useRef(null);
  const lastTsRef = useRef(null);

  const ROLLBACK_MS = 2000; // mundur 2 detik saat pause/wajah hilang
  const SCAN_MS = SCAN_DURATION * 1000;

  const stopRaf = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    lastTsRef.current = null;
  };

  const startRaf = () => {
    if (rafRef.current) return; // sudah berjalan
    const tick = (ts) => {
      if (lastTsRef.current !== null) {
        const delta = ts - lastTsRef.current;
        elapsedMsRef.current = Math.min(elapsedMsRef.current + delta, SCAN_MS);
        setElapsedMs(elapsedMsRef.current);
      }
      lastTsRef.current = ts;
      if (elapsedMsRef.current < SCAN_MS) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        rafRef.current = null;
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    const active =
      personDetected && !isGazePaused && elapsedMsRef.current < SCAN_MS;
    if (active) {
      startRaf();
    } else {
      stopRaf();
      // Rollback 2 detik saat pause atau wajah hilang, agar frame kotor tidak masuk
      if (elapsedMsRef.current > 0 && elapsedMsRef.current < SCAN_MS) {
        elapsedMsRef.current = Math.max(0, elapsedMsRef.current - ROLLBACK_MS);
        setElapsedMs(elapsedMsRef.current);
      }
    }
    return () => stopRaf();
  }, [personDetected, isGazePaused]);

  const progressPercent = Math.min(
    100,
    Math.round((elapsedMs / SCAN_MS) * 100),
  );
  const remaining = Math.ceil((SCAN_MS - elapsedMs) / 1000);
  const isDone = elapsedMs >= SCAN_MS;

  return (
    <>
      <style>{scannerStyles}</style>

      <div className="w-full h-auto flex flex-col gap-y-10 mt-10">
        {/* ── Header ── */}
        <div className="w-full h-auto flex flex-col gap-y-4 justify-center items-center">
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
          <div className="w-full h-full py-14 px-2 ">
            <LeftContentScanning />
          </div>

          {/* Phone frame */}
          <div className="w-auto h-[820px] shrink-0">
            <div className="relative w-full h-full flex justify-center items-center">
              <img
                src={PhoneFrame}
                alt=""
                className="w-full h-full object-cover bg-transparent relative z-20"
              />
              <div className="absolute inset-0 flex-1 pt-[14px] pb-[18px] px-[10px] rounded-xl">
                <div className="w-full h-full flex flex-col justify-between items-start bg-[#161622] rounded-[30px] py-3.5 overflow-hidden">
                  {/* Status bar + logo */}
                  <div className="w-full h-auto flex flex-col gap-y-3.5">
                    <div className="w-full h-auto flex flex-row justify-between items-center px-7">
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

                  {/* ── Face Scanner (circle + scanner inline) ── */}
                  <div className="w-full h-auto flex flex-col gap-y-6 justify-center items-center">
                    <div className="w-full h-auto flex flex-col justify-center items-center">
                      <div className="w-full h-auto flex justify-center items-center">
                        <p className="text-[12px] font-[400] text-[#23DDF6]">
                          LIVE SIGNAL CAPTURE
                        </p>
                      </div>
                      <div className="w-full h-auto flex justify-center items-center">
                        <p className="text-[18px] font-[500] text-[#FFFFFF]">
                          Scanning your health
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-auto flex flex-col justify-center items-center gap-y-6">
                      {/* Outer rings */}
                      <div className="relative flex items-center justify-center w-full h-auto ">
                        {/* Pulse rings — fade in saat wajah TIDAK terdeteksi */}
                        <div
                          className={`rings-layer ${!personDetected ? "visible" : "invisible"}`}
                        >
                          <div className="ring-1 absolute w-[385px] h-[385px] rounded-full border border-[rgba(35,221,246,0.08)]" />
                          <div className="ring-2 absolute w-[345px] h-[345px] rounded-full border border-[rgba(35,221,246,0.06)]" />
                          {/* <div className="ring-3 absolute w-[290px] h-[290px] rounded-full border border-[rgba(35,221,246,0.05)]" /> */}
                        </div>
                        {/* Sonar ping — di belakang conic border, fade in saat wajah terdeteksi */}
                        <div
                          className={`rings-layer ${personDetected ? "visible" : "invisible"}`}
                          style={{ zIndex: 1 }}
                        >
                          <div className="sonar-ring s1" />
                          <div className="sonar-ring s2" />
                          <div className="sonar-ring s3" />
                        </div>
                        <div className="absolute -top-2 w-auto h-auto">
                          {/* Analyzing badge */}
                          <div
                            className="relative w-fit px-4 py-1.5 h-auto flex flex-row gap-x-4 justify-center items-center bg-[#161622] border-[1px] border-[#172836] rounded-full z-20 shadow-[0_0_6.2px_rgba(151,224,235,0.7)] transition-all duration-500 ease-in-out"
                            style={{
                              opacity: personDetected ? 1 : 0,
                              transform: personDetected
                                ? "translateY(0px) scale(1)"
                                : "translateY(4px) scale(0.95)",
                              pointerEvents: personDetected ? "auto" : "none",
                              position: "absolute",
                            }}
                          >
                            <div className="w-auto h-auto flex justify-center items-center">
                              <div className="relative w-3 h-3">
                                <div className="absolute inset-0 rounded-full animate-ping opacity-75 bg-[#6CE8F9]" />
                                <div className="relative w-3 h-3 rounded-full bg-[#6CE8F9]" />
                              </div>
                            </div>
                            <p className="text-[#4FE4F8] text-[14px]">
                              Analyzing
                            </p>
                          </div>
                          {/* Waiting badge */}
                          <div
                            className="relative w-fit px-4 py-1.5 h-auto flex flex-row gap-x-4 justify-center items-center bg-[#161622] border-[1px] border-[#172836] rounded-full z-20 transition-all duration-500 ease-in-out"
                            style={{
                              opacity: personDetected ? 0 : 1,
                              transform: personDetected
                                ? "translateY(-4px) scale(0.95)"
                                : "translateY(0px) scale(1)",
                              pointerEvents: personDetected ? "none" : "auto",
                            }}
                          >
                            <div className="relative w-3 h-3">
                              <div className="relative w-3 h-3 rounded-full bg-white/20" />
                            </div>
                            <p className="text-white/40 text-[14px]">
                              Waiting...
                            </p>
                          </div>
                        </div>
                        {/* Corner brackets — layer terpisah, tidak ikut berputar */}
                        <div
                          className="absolute pointer-events-none"
                          style={{
                            width: "200px",
                            height: "200px",
                            zIndex: 10,
                          }}
                        >
                          <div className="br br-tl" />
                          <div className="br br-tr" />
                          <div className="br br-bl" />
                          <div className="br br-br" />
                        </div>
                        {/* Spinning conic border — di atas sonar */}
                        <div
                          className="conic-spin conic-border relative w-[300px] h-[300px] rounded-full"
                          style={{ zIndex: 2 }}
                        >
                          {/* Inner circle */}
                          <div
                            className="inner-counter-spin absolute rounded-full bg-[#161622] overflow-hidden"
                            style={{ inset: "1.5px" }}
                          >
                            <div className="relative w-full h-full rounded-full overflow-hidden bg-black">
                              {/* Video */}
                              <video
                                ref={videoRef}
                                className="absolute inset-0 w-full h-full object-cover invisible"
                                autoPlay
                                playsInline
                                muted
                              />
                              {/* Canvas mesh */}
                              <canvas
                                ref={canvasRef}
                                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                              />
                              {/* Vignette */}
                              <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                  background:
                                    "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.6) 100%)",
                                }}
                              />
                              {/* IDLE OVERLAY */}
                              {!personDetected && (
                                <div
                                  className="absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none"
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
                                  className="absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none"
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
                      </div>

                      {/* ── Progress & Timer ── */}
                      <div className="w-full h-auto flex flex-col gap-y-2.5 justify-center items-center">
                        <div className="w-full h-auto flex justify-center items-center">
                          <p className="text-[14px] font-[400] text-[#FFFFFF]">
                            {isDone
                              ? "Scan complete!"
                              : "Stabilizing facial signal capture... "}
                            {!isDone && (
                              <span className="text-[#23DDF6]">
                                {progressPercent}%
                              </span>
                            )}
                          </p>
                        </div>
                        <div className="w-full h-auto flex justify-center items-center px-6">
                          <div className="w-full h-1 bg-[#323131] rounded-full">
                            <div
                              className="h-full rounded-full bg-[linear-gradient(90deg,#027BD5_0%,#2F99E7_25%,#2390F6_50%,#23B0F6_75%,#23DDF6_100%)] shadow-[0_-1px_8.3px_2px_rgba(35,198,246,0.4)] transition-all duration-1000 ease-linear"
                              style={{ width: `${progressPercent}%` }}
                            />
                          </div>
                        </div>
                        <div className="w-full h-auto flex justify-center items-center">
                          <p className="text-[12px] font-[300] text-[#9CA3AF]">
                            {isDone
                              ? "✓ Analysis ready"
                              : !personDetected
                                ? "Waiting for face..."
                                : isGazePaused
                                  ? "Scan paused"
                                  : `${remaining} second${remaining !== 1 ? "s" : ""} remaining`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative w-full h-auto flex flex-col px-5 gap-y-4 ">
                    <div className="relative w-full h-auto p-[1px] bg-gradient-to-r from-[#FFE4F8] to-[#CF50B4] rounded-lg overflow-hidden">
                      <div className="relative w-full h-auto min-h-[63px] flex flex-row justify-between bg-[#152B3C] rounded-lg px-4 py-3 overflow-hidden">
                        <div className="absolute inset-0 w-full h-full">
                          <WaveHr />
                        </div>
                        <div className="relative z-10 w-auto h-auto flex flex-col gap-y-1.5 justify-start items-start">
                          <div className="w-8 h-8 shrink-0 flex justify-start items-start">
                            <img
                              src={HrWave}
                              alt=""
                              srcset=""
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 flex justify-start items-end">
                            <p className="text-[#FAFAFA] font-[500] text-[14px]">
                              Heart Rate
                            </p>
                          </div>
                        </div>
                        <div className="w-auto h-auto flex justify-start items-end">
                          <p className="text-[#DF3991] font-[500] text-[16px]">
                            55{" "}
                            <span className="text-[12px] font-[300]">bpm</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="relative w-full h-auto flex flex-col gap-y-3 justify-between bg-[#0B0F1A]/50 border-[1px] border-[#2A2C33] rounded-xl px-3 py-3 overflow-hidden">
                      <div className="w-full h-auto flex">
                        <div className="w-auto h-auto flex flex-row gap-x-3">
                          <div className="w-4 h-4 shrink-0 flex justify-center items-center">
                            <img
                              src={Lamp}
                              alt=""
                              srcset=""
                              className="w-full h-full"
                            />
                          </div>
                          <div className="w-full h-auto flex justify-center items-center">
                            <p className="text-[#4FE4F8] text-[12px]">
                              Tips for best results
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-auto grid grid-cols-3 gap-x-2">
                        {InfoData.map((item, index) => (
                          <div className="w-full h-auto flex flex-row gap-x-1.5">
                            <div className="w-4 h-4 shrink-0 flex justify-center items-center">
                              <img
                                src={item.icon}
                                alt=""
                                srcset=""
                                className="w-full h-full"
                              />
                            </div>
                            <div className="w-full h-auto flex justify-center items-center ">
                              <p className="text-[10px] text-[#D7D7D7]">
                                {item.title}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Kanan */}
          <div className="w-full h-full py-14 px-2 ">
            <RightContentScanning />
          </div>
        </div>
      </div>
    </>
  );
}
