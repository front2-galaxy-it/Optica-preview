"use client"

import React from "react"
import css from "./styles.module.scss"
import { useTranslations } from "next-intl"

export const Payment: React.FC = () => {
  const tPayment = useTranslations("payment-section")
  return (
    <section className={css.payment_section}>
      <div className="container">
        <p className={css.tab_text}>{tPayment("description-1")}</p>
        <p className={css.tab_text}>{tPayment("description-2")}</p>
      </div>
    </section>
  )
}
