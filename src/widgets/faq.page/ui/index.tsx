"use client"

import React, { DetailedHTMLProps, HtmlHTMLAttributes } from "react"
import css from "./styles.module.scss"

import { Accordions } from "@/shared/ui/modules/faq-item"

interface IReviewSectionProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  faqList: any
}

export const FaqPageSection: React.FC<IReviewSectionProps> = ({ faqList }) => {
  return (
    <section className={css.faq_section}>
      <div className="container">
        <Accordions accordeons={faqList} />
      </div>
    </section>
  )
}
