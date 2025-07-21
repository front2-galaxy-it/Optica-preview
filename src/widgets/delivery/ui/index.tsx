"use client"

import React from "react"
import css from "./styles.module.scss"
import { useTranslations } from "next-intl"

export const Delivery: React.FC = () => {
  const tDelivery = useTranslations("delivery-section")
  return (
    <section className={css.delivery_section}>
      <div className="container">
        <p className={css.tab_text}>{tDelivery("description-1")}</p>
        <p className={css.tab_text}>{tDelivery("description-2")}</p>
      </div>
    </section>
  )
}
