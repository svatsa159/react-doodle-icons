import * as React from "react";
import { SVGProps } from "react";

const SvgVector = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 161 101" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#Vector_svg__a)">
      <path d="M99.795 38.28c1.371-.958 2.449-1.742 3.558-2.481 11.192-7.462 23.275-8.962 36.015-5.054 15.452 4.739 21.802 19.979 20.478 32.265-1.119 10.416-6.241 18.828-13.765 25.842-2.926 2.728-6.691 4.237-10.533 5.01-7.011 1.41-14.075 2.678-21.175 3.492-18.091 2.076-36.295 1.975-54.469 2.267-8.544.137-17.064-.021-25.408-2.167-2.494-.64-4.97-1.362-7.39-2.227-13.46-4.817-21.023-14.87-24.364-28.295C-.394 54.33.346 41.776 6.505 30.258 15.464 13.506 29.371 2.66 48.611 1.103 65.923-.297 80.4 6.388 91.09 20.481c3.983 5.25 6.707 11.105 8.705 17.799ZM64.09 89.642c4.376-.177 8.755-.282 13.127-.544 14.566-.875 29.123-1.958 43.697-2.64a35.432 35.432 0 0 0 15.352-4.343c8.278-4.425 12.377-11.458 12.849-20.675.525-10.252-4.947-18.608-14.195-21.122-10.6-2.882-20.51-1.312-29.065 5.978-2.552 2.174-4.745 4.767-7.13 7.14a12.305 12.305 0 0 1-2.517 2.18c-2.395 1.322-4.996.328-6.165-2.147a5.132 5.132 0 0 1-.077-4.22c1.357-3.655.834-7.263-.383-10.861a45.124 45.124 0 0 0-7.96-13.941C70.82 11.089 49.521 6.85 34.892 15.047 14.405 26.533 6.866 44.871 11.937 65.964c2.408 10.02 8.336 17.298 18.501 20.46a76.714 76.714 0 0 0 9.459 2.288c8.011 1.413 16.105 1.138 24.193.93Z" />
    </g>
    <defs>
      <clipPath id="Vector_svg__a">
        <path
          fill="#fff"
          transform="translate(.792 .904)"
          d="M0 0h159.49v99.107H0z"
        />
      </clipPath>
    </defs>
  </svg>
);

export default SvgVector;