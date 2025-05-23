import React from "react"
import { ISVGProps } from "../props"

export const IconPin: React.FC<ISVGProps> = ({ className, ...props }) => (
  <svg
    className={className}
    width="12"
    height="20"
    viewBox="0 0 12 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 6V14C1 15.3261 1.52678 16.5979 2.46447 17.5355C3.40215 18.4732 4.67392 19 6 19C7.32608 19 8.59785 18.4732 9.53553 17.5355C10.4732 16.5979 11 15.3261 11 14V4.5C11 3.57174 10.6313 2.6815 9.97487 2.02513C9.3185 1.36875 8.42826 1 7.5 1C6.57174 1 5.6815 1.36875 5.02513 2.02513C4.36875 2.6815 4 3.57174 4 4.5V13C4 13.5304 4.21071 14.0391 4.58579 14.4142C4.96086 14.7893 5.46957 15 6 15C6.53043 15 7.03914 14.7893 7.41421 14.4142C7.78929 14.0391 8 13.5304 8 13V6"
      stroke="currentcolor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
