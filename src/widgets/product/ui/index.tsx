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
import { ProductPaymentTab } from "./ProductPaymentTab"
import EyesTabSelector from "../components/eyes-selector"
import { useTranslations } from "next-intl"

interface ProductSectionProps {
  product: IProductCardProps
}

export const ProductSection: React.FC<ProductSectionProps> = ({ product }) => {
  const tProduct = useTranslations("product-page")
  const tButtons = useTranslations("buttons")

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
    characteristics: tProduct("specifications_description"),
    reviews: tProduct("reviews"),
    payment: tProduct("delivery_payment"),
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
                  <span className={classNames(css.label, css.novelty)}>
                    {tProduct("label-newest")}
                  </span>
                )}
                {product.labelTypes?.includes("discount") && (
                  <span className={classNames(css.label, css.discount)}>-20%</span>
                )}
                {product.labelTypes?.includes("top-sales") && (
                  <span className={classNames(css.label, css.top_sales)}>
                    {tProduct("label-top-sales")}
                  </span>
                )}
              </div>
              <div className={css.product_actions}>
                <div className={css.product_payments}>
                  {product.paymentTypes?.includes("mono") && (
                    <Image
                      className={css.payment_icon}
                      src="/images/svg/IconPayMono.svg"
                      width={32}
                      height={32}
                      alt="mono"
                    />
                  )}
                  {product.paymentTypes?.includes("privat") && (
                    <Image
                      className={css.payment_icon}
                      src="/images/svg/IconPayPrivat.svg"
                      width={32}
                      height={32}
                      alt="privat"
                    />
                  )}
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
                  <span>{tProduct("review_label")}</span>
                </div>
              </div>
              <div className={css.product_code}>
                <span>{tProduct("code_text")}:</span> <span>{product.code}</span>
              </div>
            </div>

            {product.statusTypes?.includes("available") && (
              <span className={classNames(css.product_status, css.available)}>
                {tProduct("available")}
              </span>
            )}
            {product.statusTypes?.includes("unavailable") && (
              <span className={classNames(css.product_status, css.unavailable)}>
                {tProduct("unavailable")}
              </span>
            )}
            {product.statusTypes?.includes("pre-order") && (
              <span className={classNames(css.product_status, css.pre_order)}>
                {tProduct("pre_order")}
              </span>
            )}

            <div className={css.product_color}>
              <span>{tProduct("other_colors")}</span>
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

            {product.isLense && <EyesTabSelector />}

            <Price
              className={css.product_price}
              price={product.price}
              oldPrice={product.oldPrice}
            />
            <div className={css.product_bonus}>
              <span>+18</span>
              <span>грн</span>
              <span>{tProduct("bonus_text")}</span>
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
              {tButtons("add-to-cart")}
            </Button>

            <div className={css.warning_message}>
              <Image
                src="/images/svg/error-icon.svg"
                width={24}
                height={24}
                alt="alert icon"
              />
              <p>{tProduct("color_disclaimer")}</p>
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
              {activeTab === "payment" && <ProductPaymentTab />}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
