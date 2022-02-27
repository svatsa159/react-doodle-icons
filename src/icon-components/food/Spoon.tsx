import * as React from "react";
import { SVGProps } from "react";

const SvgSpoon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 60 158" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#spoon_svg__a)">
      <path d="M16.785 106.886c0-4.266.06-8.532-.013-12.795-.138-8.079-.266-16.161-.618-24.232-.062-1.414-.985-2.949-1.885-4.14-2.51-3.304-5.382-6.338-7.817-9.69C.075 47.261-.958 37.721 2.87 27.633c3.552-9.36 8.894-17.414 17.603-22.727 11.34-6.918 23.457-4.66 31.439 6.432 7.495 10.417 8.87 22.033 5.246 34.307a36.806 36.806 0 0 1-5.169 11.258c-3.206 4.463-6.6 8.783-9.808 13.243a5.529 5.529 0 0 0-.957 3.019c-.055 11.899.319 23.81-.11 35.692-.413 11.429-1.564 22.834-2.553 34.235a26.973 26.973 0 0 1-1.765 7.154c-2.093 5.486-9.352 8.138-14.643 5.585a8 8 0 0 1-4.332-5.321 32.523 32.523 0 0 1-1.365-7.928c-.143-11.898-.066-23.799-.066-35.699l.394.003Zm10.953 42.284c1.987-2.034 2.35-2.632 2.615-5.211.414-4.016.877-8.04.988-12.07.342-12.45.621-24.903.732-37.356.053-6.058-.423-12.118-.48-18.178-.062-6.539 1.258-12.672 5.804-17.765 1.565-1.755 2.837-3.766 4.331-5.587 3.421-4.164 5.416-8.94 6.686-14.153a28.693 28.693 0 0 0-3.704-22.906c-4.2-6.702-11.126-8.78-18.092-5.546a21.96 21.96 0 0 0-7.928 6.122 39.14 39.14 0 0 0-7.983 17.21 20.152 20.152 0 0 0 2.841 15.458 69.354 69.354 0 0 0 4.296 6.025c3.426 4.244 6.729 8.498 6.075 14.44.006.112.028.222.066.328a144.688 144.688 0 0 1 2.68 27.092c.23 13.919.393 27.84.625 41.759.053 3.237.276 6.473.448 10.338Z" />
    </g>
    <defs>
      <clipPath id="spoon_svg__a">
        <path
          fill="#fff"
          transform="translate(.591 .838)"
          d="M0 0h59.07v156.208H0z"
        />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSpoon;
