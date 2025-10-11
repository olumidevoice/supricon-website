import * as React from "react";
import type { SVGProps } from "react";
const SvgGift = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M6.333 8a3.333 3.333 0 0 0-2.38 5.667h24.76A3.333 3.333 0 0 0 26.334 8h-20"
    />
    <path
      fill="#fff"
      d="M16.333 5.333A2.667 2.667 0 1 1 19 8h-2.667zM16.333 5.333A2.667 2.667 0 1 0 13.667 8h2.666zM15.333 15.667H4.303l.005.161c.012.448.025.983.025 1.696 0 3.254 0 4.881.508 6.165.676 1.711 1.974 3.07 3.608 3.78C9.674 28 11.227 28 14.333 28h1zM17.333 28h1c3.107 0 4.66 0 5.885-.532 1.633-.708 2.931-2.068 3.608-3.78.507-1.283.507-2.91.507-6.164 0-.801 0-1.377-.007-1.857H17.333z"
    />
  </svg>
);
export default SvgGift;
