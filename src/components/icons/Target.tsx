import type { SVGProps } from "react";
const SvgTarget = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={40}
        fill="none"
        {...props}
    >
        <path
            fill="#fff"
            fillRule="evenodd"
            d="M20 7a1 1 0 0 1 1 1v1.045A11 11 0 0 1 30.955 19H32a1 1 0 1 1 0 2h-1.045A11 11 0 0 1 21 30.955V32a1 1 0 1 1-2 0v-1.045A11 11 0 0 1 9.045 21H8a1 1 0 1 1 0-2h1.045A11 11 0 0 1 19 9.045V8a1 1 0 0 1 1-1m-1 4.055A9.004 9.004 0 0 0 11.055 19H12a1 1 0 1 1 0 2h-.945A9.004 9.004 0 0 0 19 28.945V28a1 1 0 1 1 2 0v.945A9.004 9.004 0 0 0 28.945 21H28a1 1 0 1 1 0-2h.945A9.004 9.004 0 0 0 21 11.055V12a1 1 0 1 1-2 0zM16 20a4 4 0 1 1 8 0 4 4 0 0 1-8 0"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgTarget;
