import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 85 150" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M42.668 67.323c.145-17.996.262-35.992.46-53.988.04-3.587.32-7.18.672-10.752A2.954 2.954 0 0 1 45.966.05c.919-.294 2.222.726 2.414 1.945.186 1.181.474 2.356.545 3.544.46 7.582 1.11 15.165 1.247 22.754.28 15.594.35 31.192.369 46.788.017 14.797-.168 29.595-.203 44.392-.005 2.376.294 4.753.506 7.125a.963.963 0 0 0 .627.684c.367.043.984-.065 1.115-.309 2.473-4.547 5.073-9.038 7.28-13.714 5.13-10.878 11.423-21.082 17.737-31.279 1.038-1.675 2.092-3.432 4.15-4.108.376-.122 1.018-.314 1.143-.158.522.56.897 1.24 1.091 1.98a4.286 4.286 0 0 1-.368 2.304 150.696 150.696 0 0 1-3.653 7.557c-9.25 17.717-18.556 35.406-27.781 53.136-3.479 6.688-6.852 9.866-14.5 1.838-2.205-2.313-4.407-4.653-6.367-7.168A4690.143 4690.143 0 0 1 4.18 102.241a38.326 38.326 0 0 1-3.085-5.096c-.629-1.158-.255-2.318.498-3.318.83-1.1 3.244-1.784 4.306-1.405 2.356.844 4.085 2.524 5.65 4.328A2219.325 2219.325 0 0 1 29.5 117.704c3.881 4.563 7.706 9.174 11.595 13.729.193.225.788.237 1.146.145a1.029 1.029 0 0 0 .63-.718c.156-2.38.354-4.766.342-7.149-.1-18.797-.223-37.593-.372-56.39l-.172.002Z" />
  </svg>
);

export default SvgArrowDown;