import * as React from "react";
import { SVGProps } from "react";

const SvgDiamond = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 182 155" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#diamond_svg__a)">
      <path d="M5.308 58.816c1.166 1.455 2.372 2.957 3.465 4.473 16.324 22.638 34.512 44.769 52.101 66.169 5.865 7.135 11.928 14.512 17.833 21.798 1.887 2.33 3.65 3.498 5.555 3.676.172.016.345.024.517.024 1.712 0 3.517-.785 5.628-2.438a80.388 80.388 0 0 0 9.999-9.625c24.051-26.779 47.395-52.928 67.058-74.977 2.19-2.456 4.335-4.998 6.411-7.456 1.89-2.24 3.845-4.555 5.823-6.793 2.27-2.57 2.377-5.134.318-7.62a54.193 54.193 0 0 0-3.857-4.16 2631.8 2631.8 0 0 0-9.431-9.181 4876.285 4876.285 0 0 1-9.566-9.316c-1.308-1.28-2.611-2.606-3.872-3.888-1.493-1.518-3.037-3.09-4.608-4.604-4.904-4.728-9.006-8.582-12.908-12.133-1.004-.86-2.28-1.465-3.679-1.749a26.527 26.527 0 0 0-5.218-.406C120.253.584 113.629.59 108.08.592h-4.938l-14.39.564c-13.05.51-25.377.995-37.569 1.436-2.856.104-5.993.487-7.05 3.745a1.98 1.98 0 0 1-.507.561 8.607 8.607 0 0 0-.24.22c-1.312 1.25-2.622 2.502-3.928 3.755-3.24 3.104-6.591 6.313-9.944 9.427A291.328 291.328 0 0 0 4.358 46.859a18.093 18.093 0 0 0-2.69 4.812 3.214 3.214 0 0 0-.172 1.498c.062.504.243.992.534 1.437 1.05 1.432 2.183 2.844 3.278 4.21Zm156.799-1.79-.097.12c-.598.741-1.114 1.381-1.687 1.998-2.307 2.483-4.627 4.959-6.961 7.426-4.497 4.777-9.148 9.716-13.576 14.67-10.401 11.635-20.891 23.516-31.035 35.007-4.233 4.796-8.469 9.59-12.706 14.382-.175.199-.349.395-.523.586.532-1.31 1.086-2.652 1.654-3.963l8.517-19.645a36565.311 36565.311 0 0 0 19.343-44.688 30.753 30.753 0 0 0 1.332-4.138c.152-.564.311-1.147.488-1.755h35.251Zm-47.555-.016-30.407 72.683c-2.438-8.376-5.171-16.75-7.828-24.87-4.996-15.287-10.16-31.086-13.405-47.153l51.64-.66ZM98.08 9.652c5.31-.166 10.665-.155 15.859-.148 5.208.009 10.593.018 15.923-.148l33.809 37.741-39.434.674-.495.009L98.08 9.652ZM64.11 48.496c7.148-12.236 16.233-22.592 26.48-33.764l18.546 32.927-45.026.837Zm-14.341 9.446c4.078 16.777 9.727 33.394 15.192 49.468 1.588 4.669 3.22 9.467 4.804 14.246-11.73-13.1-22.492-26.979-32.922-40.43-5.932-7.652-12.06-15.554-18.308-23.24 5.39-.517 23.993-.57 31.234-.045ZM72.623 10.21l7.256-.057a9.76 9.76 0 0 1 .733.026c-9.829 10.976-20.716 23.835-27.85 38.51H13.908c.233-.33.496-.644.785-.942A8015.12 8015.12 0 0 1 39.85 22.97c2.054-2.015 4.18-4.046 6.23-6.01 1.922-1.838 3.835-3.681 5.742-5.53a3.11 3.11 0 0 1 1.184-.842c.472-.195.995-.29 1.522-.276 6.033 0 12.165-.053 18.096-.101Z" />
    </g>
    <defs>
      <clipPath id="diamond_svg__a">
        <path fill="#fff" transform="translate(.777)" d="M0 0h181v155H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgDiamond;