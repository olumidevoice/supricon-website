import * as React from "react";
import type { SVGProps } from "react";
const SvgNumClear = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <rect width={27} height={27} x={0.5} y={0.5} stroke="#2DACCF" rx={1.5} />
    <rect width={20} height={20} x={4} y={4} fill="#2DACCF" rx={2} />
  </svg>
);
export default SvgNumClear;
