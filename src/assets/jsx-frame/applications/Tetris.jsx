export default function Tetris() {
  return (
    <>
      <style>{`
        @keyframes waterfall {
          0%   { transform: translateY(0); opacity: 0.8; }
          85%  { opacity: 0.7; }
          100% { transform: translateY(182px); opacity: 0; }
        }
        .w { animation: waterfall linear infinite; }
      `}</style>

      <svg
        className="w-full h-full"
        viewBox="0 0 240 182"
        preserveAspectRatio="xMidYMin slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Kolom 1 */}
        <rect
          className="w"
          style={{ animationDuration: "2.0s", animationDelay: "0s" }}
          x="10"
          y="0"
          width="14"
          height="14"
          fill="#52D9D9"
          fillOpacity="0.4"
        />
        <rect
          className="w"
          style={{ animationDuration: "2.0s", animationDelay: "0.4s" }}
          x="10"
          y="0"
          width="14"
          height="14"
          fill="#52CCD9"
          fillOpacity="0.3"
        />
        <rect
          className="w"
          style={{ animationDuration: "2.0s", animationDelay: "0.8s" }}
          x="10"
          y="0"
          width="14"
          height="14"
          fill="#52D9D9"
          fillOpacity="0.15"
        />

        {/* Kolom 2 */}
        <rect
          className="w"
          style={{ animationDuration: "2.4s", animationDelay: "0.2s" }}
          x="40"
          y="0"
          width="14"
          height="14"
          fill="#52CCD9"
          fillOpacity="0.35"
        />
        <rect
          className="w"
          style={{ animationDuration: "2.4s", animationDelay: "0.7s" }}
          x="40"
          y="0"
          width="14"
          height="14"
          fill="#52D9D9"
          fillOpacity="0.3"
        />
        <rect
          className="w"
          style={{ animationDuration: "2.4s", animationDelay: "1.3s" }}
          x="40"
          y="0"
          width="14"
          height="14"
          fill="#52CCD9"
          fillOpacity="0.15"
        />

        {/* Kolom 3 */}
        <rect
          className="w"
          style={{ animationDuration: "1.8s", animationDelay: "0.5s" }}
          x="70"
          y="0"
          width="14"
          height="14"
          fill="#52D9D9"
          fillOpacity="0.4"
        />
        <rect
          className="w"
          style={{ animationDuration: "1.8s", animationDelay: "1.0s" }}
          x="70"
          y="0"
          width="14"
          height="14"
          fill="#52CCD9"
          fillOpacity="0.3"
        />
        <rect
          className="w"
          style={{ animationDuration: "1.8s", animationDelay: "1.5s" }}
          x="70"
          y="0"
          width="14"
          height="14"
          fill="#52D9D9"
          fillOpacity="0.15"
        />

        {/* Kolom 4 */}
        <rect
          className="w"
          style={{ animationDuration: "2.2s", animationDelay: "0.1s" }}
          x="100"
          y="0"
          width="14"
          height="14"
          fill="#52CCD9"
          fillOpacity="0.4"
        />
        <rect
          className="w"
          style={{ animationDuration: "2.2s", animationDelay: "0.6s" }}
          x="100"
          y="0"
          width="14"
          height="14"
          fill="#52D9D9"
          fillOpacity="0.3"
        />
        <rect
          className="w"
          style={{ animationDuration: "2.2s", animationDelay: "1.2s" }}
          x="100"
          y="0"
          width="14"
          height="14"
          fill="#52CCD9"
          fillOpacity="0.15"
        />

        {/* Kolom 5 */}
        <rect
          className="w"
          style={{ animationDuration: "1.6s", animationDelay: "0.3s" }}
          x="130"
          y="0"
          width="14"
          height="14"
          fill="#52D9D9"
          fillOpacity="0.4"
        />
        <rect
          className="w"
          style={{ animationDuration: "1.6s", animationDelay: "0.8s" }}
          x="130"
          y="0"
          width="14"
          height="14"
          fill="#52CCD9"
          fillOpacity="0.3"
        />
        <rect
          className="w"
          style={{ animationDuration: "1.6s", animationDelay: "1.4s" }}
          x="130"
          y="0"
          width="14"
          height="14"
          fill="#52D9D9"
          fillOpacity="0.15"
        />

        {/* Kolom 6 */}
        <rect
          className="w"
          style={{ animationDuration: "2.1s", animationDelay: "0.9s" }}
          x="160"
          y="0"
          width="14"
          height="14"
          fill="#52CCD9"
          fillOpacity="0.35"
        />
        <rect
          className="w"
          style={{ animationDuration: "2.1s", animationDelay: "1.5s" }}
          x="160"
          y="0"
          width="14"
          height="14"
          fill="#52D9D9"
          fillOpacity="0.3"
        />
        <rect
          className="w"
          style={{ animationDuration: "2.1s", animationDelay: "0.1s" }}
          x="160"
          y="0"
          width="14"
          height="14"
          fill="#52CCD9"
          fillOpacity="0.15"
        />

        {/* Kolom 7 */}
        <rect
          className="w"
          style={{ animationDuration: "1.9s", animationDelay: "0.4s" }}
          x="190"
          y="0"
          width="14"
          height="14"
          fill="#52D9D9"
          fillOpacity="0.4"
        />
        <rect
          className="w"
          style={{ animationDuration: "1.9s", animationDelay: "1.1s" }}
          x="190"
          y="0"
          width="14"
          height="14"
          fill="#52CCD9"
          fillOpacity="0.3"
        />
        <rect
          className="w"
          style={{ animationDuration: "1.9s", animationDelay: "1.7s" }}
          x="190"
          y="0"
          width="14"
          height="14"
          fill="#52D9D9"
          fillOpacity="0.15"
        />

        {/* Kolom 8 */}
        <rect
          className="w"
          style={{ animationDuration: "2.3s", animationDelay: "0.6s" }}
          x="220"
          y="0"
          width="14"
          height="14"
          fill="#52CCD9"
          fillOpacity="0.4"
        />
        <rect
          className="w"
          style={{ animationDuration: "2.3s", animationDelay: "1.3s" }}
          x="220"
          y="0"
          width="14"
          height="14"
          fill="#52D9D9"
          fillOpacity="0.25"
        />
        <rect
          className="w"
          style={{ animationDuration: "2.3s", animationDelay: "0.0s" }}
          x="220"
          y="0"
          width="14"
          height="14"
          fill="#52CCD9"
          fillOpacity="0.15"
        />
      </svg>
    </>
  );
}
