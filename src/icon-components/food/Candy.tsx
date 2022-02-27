import * as React from "react";
import { SVGProps } from "react";

const SvgCandy = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 77 161" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#candy_svg__a)">
      <path d="M1.353 99.569c.399-16.617.77-33.235 1.21-49.85.25-9.452 2.304-18.575 6.868-26.829C15.225 12.412 23.578 4.657 35.585 1.695a28.289 28.289 0 0 1 12.702-.032 40.378 40.378 0 0 1 14.37 6.38c5.614 3.815 8.625 9.363 10.013 15.817a105.333 105.333 0 0 1 1.69 11.3c.565 5.469.929 10.961 1.336 16.444.075 1.121.058 2.246-.05 3.364-.376 4.17-2.12 6.166-6.204 6.7-3.11.475-6.253.688-9.398.636-3.571-.14-7.651-1.695-8.072-6.883-.436-5.37-1.001-10.73-1.53-16.092-.12-1.226-.262-2.456-.495-3.664-.823-4.296-1.717-5.16-5.984-5.229-6.78-.11-11.79 2.797-13.183 9.82-1.837 9.28-2.646 18.657-3.247 28.066-1.255 19.654-.157 39.292.394 58.939.236 8.419.239 16.848.197 25.269-.025 4.91-2.134 6.812-7.042 7.067-3.584.187-7.154.597-10.738.839-4.963.334-6.74-.919-7.977-5.672a16.112 16.112 0 0 1-.569-3.971c-.037-17.072-.045-34.146-.024-51.218l-.421-.006Zm7.374 29.708-.61 20.852 10.591-1.002V134.53l-9.981-5.253Zm9.254-31.723V77.279l-8.286-5.66c-.104 7.053-.231 13.404-.239 19.756a2.636 2.636 0 0 0 1.16 1.804c2.238 1.441 4.572 2.736 7.365 4.373v.002Zm-8.89 4.7v18.401l9.143 4.364V108.23l-9.143-5.976Zm33.36-94.343.935 12.92c2.316.46 4.48.947 6.667 1.286a2.597 2.597 0 0 0 1.83-.46c2.586-2.09 5.097-4.272 7.836-6.594-5.101-4.074-10.412-6.816-17.269-7.152h.002Zm-6.062.747c-6.25 2.166-10.923 5.368-14.685 10.083l6.679 7.027 6.788-3.71c.383-4.24.777-8.561 1.216-13.4h.002ZM18.517 67.335l.929-15.08-8.72-4.307c-.275 5.074-.525 9.756-.777 14.39l8.568 4.997Zm4.563-35.368-5.345-7.613c-2.797 3.788-5.672 12.265-5.482 15.957l8.092 3.126c.941-3.957 1.794-7.533 2.734-11.473l.001.003Zm40.345-9.956-6.882 4.463 2.547 9.57 6.31-2.417c-.037-4.012-.41-7.718-1.977-11.62l.002.004Zm3.388 30.585c-.234-3.605.093-6.898-.895-10.193l-6.68 1.52v9.419c1.484-.081 2.69-.108 3.89-.223 1.103-.108 2.197-.309 3.684-.526v.003Z" />
    </g>
    <defs>
      <clipPath id="candy_svg__a">
        <path
          fill="#fff"
          transform="translate(.85 .807)"
          d="M0 0h75.479v160.146H0z"
        />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCandy;