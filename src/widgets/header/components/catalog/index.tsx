"use client"

import React, { useState } from "react"
import css from "./styles.module.scss"
import { Icon } from "@/shared/ui/icons"
import Image from "next/image"
import { Button, RootLink } from "@/shared/ui"
import { ICatalogLink } from "@/shared/types"
import classNames from "classnames"

interface ICatalogProps {
  categoryList: ICatalogLink[]
  linkList: ICatalogLink[]
  brandList: ICatalogLink[]
  className?: string
  isShow?: boolean
}

export const HeaderCatalog: React.FC<ICatalogProps> = ({
  className,
  categoryList,
  linkList,
  brandList,
  isShow = false,
}) => {
  const [expanded, setExpanded] = useState(false)
  const visibleCount = 6

  const visibleItems = expanded ? brandList : brandList.slice(0, visibleCount)
  const showToggle = brandList.length > visibleCount

  return (
    <div className={classNames(css.header_catalog, className, isShow && css.show)}>
      <Image
        className={css.catalog_image}
        src="/images/catalog_img_header.png"
        width={630}
        height={410}
        alt="lenses"
      />
      <div className="container">
        <span className={css.catalog_title}>Категорії</span>
        <div className={css.catalog_col_wrap}>
          <div className={classNames(css.catalog_col, css.category_list)}>
            <ul className={css.catalog_list}>
              {categoryList &&
                categoryList.map((categoryLink: ICatalogLink, index: number) => (
                  <li
                    className={css.catalog_item}
                    key={index}
                  >
                    <RootLink
                      className={classNames(css.item_link, {
                        [css["_special_green"]]: categoryLink.specialColorGreen,
                        [css["_special_red"]]: categoryLink.specialColorRed,
                      })}
                      href={categoryLink.href}
                      aria-label={categoryLink.label}
                    >
                      {categoryLink.label}
                      <Icon
                        name="arrow_icon"
                        className={css.item_arrow}
                      />
                    </RootLink>
                  </li>
                ))}
            </ul>
          </div>
          <div className={css.catalog_col}>
            <ul className={css.catalog_list}>
              {linkList &&
                linkList.map((categoryLink: ICatalogLink, index: number) => (
                  <li
                    className={css.catalog_item}
                    key={index}
                  >
                    <RootLink
                      className={css.item_link}
                      href={categoryLink.href}
                      aria-label={categoryLink.label}
                    >
                      {categoryLink.label}
                      <Icon
                        name="arrow_icon"
                        className={css.item_arrow}
                      />
                    </RootLink>
                  </li>
                ))}
            </ul>
          </div>
          <div className={css.catalog_col}>
            <ul className={css.catalog_list}>
              {visibleItems.map((categoryLink, index) => (
                <li
                  className={css.catalog_item}
                  key={index}
                >
                  <RootLink
                    className={css.item_link}
                    href={categoryLink.href}
                    aria-label={categoryLink.label}
                  >
                    {categoryLink.label}
                    <Icon
                      name="arrow_icon"
                      className={css.item_arrow}
                    />
                  </RootLink>
                </li>
              ))}
            </ul>

            {showToggle && (
              <button
                type="button"
                className={css.show_more_btn}
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "Сховати" : "Показати більше"}
              </button>
            )}
          </div>
        </div>
        <Button modifier="secondary">
          До каталогу
          <Icon name="arrow_right" />
        </Button>
      </div>
    </div>
  )
}
