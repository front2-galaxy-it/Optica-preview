"use client"

import React from "react"
import css from "./styles.module.scss"
import { SectionTip } from "@/shared/ui/modules/section-tip"

interface PageInfoProps {
  label: string
  title: string
}

export const PageInfo: React.FC<PageInfoProps> = ({ label, title }) => {
  return (
    <section className={css.page_info}>
      <div className="container">
        <SectionTip
          label={label}
          className={css.tip}
        />
        <h3 className={css.title}>{title}</h3>
      </div>
    </section>
  )
}
