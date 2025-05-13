import React from "react"
import css from "./styles.module.scss"
import { Icon } from "@/shared/ui/icons"
import { ICateroriesLink } from "@/shared/types"
import classNames from "classnames"
import { RootLink } from "@/shared/ui"
import { ClientRoutes } from "@/shared/routes"

interface CategoriesListProps {
  activeCategorySlug: string
  categoryList: ICateroriesLink[]
}

export const CategoriesList: React.FC<CategoriesListProps> = ({
  activeCategorySlug,
  categoryList,
}) => {
  return (
    <div className={css.categories_list_wrap}>
      <div className={css.categories_list_head}>
        <Icon
          name="icon_category"
          className={css.icon_category}
        />
        <strong>Категорії</strong>
      </div>
      <ul className={css.categories_list}>
        {categoryList.map((link) => (
          <li key={link.categorySlug}>
            <RootLink
              href={ClientRoutes.product_category(link.categorySlug)}
              className={classNames(css.link, {
                [css["_special_green"]]: link.specialColorGreen,
                [css["_special_red"]]: link.specialColorRed,
                [css.active]: link.categorySlug === activeCategorySlug,
              })}
            >
              {link.label}
              <Icon
                name="icon_arrow_bc"
                className={css.link_icon}
              />
            </RootLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
