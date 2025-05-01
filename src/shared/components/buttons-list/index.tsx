"use client"

import React from "react"
import { RootLink } from "@/shared/ui"
import css from "./styles.module.scss"
import { IInfoButtonsProps } from "@/shared/types"
import { usePathname } from "next/navigation"

interface InfoButtonsListProps {
  items: IInfoButtonsProps[]
}

export const ButtonsList: React.FC<InfoButtonsListProps> = ({ items }) => {
  const pathname = usePathname()

  return (
    <div className={css.buttons_list_wrap}>
      <div className={css.buttons_list}>
        {items.map(({ label, href }) => {
          const isActive = pathname === href
          return (
            <RootLink
              key={href}
              href={href}
              className={`${css.button} ${isActive ? css.active : ""}`}
            >
              {label}
            </RootLink>
          )
        })}
      </div>
    </div>
  )
}
