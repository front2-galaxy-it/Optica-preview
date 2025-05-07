"use client"

import React from "react"
import css from "./styles.module.scss"
import { IBlogCateroriesLink, IBlogCardProps } from "@/shared/types"
import { RootLink } from "@/shared/ui"
import classNames from "classnames"
import { Icon } from "@/shared/ui/icons"
import { ClientRoutes } from "@/shared/routes"

interface CategoryListProps {
  className?: string
  categoryList: IBlogCateroriesLink[]
  articleList: IBlogCardProps[]
  activeCategorySlug?: string
}

export const CategoryList: React.FC<CategoryListProps> = ({
  categoryList,
  className,
  articleList,
  activeCategorySlug,
}) => {
  const filteredCategories = categoryList.filter((category) =>
    articleList.some((article) => article.categorySlug === category.slug),
  )

  if (filteredCategories.length === 0) {
    return <div className={css.no_categories}>Нет доступных категорий</div>
  }

  return (
    <div className={classNames(css.category_list_wrap, className)}>
      <h6 className={css.category_list_title}>Категорії</h6>
      <ul className={css.category_list}>
        {filteredCategories.map((category, index) => (
          <li
            key={index}
            className={css.category_item}
          >
            <RootLink
              href={ClientRoutes.blog_category(category.slug)}
              className={classNames(css.item_link, {
                [css.active]: activeCategorySlug === category.slug,
              })}
            >
              {category.label}
              <Icon
                name="icon_arrow_bc"
                className={css.item_icon}
              />
            </RootLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
