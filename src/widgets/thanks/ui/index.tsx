import React from "react"
import css from "./styles.module.scss"
import classNames from "classnames"

export const ThanksSection: React.FC = () => {
  return (
    <section className={css.thanks}>
      <div className="container">
        <p className={css.thanks_text}>
          Наші менеджери вже почали роботу над вашим замовленням! <br /> У разі потреби додаткових
          уточнень щодо вашого замовлення ми обов’язково зв’яжемося з Вами.
        </p>
        <div className={css.thanks_content}>
          <div className={css.thanks_content_item}>
            <div className={css.item_text_wrap}>
              <strong>Ваше замовлення</strong>
              <div className={css.item_value}>
                <span>3</span>
                <span>товари на сумму</span>
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
              <strong>Отримувач</strong>
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
              <strong>Доставка</strong>
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
              <strong>Оплата</strong>
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
