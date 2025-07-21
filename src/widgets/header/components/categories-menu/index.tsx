import React from "react"
import css from "./styles.module.scss"
import categoriesMenuData from "@/shared/data/product-categories-menu-list.json"
import { RootLink } from "@/shared/ui"
import Image from "next/image"
import { useTranslations } from "next-intl"

export const CategoriesMenu = () => {
  const tCategories = useTranslations("header-categories-menu")

  return (
    <div className={css.menu_wrap}>
      <div className="container">
        <div className={css.menu_body}>
          {categoriesMenuData.menu.map((col, idx) => (
            <div
              className={css.menu_col}
              key={idx}
            >
              <strong className={css.menu_col_title}>{tCategories(col.titleKey)}</strong>
              <ul className={css.menu_list}>
                {col.items.map((item, i) => (
                  <li
                    className={css.menu_list_item}
                    key={i}
                  >
                    <RootLink
                      href={item.href}
                      className={css.menu_list_link}
                    >
                      {tCategories(item.labelKey)}
                    </RootLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {categoriesMenuData.shapes && (
            <div className={css.glasses_wrap}>
              {categoriesMenuData.shapes.map((shape, i) => (
                <RootLink
                  href={shape.href}
                  className={css.glasses_link}
                  key={i}
                >
                  <Image
                    src={shape.image}
                    width={104}
                    height={40}
                    alt={tCategories(shape.labelKey)}
                    className={css.glasses_img}
                  />
                  {tCategories(shape.labelKey)}
                </RootLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
