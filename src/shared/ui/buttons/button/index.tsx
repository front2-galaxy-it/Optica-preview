"use client"

import React from "react"
import { IButtonProps } from "./props"
import css from "./styles.module.scss"
import classNames from "classnames"
import { Icon } from "../../icons"

export const Button: React.FC<IButtonProps> = ({
  children,
  type,
  className,
  modifier,
  size = "",
  iconName,
  iconPosition = "right",
  ...props
}) => {
  const icon = iconName ? (
    <Icon
      name={iconName}
      className={css.icon}
    />
  ) : null

  return (
    <button
      type={type ?? "button"}
      className={classNames(
        css.button,
        className,
        modifier && css[`button_${modifier}`],
        size && css[`button_${size}`],
        iconName && css.has_icon,
        iconName && css[`icon_${iconPosition}`],
      )}
      {...props}
    >
      {iconPosition === "left" && icon}
      <span>{children}</span>
      {iconPosition === "right" && icon}
    </button>
  )
}
