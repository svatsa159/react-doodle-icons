import * as React from "react";
import { SVGProps } from "react";

const SvgFlip = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 158 156" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#flip_svg__a)">
      <path d="M148.569 103.397c-3.455-6.52-7.03-13.26-10.469-19.927l-1.404-2.718c-4.141-8.015-8.424-16.302-12.18-24.648-5.498-12.213-12.513-23.483-18.01-31.937-1.886-2.9-3.958-3.903-6.522-3.153-2.565.75-3.647 2.526-3.727 6.13-.007.326-.007.65-.007 1.015v37.7a.666.666 0 0 0-.53.667c.068 3.299.129 6.597.182 9.896.13 7.57.266 15.398.536 23.095.147 4.164.43 8.389.702 12.475.252 3.762.512 7.653.665 11.481.194 4.833 1.751 6.909 6.677 8.886a9.804 9.804 0 0 0 3.587.68h.264c4.666-.13 9.333-.29 13.999-.449 7.288-.247 14.825-.502 22.237-.65 4.716-.093 7.953-2.641 11.125-5.472a5.232 5.232 0 0 0 1.512-5.583 26.48 26.48 0 0 0-1.743-4.431c-2.283-4.36-4.581-8.711-6.894-13.057Zm-3.747 17.896-35.617 2.561c-1.479-16.074-1.831-32.337-2.17-48.071-.241-11.115-.488-22.577-1.133-33.912.072.13.142.266.208.401.694 1.41 1.409 2.81 2.124 4.21 1.724 3.38 3.507 6.87 4.937 10.418 4.996 12.396 11.195 24.43 17.189 36.067 1.376 2.67 2.748 5.343 4.114 8.019 1.558 3.055 3.17 6.14 4.731 9.125 1.19 2.276 2.376 4.554 3.556 6.835.529 1.028 1.013 2.076 1.573 3.291.156.339.318.691.488 1.056ZM7.346 131.061c.172.005.344.004.519.004h.17l11.256.009c7.465.006 14.93.011 22.395.013 4.327 0 8.654-.003 12.982-.008 2.465.014 4.93-.099 7.383-.339 3.36-.35 4.834-1.812 5.255-5.217.038-.312.082-.625.13-.937.153-.922.239-1.854.259-2.789-.013-4.39-.04-8.78-.082-13.169-.03-3.722-.055-7.444-.075-11.166-.02-4.628-.016-9.256-.01-13.884l.003-6.11c.561-15.8.024-31.436-.956-50.05-.085-1.603-.2-3.798-2.36-4.848-1.86-.905-3.866-.488-5.652 1.177A29.078 29.078 0 0 0 54.03 28.8c-.619.937-1.24 1.874-1.862 2.81-3.503 5.282-7.126 10.743-10.297 16.349a2339.094 2339.094 0 0 0-25.386 46.097c-4.103 7.653-7.997 15.575-11.762 23.237l-2.625 5.33c-1.463 2.964-1.012 4.852-.377 5.915.929 1.563 2.878 2.437 5.626 2.523Zm5.22-10.043 45.642-78.737-2 79.286c-7.844.345-15.544.08-23.685-.201-5.359-.185-10.859-.375-16.437-.375-1.17 0-2.342.009-3.52.027ZM75.692 99.311c-.392 15.221-.75 31.048-1.063 47.043a16.557 16.557 0 0 0 .668 5.131 5.263 5.263 0 0 0 5.106 3.859c.085.003.17.004.253.004a5.156 5.156 0 0 0 5.082-3.499 13.84 13.84 0 0 0 .893-4.416l.008-.325c.223-8.97.455-18.25.495-27.381.18-39.109.287-77.444.367-109.785a30.246 30.246 0 0 0-.584-6.097 4.503 4.503 0 0 0-1.5-2.675A4.486 4.486 0 0 0 82.554.08a4.56 4.56 0 0 0-2.928.862 4.573 4.573 0 0 0-1.732 2.518 17.639 17.639 0 0 0-.68 4.439l-.109 4.372c-.226 9.067-.46 18.441-.54 27.666-.078 8.805-.06 17.459-.041 25.828.008 3.408.015 6.715.015 9.88-.106 2.914-.213 5.655-.315 8.276-.207 5.363-.404 10.429-.532 15.39Z" />
    </g>
    <defs>
      <clipPath id="flip_svg__a">
        <path fill="#fff" transform="translate(.777)" d="M0 0h157v156H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFlip;