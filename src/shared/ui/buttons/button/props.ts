import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

export type ButtonModifier = "primary" | "secondary"
export type ButtonSize = "small" | "medium"

export interface IButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  modifier?: ButtonModifier
  size?: ButtonSize
  className?: string
}
