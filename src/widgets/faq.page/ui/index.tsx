"use client"

import React from "react"
import css from "./styles.module.scss"

import { Accordions } from "@/shared/ui/modules/faq-item"
import faqAccodrionsData from "@/shared/data/faq_accodrions.json"
import { IFaqAccordions } from "@/shared/types/faq-accordion.interface"

export const FaqPageSection: React.FC = () => {
  const faqData: IFaqAccordions[] = faqAccodrionsData
  return (
    <section className={css.faq_section}>
      <div className="container">
        <Accordions accordeons={faqData} />
      </div>
    </section>
  )
}
