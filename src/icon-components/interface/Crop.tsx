import * as React from "react";
import { SVGProps } from "react";

const SvgCrop = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 159 156" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#crop_svg__a)">
      <path d="M7.952 35.425c3.715.073 7.49.051 11.14.03 1.632-.008 3.263-.015 4.893-.019h6.918l.041.54c.059.758.115 1.477.148 2.196l.445 9.302c.88 18.482 1.755 36.964 2.625 55.445.121 2.6.209 5.252.293 7.815.06 1.82.12 3.645.195 5.467.185 4.67 2.165 6.603 6.833 6.674 1.184.017 2.391.065 3.56.114 1.567.065 3.177.13 4.79.121 16.159-.071 32.318-.155 48.477-.251l17.625-.097c.935-.006 1.868-.004 2.816 0h.759l.038.53c.041.562.071.971.083 1.38.064 2.167.125 4.334.184 6.5.143 5.168.291 10.513.489 15.768.034 1.616.32 3.217.848 4.745a5.843 5.843 0 0 0 5.371 3.757c.079 0 .161 0 .241-.005a5.673 5.673 0 0 0 5.339-4.537c.286-1.64.383-3.306.29-4.968v-.113c-.072-3.943-.164-7.887-.255-11.83-.078-3.367-.152-6.733-.222-10.099.022-.276.088-.547.195-.803l.011-.032h4.248c4.521 0 8.973 0 13.431-.007h.532c.972.032 1.945-.022 2.908-.161 3.03-.53 5.164-2.735 5.075-5.246-.084-2.387-2.233-4.294-5.226-4.637a63.364 63.364 0 0 0-6.735-.296c-3.446-.028-6.845-.023-10.44-.017-1.266 0-2.546.001-3.841.004l-.044-.494c-.045-.494-.076-.825-.085-1.157-.185-6.122-.367-12.244-.546-18.366-.465-15.765-.945-32.066-1.486-48.1a110.926 110.926 0 0 0-1.271-12.966c-.586-3.875-2.268-5.373-6.417-5.72l-.521-.047a18.214 18.214 0 0 0-1.528-.101c-12.49-.137-24.98-.273-37.47-.407-13.323-.143-26.646-.288-39.968-.434-.546-.006-1.111-.05-1.71-.096l-.35-.028c0-1.331.004-2.65.01-3.957.014-3.865.027-7.516-.045-11.235a23.023 23.023 0 0 0-.8-5.725c-.66-2.368-2.463-3.61-4.701-3.246-2.575.42-2.724 2.526-2.833 4.064l-.005.078c-.26 3.62-.494 7.241-.73 10.864-.138 2.128-.278 4.255-.42 6.382-.058.864-.14 1.728-.22 2.6l-.06.646-.418.028c-.54.037-.965.065-1.39.079-2.172.067-4.344.13-6.517.186-4.757.13-9.675.267-14.512.477-3.993.173-6.536 2-6.636 4.768a3.792 3.792 0 0 0 1.014 2.85c1.07 1.137 2.934 1.736 5.537 1.787Zm109.867-.32c.963 6.478 2.315 68.699 1.668 77.246l-73.38 1.385-5.067-78.661c15.1-.503 30.202-.308 44.815-.119 10.49.136 21.334.274 31.964.15v-.001Z" />
    </g>
    <defs>
      <clipPath id="crop_svg__a">
        <path fill="#fff" transform="translate(.777)" d="M0 0h158v156H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCrop;
