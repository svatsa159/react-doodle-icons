import * as React from "react";
import { SVGProps } from "react";

const SvgPaintBrush = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 95 155" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#paint-brush_svg__a)">
      <path d="M65.37 99.09a23.93 23.93 0 0 0-.272 2.802c.164 6.505.51 13.01.52 19.516.01 6.719-.194 13.446-.525 20.157a20.187 20.187 0 0 1-1.515 5.825 8.443 8.443 0 0 1-4.73 5.016 20.923 20.923 0 0 1-14.814.59c-3.85-1.253-6.367-4.117-6.677-8.117-.49-6.242-.65-12.527-.598-18.791.056-6.727.525-13.449.794-20.175.049-1.204.007-2.41.007-4.111-1.728 0-3.035.065-4.331-.013-5.026-.314-10.117-.274-15.057-1.116-7.124-1.211-11.566-5.677-12.893-12.89-.587-3.192-.936-6.432-1.296-9.662C3.363 72.558 2.54 67 2.303 61.417c-.585-13.783-.886-27.585-1.297-41.38-.097-3.251-.287-6.506-.218-9.754.114-1.305.463-2.58 1.029-3.76C3.039 3.568 5.326 2.804 8.48 2.726c10.202-.253 20.39-.995 30.59-1.317 10.202-.322 20.408-.367 30.613-.532C74.06.807 78.436.695 82.81.68c3.992-.01 5.584 1.081 6.246 5.073a102.13 102.13 0 0 1 1.48 14.035c.364 14.26 1.122 28.473 3.492 42.563.172.996.266 2.004.278 3.014.028 5.033.017 10.067.008 15.1 0 .788-.066 1.57-.096 2.356-.268 6.473-3.596 10.67-9.594 12.863a55.37 55.37 0 0 1-15.794 3.13c-1.103.077-2.198.176-3.46.274Zm4.153-79.942c-1.707 3.718-1.418 7.033-1.975 10.192-.66 3.74-1.2 7.559-2.429 11.125-1.521 4.421-5.887 5.645-9.924 3.282a8.73 8.73 0 0 1-4.285-5.8c-.696-3.276-1.039-6.63-1.494-9.953-.273-1.994-.363-4.021-.767-5.986a2.275 2.275 0 0 0-1.563-1.461c-.478-.049-1.312.773-1.54 1.378-.71 1.882-1.177 3.857-1.801 5.776-.656 2.016-1.68 3.67-4.08 3.938-2.455.277-4.532-.46-5.825-2.543-.868-1.398-1.313-3.062-1.922-4.618-.412-1.054-.779-2.127-1.165-3.192l-.92.153a42.07 42.07 0 0 0-.63 5.57c.053 3.698.58 7.398.491 11.087a49.898 49.898 0 0 1-1.203 9.604 5.398 5.398 0 0 1-4.556 4.432c-2.727.41-4.696-1.093-5.786-3.241a38.399 38.399 0 0 1-2.927-8.167c-.75-3.039-.965-6.205-1.55-9.29-.302-1.594-.426-3.377-2.084-4.31-3.453 1.498-3.841 1.956-3.707 5.149.227 5.382.507 10.76.84 16.133.304 4.814.718 9.622 1.1 14.431.229 2.894.534 3.171 3.484 3.316.224.01.449.012.673.008 10.548-.143 21.1-.13 31.64-.473 12.784-.411 25.557-1.115 38.331-1.712.788-.092 1.57-.237 2.34-.433l-2.185-31.32c-4.004.4-7.278-.501-10.14-2.726-3.114-2.42-2.425-6.55-4.443-10.349h.002ZM9.796 71.876a79.224 79.224 0 0 0 2.406 14.777c1.055 4.01 3.498 6.423 7.523 7.246 1.31.297 2.639.495 3.977.591 4.706.24 9.415.394 14.123.58 2.735.106 4.414 1.51 4.922 4.175a37.8 37.8 0 0 1 .903 6.305c.145 8.185.062 16.375.205 24.56.07 4.032.332 8.073.753 12.081.143 1.354.69 3.085 1.673 3.847 2.272 1.759 5.06 1.49 7.744.773 2.284-.611 2.851-2.515 2.907-4.444.194-6.715.401-13.439.263-20.149-.168-8.073-.714-16.134-1.022-24.203-.035-1.229.138-2.456.513-3.629.744-2.348 2.42-3.267 4.906-3.128 1.32.056 2.642-.003 3.951-.176 2.225-.269 4.455-.56 6.65-1a109.923 109.923 0 0 0 10.779-2.47c1.332-.411 2.932-1.697 3.372-2.95 1.567-4.453 1.699-9.122 1.32-14.231-1.702 0-3.02-.048-4.332.007-12.888.543-25.772 1.206-38.663 1.622-8.401.27-16.806.236-25.21.244-3.114.001-6.22-.267-9.668-.427h.005ZM37.92 27.783l.823-.016c.394-.984.835-1.95 1.162-2.953.556-1.707.905-3.486 1.576-5.138 1.175-2.876 3.103-3.848 6.191-3.31 2.49.433 4.416 1.752 5.356 4.114a20.29 20.29 0 0 1 1.093 4.548c.502 3.439.746 6.92 1.378 10.334a10.634 10.634 0 0 0 1.947 4.17c.81 1.103 2.072.946 2.705-.364a13.18 13.18 0 0 0 1.27-3.806c.577-4.105.97-8.234 1.47-12.35.303-2.475.866-4.877 2.59-6.811 2.378-2.67 5.578-2.728 7.818.035a16.086 16.086 0 0 1 2.162 4.13c.46 1.133.555 2.406.93 3.579 1.064 3.325 3.454 3.964 6.144 1.826a3.808 3.808 0 0 0 1.6-3.458c-.148-2.912-.152-5.834-.355-8.741-.154-2.195-.525-4.375-.824-6.76-25.829-1.936-51.158.346-76.866 1.293.454 5.146.872 9.883 1.312 14.906.83-.24 1.34-.394 1.851-.534 3.736-1.024 6.388-.011 8.16 3.377a18.771 18.771 0 0 1 1.647 4.74c.774 3.618 1.304 7.288 2.055 10.912.34 1.641.97 3.224 1.468 4.833 1.87-2.49 1.976-4.984 1.733-7.568-.369-3.906-.821-7.817-.912-11.733-.076-3.26.328-6.538 2.508-9.236 2.756-3.413 6.724-3.143 8.735.763.957 1.86 1.299 4.03 1.978 6.039.365 1.083.856 2.122 1.29 3.18l.005-.001Z" />
    </g>
    <defs>
      <clipPath id="paint-brush_svg__a">
        <path
          fill="#fff"
          transform="translate(.393 .58)"
          d="M0 0h94.513v153.583H0z"
        />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPaintBrush;
