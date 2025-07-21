"use client"

import React from "react"
import css from "./styles.module.scss"

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
  return (
    <div className={css.characteristics_tab}>
      <div className={css.characteristics_wrap}>
        <h5 className={css.tab_title}>Характеристики</h5>
        <ul className={css.characteristics_list}>
          {itemList.map((item, i) => (
            <li
              key={i}
              className={css.characteristic_item}
            >
              <span className={css.item_label}>{item.itemLabel}</span>
              <span className={css.divider}></span>
              <span className={css.item_value}>{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={css.description_wrap}>
        <h5 className={css.tab_title}>Опис</h5>
        <div
          className={css.description_content}
          dangerouslySetInnerHTML={{ __html: description || "" }}
        ></div>
      </div>
    </div>
  )
}
