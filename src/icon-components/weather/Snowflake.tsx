import * as React from "react";
import { SVGProps } from "react";

const SvgSnowflake = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 155 154" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#snowflake_svg__a)">
      <path d="M66.528 74.457c-3.544-3.585-6.427-6.538-9.353-9.45-1.988-1.979-3.729-4.633-6.14-5.636-2.4-.997-5.502-.273-8.294-.367-4.49-.152-8.979-.356-13.468-.54-1.521-.061-2.99-.271-3.409-2.079-.356-1.54.687-2.983 2.8-3.599a20.554 20.554 0 0 1 4.294-.648c3.239-.227 6.485-.356 10.184-.548a24.062 24.062 0 0 0-1.566-2.051c-2.273-2.334-4.65-4.57-6.848-6.972a6.645 6.645 0 0 0-4.671-2.266c-5.597-.434-11.195-.888-16.777-1.482a62.725 62.725 0 0 1-6.93-1.335c-1.557-.347-2.667-1.258-2.686-2.99-.016-1.45 1.244-2.512 3.268-2.721a18.762 18.762 0 0 1 3.007.079c4.76.282 9.521.571 14.281.868l.314-.687c-1.743-1.845-3.478-3.697-5.233-5.534-1.24-1.301-2.542-2.545-3.741-3.88-2.186-2.429-2.504-4.682-.965-6.256 1.706-1.746 3.863-1.453 6.472 1.019 2.035 1.93 3.967 3.977 5.964 5.951.614.606 1.295 1.143 2.383 2.094-.168-2.993-.357-5.428-.424-7.868a22.82 22.82 0 0 1 .213-4.353 3.872 3.872 0 0 1 3.232-3.412c1.565-.153 3.136.83 3.653 2.85.545 2.4.93 4.834 1.151 7.285.55 4.68.988 9.37 1.537 14.05.05.776.329 1.52.803 2.136 2.992 3.15 6.075 6.216 9.565 9.751.359-3.586.62-6.535.961-9.473.123-1.452.382-2.888.774-4.29a3.86 3.86 0 0 1 3.838-2.72 3.666 3.666 0 0 1 3.413 3.205 24.21 24.21 0 0 1-.06 5.026c-.321 4.14-.656 8.28-1.122 12.405a6.085 6.085 0 0 0 2.074 5.659c3.798 3.5 7.4 7.213 11.092 10.83.541.528 1.136 1.003 2.06 1.812l1.571-40.913-17.119-16c-.738-.691-1.506-1.355-2.185-2.101-1.897-2.082-2.24-4.338-.919-5.691 1.281-1.313 3.305-1.22 5.475.501 3.606 2.861 7.133 5.821 10.664 8.774 1.35 1.13 2.62 2.356 4.529 4.082.034-2.66-.034-4.621.11-6.568.179-2.455.442-4.914.843-7.343C75.397 1.52 76.283.33 78.07.357c1.51.024 2.428 1.237 2.607 3.342.066.782.015 1.576.053 2.358.157 3.248.328 6.498.525 10.243a24.05 24.05 0 0 0 2.262-1.755c3.314-3.356 6.587-6.754 9.893-10.119a16.019 16.019 0 0 1 2.479-2.255 4.127 4.127 0 0 1 4.995.384 3.943 3.943 0 0 1 .662 4.942 9.103 9.103 0 0 1-1.632 2.117c-5.312 5.169-10.583 10.383-16.025 15.413-1.777 1.64-2.672 3.242-2.707 5.752-.157 11.454-.55 22.906-.848 34.357-.031 1.22-.004 2.443-.004 4.056a11.76 11.76 0 0 0 1.638-1.05c4.043-3.9 8.035-7.851 12.11-11.716a5.188 5.188 0 0 0 1.792-4.14c-.078-4.937-.057-9.877-.041-14.817.01-3.027.709-4.256 2.455-4.51 1.684-.245 2.881.867 3.538 3.74.744 3.26 1.262 6.57 1.927 10.116.722-.554 1.362-.962 1.903-1.475 2.854-2.704 5.651-5.47 8.537-8.138a5.072 5.072 0 0 0 1.641-3.492c.787-7.252 1.726-14.486 2.643-21.725.1-.893.319-1.77.651-2.605.47-1.12 1.424-1.948 2.64-1.588a3.555 3.555 0 0 1 2.146 1.745c.401 1.278.56 2.62.466 3.956-.126 4.59-.361 9.178-.575 14.256 1.089-1.002 1.9-1.713 2.672-2.464 3.224-3.13 6.401-6.308 9.665-9.395 2-1.891 3.822-2.166 5.01-.975 1.2 1.204 1.051 3.108-.701 5.114-1.993 2.28-4.177 4.397-6.268 6.588-.752.788-1.475 1.604-2.746 2.99 3.432-.303 6.096-.5 8.749-.787 2.156-.233 4.257-.408 6.091 1.116 2.386 1.98 2.351 4.304-.15 6.13-2.113 1.542-4.608 1.574-7.073 1.78-5.365.451-10.728.936-16.081 1.484a4.43 4.43 0 0 0-2.437.918 118.976 118.976 0 0 0-10.626 10.925c2.839-.402 5.673-.859 8.521-1.182a11.118 11.118 0 0 1 3.633.082 3.822 3.822 0 0 1 3.004 3.618 3.868 3.868 0 0 1-2.462 4.003 8.592 8.592 0 0 1-2.59.627c-6.032.537-12.071 1-18.103 1.553a4.24 4.24 0 0 0-2.441.841c-4.232 4.143-8.367 8.386-12.93 13.003 1.55.072 2.505.155 3.46.157 11.232.026 22.465-.004 33.696.098a6.102 6.102 0 0 0 4.747-1.873c4.011-3.928 8.174-7.7 12.295-11.514 1.444-1.337 3.076-2.285 5.157-1.857 3.719.766 4.985 4.863 2.304 7.85-1.567 1.746-3.458 3.2-5.178 4.811-.788.738-1.517 1.539-2.712 2.757 2.795 0 4.984-.022 7.173.008 1.453.02 2.912.052 4.358.193a2.936 2.936 0 0 1 2.544 2.71 2.942 2.942 0 0 1-2.145 3.035 17.62 17.62 0 0 1-3.963.586c-3.13.082-6.264.026-10.013.026a23.535 23.535 0 0 0 1.587 2.2c2.481 2.6 5.049 5.119 7.472 7.772a10.942 10.942 0 0 1 2.358 3.623c.306.89.095 2.455-.525 3.036a4.078 4.078 0 0 1-3.266.843 10.49 10.49 0 0 1-3.733-2.16c-5.719-4.539-11.216-9.321-15.853-15.187H85.223c.401.67.853 1.306 1.353 1.904 2.451 2.474 5.068 4.795 7.382 7.389a6.728 6.728 0 0 0 6.507 2.387 83.119 83.119 0 0 1 10.423-.437c1.454.021 2.894.294 4.255.806a3.66 3.66 0 0 1 2.417 3.368 3.376 3.376 0 0 1-2.179 3.482 14.496 14.496 0 0 1-4.205.95c-1.75.158-3.526.037-5.734.037.268.539.581 1.054.938 1.539 4.409 4.487 8.868 8.926 13.235 13.454a4.085 4.085 0 0 0 4.173 1.347c6.436-1.289 12.974-.97 19.484-.985a7.644 7.644 0 0 1 2.325.293c1.325.424 2.166 1.533 1.883 2.817-.202.928-1.055 2.172-1.874 2.414-1.95.514-3.952.796-5.967.841-2.578.132-5.168-.008-7.75.07-1.404.043-2.801.295-4.777.518 2.205 2.297 4.011 4.12 5.742 6.008 1.668 1.82 3.296 3.68 4.864 5.586a13.614 13.614 0 0 1 1.561 2.577c.342.598.443 1.302.28 1.971a2.688 2.688 0 0 1-1.149 1.624 2.76 2.76 0 0 1-3.705-.174c-.853-.727-1.629-1.541-2.413-2.342-3.286-3.363-6.564-6.735-10.406-10.683-.319 4.529-.525 8.24-.871 11.938-.132 1.425-.306 2.996-1.013 4.165-.525.874-1.89 1.509-2.979 1.706a2.519 2.519 0 0 1-2.834-1.916 14.21 14.21 0 0 1-.705-4.261c.127-5.274.336-10.55.691-15.817a5.044 5.044 0 0 0-1.656-4.449c-4.552-4.318-8.992-8.752-14.006-13.663-.166 1.796-.263 2.965-.384 4.135-.243 2.342-.382 4.703-.782 7.018-.399 2.301-1.505 3.281-3.192 3.266-1.795-.015-2.926-1.156-3.06-3.693-.245-4.594-.424-9.205-.333-13.802.066-3.126-.656-5.58-3.21-7.629-2.495-2-4.656-4.417-7.448-7.121-.095 1.532-.193 2.37-.193 3.21 0 11.682.048 23.366-.007 35.048a5.38 5.38 0 0 0 1.83 4.464c4.07 3.525 8.101 7.1 12.197 10.599 1.791 1.53 3.773 2.84 5.54 4.397 1.923 1.694 2.222 3.502 1.077 5.035-1.067 1.429-3.101 1.706-5.16.284-4.15-2.874-8.165-5.942-12.236-8.931-.787-.577-1.565-1.159-2.77-2.053 0 1.587-.015 2.657 0 3.726.028 1.795.192 3.595.091 5.381-.192 3.413-1.533 5.079-3.806 4.989-2.147-.086-3.299-1.697-3.46-4.942-.073-1.457-.024-2.921-.08-4.379-.034-.875-.163-1.746-.291-3.036-.898.78-1.576 1.295-2.166 1.896-2.602 2.639-5.132 5.351-7.788 7.933a10.061 10.061 0 0 1-3.069 1.99 3.704 3.704 0 0 1-4.558-5.088 16.686 16.686 0 0 1 2.263-2.879c4.739-5.251 9.476-10.507 14.276-15.703 1.147-1.241 1.046-2.65 1.021-4.099-.166-9.883-.336-19.765-.508-29.647-.037-2.236-.006-4.474-.006-7.232-1.022.791-1.738 1.247-2.336 1.827-2.342 2.264-4.6 4.618-6.985 6.834a5.576 5.576 0 0 0-1.878 4.127c-.197 4.372-.454 8.746-.83 13.106a11.794 11.794 0 0 1-1.11 4.153 3.282 3.282 0 0 1-3.664 1.814 3.175 3.175 0 0 1-2.81-2.552 18.304 18.304 0 0 1-.263-4.304c.094-1.989.394-3.97.663-6.534-1.066.853-1.682 1.275-2.21 1.787-2.1 2.03-4.027 4.266-6.289 6.094a14.404 14.404 0 0 0-5.48 9.976c-.58 4.672-1.501 9.304-2.331 13.942a13.344 13.344 0 0 1-.97 3.198 2.21 2.21 0 0 1-2.795 1.305 3.513 3.513 0 0 1-2.017-1.912 14.838 14.838 0 0 1-.243-4.326c.097-2.895.302-5.787.496-9.287-1.238.952-2.034 1.503-2.762 2.136-2.367 2.07-4.684 4.202-7.076 6.242a8.98 8.98 0 0 1-2.55 1.579 3.268 3.268 0 0 1-3.742-.732 3.372 3.372 0 0 1-.707-4.037 11.186 11.186 0 0 1 2.239-2.888c2.428-2.336 4.953-4.57 7.422-6.863.542-.504 1.012-1.085 1.964-2.118-3.065 0-5.504.066-7.937-.027a16.127 16.127 0 0 1-3.617-.591 3.234 3.234 0 0 1-2.398-3.3 3.33 3.33 0 0 1 2.498-3.571 11.892 11.892 0 0 1 3.285-.466c4.718.05 9.436.138 14.15.328a5.632 5.632 0 0 0 4.523-1.718c3.879-3.855 7.844-7.621 12.324-11.952-3.055 0-5.348.02-7.64-.007a26.558 26.558 0 0 1-4.022-.193c-1.897-.316-2.715-1.292-2.696-2.867a2.574 2.574 0 0 1 1.432-2.499c.306-.15.638-.238.978-.259 3.221-.412 6.452-.787 9.69-1.007 2.574-.175 5.171-.008 7.744-.18a5.327 5.327 0 0 0 3.063-1.015c3.637-3.306 7.127-6.774 11.082-10.583-1.33-.105-2.16-.236-2.987-.224-11.906.176-23.81.415-35.716.516a5.01 5.01 0 0 0-4.491 2.285c-2.429 3.366-4.926 6.7-7.62 9.857a23.605 23.605 0 0 1-5.046 4.338c-1.312.857-3.106 1.066-4.388-.234a3.872 3.872 0 0 1-.64-4.689c.696-1.27 1.53-2.46 2.485-3.548 2.145-2.573 4.367-5.08 7.016-8.143-3.224-.174-5.842-.272-8.456-.472a54.981 54.981 0 0 1-5.657-.673 2.217 2.217 0 0 1-2.009-2.337c.044-1.352.98-2.023 2.17-2.184a28.507 28.507 0 0 1 3.676-.105c2.96.077 5.92-.11 8.847-.56-1.584-1.338-3.15-2.7-4.758-4.004-1.83-1.486-3.75-2.865-5.54-4.398-1.853-1.586-2.282-3.287-1.375-4.679.953-1.46 3.004-1.806 5.113-.487 3.328 2.08 6.532 4.361 9.767 6.589 3.314 2.281 6.586 4.625 9.921 6.874.578.33 1.24.486 1.904.45 11.68-.24 23.35-.516 35.816-.808Z" />
    </g>
    <defs>
      <clipPath id="snowflake_svg__a">
        <path
          fill="#fff"
          transform="translate(.39 .124)"
          d="M0 0h154.239v153.583H0z"
        />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSnowflake;