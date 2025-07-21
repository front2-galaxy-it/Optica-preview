import React from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { useTranslations } from "next-intl"

export const ThanksSection: React.FC = () => {
  const tThanks = useTranslations("checkout-success-page")
  return (
    <section className={css.thanks}>
      <div className="container">
        <div className={css.thanks_text_wrap}>
          <p className={css.thanks_text}>{tThanks("thanks_text-1")}</p>
          <p className={css.thanks_text}>{tThanks("thanks_text-2")}</p>
        </div>
        <div className={css.thanks_content}>
          <div className={css.thanks_content_item}>
            <div className={css.item_text_wrap}>
              <strong>{tThanks("order_summary_title")}</strong>
              <div className={css.item_value}>
                <span>3</span>
                <span>{tThanks("order_summary_items_label")}</span>
              </div>
              <div className={classNames(css.item_info, css.total_price)}>
                <span>2550</span>
                <span>грн</span>
              </div>
            </div>
            <div className={css.divider}></div>
          </div>
          <div className={css.thanks_content_item}>
            <div className={css.item_text_wrap}>
              <strong>{tThanks("order_recipient")}</strong>
              <div className={css.item_value}>
                <span>Анна</span>
                <span>Миколаївна</span>
                <span>Нікітіна</span>
              </div>
              <div className={css.item_info}>
                <span>+38(063)123-45-67</span>
              </div>
            </div>
            <div className={css.divider}></div>
          </div>
          <div className={css.thanks_content_item}>
            <div className={css.item_text_wrap}>
              <strong>{tThanks("order_delivery")}</strong>
              <div className={css.item_value}>
                <span>Нова пошта</span>
              </div>
              <div className={css.item_info}>
                <span>м.Харків,</span>
                <span>відділення №1</span>
              </div>
            </div>
            <div className={css.divider}></div>
          </div>
          <div className={css.thanks_content_item}>
            <div className={css.item_text_wrap}>
              <strong>{tThanks("order_payment")}</strong>
              <div className={css.item_value}>
                <span>при отриманні</span>
              </div>
            </div>
            <div className={css.divider}></div>
          </div>
        </div>
      </div>
    </section>
  )
}
