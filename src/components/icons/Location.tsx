import type { SVGProps } from "react";
const SvgLocation = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={15}
        fill="none"
        {...props}
    >
        <path
            fill="#2DACCF"
            fillRule="evenodd"
            d="M7.854 13.134c1.54-1.964 3.48-4.817 3.48-6.728 0-3.17-2.388-5.74-5.334-5.74S.667 3.237.667 6.407c0 1.911 1.94 4.764 3.48 6.728C4.948 14.158 5.35 14.67 6 14.67s1.05-.512 1.854-1.536M6 8.667a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgLocation;
