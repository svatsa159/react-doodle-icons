import * as React from "react";
import { SVGProps } from "react";

const SvgTick = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 130 90" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M34.716 81.503c1.605-1.527 2.487-2.3 3.294-3.143 25.88-27.055 54.22-51.413 82.73-75.586 1.077-.913 2.181-2.078 3.456-2.404 1.537-.394 4.045-.653 4.732.183.924 1.125 1.087 3.57.524 5.048-.67 1.758-2.302 3.264-3.783 4.581-8.836 7.857-17.92 15.444-26.601 23.464a5387.288 5387.288 0 0 0-54.093 50.685c-7.85 7.443-10.871 7.744-18.095-.208-4.755-5.237-19.105-22.886-23.5-28.446a20.624 20.624 0 0 1-1.653-2.726c-.995-1.76-1.64-3.697.33-5.062 2.195-1.518 3.753.067 5.054 1.717 1.316 1.67 2.439 3.507 3.849 5.09 4.376 4.916 19.03 21.624 23.756 26.807Z" />
  </svg>
);

export default SvgTick;
