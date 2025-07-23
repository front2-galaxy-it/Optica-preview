"use client"

import React from "react"
import css from "./styles.module.scss"

import { RootLink } from "@/shared/ui"
import classNames from "classnames"
import { Icon } from "@/shared/ui/icons"
import { ClientRoutes } from "@/shared/routes"
import { useTranslations } from "next-intl"
import { usePathname } from "next/navigation"

interface CategoryListProps {
  className?: string
  articlesListSlug: any
}

export const CategoryList: React.FC<CategoryListProps> = ({ className, articlesListSlug }) => {
  const tCommon = useTranslations("common")
  const pathname = usePathname()
  const { slug } = articlesListSlug

  if (slug) {
    return <div className={css.no_categories}>{tCommon("no-categories")}</div>
  }

  const activeCategorySlug = pathname?.split("/").pop()

  return (
    <div className={classNames(css.category_list_wrap, className)}>
      <h6 className={css.category_list_title}>{tCommon("category-label")}</h6>
      {articlesListSlug.map((category: any, index: number) => {
        const isActive = category.slug === activeCategorySlug

        return (
          <li
            key={index}
            className={classNames(css.category_item, {
              [css.active]: isActive,
            })}
          >
            <RootLink
              href={ClientRoutes.blog_category(category.slug)}
              className={css.item_link}
            >
              {category.slug}
              <Icon
                name="icon_arrow_bc"
                className={css.item_icon}
              />
            </RootLink>
          </li>
        )
      })}
    </div>
  )
}
