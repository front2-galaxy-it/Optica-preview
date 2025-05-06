"use client"

import React, { useRef, useEffect, useState } from "react"
import css from "./styles.module.scss"
import { RootLink } from "@/shared/ui"
import { Icon } from "@/shared/ui/icons"
import { LanguageDropdown } from "../lang-switcher"
import { Categories } from "../categories-list"
import { ICateroriesLink, INavLink } from "@/shared/types/"
import CategoryList from "@/shared/data/categories-list.json"
import LinksData from "@/shared/data/nav.json"
import { Navigation } from "../../../../shared/ui/modules/nav"
import classNames from "classnames"
import { ButtonLink } from "@/shared/ui/links"

interface MobileMenuProps {
  burgerOpen?: boolean
  onClose: () => void
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ burgerOpen = false, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null)
  const [menuHeight, setMenuHeight] = useState<string | number>("100%")

  useEffect(() => {
    const updateMenuHeight = () => {
      const headerEl = document.querySelector("header")
      if (headerEl && menuRef.current) {
        const headerHeight = headerEl.getBoundingClientRect().height
        const windowHeight = window.innerHeight
        const newHeight = windowHeight - headerHeight
        setMenuHeight(newHeight)
      }
    }

    updateMenuHeight()

    window.addEventListener("resize", updateMenuHeight)

    return () => {
      window.removeEventListener("resize", updateMenuHeight)
    }
  }, [])

  const categoryDataList: ICateroriesLink[] = CategoryList.categories_list
  const navDataByLocale: INavLink[] = LinksData.nav_links
  return (
    <div
      ref={menuRef}
      className={classNames(css.mobile_menu, { [css.show]: burgerOpen })}
      style={{ height: menuHeight }}
    >
      <div className={css.mobile_menu_head}>
        <RootLink
          href="tel:+380963171897"
          className={css.mobile_link}
        >
          <Icon
            name="icon_mobile"
            className={css.icon_mobile}
          />
          <span>+380963171897</span>
        </RootLink>
        <LanguageDropdown className={css.lang_switcher_mobile} />
      </div>
      <h2 className={css.mobile_menu_title}>Про компанію</h2>
      <Navigation
        navList={navDataByLocale}
        className={css.mobile_nav}
        onClose={onClose}
      />
      <h2 className={css.mobile_menu_title}>Категорії</h2>
      <Categories
        cateroriesList={categoryDataList}
        className={css.mobile_categories}
        onClose={onClose}
      />
      <ButtonLink
        href="#"
        modifier="secondary"
        className={css.mobile_menu_button}
      >
        До каталогу
      </ButtonLink>
    </div>
  )
}
