import * as React from "react";
import { SVGProps } from "react";

const SvgLink = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#link_svg__a)">
      <path d="M14.033 123.863c.612-3.936 2.248-7.446 3.768-10.361 2.564-4.917 6.267-9.106 9.85-13.156.585-.663 1.17-1.326 1.752-1.99 6.955-7.968 14.148-16.2 22.348-23.596 5.931-5.35 12.785-7.398 20.948-6.264.558.079 1.118.15 1.68.22 3.208.405 6.239.788 9.002 2.384a6.9 6.9 0 0 0 2.08.712 3.27 3.27 0 0 0 2.504-.571 3.834 3.834 0 0 0 1.606-2.52 5.745 5.745 0 0 0-1.98-5.34 17.795 17.795 0 0 0-8.575-4.262 91.77 91.77 0 0 0-10.603-1.584c-7.883-.726-14.739 1.321-20.378 6.09A210.991 210.991 0 0 0 32.329 78.05c-5.253 5.448-10.265 11.29-15.112 16.94l-2.141 2.494a68.387 68.387 0 0 0-10.358 16.421 38.73 38.73 0 0 0-3.44 15.093v.016c-.02 10.876 4.113 19.097 12.283 24.436 6.353 4.151 12.934 6.231 19.673 6.231a35.807 35.807 0 0 0 12.103-2.185 136.513 136.513 0 0 0 6.86-2.642c7.395-3.095 13.935-8.097 21.205-16.218 4.244-4.739 8.42-9.676 12.46-14.452 2.053-2.425 4.11-4.847 6.173-7.263.689-.803 1.418-1.601 2.124-2.374 1.216-1.329 2.473-2.705 3.585-4.171a12.827 12.827 0 0 0 2.404-4.923 3.887 3.887 0 0 0-.14-2.037 3.892 3.892 0 0 0-1.157-1.684 4.38 4.38 0 0 0-4.283-.893 10.598 10.598 0 0 0-3.641 2.089 40.2 40.2 0 0 0-3.6 3.871l-.505.593a3416.026 3416.026 0 0 0-7.797 9.145c-4.37 5.135-8.887 10.445-13.375 15.628-7.074 8.168-15.891 13.19-26.218 14.926a25.12 25.12 0 0 1-10.945-.389c-10.587-2.95-14.88-8.64-14.818-19.638a18.68 18.68 0 0 1 .3-2.759l.064-.443Z" />
      <path d="M141.121 1.139C136.365.015 131.522.037 126.836.067l-1.115.005c-5.365.021-10.375 1.648-15.315 4.974a126.67 126.67 0 0 0-22.028 18.42c-4.444 4.74-9.094 9.94-14.212 15.898-2.505 2.915-4.816 6.665-2.952 12.347a.667.667 0 0 0 .86.417c4.478-1.606 7.688-3.49 10.402-6.11l.147-.141c3.413-3.295 6.944-6.703 10.229-10.239 8.004-8.611 15.208-15.05 22.671-20.266a21.704 21.704 0 0 1 12.663-4.096c3.51-.065 7.018.229 10.467.878 5.105 1.027 10.643 4.77 10.866 12.198.185 6.085-1.046 10.768-3.875 14.739-1.152 1.616-2.289 3.247-3.427 4.878-3.62 5.192-7.364 10.559-11.555 15.375-5.275 6.059-12.546 13.66-22.033 18.709a44.648 44.648 0 0 1-25.375 5.021 15.723 15.723 0 0 1-9.77-4.258 30.662 30.662 0 0 0-3.665-3.018c-1.77-1.213-3.834-1.157-5.14.144a4.137 4.137 0 0 0-.928 5.023 25.934 25.934 0 0 0 2.375 4.112c2.982 4.003 7.269 6.677 13.11 8.175a32.75 32.75 0 0 0 8.17.998 53.387 53.387 0 0 0 12.562-1.74c8.372-2.022 16.112-6.488 23.664-13.656 12.749-12.1 22.909-26.204 30.337-37.14a30.744 30.744 0 0 0 5.3-16.621c.143-4.708-.235-10.717-4.463-15.437-4.049-4.512-8.522-7.298-13.685-8.517Z" />
    </g>
    <defs>
      <clipPath id="link_svg__a">
        <path fill="#fff" transform="translate(.777)" d="M0 0h159v160H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgLink;