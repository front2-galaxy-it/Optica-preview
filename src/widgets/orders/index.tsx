import React from "react"
import css from "./styles.module.scss"
import Image from "next/image"
import { Button } from "@/shared/ui"
import { Icon } from "@/shared/ui/icons"
import classNames from "classnames"
import { OrderDetails } from "../components/order-details"
import { useTranslations } from "next-intl"

// const itemsPerPage = 6

export const Orders: React.FC = () => {
  const tSelectedOrders = useTranslations("profile-page.orders")
  const tButtons = useTranslations("buttons")

  return (
    <div className={css.orders_wrap}>
      <div className={css.orders}>
        <div className={css.without_orders}>
          <Image
            className={css.orders_img}
            src="/images/content_img_13.png"
            width={420}
            height={488}
            alt="image not found"
          />
          <div className={css.orders_text_wrap}>
            <p className={css.orders_title}>{tSelectedOrders("empty-orders-title")}</p>
            <p className={css.orders_descr}>{tSelectedOrders("empty-orders-description")}</p>
            <Button
              modifier="primary"
              iconName="arrow_right"
            >
              {tButtons("go-to-cart-btn")}
            </Button>
          </div>
        </div>
        <div className={css.orders_list_wrap}>
          <div className={css.orders_list}>
            <div className={css.order_item}>
              <div className={css.item_head}>
                <div className={css.order_data}>
                  <div className={css.order_number}>
                    <span>№</span>
                    <span>200217459</span>
                  </div>
                  <div className={css.order_date}>
                    <span>від</span> <time dateTime="2022-11-17">17.11.2022</time>
                  </div>
                </div>
                <button className={classNames(css.order_btn, css.desktop_btn)}>
                  Переглянути деталі
                  <Icon
                    name="arrow_right"
                    className={css.arrow_icon}
                  />
                </button>
              </div>
              <div className={css.item_content}>
                <span className={css.order_status}>Очікує на відправку</span>
                <div className={css.products_list}>
                  <a
                    href="#"
                    className={css.product_link}
                  >
                    <Image
                      className={css.product_img}
                      src="/images/product_preview.png"
                      width={100}
                      height={100}
                      alt="product name"
                    />
                  </a>
                  <a
                    href="#"
                    className={css.product_link}
                  >
                    <Image
                      className={css.product_img}
                      src="/images/product_preview.png"
                      width={100}
                      height={100}
                      alt="product name"
                    />
                  </a>
                  <a
                    href="#"
                    className={css.product_link}
                  >
                    <Image
                      className={css.product_img}
                      src="/images/product_preview.png"
                      width={100}
                      height={100}
                      alt="product name"
                    />
                  </a>
                </div>
                <div className={css.total_count}>
                  <span>3</span>
                  <span>товари</span>
                </div>
                <div className={css.total_sum}>
                  <span>2550</span>
                  <span>грн</span>
                </div>
              </div>
              <button className={classNames(css.order_btn, css.mobile_btn)}>
                Переглянути деталі
                <Icon
                  name="arrow_right"
                  className={css.arrow_icon}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <OrderDetails />
    </div>
  )
}
