import type { SVGProps } from "react";
const SvgCall = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={14}
        fill="none"
        {...props}
    >
        <path
            fill="#2DACCF"
            d="M4.408.983a1.833 1.833 0 0 0-2.58.097l-.599.599a2.49 2.49 0 0 0-.67 2.3 12.44 12.44 0 0 0 9.447 9.448 2.49 2.49 0 0 0 2.301-.67l.599-.599c.04-.04.07-.07.097-.099a1.833 1.833 0 0 0-.097-2.58l-.98-.98a2.34 2.34 0 0 0-2.588-.49 1.34 1.34 0 0 1-1.483-.28L6.258 6.13a1.34 1.34 0 0 1-.281-1.482 2.34 2.34 0 0 0-.49-2.59l-.98-.979c-.04-.04-.07-.07-.1-.097"
        />
    </svg>
);
export default SvgCall;
