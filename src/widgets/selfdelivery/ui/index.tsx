"use client"

import React, { DetailedHTMLProps, HtmlHTMLAttributes } from "react"
import css from "./styles.module.scss"
import { SectionTip } from "@/shared/ui/modules/section-tip"
import { AdressDelivery } from "@/shared/ui"

interface IDeliverySectionProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  module: any
}

export const SelfDeliverySection: React.FC<IDeliverySectionProps> = ({ module }) => {
  const { title, sub_title, text } = module.content
  const { items } = module
  return (
    <section className={css.self_delivery_section}>
      <div className="container">
        <SectionTip
          className={css.map_tip}
          label={sub_title}
        />
        <h3 className={css.map_title}>{title}</h3>
        <p className={css.map_text}>{text}</p>
        <AdressDelivery addressList={items} />
      </div>
    </section>
  )
}
