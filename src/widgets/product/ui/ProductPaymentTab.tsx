"use client"

import React from "react"
import css from "./styles.module.scss"
import Image from "next/image"

export const ProductPaymentTab: React.FC = () => {
  return (
    <div className={css.payment}>
      <div className={css.payment_row}>
        <div className={css.payment_item}>
          <Image
            src="/images/delivery/money.png"
            width={32}
            height={32}
            alt="money"
          />
          <span className={css.row_title}>Готівкою</span>
        </div>
        <div className={css.payment_item}>
          <Image
            src="/images/delivery/clock.png"
            width={32}
            height={32}
            alt="clock"
          />
          <span className={css.row_title}>Післяплата</span>
        </div>
        <div className={css.payment_item}>
          <Image
            src="/images/delivery/credit-card.png"
            width={32}
            height={32}
            alt="credit-card"
          />
          <span className={css.row_title}>Visa/mastercard</span>
        </div>
        <div className={css.payment_item}>
          <Image
            src="/images/delivery/money-cash.png"
            width={32}
            height={32}
            alt="money-cash"
          />
          <span className={css.row_title}>Оплата частинами</span>
        </div>
      </div>
      <div className={css.payment_row}>
        <div className={css.payment_item}>
          <Image
            src="/images/delivery/ukr_post.png"
            width={140}
            height={32}
            alt="ukrpost"
          />
          <span className={css.row_title}>До найближчого відділення.</span>
        </div>
        <div className={css.payment_item}>
          <Image
            src="/images/delivery/nova_post.png"
            width={102}
            height={32}
            alt="nova post"
          />
          <span className={css.row_title}>До найближчого відділення.</span>
        </div>
        <div className={css.payment_item}>
          <Image
            src="/images/delivery/nova_post_courier.png"
            width={120}
            height={32}
            alt="nova post courier"
          />
          <span className={css.row_title}>Адресна доставка кур’єром.</span>
        </div>
        <div className={css.payment_item}>
          <Image
            src="/images/delivery/optica_logo.png"
            width={147}
            height={32}
            alt="optica"
          />
          <span className={css.row_title}>Адресна доставка кур’єром.</span>
        </div>
      </div>
    </div>
  )
}
