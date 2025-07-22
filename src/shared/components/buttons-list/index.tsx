"use client"

import React from "react"
import { RootLink } from "@/shared/ui"
import css from "./styles.module.scss"
import { IInfoButtonsProps } from "@/shared/types"
import { usePathname, useParams } from "next/navigation"
import { useTranslations } from "next-intl"

interface InfoButtonsListProps {
  items: IInfoButtonsProps[]
}

export const ButtonsList: React.FC<InfoButtonsListProps> = ({ items }) => {
  const tNavButtons = useTranslations("nav_buttons")

  const pathname = usePathname()
  const params = useParams()

  const pathWithoutLocale = pathname.replace(`/${params.locale}`, "")
  return (
    <div className={css.buttons_list_wrap}>
      <div className={css.buttons_list}>
        {items.map(({ labelKey, href }) => {
          const isActive = pathWithoutLocale === href

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
