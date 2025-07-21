"use client"

import React from "react"
import { IButtonProps } from "./props"
import css from "./styles.module.scss"
import classNames from "classnames"
import { RootLink } from "../root-link"
import { Icon } from "../../icons"

export const ButtonLink: React.FC<IButtonProps> = ({
  children,
  className,
  modifier,
  size,
  iconName,
  iconSize,
  iconPosition = "right",
  href,
}) => {
  const icon = iconName ? (
    <Icon
      name={iconName}
      className={css.icon}
      size={iconSize}
    />
  ) : null
  return (
    <RootLink
      href={href || "#"}
      className={classNames(
        css.button,
        className,
        modifier && css[`button_${modifier}`],
        size && css[`button_${size}`],
        iconName && css.has_icon,
        iconName && css[`icon_${iconPosition}`],
      )}
    >
      {iconPosition === "left" && icon}
      <span>{children}</span>
      {iconPosition === "right" && icon}
    </RootLink>
  )
}
