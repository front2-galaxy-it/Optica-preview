// "use client"

import React, { DetailedHTMLProps, HtmlHTMLAttributes } from "react"
import css from "./styles.module.scss"
import { SectionTip } from "@/shared/ui/modules/section-tip"

import Image from "next/image"
import classNames from "classnames"
import { ButtonLink } from "@/shared/ui/links"
import { Accordions } from "@/shared/ui/modules/faq-item"
import { ClientRoutes } from "@/shared/routes"
import { useTranslations } from "next-intl"

interface IFaqSectionProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  module: any
}

export const FaqSection: React.FC<IFaqSectionProps> = ({ module }) => {
  const tButtons = useTranslations("buttons")

  const { title, sub_title } = module.content
  const { items, image } = module

  return (
    <section className={css.faq_section}>
      <div className={classNames(css.faq_section_container, "container")}>
        <SectionTip label={sub_title} />
        <div className={css.faq_section_head}>
          <h3 className={css.faq_section_title}>{title}</h3>
          <ButtonLink
            className={css.faq_section_btn}
            modifier="secondary"
            iconName="arrow_right"
            href={ClientRoutes.faq.path}
          >
            {tButtons("more_answers_button")}
          </ButtonLink>
        </div>
        <div className={css.faq_section_content}>
          <Accordions accordeons={items.slice(0, 6)} />
          <Image
            className={css.faq_section_img}
            src={image}
            width={526}
            height={432}
            alt="imag not found"
          />
        </div>
      </div>
    </section>
  )
}
