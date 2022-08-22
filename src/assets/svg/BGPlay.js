export default () => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_b_37_2727)">
      <circle cx="50" cy="50" r="50" fill="#D9D9D9" fillOpacity="0.1" />
      <circle
        cx="50"
        cy="50"
        r="49.25"
        stroke="url(#paint0_linear_37_2727)"
        strokeWidth="1.5"
      />
    </g>
    <defs>
      <filter
        id="filter0_b_37_2727"
        x="-20"
        y="-20"
        width="140"
        height="140"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImage" stdDeviation="10" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_37_2727"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_37_2727"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_37_2727"
        x1="-3.57143"
        y1="-3.92857"
        x2="105.357"
        y2="107.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0047FF" stopOpacity="0.2" />
        <stop offset="1" stopColor="white" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
);
