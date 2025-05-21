"use client"

import React, { useState } from "react"
import css from "./styles.module.scss"
import Image from "next/image"
import { Icon } from "@/shared/ui/icons"
import { ButtonLink } from "@/shared/ui/links"
import classNames from "classnames"
import { ClientRoutes } from "@/shared/routes"

export const CartSection: React.FC = () => {
  const [counterValue, setCounterValue] = useState(1)

  const handleIncreaseCounterValue = () => {
    setCounterValue(counterValue + 1)
  }

  const handleDecreaseCounterValue = () => {
    if (counterValue > 1) {
      setCounterValue(counterValue - 1)
    }
  }
  return (
    <section className={css.cart}>
      <div className="container">
        <div className={css.cart_content}>
          <div className={css.cart_products}>
            <div className={css.product_body}>
              <Image
                className={css.product_img}
                src="/images/product_preview.png"
                width={100}
                height={100}
                alt="product name"
              />
              <div className={css.product_info}>
                <span className={css.product_category}>Сонцезахисні окуляри</span>
                <strong className={css.product_name}>SAINT LAURENT SL 276 MICA 032 GREY</strong>
                <div className={css.product_price}>
                  <span>1160</span>
                  <span>грн</span>
                </div>
              </div>
              <div className={css.product_actions}>
                <button className={css.remove_btn}>
                  <Icon name="icon_bin" />
                </button>
                <div className={css.counter_wrap}>
                  <button onClick={() => handleDecreaseCounterValue()}>
                    <Icon name="icon_minus" />
                  </button>
                  <span>{counterValue}</span>
                  <button onClick={() => handleIncreaseCounterValue()}>
                    <Icon name="icon_plus" />
                  </button>
                </div>
              </div>
            </div>
            <div className={css.product_body}>
              <Image
                className={css.product_img}
                src="/images/product_preview.png"
                width={100}
                height={100}
                alt="product name"
              />
              <div className={css.product_info}>
                <span className={css.product_category}>Сонцезахисні окуляри</span>
                <strong className={css.product_name}>SAINT LAURENT SL 276 MICA 032 GREY</strong>
                <div className={css.product_price}>
                  <span>1160</span>
                  <span>грн</span>
                </div>
              </div>
              <div className={css.product_actions}>
                <button className={css.remove_btn}>
                  <Icon name="icon_bin" />
                </button>
                <div className={css.counter_wrap}>
                  <button onClick={() => handleDecreaseCounterValue()}>
                    <Icon name="icon_minus" />
                  </button>
                  <span>{counterValue}</span>
                  <button onClick={() => handleIncreaseCounterValue()}>
                    <Icon name="icon_plus" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={css.cart_total}>
            <div className={css.cart_total_head}>
              <p>
                Всього <span>3</span> товари на суму:
              </p>
              <div className={css.total_sum}>
                <span>2550</span>
                <span>грн</span>
              </div>
            </div>
            <div className={css.cart_total_bonus}>
              <p>Нараховано бонусів</p>
              <div className={css.total_bonus}>
                <span>+</span>
                <span>255</span>
                <span>бонусів</span>
              </div>
            </div>
            <ButtonLink
              className={classNames(css.cart_btn, css.place_btn)}
              modifier="primary"
              iconName="basket_icon"
              href={ClientRoutes.checkout.path}
            >
              Оформити замовлення
            </ButtonLink>
            <ButtonLink
              className={css.cart_btn}
              modifier="secondary"
              iconName="arrow_right"
            >
              Продовжити покупки
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
