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

const productsDataList: IProductCardProps[] = productsData.products.map((product) => ({
  ...product,
  labelTypes: product.labelTypes as LabelType[],
  statusTypes: product.statusTypes as StatusType[],
}))

const tabs = [
  {
    id: "tab1",
    label: "Сонячні окуляри",
    category: "Сонячні окуляри",
  },
  { id: "tab2", label: "Дитячі окуляри", category: "Дитячі окуляри" },
  { id: "tab3", label: "Контактні лінзи", category: "Контактні лінзи" },
]

export const TopSalesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const activeTabData = tabs.find((tab) => tab.id === activeTab)

  const swiperRef = useRef<SwiperType | null>(null)
  const scrollIntoView = () => {
    return (event: React.MouseEvent<HTMLButtonElement>) => {
      const button = event.currentTarget
      button.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }
  return (
    <section className={css.top_sales_section}>
      <div className="container">
        <SectionTip label="Топ продажів" />
        <div className={css.top_sales_section_head}>
          <h3 className={css.top_sales_section_title}>Ми рекомендуємо</h3>
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
                onClick={(event) => {
                  setActiveTab(tab.id)
                  scrollIntoView()(event)
                }}
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
        {activeTabData?.category && (
          <ProductTab
            ref={swiperRef}
            key={activeTab}
            category={activeTabData.category}
            productList={productsDataList}
          />
        )}
      </div>
    </section>
  )
}
