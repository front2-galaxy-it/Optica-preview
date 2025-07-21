import React from "react"
import css from "./styles.module.scss"
import Image from "next/image"
import { Button } from "@/shared/ui"
import { Icon } from "@/shared/ui/icons"

export const OrderDetails: React.FC = () => {
  return (
    <div className={css.order_details}>
      <div className={css.order_number}>
        <span>№</span>
        <span>200217459</span>
      </div>
      <div className={css.item_content}>
        <span className={css.order_status}>Очікує на відправку</span>
        <div className={css.date_wrap}>
          <span>Орієнтовна дата відправки:</span> <time dateTime="2022-12-18">18.12.2022</time>
        </div>
        <div className={css.products_list}>
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
                <button>
                  <Icon name="icon_minus" />
                </button>
                <span>1</span>
                <button>
                  <Icon name="icon_plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Button
          className={css.canceled_btn}
          modifier="secondary"
          iconName="icon_bin"
        >
          Відмінити замовлення
        </Button>
      </div>
    </div>
  )
}
