import React from "react"
import classNames from "classnames"
import css from "./styles.module.scss"

interface PriceProps {
  price: number
  oldPrice?: number
  currency?: string
  className?: string
}

export const Price = ({ price, oldPrice, currency = "грн", className }: PriceProps) => {
  const isDiscount = oldPrice && oldPrice > price

  return (
    <div className={classNames(css.price_wrap, className)}>
      <div
        className={classNames(css.current_price_wrap, css.price_body, {
          [css.discounted_price]: isDiscount,
        })}
      >
        <span className={classNames(css.price)}>{price}</span>
        <span className={css.currency}>{currency}</span>
      </div>
      {isDiscount && (
        <div className={classNames(css.discount_price, css.price_body)}>
          <span className={css.price}>{oldPrice}</span>
          <span className={css.currency}>{currency}</span>
        </div>
      )}
    </div>
  )
}
