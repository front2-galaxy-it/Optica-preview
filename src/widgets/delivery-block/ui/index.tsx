"use client"

import React, { DetailedHTMLProps, HtmlHTMLAttributes } from "react"
import css from "./styles.module.scss"
import Image from "next/image"

interface IDeliverySectionProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  module: any
}

export const DeliveryBlock: React.FC<IDeliverySectionProps> = ({ module }) => {
  const { title } = module.content
  const { items } = module

  return (
    <section className={css.delivery_block}>
      <div className="container">
        <h6 className={css.delivery_block_title}>{title}</h6>
        <div className={css.delivery_block_items}>
          {items.map((item: any, index: number) => (
            <div
              className={css.delivery_block_item}
              key={index}
            >
              <div className={css.delivery_block_item_img_wrap}>
                <Image
                  className={css.delivery_block_item_img}
                  src={item.image}
                  width={142}
                  height={32}
                  alt={item.content.title}
                />
              </div>
              <div
                className={css.delivery_block_item_content}
                dangerouslySetInnerHTML={{ __html: item.content.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
