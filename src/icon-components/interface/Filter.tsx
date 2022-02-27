import * as React from "react";
import { SVGProps } from "react";

const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 150 144" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#filter_svg__a)">
      <path d="M144.896 2.666a10.34 10.34 0 0 0-2.101-.358C129.307 1.615 115.82.933 104.687.37L99.742.12a.403.403 0 0 0-.056 0c-4.356.143-8.31.256-11.997.362-7.355.21-13.708.393-20.018.713-14.553.747-29.345 1.597-43.648 2.42-5.225.3-10.45.599-15.675.896-.921.037-1.84.138-2.746.305A5.63 5.63 0 0 0 1.586 7.54a5.337 5.337 0 0 0-.006 4.634 28.095 28.095 0 0 0 2.876 5.013 673.728 673.728 0 0 0 46.75 60.308 6.857 6.857 0 0 1 1.496 3.46c.502 4.126.827 8.257 1.16 13.19a7709.17 7709.17 0 0 1 1.761 26.872l.884 13.611.05.807c.064 1.059.126 2.155.299 3.232.337 2.111 1.285 3.632 2.74 4.396.678.351 1.431.531 2.194.524a7.305 7.305 0 0 0 3.105-.779c.81-.384 1.612-.784 2.415-1.183 1.454-.725 2.957-1.474 4.469-2.102a2580.57 2580.57 0 0 1 17.216-7.044l7.46-3.036c3.693-1.507 4.591-2.866 4.573-6.924a1321.32 1321.32 0 0 1-.014-7.45c0-4.76-.006-9.681-.084-14.523l-.027-1.746c-.094-6.203-.195-12.62-.672-18.91-.221-2.924.313-4.93 1.844-6.929 1.854-2.416 3.664-4.924 5.415-7.35 1.38-1.911 2.806-3.887 4.242-5.802a7500.861 7500.861 0 0 1 15.92-21.16c3.706-4.918 7.41-9.837 11.113-14.757 2.993-3.984 6.181-8.238 9.326-12.574 1.274-1.76 1.657-3.616 1.078-5.23-.59-1.636-2.107-2.854-4.273-3.422Zm-54.69 80.12c.26 8.81.406 17.772.545 26.441.054 3.39.111 6.78.169 10.169.012.645.008 1.291.005 2.054v.871l-24.484 9.632-.004-.023a6.899 6.899 0 0 1-.152-1.132c-.112-10.911-1.512-21.738-2.863-32.21a130.792 130.792 0 0 1-1.218-14.837c-.107-6.625-2.082-11.849-6.213-16.44-7.007-7.789-12.977-14.855-18.252-21.607-5.649-7.23-11.195-14.738-16.558-22-2.198-2.975-4.4-5.947-6.605-8.915a1.839 1.839 0 0 1-.188-.34 2638.4 2638.4 0 0 1 4.322-.225c3.864-.197 7.514-.385 11.223-.605 5.968-.354 11.935-.722 17.902-1.103l7.43-.465c16.507-1.028 36.115-1.982 56.352-1.278l23.87.835-.22.362c-.391.675-.818 1.33-1.279 1.96a830.48 830.48 0 0 1-5.404 6.99c-3.319 4.27-6.752 8.685-10.005 13.123a957.277 957.277 0 0 1-5.559 7.513c-6.583 8.852-13.39 18.005-19.26 27.613a23.663 23.663 0 0 0-3.556 13.616h.002Z" />
    </g>
    <defs>
      <clipPath id="filter_svg__a">
        <path fill="#fff" transform="translate(.777)" d="M0 0h149v144H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFilter;
