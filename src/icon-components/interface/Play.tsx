import * as React from "react";
import { SVGProps } from "react";

const SvgPlay = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 105 122" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#play_svg__a)">
      <path d="M100.079 47.789a17.739 17.739 0 0 0-1.622-1.294c-1.673-1.187-3.356-2.432-4.984-3.634a136.758 136.758 0 0 0-11.409-7.86C65.024 24.892 45.785 15.624 23.246 6.666c-3.471-1.38-6.993-2.7-10.725-4.098-1.802-.675-3.665-1.374-5.614-2.113a.67.67 0 0 0-.82.297c-.195.347-.43.698-.656 1.039a6.922 6.922 0 0 0-1.247 2.566 82.877 82.877 0 0 0-1.293 10.637c-.1 2.403-.201 4.805-.305 7.208-.539 12.674-1.097 25.78-1.3 38.676-.195 12.349-.145 24.903-.098 37.045.02 4.952.034 9.904.043 14.856v.174c-.038 1.312.04 2.624.234 3.922a5.697 5.697 0 0 0 2.829 4.187c.756.4 1.6.606 2.454.6a6.63 6.63 0 0 0 2.656-.584 15.053 15.053 0 0 0 2.444-1.454c.341-.234.683-.467 1.03-.685 2.096-1.316 4.19-2.636 6.28-3.959 4.586-2.893 9.326-5.884 14.02-8.773 6.67-4.107 13.35-8.202 20.035-12.285A6784.809 6784.809 0 0 0 78.59 78.343c7.915-4.89 15.015-11 21.609-16.837 2.695-2.385 3.954-4.522 3.965-6.727.01-2.25-1.289-4.47-4.085-6.99ZM11.075 10.495l.166.065c.59.2 1.154.475 1.675.818 6.815 5.042 14.06 9.178 22.84 13.836 12.934 6.864 23.75 12.676 34.5 18.738 3.813 2.15 7.51 4.68 11.087 7.13 1.3.891 2.606 1.783 3.917 2.66a28.473 28.473 0 0 1 2.489 1.96c.349.295.721.61 1.129.947a56.103 56.103 0 0 1-9.779 8.716c-5.915 4.114-11.721 8.111-17.708 11.762-12.828 7.825-25.944 15.666-38.628 23.25l-9.869 5.905c-.467.25-.962.446-1.474.584l-.065.019c-1.008-10.243-1.23-82.374-.28-96.39Z" />
    </g>
    <defs>
      <clipPath id="play_svg__a">
        <path fill="#fff" transform="translate(.777)" d="M0 0h104v122H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPlay;