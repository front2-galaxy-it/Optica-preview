import React from "react"
import css from "./styles.module.scss"
import { ICateroriesLink } from "@/shared/types/category-list.interface"
import { RootLink } from "@/shared/ui"
import classNames from "classnames"

interface ICateroriesList {
  cateroriesList: ICateroriesLink[]
  className?: string
  onClose?: () => void
}

export const Categories: React.FC<ICateroriesList> = ({ cateroriesList, className, onClose }) => {
  return (
    <div className={classNames(css.categories_wrap, className)}>
      <div className={classNames(css.categories_wrap_container, "container")}>
        <ul className={css.catigories_list}>
          {cateroriesList &&
            cateroriesList.map((cateroriesLink, index) => (
              <li
                className={css.catigories_item}
                key={index}
              >
                <RootLink
                  className={classNames(css.categories_link, {
                    [css["_special_green"]]: cateroriesLink.specialColorGreen,
                    [css["_special_red"]]: cateroriesLink.specialColorRed,
                  })}
                  href={cateroriesLink.href}
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
