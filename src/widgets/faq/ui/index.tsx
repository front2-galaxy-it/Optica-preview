"use client"

import React from "react"
import css from "./styles.module.scss"
import { SectionTip } from "@/shared/ui/modules/section-tip"

import Image from "next/image"
import classNames from "classnames"
import { ButtonLink } from "@/shared/ui/links"
import { Accordions } from "@/shared/ui/modules/faq-item"
import faqAccodrionsData from "@/shared/data/faq_accodrions.json"
import { IFaqAccordions } from "@/shared/types/faq-accordion.interface"
import { ClientRoutes } from "@/shared/routes"

export const FaqSection: React.FC = () => {
  const faqData: IFaqAccordions[] = faqAccodrionsData
  return (
    <section className={css.faq_section}>
      <div className={classNames(css.faq_section_container, "container")}>
        <SectionTip label="Питання та відповіді" />
        <div className={css.faq_section_head}>
          <h3 className={css.faq_section_title}>Про що нас часто запитують</h3>
          <ButtonLink
            className={css.faq_section_btn}
            modifier="secondary"
            iconName="arrow_right"
            href={ClientRoutes.faq.path}
          >
            Більше відповідей
          </ButtonLink>
        </div>
        <div className={css.faq_section_content}>
          <Accordions accordeons={faqData} />
          <Image
            className={css.faq_section_img}
            src="/images/faq/faq_img.png"
            width={526}
            height={432}
            alt="imag not found"
          />
        </div>
      </div>
    </section>
  )
}
