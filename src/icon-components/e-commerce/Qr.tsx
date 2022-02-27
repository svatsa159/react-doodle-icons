import * as React from "react";
import { SVGProps } from "react";

const SvgQr = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 160 87" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M99.349 65.204c0 1.347.026 2.69-.005 4.04-.066 2.854-.715 3.882-2.494 4.047-3.23.299-4.876-.676-5.282-3.644a131.15 131.15 0 0 1-1.313-13.36c-.222-6.61.015-13.233-.1-19.848-.093-5.375-.452-10.746-.615-16.12-.066-1.57.04-3.143.314-4.69.276-1.435.847-2.813 2.778-2.822 1.943-.012 2.892.993 3.129 2.793.525 3.997 1.236 7.985 1.484 12 .77 12.53 1.36 25.072 2.021 37.608l.083-.004ZM21.41 17.564a9.267 9.267 0 0 1 .52-3.618c.515-1.165 1.424-2.717 2.958-2.192a4.937 4.937 0 0 1 2.639 2.618c.514 1.603.77 3.277.755 4.961.165 3.583.25 7.17.254 10.76.027 12.23.008 24.46.006 36.69 0 .897.028 1.796-.014 2.69-.121 2.613-.957 3.789-2.752 3.938-2.157.176-4.409-1.334-4.846-3.364-.146-.885-.2-1.783-.16-2.68-.011-8.3.598-41.502.64-49.803ZM59.61 74.137a3.086 3.086 0 0 1-3.1-2.963c-.245-5.984-.47-11.656-.728-17.327-.569-12.54-1.158-25.078-1.768-37.616-.197-3.961 1.079-5.394 4.43-4.693 1.753.366 2.894 1.97 3.051 4.684.248 4.253.408 8.512.529 12.77.394 13.784.74 27.573 1.135 41.36.09 3.197-.384 3.763-3.522 3.784h-.026ZM37.97 73.454a2.65 2.65 0 0 1-2.644-2.216 4.835 4.835 0 0 1-.047-.454c-.598-10.639-1.256-21.276-1.695-31.922-.319-7.735-.345-15.482-.472-23.224-.023-1.401-.475-3.073 1.48-3.654 1.237-.368 2.954 1.138 3.25 3.211.436 3.104.656 6.247.803 9.38.506 10.87.932 21.743 1.407 32.613.185 4.258.445 8.512.613 12.77.012.308.006.617-.011.931a2.695 2.695 0 0 1-2.684 2.565ZM123.449 73.286a2.89 2.89 0 0 1-2.876-2.723 15.21 15.21 0 0 1-.031-.998c.051-14.814.125-29.628.219-44.442.023-2.912.291-5.824.499-8.733.055-.771.074-1.723.517-2.248.645-.764 1.641-1.618 2.524-1.66.596-.029 1.391 1.2 1.837 2.009.294.53.164 1.312.165 1.986.017 17.847.027 35.694.03 53.54 0 .18-.005.36-.012.542a2.868 2.868 0 0 1-2.872 2.727ZM47.935 73.507a2.383 2.383 0 0 1-2.38-2.232C44.28 52 42.385 32.861 43.052 13.513a1.956 1.956 0 0 1 3.243-1.396c.356.313.585.745.646 1.215 1.164 8.954 3.404 47.549 3.383 57.786a2.39 2.39 0 0 1-2.39 2.389ZM76.205 74.082a2.364 2.364 0 0 1-2.297-1.837c-.174-.694-.29-1.4-.345-2.113-.358-6.038-.812-12.076-.881-18.114-.137-11.88-.05-23.76-.034-35.64 0-.467.023-.934.056-1.397a2.706 2.706 0 0 1 2.834-2.573c1.145.094 1.41.943 1.505 3.042.426 9.509.819 19.02 1.09 28.534.255 8.958.35 17.918.48 26.881.004.376-.019.752-.065 1.125a2.362 2.362 0 0 1-2.343 2.092ZM113.489 73.442a2.331 2.331 0 0 1-2.326-2.195c-.193-3.174-.41-6.325-.487-9.48a4500.442 4500.442 0 0 1-.744-36c-.069-3.919-.083-7.844.065-11.76a3.134 3.134 0 0 1 1.4-2.31c1.479-.726 2.564.23 2.713 2.276.293 4.024.591 8.052.714 12.083.417 13.45.788 26.902 1.112 40.356.04 1.59-.04 3.184-.119 4.81a2.33 2.33 0 0 1-2.328 2.22ZM12.857 72.76a2.607 2.607 0 0 1-2.598-2.321c-.052-.454-.078-.91-.078-1.367.135-18.04.29-36.08.465-54.12.004-.447-.132-1.004.077-1.32.443-.664 1.05-1.633 1.641-1.666.568-.03 2.297.89 2.392 1.505.464 3.093.227 6.22.275 9.34.235 15.347.348 30.696.484 46.045.005.475-.016.95-.046 1.444a2.62 2.62 0 0 1-2.612 2.46ZM87.88 69.488c-.018 3.171-.766 4.317-2.574 4.222-1.663-.087-2.277-1.15-2.35-4.124-.303-12.536-.573-25.072-.918-37.608-.144-5.258-.483-10.51-.64-15.768-.043-1.452-.604-3.369 1.707-3.747 1.416-.231 2.315 1.001 2.486 3.69.59 9.268 1.126 18.54 1.608 27.815.131 2.453.714 19.474.68 25.52ZM107.068 68.044a17.25 17.25 0 0 1-.362 2.996c-.245 1.27-1.091 2.17-2.355 1.781a3.189 3.189 0 0 1-1.881-1.933 28.103 28.103 0 0 1-.533-5.35c-.357-9.533-.692-19.067-1.003-28.602-.226-6.617-.442-13.234-.647-19.85a6.19 6.19 0 0 1 .216-2.654 2.71 2.71 0 0 1 1.833-1.49c.673-.015 1.57.712 1.988 1.359.386.596.321 1.515.363 2.297.754 14.004 2.427 48.306 2.381 51.446ZM134.297 71.199a1.992 1.992 0 0 1-1.556 1.782c-2.366.558-3.237-.591-3.193-3.665.255-17.288.412-34.577.615-51.865a13.96 13.96 0 0 1 .263-3.671c.197-.687 1.285-1.72 1.701-1.607a2.969 2.969 0 0 1 1.903 1.8c.266 1.888.376 3.795.328 5.7.169 12.35.378 24.698.436 37.047.022 4.821-.308 9.644-.5 14.466l.003.013ZM141.871 41.45c0 8.636-.015 17.272.009 25.907.007 3.025-.499 4.091-2.177 4.207-1.844.127-2.78-1.116-2.785-4.088-.028-14.468-.018-28.934.028-43.4.014-2.795.383-5.59.664-8.377.042-.895.283-1.77.705-2.56a2.383 2.383 0 0 1 1.826-1.037 2.35 2.35 0 0 1 1.468 1.447c.196.875.253 1.775.17 2.667.009 8.412.01 16.824.005 25.236l.087-.001ZM69.478 74.173a2.054 2.054 0 0 1-2.051-1.92 211.458 211.458 0 0 0-.234-3.335c-.651-8.044-1.454-16.08-1.937-24.133-.577-9.629-.887-19.274-1.305-28.912a6.366 6.366 0 0 1 .05-2.336c.24-.792.777-1.46 1.499-1.865 1.16-.403 1.85.483 2.104 1.593.235.864.393 1.746.474 2.638.548 11.092.97 22.19 1.626 33.276.43 7.274 1.2 14.527 1.792 21.79.031.38.04.762.038 1.16a2.057 2.057 0 0 1-2.056 2.044ZM144.792 16.613c0-.561.004-1.122.009-1.682.011-1.406.119-2.99 1.927-2.935 1.821.055 1.751 1.707 1.788 3.07.463 16.801.922 33.604 1.379 50.406.036 1.12-.02 2.241-.166 3.352-.169 1.21-.802 2.112-2.187 2.105-1.43-.008-1.951-.96-2.035-2.195-.19-2.908-.425-5.82-.459-8.73-.064-6.387-.257-35.316-.256-43.391Z" />
    <path d="M152.481 75.964c-.191-3.311-.475-6.308-.499-9.307-.048-2.112.155-4.22.603-6.285a3.246 3.246 0 0 1 2.254-1.994c1.37-.14 1.51 1.222 1.651 2.408.565 4.66 1.299 9.305 1.824 13.971.544 4.848-.861 6.295-5.63 6.498-3.908.165-7.81.554-11.71.845-1.004.075-2.006.176-3.01.222-1.222.057-2.322-.23-2.462-1.663-.131-1.346.772-2.115 1.962-2.327 4.069-.721 8.15-1.352 12.229-2.007.759-.124 1.526-.2 2.788-.361ZM6.227 80.466c3.363 0 6.705-.042 10.045.02a13.408 13.408 0 0 1 4.292.505c.84.307 1.894 1.495 1.878 2.267-.017.806-1.09 1.752-1.918 2.322-.572.394-1.51.333-2.288.338-4.14.023-8.283.073-12.422-.02-3.952-.089-5.222-1.389-5.293-5.285C.459 77.257.489 73.9.514 70.542c.01-1.437-.197-3.1 1.854-3.363C3.755 67 4.65 68.23 4.9 70.527c.28 2.556.48 5.12.76 7.675.143.766.332 1.521.566 2.264ZM152.289 5.208c-3.383-.126-6.826-.262-10.27-.382-.559-.02-1.12-.011-1.681 0-1.283.019-2.665-.01-2.742-1.693-.074-1.633 1.379-2.008 2.567-2.096 2.114-.158 4.249-.028 6.376-.024 2.344.004 4.689.065 7.031-.013 2.538-.085 4.044.788 4.143 3.272.204 5.14.077 10.292.043 15.44-.004.534-.143 1.893-.487 2.243a3.924 3.924 0 0 1-2.47 1.109c-.566.065-1.682-1.122-1.87-1.91a27.749 27.749 0 0 1-.616-5.63c-.089-3.235-.024-6.472-.024-10.316ZM6.022 7.286c-.402 4.114-.753 7.668-1.093 11.223-.086.893.047 1.864-.27 2.661l-.008.021a1.796 1.796 0 0 1-3.226.054 4.372 4.372 0 0 1-.197-1.986c.04-3.814.057-7.63.18-11.442.1-3.08 1.29-4.606 4.33-5.038 4.21-.597 8.463-.918 12.702-1.3a4.03 4.03 0 0 1 2.297.252 3.257 3.257 0 0 1 1.454 1.991 2.165 2.165 0 0 1-1.198 1.745c-1.718.458-3.472.77-5.242.932-3.106.341-6.22.573-9.73.887Z" />
  </svg>
);

export default SvgQr;