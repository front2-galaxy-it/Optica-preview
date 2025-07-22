"use client"

import React from "react"
import css from "./styles.module.scss"
import Image from "next/image"
import { useTranslations } from "next-intl"

export const ProductPaymentTab: React.FC = () => {
  const tProduct = useTranslations("product-page")
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
          <span className={css.row_title}>{tProduct("cash")}</span>
        </div>
        <div className={css.payment_item}>
          <Image
            src="/images/delivery/clock.png"
            width={32}
            height={32}
            alt="clock"
          />
          <span className={css.row_title}>{tProduct("cod")}</span>
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
          <span className={css.row_title}>{tProduct("installments")}</span>
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
          <span className={css.row_title}>{tProduct("to_nearest_branch")}</span>
        </div>
        <div className={css.payment_item}>
          <Image
            src="/images/delivery/nova_post.png"
            width={102}
            height={32}
            alt="nova post"
          />
          <span className={css.row_title}>Д{tProduct("to_nearest_branch")}</span>
        </div>
        <div className={css.payment_item}>
          <Image
            src="/images/delivery/nova_post_courier.png"
            width={120}
            height={32}
            alt="nova post courier"
          />
          <span className={css.row_title}>{tProduct("courier_delivery")}</span>
        </div>
        <div className={css.payment_item}>
          <Image
            src="/images/delivery/optica_logo.png"
            width={147}
            height={32}
            alt="optica"
          />
          <span className={css.row_title}>{tProduct("courier_delivery")}</span>
        </div>
      </div>
    </div>
  )
}
