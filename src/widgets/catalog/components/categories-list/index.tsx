import React from "react"
import css from "./styles.module.scss"
import { Icon } from "@/shared/ui/icons"
import { ICateroriesLink } from "@/shared/types"
import classNames from "classnames"
import { RootLink } from "@/shared/ui"
import { ClientRoutes } from "@/shared/routes"

interface CategoriesListProps {
  className?: string
  activeCategorySlug: string
  categoryList: ICateroriesLink[]
  onClose: () => void
}

export const CategoriesList: React.FC<CategoriesListProps> = ({
  activeCategorySlug,
  categoryList,
  onClose,
  className,
}) => {
  return (
    <div className={classNames(css.categories_list_wrap, className)}>
      <div className={css.categories_list_head}>
        <div className={css.category_title}>
          <Icon
            name="icon_category"
            className={css.icon_category}
          />
          <strong>Категорії</strong>
        </div>
        <button
          className={css.closeButton}
          onClick={onClose}
        >
          <span></span>
          <span></span>
        </button>
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
              onClick={() => {
                onClose()
                document.body.classList.remove("_lock")
              }}
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
