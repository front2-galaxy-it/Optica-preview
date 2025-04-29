"use client"

import React from "react"
import { Icon } from "../../icons"
import css from "./styles.module.scss"
import { Link, LinkProps } from "@/app/localization"

export const DefaultLink: React.FC<LinkProps> = ({ href, locale, children, ...props }) => {
  return (
    <Link
      className={css.link}
      href={href}
      {...(locale ? { locale } : {})}
      {...props}
    >
      {children}
      <Icon
        name="arrow_right"
        className={css.button_icon}
      />
    </Link>
  )
}

export interface IRootLinkProps extends LinkProps {}
