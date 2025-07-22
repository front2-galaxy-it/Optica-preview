"use client"

import React, { useState, useRef } from "react"
import css from "./styles.module.scss"
import { SectionTip } from "@/shared/ui/modules/section-tip"
import classNames from "classnames"
import {
  IProductCardProps,
  LabelType,
  StatusType,
  PaymentType,
  ICateroriesLink,
} from "@/shared/types"
import productsData from "@/shared/data/products.json"
import { ProductTab } from "@/shared/ui/modules/product-card/components/product-tab"
import { SliderButton } from "@/shared/ui/buttons"
import { Swiper as SwiperType } from "swiper"
import { AnimatePresence, motion } from "framer-motion"
import { useTranslations } from "next-intl"

import CategoryList from "@/shared/data/categories-list.json"

const productsDataList: IProductCardProps[] = productsData.products.map((product) => ({
  ...product,
  labelTypes: product.labelTypes as LabelType[],
  statusTypes: product.statusTypes as StatusType[],
  paymentTypes: product.paymentTypes as PaymentType[],
}))

export const TopSalesSection: React.FC = () => {
  const tCategories = useTranslations("categories_list")
  const tSales = useTranslations("top-sales-section")

  const swiperRef = useRef<SwiperType | null>(null)

  const categoryDataList: ICateroriesLink[] = CategoryList.categories_list.map((item) => ({
    ...item,
    label: tCategories(item.label),
  }))

  const [activeTab, setActiveTab] = useState(categoryDataList[0]?.categorySlug || "")
  const tabs = categoryDataList.slice(0, 3).map((item) => ({
    id: item.categorySlug,
    label: item.label,
    categorySlug: item.categorySlug,
  }))

  const activeTabData = tabs.find((tab) => tab.id === activeTab)

  return (
    <section className={css.top_sales_section}>
      <div className="container">
        <SectionTip label={tSales("label")} />
        <div className={css.top_sales_section_head}>
          <h3 className={css.top_sales_section_title}>{tSales("title")}</h3>
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
      <div className={css.top_sales_section_content}>
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
