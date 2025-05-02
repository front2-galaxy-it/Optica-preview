"use client"

import React from "react"
import css from "./styles.module.scss"

import classNames from "classnames"
import Image from "next/image"
import { Icon } from "../../icons"
import { Button } from "../../buttons"
import { IProductCardProps } from "@/shared/types/product-card.interface"
import { Price } from "../price"

export const ProductCard: React.FC<IProductCardProps> = ({
  className,
  name,
  category,
  image_url,
  labelTypes,
  statusTypes,
  price,
  oldPrice,
}) => {
  return (
    <div className={classNames(css.product_card, className)}>
      <div className={css.card_head}>
        <div className={css.card_labels}>
          {labelTypes?.includes("novelty") && (
            <span className={classNames(css.label, css.novelty)}>Новинка</span>
          )}
          {labelTypes?.includes("discount") && (
            <span className={classNames(css.label, css.discount)}>-20%</span>
          )}
          {labelTypes?.includes("top-sales") && (
            <span className={classNames(css.label, css.top_sales)}>Топ продажів</span>
          )}
        </div>
        <div className={css.card_actions}>
          <div className={css.card_payments}>
            <Image
              className={css.payment_icon}
              src="/images/svg/IconPayMono.svg"
              width={32}
              height={32}
              alt="mono"
            />
            <Image
              className={css.payment_icon}
              src="/images/svg/IconPayPrivat.svg"
              width={32}
              height={32}
              alt="privat"
            />
          </div>
          <button className={css.wish_button}>
            <Icon
              name="icon_heart"
              className={css.icon_heart}
            />
          </button>
        </div>
      </div>
      <div className={css.product_img}>
        <Image
          src={image_url}
          width={387}
          height={319}
          alt={name}
        />
      </div>
      <div className={css.product_info}>
        <span className={css.product_category}>{category}</span>
        <h5 className={css.product_name}>{name}</h5>
      </div>
      <Price
        price={price}
        oldPrice={oldPrice}
      />
      <div className={css.card_footer}>
        {statusTypes?.includes("available") && (
          <span className={classNames(css.product_status, css.available)}>В наявності</span>
        )}
        {statusTypes?.includes("unavailable") && (
          <span className={classNames(css.product_status, css.unavailable)}>Немає в наявності</span>
        )}
        {statusTypes?.includes("pre-order") && (
          <span className={classNames(css.product_status, css.pre_order)}>Передзамовлення</span>
        )}
        <Button
          modifier="primary"
          className={css.card_btn}
          iconName="basket_icon"
        >
          До кошика
        </Button>
      </div>
    </div>
  )
}
