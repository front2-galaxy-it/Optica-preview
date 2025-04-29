"use client"

import React from "react"
import { IButtonProps } from "./props"
import css from "./styles.module.scss"
import classNames from "classnames"
import { RootLink } from "../root-link"
import { Icon } from "../../icons"

export const ButtonLink: React.FC<IButtonProps> = ({ children, className, modifier, size }) => {
  return (
    <RootLink
      href="/"
      className={classNames(
        css.button,
        className,
        modifier && css[`button_${modifier}`],
        size && css[`button_${size}`],
      )}
    >
      {children}
      <Icon
        name="arrow_right"
        className={css.button_icon}
      />
    </RootLink>
  )
}
