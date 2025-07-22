"use client"

import React from "react"
import css from "./styles.module.scss"

import classNames from "classnames"
import Image from "next/image"
import { Icon } from "../../icons"
import { Button } from "../../buttons"
import { IProductCardProps } from "@/shared/types/product-card.interface"
import { Price } from "../price"
import { RootLink } from "../../links"
import { ClientRoutes } from "@/shared/routes"
import { useTranslations } from "next-intl"

export const ProductCard: React.FC<IProductCardProps> = ({
  className,
  name,
  categoryName,
  image_url,
  labelTypes,
  paymentTypes,
  statusTypes,
  price,
  oldPrice,
  isBin,
  basketButtonClass,
  categorySlug,
  id,
  size = "big",
}) => {
  const tProduct = useTranslations("product-page")
  const tButtons = useTranslations("buttons")
  return (
    <div
      className={classNames(css.product_card, className, {
        [css._isBin]: isBin,
        [css._big]: size === "big",
        [css._small]: size === "small",
      })}
    >
      <div className={css.card_head}>
        <div className={css.card_labels}>
          {labelTypes?.includes("novelty") && (
            <span className={classNames(css.label, css.novelty)}>{tProduct("label-newest")}</span>
          )}
          {labelTypes?.includes("discount") && (
            <span className={classNames(css.label, css.discount)}>-20%</span>
          )}
          {labelTypes?.includes("top-sales") && (
            <span className={classNames(css.label, css.top_sales)}>
              {tProduct("label-top-sales")}
            </span>
          )}
        </div>
        <div className={css.card_actions}>
          <div className={css.card_payments}>
            {paymentTypes?.includes("mono") && (
              <Image
                className={css.payment_icon}
                src="/images/svg/IconPayMono.svg"
                width={32}
                height={32}
                alt="mono"
              />
            )}
            {paymentTypes?.includes("privat") && (
              <Image
                className={css.payment_icon}
                src="/images/svg/IconPayPrivat.svg"
                width={32}
                height={32}
                alt="privat"
              />
            )}
          </div>
          <div className={css.action_btns}>
            <button className={css.wish_button}>
              <Icon
                name="icon_heart"
                className={css.icon_heart}
              />
            </button>
            <button className={css.wish_button}>
              <Icon
                name="icon_bin"
                className={css.icon_bin}
              />
            </button>
          </div>
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
        <span className={css.product_category}>{categoryName}</span>
        <RootLink
          href={ClientRoutes.product(categorySlug, id)}
          className={css.product_link}
        >
          <h5 className={css.product_name}>{name}</h5>
        </RootLink>
      </div>
      <Price
        price={price}
        oldPrice={oldPrice}
      />
      <div className={css.card_footer}>
        {statusTypes?.includes("available") && (
          <span className={classNames(css.product_status, css.available)}>
            {tProduct("available")}
          </span>
        )}
        {statusTypes?.includes("unavailable") && (
          <span className={classNames(css.product_status, css.unavailable)}>
            {tProduct("unavailable")}
          </span>
        )}
        {statusTypes?.includes("pre-order") && (
          <span className={classNames(css.product_status, css.pre_order)}>
            {tProduct("pre_order")}
          </span>
        )}
        <Button
          modifier="primary"
          className={classNames(css.card_btn, basketButtonClass)}
          iconName="basket_icon"
        >
          {tButtons("add-to-cart")}
        </Button>
      </div>
    </div>
  )
}
