import React from "react"
import css from "./styles.module.scss"
import { ICateroriesLink } from "@/shared/types/categories.interface"
import { RootLink } from "@/shared/ui"
import classNames from "classnames"
import { ClientRoutes } from "@/shared/routes"

interface ICateroriesList {
  cateroriesList: ICateroriesLink[]
  className?: string
  onClose?: () => void
  handleMouseEnter?: () => void
  handleMouseLeave?: () => void
  onCategoryHover?: (slug: string | null) => void
}

export const Categories: React.FC<ICateroriesList> = ({
  cateroriesList,
  className,
  onClose,
  onCategoryHover,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <div className={classNames(css.categories_wrap, className)}>
      <div className={classNames(css.categories_wrap_container, "container")}>
        <ul
          className={css.catigories_list}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {cateroriesList &&
            cateroriesList.map((cateroriesLink, index) => (
              <li
                className={css.catigories_item}
                key={index}
                onMouseEnter={() => onCategoryHover?.(cateroriesLink.categorySlug)}
              >
                <RootLink
                  className={classNames(css.categories_link, {
                    [css["_special_green"]]: cateroriesLink.specialColorGreen,
                    [css["_special_red"]]: cateroriesLink.specialColorRed,
                  })}
                  href={ClientRoutes.product_category(cateroriesLink.categorySlug)}
                  aria-label={cateroriesLink.label}
                  onClick={onClose}
                >
                  {cateroriesLink.label}
                </RootLink>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}
