import * as React from "react";
import { SVGProps } from "react";

const SvgBank = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#bank_svg__a)">
      <path d="M12.497 138.101c-.304-2.469-.54-4.683-.859-6.885-.328-2.251.02-4.142 1.914-5.739.684-.577 1.012-1.921 1.003-2.911-.04-4.604-.363-9.206-.377-13.81-.018-5.948.167-11.897.253-17.846.022-1.558.003-3.117.003-4.756a16.932 16.932 0 0 0-1.572-.747c-2.42-.853-3.145-2.664-2.943-5.054.206-2.423.367-4.85.57-7.597-1.655 0-2.871.085-4.068-.021-1.652-.147-3.662-.013-4.35-1.903-.702-1.922-.675-4.004.81-5.727 1.76-2.04 3.435-4.17 5.345-6.06 4.711-4.66 9.47-9.277 14.33-13.783 13.765-12.755 27.973-24.994 42.9-36.384 2.498-1.904 4.917-3.925 7.303-5.973C76.163-.015 79.86-.18 83.733 1.682a62.141 62.141 0 0 1 5.561 3.16c20.614 12.684 40.26 26.66 57.678 43.564 3.378 3.282 6.471 6.855 9.654 10.332a6.442 6.442 0 0 1 1.822 4.888c-.169 3.399-2.181 4.949-5.174 5.508.77 8.185.313 9.04-6.457 12.015v40.574c5.842 2.771 4.905 8.344 4.769 13.749.787.226 1.505.451 2.231.637 2.713.692 3.019 1.289 3.151 4.21.131 2.896.647 5.772.859 8.664.394 5.35-1.123 6.914-6.398 6.977-29.881.358-59.764.591-89.64 1.16-17.515.334-35.02 1.215-52.53 1.85-1.01.037-2.022.121-3.03.099-3.57-.08-5.263-1.675-5.123-5.167.143-3.584.448-7.171.886-10.732.406-3.315 1.743-4.463 5.05-4.753 1.776-.14 3.558-.205 5.455-.316Zm137.758-76.523c-2.823-3.042-5.162-5.733-7.68-8.243-16.48-16.422-35.217-29.876-55.14-41.756-1.733-1.033-3.57-1.889-5.316-2.896-1.772-1.02-3.35-.965-4.916.445-1.247 1.125-2.58 2.166-3.932 3.167C52.478 27.67 33.12 44.727 14.361 62.488c-.782.74-1.483 1.568-2.56 2.711 46.2-2.719 91.959-1.304 138.454-3.621Zm-52.639 73.749h24.876c0-2.723-.152-5.285.038-7.822.236-3.15 3.059-3.8 5.507-4.903l-.915-40.575c-3.372-1.235-4.078-3.885-3.53-7.264.132-1.417.146-2.842.04-4.261H94.205c.568 2.714 1.096 4.864 1.457 7.04.596 3.582-.119 4.98-3.305 6.913-.378.23-.745.477-1.147.735-.089.447-.133.9-.131 1.356 1.162 11.17 1.955 22.352 1.678 33.596-.02.826.742 1.688 1.19 2.505 1.001 1.828 2.406 3.533 2.958 5.483.625 2.205.493 4.624.711 7.197ZM33.71 84.806l3.848 39.151c4.866.623 5.9 1.67 6.352 6.598.17 1.854.18 3.722.255 5.404h22.937c-.197-2.739-.36-5.054-.533-7.371-.155-2.092.209-3.915 1.798-5.544a4.882 4.882 0 0 0 1.055-3.247c-.302-11.42-.716-22.84-1.109-34.538-2.993-.925-3.667-3.326-3.328-6.498.151-2.454.17-4.914.054-7.369H39.453c.365 1.62.627 2.801.898 3.98 1.614 7.001.63 8.487-6.642 9.434ZM8.325 151.915c1.63 0 3.066.039 4.499-.006 18.177-.58 36.35-1.378 54.53-1.714 26.27-.488 52.545-.644 78.818-.951 1.42-.018 2.839-.128 4.425-.203l.525-6.363c-47.892-.299-95.336-.58-142.794 2.56l-.003 6.677Zm66.654-66.61c.81 12.307 1.601 24.305 2.39 36.267h7.788l-.615-36.268H74.98Zm-54.491.058 1.737 38.436h7.268c-1.841-12.92-2.155-25.716-1.995-38.436h-7.01Zm113.397-3.49v40.683l6.044-.439c.221-13.734.435-27.12.656-40.758l-6.7.514Zm-97.041 48.198c-6.51.439-12.75-.189-19.083 1.221-.205 2.22-.394 4.254-.603 6.533l20.549-1.145-.863-6.609Zm51.79-58.993H70.418l.87 6.39h16.819l.527-6.39Zm.373 57.618c-5.185.053-10.247.147-15.332.618-.302 2.325-.543 4.177-.787 6.077h18.006l-1.887-6.695Zm55.772 6.638-1.046-6.466-14.985.656c-.248 2.203-.44 3.913-.657 5.807l16.688.003ZM16.307 77.514h15.875v-5.946l-16.576.848.701 5.098ZM130.02 73.83c4.624-.35 8.754-.626 12.876-.99 2.45-.215 2.64-.581 2.223-3.819l-15.933.684.834 4.125Z" />
    </g>
    <defs>
      <clipPath id="bank_svg__a">
        <path
          fill="#fff"
          transform="translate(.924 .421)"
          d="M0 0h158.177v158.834H0z"
        />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBank;
