"use client"

import React from "react"
import css from "./styles.module.scss"
import { Icon } from "../../icons"
import classNames from "classnames"

interface SectionTipProps {
  label: string
  className?: string
}

export const SectionTip: React.FC<SectionTipProps> = ({ label, className }) => {
  return (
    <div className={classNames(css.tip_wrap, className)}>
      <Icon
        name="dot_line_left"
        className={css.dot_line}
      />
      <span>{label}</span>
      <Icon
        name="dot_line_right"
        className={css.dot_line}
      />
    </div>
  )
}
