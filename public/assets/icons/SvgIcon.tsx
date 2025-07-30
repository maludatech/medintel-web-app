import * as React from "react";

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  primary?: string;
}
const SvgIcon: React.FC<SvgIconProps> = ({ primary, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
    <defs>
      <clipPath id="freepik--clip-path--inject-70">
        <rect
          width="161.75"
          height="315.66"
          x="107.08"
          y="115.68"
          fill="#263238"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          rx="14.52"
        ></rect>
      </clipPath>
      <clipPath id="freepik--clip-path-2--inject-70">
        <path
          fill={primary}
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M114.28 137.12h147.37v275.49H114.28z"
        ></path>
      </clipPath>
      <clipPath id="freepik--clip-path-3--inject-70">
        <path
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.01"
          d="M163.27 253.55s-4.51 71.61 22.8 98.92c0 0 28.81-19.78 28.81-98.06Z"
        ></path>
      </clipPath>
    </defs>
    <g id="freepik--background-simple--inject-70">
      <path
        fill={primary}
        d="M62.72 205.62s-13.83 61 26.14 114.47S198 394.7 253.67 413.3s107.5-2.11 126.7-48.86-20.37-72.27-29.46-133.56-2.27-78.88-43.09-125.77-124-46.33-179.89 1.17-65.21 99.34-65.21 99.34"
      ></path>
      <path
        fill="#fff"
        d="M62.72 205.62s-13.83 61 26.14 114.47S198 394.7 253.67 413.3s107.5-2.11 126.7-48.86-20.37-72.27-29.46-133.56-2.27-78.88-43.09-125.77-124-46.33-179.89 1.17-65.21 99.34-65.21 99.34"
        opacity="0.7"
      ></path>
    </g>
    <g id="freepik--Plants--inject-70">
      <path
        fill={primary}
        d="M387.51 124.54s1-5.18-4.83-13.86S373 96.94 373 96.94s-6 11.22-.64 19.8a130 130 0 0 0 13.34 17.14ZM370.64 154.87s1-5.18-4.83-13.86-9.7-13.74-9.7-13.74-6 11.22-.63 19.79a130 130 0 0 0 13.34 17.15Z"
      ></path>
      <path
        fill={primary}
        d="M385.32 133.29s1.56-5 10.81-9.94 15-7.53 15-7.53 0 12.7-8.78 17.75a131 131 0 0 1-19.86 8.81ZM365.12 169.05s2.08-4.86 11.79-8.75 15.74-5.91 15.74-5.91-1.37 12.63-10.6 16.73a129.5 129.5 0 0 1-20.67 6.67ZM359.36 211.22s1-5.19 9.7-11 14.15-9.08 14.15-9.08 1.3 12.64-6.86 18.58a129 129 0 0 1-18.81 10.86Z"
      ></path>
      <path
        fill={primary}
        d="M357.25 221.37s1.74-5-2.8-14.41-7.65-15-7.65-15-7.5 10.25-3.45 19.5a129.5 129.5 0 0 0 10.77 18.86ZM344.2 250.14s1-5.18 9.69-11 14.16-9.14 14.16-9.14 1.3 12.63-6.86 18.58a130 130 0 0 1-18.81 10.86ZM343.7 278.44s-.33-5.27 6.59-13.12S361.68 253 361.68 253s4.46 11.89-1.93 19.71a129.6 129.6 0 0 1-15.45 15.27Z"
      ></path>
      <path
        fill="none"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.5"
        d="M388.42 123.34a150 150 0 0 1-5.13 15.72c-5.77 14.27-14.81 22.43-20.3 35.26s-.62 31.7-6.19 48.47-14.13 25-14.46 36.88 3.66 44.91 3.66 44.91M384.58 136.72l9-4.47M386.29 129.88l-2.13-6.46"
      ></path>
      <path
        fill="none"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.5"
        d="M363.54 173.79s7.52-3.63 15.21-7.23M368.82 164.21s-3.37-11.77-8.17-20.07M358.18 218.65a82.5 82.5 0 0 1 17.67-16M355.48 225.68a93 93 0 0 0-4.48-14.86c-2.72-6.38-3.12-7.22-3.12-7.22M342.34 259.67a88 88 0 0 1 8.23-10.77 78 78 0 0 1 9.6-8.52M344.3 287.93a22.66 22.66 0 0 1 4.21-11.1c3.76-4.75 8.21-11.05 10-13.54"
      ></path>
      <path
        fill={primary}
        d="M326.43 184.54s.07-3.37 4.88-8 7.89-7.23 7.89-7.23 2.19 7.78-2.29 12.39a82.4 82.4 0 0 1-10.61 8.86ZM332.8 205.68s.08-3.36 4.88-8 7.9-7.23 7.9-7.23 2.18 7.78-2.29 12.4a82.6 82.6 0 0 1-10.62 8.85Z"
      ></path>
      <path
        fill={primary}
        d="M326.6 190.27s-.28-3.35-5.37-7.65-8.33-6.72-8.33-6.72-1.7 7.91 3.06 12.23a83 83 0 0 0 11.15 8.17ZM334.32 215.24s-.64-3.3-6.15-7-9-5.81-9-5.81-.85 8 4.33 11.84a83 83 0 0 0 11.95 7ZM332.18 242.24s.07-3.36-4.53-8.17-7.57-7.56-7.57-7.56-2.52 7.68 1.74 12.48a82.7 82.7 0 0 0 10.23 9.3Z"
      ></path>
      <path
        fill={primary}
        d="M332.12 248.84s-.41-3.33 3.7-8.58 6.78-8.26 6.78-8.26 3.27 7.39-.5 12.59a82.7 82.7 0 0 1-9.25 10.27ZM336.1 276.86s1-3.21 6.93-6.27 9.61-4.71 9.61-4.71-.09 8.08-5.68 11.24a82.6 82.6 0 0 1-12.69 5.51ZM336.34 268.5s.07-3.36-4.54-8.17-7.57-7.56-7.57-7.56-2.52 7.68 1.75 12.48a82.7 82.7 0 0 0 10.23 9.3ZM332.81 286.16s.92-3.23-2.31-9.05-5.41-9.23-5.41-9.23-4.39 6.79-1.47 12.52a82.6 82.6 0 0 0 7.53 11.6Z"
      ></path>
      <path
        fill="none"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.5"
        d="M326 183.66a96 96 0 0 0 1.06 10.47c1.66 9.65 6.17 16 7.85 24.68s-3.91 19.79-2.72 31 5.39 17.47 4 24.89-8.34 27.43-8.34 27.43M326.6 192.5l-4.99-4M326.46 188.02l2.2-3.73"
      ></path>
      <path
        fill="none"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.5"
        d="M334.65 218.4s-4.17-3.27-8.47-6.55M332.67 211.73a68 68 0 0 1 7.8-11.38M331.91 247a52.4 52.4 0 0 0-8.82-12.34M332.64 251.76a59.4 59.4 0 0 1 4.78-8.63c2.56-3.6 2.92-4.07 2.92-4.07M334.85 280.25a49.6 49.6 0 0 1 7.19-5 31.6 31.6 0 0 0 4.54-2.62M336.2 274.68a56 56 0 0 0-3.65-7.82 49.6 49.6 0 0 0-4.82-6.59M331.15 292a14.34 14.34 0 0 0-1.11-7.47c-1.69-3.46-3.6-8-4.39-9.77"
      ></path>
      <path
        fill={primary}
        d="M84.82 254.88s-1.58-4.57-10.18-8.74-14-6.41-14-6.41.44 11.6 8.58 15.93a118.4 118.4 0 0 0 18.41 7.43ZM85.41 286.58s-1.58-4.56-10.18-8.74-14-6.41-14-6.41.44 11.6 8.58 15.94a119 119 0 0 0 18.41 7.42Z"
      ></path>
      <path
        fill={primary}
        d="M87.11 262.79s-1.09-4.71 4-12.82 8.43-12.85 8.43-12.85 5.79 10.06 1.2 18.06a118 118 0 0 1-11.65 16.07ZM87.55 300.32s-.59-4.8 5.3-12.33 9.73-11.89 9.73-11.89 4.71 10.61-.7 18.08a119 119 0 0 1-13.27 14.76ZM102.35 336.28s-1.58-4.56 2.6-13.16 7-13.67 7-13.67 6.83 9.39 3.11 17.83a118.6 118.6 0 0 1-9.88 17.21Z"
      ></path>
      <path
        fill={primary}
        d="M105.35 345.27s-.92-4.74-8.84-10.1-12.91-8.32-12.91-8.32-1.22 11.54 6.23 17a119 119 0 0 0 17.16 10ZM108.23 374s-1.58-4.57 2.6-13.17 7-13.67 7-13.67 6.83 9.39 3.11 17.83a119 119 0 0 1-9.89 17.22ZM120.83 396.58s-2.69-4-.82-13.39 3.33-15 3.33-15 9 7.36 7.51 16.46a118.5 118.5 0 0 1-5.2 19.16Z"
      ></path>
      <path
        fill="none"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.5"
        d="M85 253.51a137 137 0 0 1 3.16 14.77c2 13.92-1.42 24.52.14 37.18s14 25.33 17.35 41.14.32 26.26 5.49 35.78 23.49 33.82 23.49 33.82M88.09 265.84l5.06-7.66M86.31 259.65l-4.66-4.13"
      ></path>
      <path
        fill="none"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.5"
        d="M88.48 304.79s4.27-6.32 8.7-12.69M88.25 294.79s-8.06-7.79-15.66-12.11M104.83 342.69a75.3 75.3 0 0 1 6.62-20.75M105.92 349.48a85.3 85.3 0 0 0-10.34-9.68c-5.08-3.8-5.78-4.28-5.78-4.28M111.13 382.38a82 82 0 0 1 1.56-12.29 71.4 71.4 0 0 1 3.68-11.09M125.65 403.81a20.74 20.74 0 0 1-1.77-10.7c.8-5.48 1.42-12.5 1.7-15.29"
      ></path>
      <path
        fill={primary}
        d="M64.08 330.31s-1.49-2.69.2-8.54 2.92-9.33 2.92-9.33 5.3 5.15 3.88 10.84a76 76 0 0 1-4.33 11.87ZM78.82 344.09s-1.48-2.69.2-8.54 2.92-9.33 2.92-9.33 5.3 5.15 3.88 10.84a75 75 0 0 1-4.32 11.87Z"
      ></path>
      <path
        fill={primary}
        d="M66.85 334.76s-1.76-2.52-7.76-3.58-9.66-1.49-9.66-1.49 2.29 7 8 8.26A75 75 0 0 0 70 339.29ZM84.41 351s-2-2.32-8.09-2.74-9.77-.46-9.77-.46 3 6.74 8.85 7.37a76 76 0 0 0 12.63 0ZM95.11 373.27s-1.49-2.69-7.33-4.38-9.46-2.5-9.46-2.5 1.54 7.23 7.11 9.06a75 75 0 0 0 12.35 2.66Z"
      ></path>
      <path
        fill={primary}
        d="M98.09 378.51s-1.85-2.45-1-8.47 1.57-9.66 1.57-9.66 6 4.34 5.38 10.19a75 75 0 0 1-2.6 12.36ZM114.09 398.82s-.66-3 2.6-8.13 5.43-8.14 5.43-8.14 3.64 6.44.67 11.5a75 75 0 0 1-7.5 10.17ZM110.44 392.11s-1.48-2.69-7.33-4.37-9.45-2.51-9.45-2.51 1.53 7.23 7.11 9.07a75.6 75.6 0 0 0 12.35 2.7ZM115.76 407.69s-.75-3-6-6.09-8.51-4.82-8.51-4.82-.35 7.38 4.58 10.57a75.4 75.4 0 0 0 11.27 5.7Z"
      ></path>
      <path
        fill="none"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.5"
        d="M63.36 329.81a89 89 0 0 0 5.64 7.78c5.74 6.87 12.2 9.78 17.53 15.9s6 17.44 12.06 25.73 12.29 11.33 14.58 17.84 6 25.5 6 25.5M67.87 336.53l-5.78-.88M65.7 333.04l.03-3.95"
      ></path>
      <path
        fill="none"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.5"
        d="M86.12 353.3s-4.8-.67-9.7-1.29M81.5 348.93a61.4 61.4 0 0 1 .94-12.56M97.09 377.17a48.1 48.1 0 0 0-12.64-5.71M99.84 380.58a53.7 53.7 0 0 1-.18-9c.37-4 .44-4.55.44-4.55M114.66 402.07a45.4 45.4 0 0 1 3.34-7.27 30.4 30.4 0 0 0 2.39-4.16M113.17 397.06a51 51 0 0 0-6.47-4.5 46 46 0 0 0-6.84-3M117.12 413.05a13.2 13.2 0 0 0-4.31-5.4c-2.92-1.95-6.51-4.65-8-5.7"
      ></path>
    </g>
    <g id="freepik--Bottle--inject-70">
      <rect
        width="79.43"
        height="160.89"
        x="275.32"
        y="270.6"
        fill="#fff"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.01"
        rx="4.51"
      ></rect>
      <rect
        width="75.16"
        height="135.94"
        x="277.46"
        y="291.71"
        fill={primary}
        rx="4.51"
      ></rect>
      <rect
        width="75.16"
        height="135.94"
        x="277.46"
        y="291.71"
        fill="#fff"
        opacity="0.5"
        rx="4.51"
      ></rect>
      <path
        fill="#263238"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.01"
        d="M296.15 235.9h37.79v34.7h-37.79z"
      ></path>
      <path
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.01"
        d="M299.3 239.33v27.53M305.14 239.33v27.53M313.48 248.09v18.77M313.48 239.33v4.59"
      ></path>
      <path fill="#fff" d="M279.86 304.74h70.36v77.65h-70.36z"></path>
      <circle cx="314.57" cy="345.57" r="26.06" fill="#263238"></circle>
      <path fill={primary} d="M309.8 327.64h9.54v35.86h-9.54z"></path>
      <path fill={primary} d="M332.5 340.8v9.54h-35.86v-9.54z"></path>
    </g>
    <g
      id="freepik--Pills--inject-70"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect
        width="120.27"
        height="73.93"
        x="309.06"
        y="357.9"
        fill="#fff"
        stroke="#263238"
        rx="4.75"
      ></rect>
      <path
        fill="#263238"
        stroke="#263238"
        strokeWidth="1.01"
        d="M320.57 390a4.44 4.44 0 0 1-4.44-4.44v-12a4.44 4.44 0 0 1 4.44-4.45h0a4.45 4.45 0 0 1 4.45 4.45v12a4.44 4.44 0 0 1-4.45 4.44"
      ></path>
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="1.01"
        d="M323.58 373.15v7.44M323.58 382.51v4.08"
      ></path>
      <path
        fill="#263238"
        stroke="#263238"
        strokeWidth="1.01"
        d="M340 390a4.44 4.44 0 0 1-4.44-4.44v-12a4.44 4.44 0 0 1 4.44-4.45h0a4.44 4.44 0 0 1 4.44 4.45v12A4.44 4.44 0 0 1 340 390"
      ></path>
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="1.01"
        d="M343.02 373.15v7.44M343.02 382.51v4.08"
      ></path>
      <path
        fill="#263238"
        stroke="#263238"
        strokeWidth="1.01"
        d="M359.47 390a4.44 4.44 0 0 1-4.44-4.44v-12a4.44 4.44 0 0 1 4.44-4.45h0a4.44 4.44 0 0 1 4.44 4.45v12a4.44 4.44 0 0 1-4.44 4.44"
      ></path>
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="1.01"
        d="M362.47 373.15v7.44M362.47 382.51v4.08"
      ></path>
      <path
        fill="#263238"
        stroke="#263238"
        strokeWidth="1.01"
        d="M378.92 390a4.44 4.44 0 0 1-4.44-4.44v-12a4.44 4.44 0 0 1 4.44-4.45h0a4.44 4.44 0 0 1 4.44 4.45v12a4.44 4.44 0 0 1-4.44 4.44"
      ></path>
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="1.01"
        d="M381.92 373.15v7.44M381.92 382.51v4.08"
      ></path>
      <path
        fill="#263238"
        stroke="#263238"
        strokeWidth="1.01"
        d="M398.37 390a4.44 4.44 0 0 1-4.45-4.44v-12a4.45 4.45 0 0 1 4.45-4.45h0a4.44 4.44 0 0 1 4.44 4.45v12a4.44 4.44 0 0 1-4.44 4.44"
      ></path>
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="1.01"
        d="M401.37 373.15v7.44M401.37 382.51v4.08"
      ></path>
      <path
        fill="#263238"
        stroke="#263238"
        strokeWidth="1.01"
        d="M417.81 390a4.44 4.44 0 0 1-4.44-4.44v-12a4.44 4.44 0 0 1 4.44-4.45h0a4.44 4.44 0 0 1 4.44 4.45v12a4.44 4.44 0 0 1-4.44 4.44"
      ></path>
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="1.01"
        d="M420.81 373.15v7.44M420.81 382.51v4.08"
      ></path>
      <path
        fill="#263238"
        stroke="#263238"
        strokeWidth="1.01"
        d="M320.57 421.88a4.44 4.44 0 0 1-4.44-4.44v-12a4.44 4.44 0 0 1 4.44-4.44h0a4.44 4.44 0 0 1 4.45 4.44v12a4.44 4.44 0 0 1-4.45 4.44"
      ></path>
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="1.01"
        d="M323.58 405.08v7.44M323.58 414.44v4.08"
      ></path>
      <path
        fill="#263238"
        stroke="#263238"
        strokeWidth="1.01"
        d="M340 421.88a4.44 4.44 0 0 1-4.44-4.44v-12A4.44 4.44 0 0 1 340 401h0a4.43 4.43 0 0 1 4.44 4.44v12a4.43 4.43 0 0 1-4.44 4.44"
      ></path>
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="1.01"
        d="M343.02 405.08v7.44M343.02 414.44v4.08"
      ></path>
      <path
        fill="#263238"
        stroke="#263238"
        strokeWidth="1.01"
        d="M359.47 421.88a4.44 4.44 0 0 1-4.44-4.44v-12a4.44 4.44 0 0 1 4.44-4.44h0a4.44 4.44 0 0 1 4.44 4.44v12a4.44 4.44 0 0 1-4.44 4.44"
      ></path>
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="1.01"
        d="M362.47 405.08v7.44M362.47 414.44v4.08"
      ></path>
      <path
        fill="#263238"
        stroke="#263238"
        strokeWidth="1.01"
        d="M378.92 421.88a4.43 4.43 0 0 1-4.44-4.44v-12a4.43 4.43 0 0 1 4.44-4.44h0a4.44 4.44 0 0 1 4.44 4.44v12a4.44 4.44 0 0 1-4.44 4.44"
      ></path>
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="1.01"
        d="M381.92 405.08v7.44M381.92 414.44v4.08"
      ></path>
      <path
        fill="#263238"
        stroke="#263238"
        strokeWidth="1.01"
        d="M398.37 421.88a4.44 4.44 0 0 1-4.45-4.44v-12a4.44 4.44 0 0 1 4.45-4.44h0a4.44 4.44 0 0 1 4.44 4.44v12a4.44 4.44 0 0 1-4.44 4.44"
      ></path>
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="1.01"
        d="M401.37 405.08v7.44M401.37 414.44v4.08"
      ></path>
      <path
        fill="#263238"
        stroke="#263238"
        strokeWidth="1.01"
        d="M417.81 421.88a4.44 4.44 0 0 1-4.44-4.44v-12a4.44 4.44 0 0 1 4.44-4.44h0a4.43 4.43 0 0 1 4.44 4.44v12a4.43 4.43 0 0 1-4.44 4.44"
      ></path>
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="1.01"
        d="M420.81 405.08v7.44M420.81 414.44v4.08"
      ></path>
      <path
        fill="none"
        stroke="#263238"
        strokeWidth="0.5"
        d="M330.41 361.74v2.5"
      ></path>
      <path
        fill="none"
        stroke="#263238"
        strokeDasharray="4.638909816741943,4.638909816741943"
        strokeWidth="0.5"
        d="M330.41 368.88v53.35"
      ></path>
      <path
        fill="none"
        stroke="#263238"
        strokeWidth="0.5"
        d="M330.41 424.55v2.5M349.86 361.74v2.5"
      ></path>
      <path
        fill="none"
        stroke="#263238"
        strokeDasharray="4.638909816741943,4.638909816741943"
        strokeWidth="0.5"
        d="M349.86 368.88v53.35"
      ></path>
      <path
        fill="none"
        stroke="#263238"
        strokeWidth="0.5"
        d="M349.86 424.55v2.5M369.31 361.74v2.5"
      ></path>
      <path
        fill="none"
        stroke="#263238"
        strokeDasharray="4.638909816741943,4.638909816741943"
        strokeWidth="0.5"
        d="M369.31 368.88v53.35"
      ></path>
      <path
        fill="none"
        stroke="#263238"
        strokeWidth="0.5"
        d="M369.31 424.55v2.5M388.75 361.74v2.5"
      ></path>
      <path
        fill="none"
        stroke="#263238"
        strokeDasharray="4.638909816741943,4.638909816741943"
        strokeWidth="0.5"
        d="M388.75 368.88v53.35"
      ></path>
      <path
        fill="none"
        stroke="#263238"
        strokeWidth="0.5"
        d="M388.75 424.55v2.5M408.2 361.74v2.5"
      ></path>
      <path
        fill="none"
        stroke="#263238"
        strokeDasharray="4.638909816741943,4.638909816741943"
        strokeWidth="0.5"
        d="M408.2 368.88v53.35"
      ></path>
      <path
        fill="none"
        stroke="#263238"
        strokeWidth="0.5"
        d="M408.2 424.55v2.5"
      ></path>
      <path
        fill="none"
        stroke="#263238"
        strokeDasharray="5"
        strokeWidth="0.5"
        d="M312.16 394.87h113.57"
      ></path>
    </g>
    <g
      id="freepik--Ampoule--inject-70"
      stroke="#263238"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.01"
    >
      <path
        fill="#263238"
        d="M420.74 368.13V351.8h-26.41v16.33L388 376.8a7.2 7.2 0 0 0-1.37 4.22v50.47h41.77V381a7.2 7.2 0 0 0-1.37-4.22ZM394.44 344.31h26.31v2.83h-26.31z"
      ></path>
      <path fill={primary} d="M390.49 337.88h34.08v7.25h-34.08z"></path>
      <rect
        width="34.08"
        height="5.76"
        x="390.49"
        y="347"
        fill="#263238"
        rx="1.27"
      ></rect>
      <path fill={primary} d="M386.64 384.11h27v33.62h-27z"></path>
    </g>
    <g id="freepik--Device--inject-70">
      <rect
        width="161.75"
        height="315.66"
        x="107.08"
        y="115.68"
        fill="#263238"
        rx="14.52"
      ></rect>
      <g clipPath="url(#freepik--clip-path--inject-70)">
        <path
          fill="#fff"
          d="M121 115.68a13.94 13.94 0 0 0-13.94 13.94V417.4a13.9 13.9 0 0 0 5 10.69l94.37-312.41Z"
          opacity="0.2"
        ></path>
        <path
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M193.46 422.21a5.5 5.5 0 1 0-5.5 5.5 5.5 5.5 0 0 0 5.5-5.5"
        ></path>
      </g>
      <rect
        width="161.75"
        height="315.66"
        x="107.08"
        y="115.68"
        fill="none"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        rx="14.52"
      ></rect>
      <path fill={primary} d="M114.28 137.12h147.37v275.49H114.28z"></path>
      <g clipPath="url(#freepik--clip-path-2--inject-70)">
        <path
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.01"
          d="m234 273.06-23.36-21.11-22.68.39-22.68-.39-23.36 21.11-55.24 36.38v107.34h202.56V309.44z"
        ></path>
        <path
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.01"
          d="M186.07 352.47 176 366.75s12-5.44 23.56-10.15 26.09-19.57 29.35-25 8-13.41 8-13.41L222.39 307H238s-.37-17-5.08-30.81"
        ></path>
        <path
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.01"
          d="M181.47 358.71c-1.69-.71-3.4-1.42-5.11-2.11-11.59-4.71-26.09-19.57-29.35-25s-8-13.41-8-13.41L153.54 307H138s.37-17 5.08-30.81"
        ></path>
        <path
          fill="#fff"
          d="M163.27 253.55s-4.51 71.61 22.8 98.92c0 0 28.81-19.78 28.81-98.06Z"
        ></path>
        <g clipPath="url(#freepik--clip-path-3--inject-70)">
          <path
            fill={primary}
            d="M178.52 172.06h23.23a25.11 25.11 0 0 1 25.11 25.11v52.11a33.71 33.71 0 0 1-33.7 33.72h-6a33.71 33.71 0 0 1-33.71-33.71v-52.12a25.11 25.11 0 0 1 25.11-25.11Z"
          ></path>
          <path
            fill="#fff"
            d="M178.52 172.06h23.23a25.11 25.11 0 0 1 25.11 25.11v52.11a33.71 33.71 0 0 1-33.7 33.72h-6a33.71 33.71 0 0 1-33.71-33.71v-52.12a25.11 25.11 0 0 1 25.11-25.11Z"
            opacity="0.5"
          ></path>
        </g>
        <path
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.01"
          d="M163.27 253.55s-4.51 71.61 22.8 98.92c0 0 28.81-19.78 28.81-98.06Z"
        ></path>
        <path
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.01"
          d="M174.76 247.45s-2.5 31.25 12.59 43.17c0 0 15.92-8.63 15.92-42.79ZM169.72 300.43l17.63-9.81 19.79 13.68"
        ></path>
        <path
          fill={primary}
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.01"
          d="m192.09 306.45 3.44-9.89-8.18-5.94-10.75 5.94 5.59 9-8.82 26.49c3.18 7.92 7.32 15 12.7 20.39 0 0 7.66-5.26 15.08-21.09Z"
        ></path>
        <circle
          cx="225.01"
          cy="346.26"
          r="14.37"
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.01"
          transform="rotate(-9.26 225.014 346.222)"
        ></circle>
        <circle
          cx="225.01"
          cy="346.26"
          r="10.33"
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.01"
          transform="rotate(-67.65 225 346.263)"
        ></circle>
        <path
          fill="#263238"
          d="M225 348.46a2.2 2.2 0 0 1-2.2-2.2v-84.43a2.2 2.2 0 0 1 4.4 0v84.43a2.19 2.19 0 0 1-2.2 2.2"
        ></path>
        <path
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.01"
          d="M155.57 379.08h-.21c-2-.34-21.19-19-23-24s-1.3-13-1.28-13.3a1.1 1.1 0 0 1 2.2.14c0 .07-.45 7.85 1.15 12.44 1.47 4.19 18.55 20.92 21.25 22.55 1.5-.47 7-5.4 9-10.45a1.1 1.1 0 1 1 2.05.81c-2.08 5.35-8.63 11.81-11.16 11.81m.04-2.2"
        ></path>
        <path
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.01"
          d="M138.52 379.08c-2.54 0-9.08-6.46-11.2-11.87a1.1 1.1 0 0 1 2.05-.81c2 5.05 7.49 10 9 10.45 2.7-1.63 19.78-18.36 21.25-22.55 1.6-4.59 1.16-12.37 1.15-12.44a1.1 1.1 0 1 1 2.2-.14c0 .34.48 8.3-1.28 13.3s-20.91 23.7-23 24Zm-.04-2.2"
        ></path>
        <path
          fill="#263238"
          d="M147.31 304.45a2.21 2.21 0 0 1-2.2-2.2v-36.83a2.2 2.2 0 0 1 4.4 0v36.83a2.2 2.2 0 0 1-2.2 2.2"
        ></path>
        <path
          fill="#263238"
          d="M161.68 346.22a2.21 2.21 0 0 1-2.2-2.2v-26.5a12.62 12.62 0 1 0-25.24 0V344a2.2 2.2 0 0 1-4.4 0v-26.5a17 17 0 0 1 34 0V344a2.21 2.21 0 0 1-2.16 2.22"
        ></path>
        <rect
          width="5.59"
          height="7.77"
          x="124.7"
          y="362.43"
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.01"
          rx="2.56"
          transform="rotate(-37.84 127.506 366.335)"
        ></rect>
        <rect
          width="5.59"
          height="7.77"
          x="163.44"
          y="362.43"
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.01"
          rx="2.56"
          transform="rotate(-142.16 166.227 366.317)"
        ></rect>
        <rect
          width="11.37"
          height="19.81"
          x="145.36"
          y="207.27"
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.01"
          rx="5.22"
        ></rect>
        <rect
          width="11.37"
          height="19.81"
          x="222.2"
          y="207.27"
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.01"
          rx="5.22"
        ></rect>
        <path
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.01"
          d="M178.52 157.64h23.23a25.11 25.11 0 0 1 25.11 25.11v52.11a33.71 33.71 0 0 1-33.71 33.71h-6a33.71 33.71 0 0 1-33.71-33.71v-52.11a25.11 25.11 0 0 1 25.08-25.11"
        ></path>
        <rect
          width="15.36"
          height="4.12"
          x="168.03"
          y="201.49"
          fill="#263238"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.01"
          rx="1.89"
        ></rect>
        <rect
          width="15.36"
          height="4.12"
          x="198.38"
          y="201.49"
          fill="#263238"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.01"
          rx="1.89"
        ></rect>
        <path
          fill="#263238"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.01"
          d="M180 214.05c0 2.38-1.09 4.3-2.44 4.3s-2.43-1.92-2.43-4.3 1.09-4.31 2.43-4.31 2.44 1.93 2.44 4.31M207.38 214.05c0 2.38-1.09 4.3-2.44 4.3s-2.44-1.92-2.44-4.3 1.09-4.31 2.44-4.31 2.44 1.93 2.44 4.31"
        ></path>
        <path
          fill="#263238"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.01"
          d="M203.27 157.64H177a23.59 23.59 0 0 0-23.59 23.59v55.43a31.91 31.91 0 0 0 31.91 31.91H195a31.9 31.9 0 0 0 31.91-31.91v-55.43a23.59 23.59 0 0 0-23.64-23.59m18 71.21s0 6.74-6.74 13.49c0 0-7.12-9.37-10.12-10.12-1.94-.48-9.16-.34-14.06-.18-4.89-.16-12.12-.3-14 .18-3 .75-10.12 10.12-10.12 10.12-6.74-6.75-6.74-13.49-6.74-13.49v-30.73l3.51-4.62a10.41 10.41 0 0 0 .49-12.14 9.94 9.94 0 0 1 1.41-12.57l.07-.06a9.94 9.94 0 0 1 12.25-1.24l5.24 4.11a13 13 0 0 0 16 0l5.22-4.11a10 10 0 0 1 12.32 1.24l.06.06a10.05 10.05 0 0 1 1.32 12.71 10.38 10.38 0 0 0 .59 12l3.63 4.62Z"
        ></path>
        <path
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.01"
          d="M195.76 227.57s4.5-.6 4.5 2-2.63 4.49-7.87 2.62"
        ></path>
        <path
          fill="#fff"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.01"
          d="M195.38 206.36v21.74a4.5 4.5 0 0 1-4.49 4.5h-4c-2.86.2-3.86-.5-4.2-1.71a3 3 0 0 1 .38-2.39h0c0-1.12 4.78-1.12 4.78-1.12M190.67 245a23.85 23.85 0 0 1-11.91-3.11 1.65 1.65 0 0 1 1.76-2.79A21.17 21.17 0 0 0 201 239a1.65 1.65 0 1 1 1.55 2.91 25 25 0 0 1-11.88 3.09"
        ></path>
        <path
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.01"
          d="M202.71 220.55h7.26M173.87 220.55h7.26"
        ></path>
        <circle
          cx="145.11"
          cy="393.26"
          r="12.98"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.724"
        ></circle>
        <path
          fill="#263238"
          d="M145.09 396.47a2.62 2.62 0 0 1-2.62-2.62v-8.3a2.62 2.62 0 0 1 2.62-2.62 2.62 2.62 0 0 1 2.62 2.62v8.3a2.62 2.62 0 0 1-2.62 2.62"
        ></path>
        <path
          fill="#263238"
          d="M145.11 398.36a4.64 4.64 0 0 1-4.63-4.63v-3.9a.48.48 0 0 1 .48-.48.47.47 0 0 1 .48.48v3.9a3.68 3.68 0 0 0 7.35 0v-3.9a.47.47 0 0 1 .48-.48.48.48 0 0 1 .48.48v3.9a4.64 4.64 0 0 1-4.64 4.63"
        ></path>
        <path
          fill="#263238"
          d="M145.11 403.34a.47.47 0 0 1-.47-.48v-5a.48.48 0 1 1 1 0v5a.47.47 0 0 1-.53.48"
        ></path>
        <path
          fill="#263238"
          d="M148.31 403.6h-6.39a.49.49 0 0 1-.48-.48.48.48 0 0 1 .48-.48h6.39a.48.48 0 0 1 .48.48.49.49 0 0 1-.48.48"
        ></path>
        <circle
          cx="231.06"
          cy="393.26"
          r="12.98"
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.724"
        ></circle>
        <path
          fill="#263238"
          d="m239.07 389.46-3.79 2.19v-1.8a1.55 1.55 0 0 0-1.55-1.54h-8.56a1.54 1.54 0 0 0-1.55 1.54v6.9a1.54 1.54 0 0 0 1.55 1.55h8.56a1.55 1.55 0 0 0 1.55-1.55V395l3.79 2.19Z"
        ></path>
        <circle
          cx="188.09"
          cy="393.26"
          r="12.98"
          fill="#263238"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.724"
        ></circle>
        <path
          fill={primary}
          d="M194.66 390.52h-13.14a2.48 2.48 0 0 0-2.44 2.93l.38 2.06a.62.62 0 0 0 .6.5h4a.62.62 0 0 0 .62-.62v-2.23h6.9v2.23a.62.62 0 0 0 .62.62h4a.62.62 0 0 0 .61-.5l.38-2.06a2.48 2.48 0 0 0-2.53-2.93"
        ></path>
        <path
          fill="none"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.821"
          d="M243.63 139.98h12.22v6.7h-12.22z"
        ></path>
        <path
          fill="#263238"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.725"
          d="M243.63 139.98h9.53v6.7h-9.53zM255.82 141.85h1.72v2.95h-1.72z"
        ></path>
        <path
          fill="#263238"
          stroke="#263238"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.883"
          d="M116.81 142.05h2.24v3.84h-2.24zM120.33 140.71h2.24v5.19h-2.24zM123.85 139.11h2.24v6.78h-2.24z"
        ></path>
      </g>
      <path
        fill="none"
        stroke="#263238"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M114.28 137.12h147.37v275.49H114.28z"
      ></path>
    </g>
    <g
      id="freepik--Floor--inject-70"
      fill="none"
      stroke="#263238"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.01"
    >
      <path d="M80.32 431.34h374.11M59.82 431.34h9.89"></path>
    </g>
  </svg>
);

export default SvgIcon;
