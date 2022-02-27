import * as React from "react";
import { SVGProps } from "react";

const SvgRectangle = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 127 86" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#rectangle_svg__a)">
      <path d="M64.626 1.1c16.645 0 33.291.004 49.937.013a54.266 54.266 0 0 1 6.355.323c3.67.44 5.53 2.582 5.533 6.261 0 2.433-.157 4.865-.206 7.298-.233 11.722-.385 23.445-.699 35.164-.241 8.95-.253 17.924-1.815 26.786a27.142 27.142 0 0 1-1.236 4.456c-.97 2.695-2.919 3.992-5.871 4.01-21.113.129-42.225.34-63.337.445-14.298.071-28.602.012-42.902.009-1.006 0-2.015.031-3.016-.035-4.366-.286-6.338-2.56-6.242-6.934.201-9.178.4-18.356.478-27.536.1-11.615-.019-23.233.16-34.847.065-4.3.652-8.596 1.109-12.883C3.17.845 3.848.195 6.7.194c5.68 0 11.36.21 17.043.225C37.373.457 51 .432 64.628.432c-.002.222-.002.445-.002.668Zm49.768 75.866c1.25-4.819 2.882-61.597 1.946-65.418-35.892-.83-71.813.242-107.655-1.46-.529 3.324.873 65.426 1.55 67.713 34.617.117 69.32.293 104.158-.834l.001-.001Z" />
    </g>
    <defs>
      <clipPath id="rectangle_svg__a">
        <path fill="#fff" transform="translate(.777)" d="M0 0h126v86H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgRectangle;