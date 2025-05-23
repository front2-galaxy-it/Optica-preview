import React from "react"
import { ISVGProps } from "../props"

export const IconStar: React.FC<ISVGProps> = ({ className, ...props }) => (
  <svg
    className={className}
    width="20"
    height="19"
    viewBox="0 0 20 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 0L12.3511 6.76393L19.5106 6.90983L13.8042 11.2361L15.8779 18.0902L10 14L4.12215 18.0902L6.19577 11.2361L0.489435 6.90983L7.64886 6.76393L10 0Z"
      fill="currentcolor"
    />
  </svg>
)
