"use client"

import React from "react"
import { IButtonProps } from "./props"
import css from "./styles.module.scss"
import classNames from "classnames"

export const Button: React.FC<IButtonProps> = ({
  children,
  type,
  className,
  modifier,
  size,
  ...props
}) => {
  return (
    <button
      className={classNames(
        css.button,
        className,
        modifier && css[`button_${modifier}`],
        size && css[`button_${size}`],
      )}
      type={type ?? "button"}
      {...props}
    >
      {children}
    </button>
  )
}
