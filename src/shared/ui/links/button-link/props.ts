import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import { IIconsProps } from "../../icons/props"

export type ButtonModifier = "primary" | "secondary"
export type ButtonSize = "small" | "medium"

export interface IButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  modifier?: ButtonModifier
  size?: ButtonSize
  iconName?: IIconsProps["name"]
  iconPosition?: "left" | "right"
  iconSize?: IIconsProps["size"]
  className?: string
  href?: string
}
