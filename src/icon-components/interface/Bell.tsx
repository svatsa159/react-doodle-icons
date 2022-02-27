import * as React from "react";
import { SVGProps } from "react";

const SvgBell = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 156 154" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#bell_svg__a)">
      <path d="M100.067 130.831c-1.089 7.258-3.235 13.937-9.656 18.296a24.038 24.038 0 0 1-14.954 4.312c-12.199-.575-19.855-7.312-22.464-20.036-1.05 0-2.192-.033-3.332.006-12.727.436-25.451.906-38.178 1.294a22.714 22.714 0 0 1-5.454-.509 8.679 8.679 0 0 1-3.425-1.675 2.807 2.807 0 0 1 .09-4.692c9.774-6.788 13.71-17.109 16.963-27.805 2.59-8.518 3.13-17.342 3.412-26.178.356-11.156 2.163-21.976 6.334-32.44 5.432-13.63 15.284-22.384 28.86-27.259 1.942-.697 2.885-1.541 3.288-3.655C62.856 3.65 67.088.33 74.026.29c6.772-.035 12.016 3.926 13.32 10.348a3.947 3.947 0 0 0 2.828 3.35c10.45 3.992 18.381 10.916 24.186 20.48 7.769 12.8 12.403 26.659 14.939 41.322.825 4.768 1.97 9.48 2.931 14.224 2.282 11.259 8.292 19.891 18.035 26.055a13.005 13.005 0 0 1 4.252 4.62c1.41 2.593.319 5.319-2.501 6.266a31.352 31.352 0 0 1-8.18 1.531c-13.577.739-27.164 1.3-40.746 1.941-.947.049-1.89.25-3.023.404Zm18.539-47.175c.233-.589.399-.798.374-.98-.249-1.811-.537-3.615-.802-5.423-1.967-13.428-5.909-26.157-12.871-37.93-8.182-13.84-22.31-20.669-38.065-17.588-11.524 2.253-20.995 7.964-26.395 18.772-2.38 4.767-4.54 9.884-5.465 15.08-1.5 8.436-1.94 17.064-2.749 25.619-.269 2.847-.293 5.717-.454 9.11 29.105-2.251 57.918-3.637 86.427-6.66Zm-99.302 41.38c38.401-2.712 76.068-3.506 114.16-7.631-6.804-6.996-9.786-15.252-12.214-23.66L31.31 97.24c-1.162 9.959-5.034 19.147-12.006 27.796Zm40.704 7.81c1.588 7.614 8.69 12.272 16.9 11.418 7.48-.776 11.844-5.366 11.915-13.002l-28.815 1.584Zm7.911-121.704h10.916c-1.512-3.001-3.887-3.41-6.378-3.328-2.137.071-3.964.827-4.536 3.328h-.002Z" />
    </g>
    <defs>
      <clipPath id="bell_svg__a">
        <path fill="#fff" transform="translate(.777)" d="M0 0h155v154H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBell;