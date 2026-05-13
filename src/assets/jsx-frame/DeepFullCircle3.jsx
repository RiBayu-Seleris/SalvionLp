export default function DeepFullCircle({ width = 786, height = 792 }) {
  return (
    <svg
      //   width={width}
      //   height={height}
      className="w-full h-full"
      viewBox="0 0 786 792" // viewBox tetap sama
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="393"
        cy="396"
        r="390"
        stroke="url(#paint0_linear_139_1124)"
        stroke-width="6"
      />
      <g filter="url(#filter0_f_139_1124)">
        <circle
          cx="393"
          cy="396"
          r="300"
          stroke="url(#paint1_linear_139_1124)"
          stroke-width="3.78788"
        />
      </g>
      <g filter="url(#filter1_f_139_1124)">
        <circle
          cx="393"
          cy="396"
          r="220"
          stroke="url(#paint2_linear_139_1124)"
          stroke-width="2.27273"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_139_1124"
          x="84.1055"
          y="87.1064"
          width="617.789"
          height="617.788"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="3.5"
            result="effect1_foregroundBlur_139_1124"
          />
        </filter>
        <filter
          id="filter1_f_139_1124"
          x="163.063"
          y="166.064"
          width="459.873"
          height="459.872"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="4.4"
            result="effect1_foregroundBlur_139_1124"
          />
        </filter>
        <linearGradient
          id="paint0_linear_139_1124"
          x1="393"
          y1="6"
          x2="393"
          y2="786"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0B0F1A" />
          <stop offset="0.497922" stop-color="#90F3F9" />
          <stop offset="1" stop-color="#0B0F1A" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_139_1124"
          x1="393"
          y1="96"
          x2="393"
          y2="696"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0B0F1A" />
          <stop offset="0.497922" stop-color="#90F3F9" />
          <stop offset="1" stop-color="#0B0F1A" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_139_1124"
          x1="393"
          y1="176"
          x2="393"
          y2="616"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0B0F1A" />
          <stop offset="0.497922" stop-color="#90F3F9" />
          <stop offset="1" stop-color="#0B0F1A" />
        </linearGradient>
      </defs>
    </svg>
  );
}
