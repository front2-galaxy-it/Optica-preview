"use client"

import React, { DetailedHTMLProps, HtmlHTMLAttributes } from "react"
import css from "./styles.module.scss"
import Image from "next/image"

interface IPaymentSectionProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  module: any
}

export const PaymentBlock: React.FC<IPaymentSectionProps> = ({ module }) => {
  const { items } = module
  return (
    <section className={css.payment_block}>
      <div className="container">
        <div className={css.payment_block_wrap}>
          {items.map((item: any, index: number) => (
            <div
              className={css.payment_block}
              key={index}
            >
              <Image
                className={css.payment_block_img}
                src={item.image || "/images/delivery/money.png"}
                width={203}
                height={203}
                alt={item.content?.title || "payment image"}
              />
              <b>{item.content?.title}</b>
              <p dangerouslySetInnerHTML={{ __html: item.content?.description }} />
              <div className={css.payment_block_icons}>
                {item.picture_1 && (
                  <Image
                    className={css.delivery_block_item_img}
                    src={item.picture_1}
                    width={0}
                    height={0}
                    style={{ width: "auto", height: "auto" }}
                    alt="icon"
                  />
                )}
                {item.picture_2 && (
                  <Image
                    className={css.delivery_block_item_img}
                    src={item.picture_2}
                    width={0}
                    height={0}
                    style={{ width: "auto", height: "auto" }}
                    alt="icon"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
