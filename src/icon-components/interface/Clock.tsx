import * as React from "react";
import { SVGProps } from "react";

const SvgClock = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 161 155" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clock_svg__a)">
      <path d="M158.715 93.677c-.913 6.568-3.897 12.459-6.91 18.243a78.518 78.518 0 0 1-20.918 25.542c-10.284 8.164-22.043 13.053-34.897 15.309-7.967 1.399-15.994 2.417-24.131 2.003-19.618-.998-36.552-7.865-50.315-22.282A93.714 93.714 0 0 1 6.79 111.721c-2.281-4.251-3.137-8.697-3.906-13.254-1.42-8.431-2.293-16.855-1.36-25.472 1.152-10.642 4.087-20.616 9.393-29.887a91.779 91.779 0 0 1 25.841-29.143C47.313 6.308 59.257 2.385 72.162.825a88.75 88.75 0 0 1 40.607 4.236c12.778 4.49 24.182 11.342 31.894 22.834 7.712 11.49 13.063 23.9 14.879 37.946 1.508 11.653-.035 22.139-.827 27.836Zm-7.453-17.373c-.065-8.18-.835-16.272-3.799-23.879-2.443-6.268-5.346-15.817-10.288-20.765-6.867-9.561-16.425-15.398-27.25-19.257a79.528 79.528 0 0 0-38.598-3.969C58.047 10.352 46.15 15.231 36.145 24.3a116.442 116.442 0 0 0-8.427 8.485c-11.305 12.593-17.4 27.634-17.394 52.376.004 15.426 7.606 28.612 18.495 39.882 11.558 11.963 25.49 17.96 41.786 19.3 7.914.648 15.715-.214 23.497-1.417 23.271-3.596 39.881-16.19 50.591-37.104 6.455-12.605 6.179-24.885 6.569-29.518Z" />
      <path d="M87.72 74.812h3.986c10.079.013 20.157.01 30.235.065 1.319.01 2.631.18 3.909.507a2.92 2.92 0 0 1 2.326 2.889 2.987 2.987 0 0 1-2.032 3.131 17.02 17.02 0 0 1-5.176.867c-9.855-.089-19.709-.312-29.563-.484-2.104-.037-4.21.008-6.311-.099a11.388 11.388 0 0 1-3.23-.584c-1.648-.59-2.316-1.852-2.192-3.656.259-3.752.44-7.511.578-11.27.448-12.184.849-24.369 1.31-36.552.103-1.213.296-2.417.575-3.602.304-1.626 1.254-2.57 2.957-2.566 1.761.003 2.57 1.153 2.874 2.687.249 1.192.38 2.405.393 3.623-.012 13.08-.052 26.16-.122 39.24-.01 1.754-.304 3.507-.517 5.804Z" />
    </g>
    <defs>
      <clipPath id="clock_svg__a">
        <path fill="#fff" transform="translate(.777)" d="M0 0h160v155H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgClock;