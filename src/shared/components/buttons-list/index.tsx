"use client"

import React from "react"
import { RootLink } from "@/shared/ui"
import css from "./styles.module.scss"
import { IInfoButtonsProps } from "@/shared/types"
import { usePathname } from "next/navigation"
import { useTranslations } from "next-intl"

interface InfoButtonsListProps {
  items: IInfoButtonsProps[]
}

export const ButtonsList: React.FC<InfoButtonsListProps> = ({ items }) => {
  const pathname = usePathname()
  const tNavButtons = useTranslations("nav_buttons")
  return (
    <div className={css.buttons_list_wrap}>
      <div className={css.buttons_list}>
        {items.map(({ labelKey, href }) => {
          const isActive = pathname.startsWith(href)

          return (
            <RootLink
              key={href}
              href={href}
              className={`${css.button} ${isActive ? css.active : ""}`}
            >
              {tNavButtons(labelKey)}
            </RootLink>
          )
        })}
      </div>
    </div>
  )
}
