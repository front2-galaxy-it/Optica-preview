"use client"

import React, { useState, useRef } from "react"
import css from "./styles.module.scss"
import { SectionTip } from "@/shared/ui/modules/section-tip"
import classNames from "classnames"
import { IProductCardProps, LabelType, StatusType } from "@/shared/types"
import productsData from "@/shared/data/products.json"
import { ProductTab } from "@/shared/ui/modules/product-card/components/product-tab"
import { SliderButton } from "@/shared/ui/buttons"
import { Swiper as SwiperType } from "swiper"
import { AnimatePresence, motion } from "framer-motion"
import { useTranslations } from "next-intl"

const productsDataList: IProductCardProps[] = productsData.products.map((product) => ({
  ...product,
  labelTypes: product.labelTypes as LabelType[],
  statusTypes: product.statusTypes as StatusType[],
}))

const uniqueCategories = Array.from(
  new Map(productsDataList.map((p) => [p.categorySlug, p.categoryName])).entries(),
).slice(0, 3)

const tabs = uniqueCategories.map(([slug, name], index) => ({
  id: `tab${index + 1}`,
  label: name,
  categorySlug: slug,
}))

export const PromotionSection: React.FC = () => {
  const tPromotion = useTranslations("promotion-section")

  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const activeTabData = tabs.find((tab) => tab.id === activeTab)

  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <section className={css.top_sales_section}>
      <div className="container">
        <SectionTip label={tPromotion("label")} />
        <div className={css.top_sales_section_head}>
          <h3 className={css.top_sales_section_title}>{tPromotion("title")}</h3>
          <div className={css.slider_buttons}>
            <SliderButton
              direction="prev"
              onClick={() => swiperRef.current?.slidePrev()}
            />
            <SliderButton
              direction="next"
              onClick={() => swiperRef.current?.slideNext()}
            />
          </div>
        </div>
        <div className={css.top_sales_content}>
          <div className={css.tab_buttons}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={classNames(css.button, {
                  [css.active]: tab.id === activeTab,
                })}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className={css.promotion_section_content}>
        <AnimatePresence mode="wait">
          {activeTabData?.categorySlug && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: "0" }}
              exit={{ opacity: 0, x: "-100%" }}
            >
              <ProductTab
                ref={swiperRef}
                categorySlug={activeTabData.categorySlug}
                productList={productsDataList}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
