"use client"

import React from "react"
import css from "./styles.module.scss"
import { useTranslations } from "next-intl"

interface CharacteristicItem {
  itemLabel: string
  value: string
}

interface ProductCharacteristicsTabProps {
  itemList: CharacteristicItem[]
  description?: string
}

export const ProductCharacteristicsTab: React.FC<ProductCharacteristicsTabProps> = ({
  itemList,
  description,
}) => {
  const tProduct = useTranslations("product-page")
  const tProductCharLabels = useTranslations("product-page.itemLabels")
  return (
    <div className={css.characteristics_tab}>
      <div className={css.characteristics_wrap}>
        <h5 className={css.tab_title}>{tProduct("product-info-attributes")}</h5>
        <ul className={css.characteristics_list}>
          {itemList.map((item, i) => (
            <li
              key={i}
              className={css.characteristic_item}
            >
              <span className={css.item_label}> {tProductCharLabels(item.itemLabel)}</span>
              <span className={css.divider}></span>
              <span className={css.item_value}>{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={css.description_wrap}>
        <h5 className={css.tab_title}>{tProduct("product-info-description")}</h5>
        <div
          className={css.description_content}
          dangerouslySetInnerHTML={{ __html: description || "" }}
        ></div>
      </div>
    </div>
  )
}
