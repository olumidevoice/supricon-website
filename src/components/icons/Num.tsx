import * as React from "react";
import type { SVGProps } from "react";
const SvgNum = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <rect width={27} height={27} x={0.5} y={0.5} stroke="#2DACCF" rx={1.5} />
    <rect width={20} height={20} x={4} y={4} fill="#2DACCF" rx={2} />
    <path
      fill="#fff"
      d="M13.783 10a1.391 1.391 0 1 0 0 2.783 1.391 1.391 0 0 0 0-2.783M11 14.87 13.783 18l2.782-3.13z"
    />
  </svg>
);
export default SvgNum;
