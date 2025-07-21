"use client"

import css from "./styles.module.scss"
import { BreadcrumbsProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { RootLink } from "@/shared/ui"
import { Icon } from "@/shared/ui/icons"
import classNames from "classnames"
import { useTranslations } from "next-intl"

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ arr, className, color, ...props }) => {
  const t = useTranslations("breadcrumbs")
  return (
    <div className={css.breadcrumbs_wrap}>
      <div className="container">
        <ul
          className={classNames(css.breadcrumbs, className, {
            [css[`_${color}`]]: !!color,
          })}
          {...props}
        >
          <li className={css.breadcrumb_item}>
            <RootLink href={ClientRoutes.home.path}>{t("home")}</RootLink>
          </li>

          {arr.map(({ slug, titleKey }, index) => {
            const isLast = index === arr.length - 1

            return (
              <li
                key={index + 1}
                className={classNames(css.breadcrumb_item, {
                  [css.current]: isLast,
                })}
              >
                <span className={css.separator}>
                  <Icon
                    name="icon_arrow_bc"
                    className={css.separator_icon}
                  />
                </span>
                <RootLink href={slug}>{t(titleKey)}</RootLink>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
