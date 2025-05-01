import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import { IIconsProps } from "../../icons/props"

export type ButtonModifier = "primary" | "secondary"
export type ButtonSize = "small" | "medium"
export type ButtonIconPosition = "left" | "right"

export interface IButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  modifier?: ButtonModifier
  size?: ButtonSize
  className?: string
  iconName?: IIconsProps["name"]
  iconPosition: ButtonIconPosition
}
