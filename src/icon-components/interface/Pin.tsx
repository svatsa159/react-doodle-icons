import * as React from "react";
import { SVGProps } from "react";

const SvgPin = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 157 155" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#pin_svg__a)">
      <path d="M4.288 154.934a3.71 3.71 0 0 0 1.651-.412c.84-.403 1.633-.898 2.364-1.476 1.377-1.115 2.723-2.303 4.025-3.452l8.47-7.474c9.899-8.733 20.135-17.764 30.178-26.675.583-.519 1.18-1.022 1.778-1.528 2.168-1.836 4.402-3.727 6.085-6.296a664.195 664.195 0 0 1 2.298 2.992c2.132 2.788 4.143 5.423 6.364 7.96 3.099 3.541 6.414 6.986 9.62 10.317.89.924 1.78 1.849 2.666 2.776 1.572 1.645 3.582 1.885 5.66.678l.18-.104c.752-.407 1.466-.88 2.135-1.413 13.097-11.052 18.319-24.298 15.946-40.477 1.74-.378 3.466-.75 5.179-1.117 4.423-.952 8.6-1.85 12.859-2.8a2775.67 2775.67 0 0 0 26.523-6.016c1.679-.37 3.299-.97 4.815-1.782 3.41-1.887 4.539-5.858 2.687-9.44-5.049-9.77-11.536-19.314-20.405-30.036-4.472-5.408-9.134-10.807-13.641-16.03-2.152-2.493-4.299-4.99-6.443-7.489a453.497 453.497 0 0 1-3.276-3.89c-2.22-2.66-4.516-5.404-6.904-7.995-2.046-2.223-4.107-3.272-6.133-3.113-2.071.16-4.025 1.58-5.795 4.221-6.234 9.301-11.154 19.164-16.623 31.11-1.683 3.672-3.332 7.404-4.927 11.013l-2.002 4.516c-1.707.153-3.43.281-5.1.405-3.995.296-8.127.604-12.13 1.26a55.113 55.113 0 0 0-23.83 10.27c-2.476 1.823-2.819 3.592-1.221 6.31.36.603.772 1.174 1.23 1.707 6.066 7.206 12.139 14.406 18.218 21.6 1.7 2.011 3.406 4.022 5.138 6.055l1.954 2.299c-.466.352-.924.693-1.374 1.027-1.338.992-2.601 1.93-3.785 2.983l-.069.061c-6.815 6.069-13.863 12.345-20.677 18.65-6.409 5.931-12.852 12.04-19.082 17.948l-5.124 4.856a12.768 12.768 0 0 0-2.272 2.651 3.38 3.38 0 0 0 .324 4.194 3.316 3.316 0 0 0 2.466 1.156Zm86.986-46.725c-.898 4.594-4.286 10.665-8.51 15.298-8.78-9.285-16.776-19.425-24.512-29.236-6.96-8.826-14.15-17.945-21.938-26.486a33.19 33.19 0 0 1 11.975-4.51c4.443-.678 9.005-1.132 13.417-1.572 1.891-.189 3.783-.377 5.672-.584.205-.022.367-.005.66-.019 7.13-.328 7.426-.523 10.527-6.96a1873.25 1873.25 0 0 0 5.667-11.869c3.055-6.429 6.214-13.076 9.414-19.565 1.424-2.884 3.047-5.627 4.768-8.534.629-1.062 1.265-2.14 1.899-3.23 13.637 16.696 25.702 33.655 38.465 51.596 2.134 3 4.277 6.007 6.427 9.022-1.056.267-2.087.531-3.101.79-2.793.714-5.431 1.391-8.091 2.007l-3.483.806c-10.191 2.36-20.729 4.8-31.121 7.06-3.267.714-5.075 2.648-5.528 5.922-.215 1.557-.38 3.14-.54 4.67-.135 1.288-.275 2.621-.442 3.923-.112.865-.218 1.73-.324 2.595-.359 2.924-.73 5.951-1.301 8.873v.003Z" />
    </g>
    <defs>
      <clipPath id="pin_svg__a">
        <path fill="#fff" transform="translate(.777)" d="M0 0h156v155H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPin;