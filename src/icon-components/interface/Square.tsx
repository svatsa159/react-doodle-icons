import * as React from "react";
import { SVGProps } from "react";

const SvgSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 112 104" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#square_svg__a)">
      <path d="M3.088 53.606c.323-6.996.672-13.992.952-20.99.236-5.886.372-11.776.59-17.663.098-2.665.283-5.33.439-7.99.077-1.32.558-2.48 1.906-2.83 2.743-.716 5.5-1.685 8.29-1.841 10.03-.563 20.07-.91 30.116-1.188C56.748.79 68.125.324 79.487.519c9.147.161 18.283 1.156 27.414 1.908 3.405.28 4.953 2.351 4.825 5.536-.377 9.438-.631 18.881-1.021 28.32-.581 13.993-1.222 27.983-1.857 41.974-.242 5.33-.599 10.656-.792 15.989-.2 5.515-1.634 6.695-7 6.753-11.81.123-23.62.496-35.425.823-6.952.195-13.902.482-20.852.748-11.802.451-23.603.91-35.404 1.376-.774.03-1.549.02-2.319-.011-4.088-.161-5.882-1.864-5.8-6.01.139-7.003.435-14.003.763-21 .363-7.773.836-15.54 1.261-23.31l-.192-.009Zm97.066 40.245c1.554-9.505 4.244-77.888 3.281-82.68-1.932-.17-3.897-.39-5.867-.507-8.813-.515-17.63-1.44-26.44-1.396-13.798.068-27.592.789-41.387 1.25-6.354.211-12.707.46-18.849.684L9.039 96.75l91.115-2.899Z" />
    </g>
    <defs>
      <clipPath id="square_svg__a">
        <path fill="#fff" transform="translate(.777)" d="M0 0h111v104H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSquare;