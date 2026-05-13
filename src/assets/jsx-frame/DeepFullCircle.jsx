export default function DeepFullCircle2({ width = 786, height = 786 }) {
  return (
    <svg
      //   width="786"
      //   height="786"
      className="w-full h-full"
      viewBox="0 0 786 786"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="393"
        cy="393"
        r="390"
        stroke="url(#paint0_linear_140_1139)"
        stroke-width="6"
      />
      <g filter="url(#filter0_f_140_1139)">
        <circle
          cx="393"
          cy="393"
          r="300"
          stroke="url(#paint1_linear_140_1139)"
          stroke-width="3.78788"
        />
      </g>
      <g filter="url(#filter1_f_140_1139)">
        <circle
          cx="393"
          cy="393"
          r="220"
          stroke="url(#paint2_linear_140_1139)"
          stroke-width="2.27273"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_140_1139"
          x="84.1055"
          y="84.1064"
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
            result="effect1_foregroundBlur_140_1139"
          />
        </filter>
        <filter
          id="filter1_f_140_1139"
          x="163.063"
          y="163.064"
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
            result="effect1_foregroundBlur_140_1139"
          />
        </filter>
        <linearGradient
          id="paint0_linear_140_1139"
          x1="393"
          y1="3"
          x2="393"
          y2="783"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0B0F1A" />
          <stop offset="0.497922" stop-color="#90F3F9" />
          <stop offset="1" stop-color="#0B0F1A" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_140_1139"
          x1="393"
          y1="93"
          x2="393"
          y2="693"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0B0F1A" />
          <stop offset="0.497922" stop-color="#90F3F9" />
          <stop offset="1" stop-color="#0B0F1A" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_140_1139"
          x1="393"
          y1="173"
          x2="393"
          y2="613"
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
