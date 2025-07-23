"use client"

import React from "react"
import css from "./styles.module.scss"
import { RootLink } from "@/shared/ui"
import classNames from "classnames"
import { Icon } from "@/shared/ui/icons"
import { ClientRoutes } from "@/shared/routes"
import { useTranslations } from "next-intl"

interface AuthorListProps {
  className?: string
  authorList: any
  // activeAuthorSlug?: string
}

export const AuthorList: React.FC<AuthorListProps> = ({
  authorList,
  className,
  // articleList,
  // activeAuthorSlug,
}) => {
  const tCommon = useTranslations("common")
  return (
    <div className={classNames(css.author_list_wrap, className)}>
      <h6 className={css.author_list_title}>{tCommon("author-label")}</h6>
      <ul className={css.author_list}>
        {authorList.map((author: any, index: number) => (
          <li
            key={index}
            className={css.author_item}
          >
            <RootLink
              href={ClientRoutes.author(author.slug)}
              className={css.item_link}
            >
              <div className={css.author_info_wrap}>
                <Icon
                  name="icon_hat"
                  className={css.item_icon}
                />
                <div className={css.author_info}>
                  {author.label}
                  <p className={css.position}>{author.position}</p>
                </div>
              </div>
              <Icon
                name="icon_arrow_bc"
                className={css.item_arrow}
              />
            </RootLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
