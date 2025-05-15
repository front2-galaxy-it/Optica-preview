"use client"

import { useState } from "react"
import css from "./styles.module.scss"
import Image from "next/image"
import classNames from "classnames"
import { IProductCardProps } from "@/shared/types"
import { Icon } from "@/shared/ui/icons"
import type { Swiper as SwiperType } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { Thumbs } from "swiper/modules"
import { Price } from "@/shared/ui/modules/price"
import { Button } from "@/shared/ui"
import { motion } from "framer-motion"
import { ProductCharacteristicsTab } from "./ProductCharacteristicsTab"
import { ProductReviewsTab } from "./ProductReviewsTab"

interface ProductSectionProps {
  product: IProductCardProps
}

export const ProductSection: React.FC<ProductSectionProps> = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  const [selectedColor, setSelectedColor] = useState<string>(product.colors?.[0]?.id || "grey")

  const handleColorChange = (colorId: string) => {
    setSelectedColor(colorId)
  }

  const colorImages = product.images[selectedColor] || []

  const [counterValue, setCounterValue] = useState(1)

  const handleIncreaseCounterValue = () => {
    setCounterValue(counterValue + 1)
  }

  const handleDecreaseCounterValue = () => {
    if (counterValue > 1) {
      setCounterValue(counterValue - 1)
    }
  }

  const [activeTab, setActiveTab] = useState<"characteristics" | "reviews" | "payment">(
    "characteristics",
  )

  const tabMap: Record<string, string> = {
    characteristics: "Характеристики та опис",
    reviews: "Відгуки",
    payment: "Доставка та оплата",
  }

  return (
    <section className={css.product}>
      <div className="container">
        <div className={css.product_content}>
          <div
            key={product.id}
            className={css.product_img_wrap}
          >
            <div className={css.product_img_wrap_head}>
              <div className={css.product_labels}>
                {product.labelTypes?.includes("novelty") && (
                  <span className={classNames(css.label, css.novelty)}>Новинка</span>
                )}
                {product.labelTypes?.includes("discount") && (
                  <span className={classNames(css.label, css.discount)}>-20%</span>
                )}
                {product.labelTypes?.includes("top-sales") && (
                  <span className={classNames(css.label, css.top_sales)}>Топ продажів</span>
                )}
              </div>
              <div className={css.product_actions}>
                <div className={css.product_payments}>
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

            <div className={css.gallery}>
              {colorImages.length > 0 && (
                <>
                  <Swiper
                    modules={[Thumbs]}
                    thumbs={{ swiper: thumbsSwiper }}
                    spaceBetween={10}
                    slidesPerView={1}
                    className={css.mainSlider}
                  >
                    {colorImages.map((img, index) => (
                      <SwiperSlide key={index}>
                        <motion.img
                          key={img}
                          src={img}
                          alt={`Product ${index}`}
                          className={css.mainImage}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 2 }}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={12}
                    slidesPerView={3}
                    watchSlidesProgress
                    className={css.thumbSlider}
                  >
                    {colorImages.map((img, index) => (
                      <SwiperSlide key={index}>
                        <motion.img
                          key={img}
                          src={img}
                          alt={`Thumb ${index}`}
                          className={css.thumbImage}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 2 }}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </>
              )}
            </div>
          </div>

          <div className={css.product_info}>
            <span className={css.product_category}>{product.categoryName}</span>
            <h5 className={css.product_title}>{product.name}</h5>
            <div className={css.product_subinfo}>
              <div className={css.product_reviews}>
                <div className={css.stars}>
                  {[...Array(5)].map((_, index) => (
                    <Icon
                      key={index}
                      name="icon_star"
                      className={css.icon_star}
                    />
                  ))}
                </div>
                <div className={css.review_count}>
                  <span>10</span>
                  <span>відгуків</span>
                </div>
              </div>
              <div className={css.product_code}>
                <span>Код товару:</span> <span>{product.code}</span>
              </div>
            </div>

            {product.statusTypes?.includes("available") && (
              <span className={classNames(css.product_status, css.available)}>В наявності</span>
            )}
            {product.statusTypes?.includes("unavailable") && (
              <span className={classNames(css.product_status, css.unavailable)}>
                Немає в наявності
              </span>
            )}
            {product.statusTypes?.includes("pre-order") && (
              <span className={classNames(css.product_status, css.pre_order)}>Передзамовлення</span>
            )}

            <div className={css.product_color}>
              <span>Інші кольори</span>
              <div className={css.colors_wrap}>
                {product.colors?.map((color) => (
                  <button
                    key={color.id}
                    className={classNames(css.color_button, {
                      [css.selectedColor]: selectedColor === color.id,
                    })}
                    style={{ backgroundColor: color.hex }}
                    title={color.id}
                    onClick={() => handleColorChange(color.id)}
                  ></button>
                ))}
              </div>
            </div>

            <Price
              className={css.product_price}
              price={product.price}
              oldPrice={product.oldPrice}
            />
            <div className={css.product_bonus}>
              <span>+18</span>
              <span>грн на бонусний рахунок</span>
            </div>

            <div className={css.product_count}>
              <button onClick={() => handleDecreaseCounterValue()}>
                <Icon name="icon_minus" />
              </button>
              <span>{counterValue}</span>
              <button onClick={() => handleIncreaseCounterValue()}>
                <Icon name="icon_plus" />
              </button>
            </div>

            <Button
              className={css.product_btn}
              modifier="primary"
              iconName="basket_icon"
              size="medium"
            >
              До кошика
            </Button>

            <div className={css.warning_message}>
              <Image
                src="/images/svg/error-icon.svg"
                width={24}
                height={24}
                alt="alert icon"
              />
              <p>
                Просимо звернути увагу: колір товару може відрізнятися в залежності від освітлення
                та налаштувань Вашого екрану.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={css.buttons_list_wrap}>
        <div className={css.buttons_list}>
          {Object.keys(tabMap).map((tabKey) => (
            <button
              key={tabKey}
              type="button"
              className={`${css.button} ${activeTab === tabKey ? css.active : ""}`}
              onClick={() => setActiveTab(tabKey as "characteristics" | "reviews" | "payment")}
            >
              {tabMap[tabKey]}
            </button>
          ))}
        </div>
      </div>
      <div className="container">
        <div className={css.product_description}>
          <div className={css.tab_content}>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {activeTab === "characteristics" && (
                <ProductCharacteristicsTab
                  itemList={product.itemList}
                  description={product.description}
                />
              )}
              {activeTab === "reviews" && <ProductReviewsTab />}
              {activeTab === "payment" && <div className={css.product_tab}></div>}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
