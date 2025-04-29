import React from "react"
import css from "./styles.module.scss"
import { INavLink } from "@/shared/types/nav-list.interface"
import { RootLink } from "@/shared/ui"
import classNames from "classnames"

interface IHeaderNavifationProps {
  navList: INavLink[]
  className?: string
}

export const Navigation: React.FC<IHeaderNavifationProps> = ({ navList, className }) => {
  return (
    <nav className={classNames(css.nav_menu, className)}>
      <ul className={css.nav_list}>
        {navList &&
          navList.map((navLink: INavLink, index: number) => (
            <li
              className={css.nav_item}
              key={index}
            >
              <RootLink
                className={classNames(css.nav_link, {
                  [css["_special_green"]]: navLink.specialColorGreen,
                  [css["_special_red"]]: navLink.specialColorRed,
                })}
                href={navLink.href}
                aria-label={navLink.label}
              >
                {navLink.label}
              </RootLink>
            </li>
          ))}
      </ul>
    </nav>
  )
}
