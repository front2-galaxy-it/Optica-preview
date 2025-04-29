"use client"

import React, { useEffect, useRef, useState } from "react"
import css from "./styles.module.scss"
import { DocumentWorker } from "@/shared/lib"
import throttle from "lodash.throttle"
import { RootLink, Navigation } from "@/shared/ui"
import { BurgerMenu, Categories, HeaderCatalog, LanguageDropdown, MobileMenu } from "../components"
import { INavLink, ICatalogLink, ICateroriesLink } from "@/shared/types/"
import LinksData from "@/shared/data/nav.json"
import CategoryData from "@/shared/data/header-catalog.json"
import CategoryList from "@/shared/data/categories-list.json"
import { Icon } from "@/shared/ui/icons"
import { SearchField } from "@/shared/ui/modules/search"
import classNames from "classnames"
import { Promo } from "../components/promo"
import { useClickOutside } from "@/shared/hooks"

export const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect((): (() => void) => {
    DocumentWorker.setCSSVar("header-height", `${headerRef.current?.offsetHeight}px`)

    const handleResize = throttle((): void => {
      DocumentWorker.setCSSVar("header-height", `${headerRef.current?.offsetHeight}px`)
    }, 100)

    window.addEventListener("resize", handleResize)

    return (): void => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const categoryDataList: ICateroriesLink[] = CategoryList.categories_list

  const navDataByLocale: INavLink[] = LinksData.nav_links
  const categoryData: ICatalogLink[] = CategoryData.category_list
  const linkData: ICatalogLink[] = CategoryData.link_list
  const brandData: ICatalogLink[] = CategoryData.brand_list

  const [burgerOpen, setBurgerOpen] = useState(false)
  const [closing, setClosing] = useState(false)

  const toggleBurger = () => {
    if (burgerOpen) {
      setClosing(true)
      setBurgerOpen(false)
      document.body.classList.remove("_lock")
      setTimeout(() => {
        setClosing(false)
      }, 1200)
    } else {
      setBurgerOpen(true)
      document.body.classList.add("_lock")
    }
  }

  const [searchOpen, setSearchOpen] = useState(false)

  const showSearch = () => setSearchOpen(!searchOpen)
  const searchRef = useRef<HTMLFormElement>(null)

  const [catalogShow, setCatalogShow] = useState(false)
  const catalogRef = useRef<HTMLDivElement>(null)

  const toggleCatalog = () => setCatalogShow((prev) => !prev)

  useClickOutside(
    [catalogRef, searchRef],
    () => {
      setSearchOpen(false)
      setCatalogShow(false)
    },
    searchOpen || catalogShow,
  )

  return (
    <header
      ref={headerRef}
      className={css.header}
    >
      <Promo />
      <div className="container">
        <div className={css.header_top}>
          <div className={css.header_nav_wrap}>
            <RootLink
              href="/"
              className={css.logo_wrap}
            >
              <picture>
                <source
                  media="(max-width: 1023px)"
                  srcSet="/images/logo_mob.svg"
                />
                <img
                  src="/images/logo.svg"
                  alt="Logo"
                />
              </picture>
            </RootLink>
            <Navigation navList={navDataByLocale} />
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
          </div>
          <div className={css.header_actions}>
            <button
              type="button"
              className={classNames(css.catalog_btn, `${catalogShow ? css.active : ""}`)}
              onClick={toggleCatalog}
            >
              <Icon
                name="box_group"
                className={css.catalog_icon}
              />
              Каталог
            </button>
            <SearchField
              ref={searchRef}
              placeholder="Що шукаєте?"
              className={`${searchOpen ? css.show : ""}`}
              searchOpen={searchOpen}
            />
            <div className={css.action_buttons}>
              <LanguageDropdown className={css.lang_switcher_desk} />
              <RootLink href="/">
                <Icon
                  name="user_icon"
                  className={css.action_icons}
                />
              </RootLink>
              <button
                type="button"
                onClick={showSearch}
                className={css.search_icon}
              >
                <Icon
                  name="search_icon"
                  className={css.action_icons}
                />
              </button>
              <RootLink href="/">
                <Icon
                  name="wish_icon"
                  className={css.action_icons}
                />
              </RootLink>
              <RootLink href="/">
                <Icon
                  name="basket_icon"
                  className={css.action_icons}
                />
              </RootLink>
              <BurgerMenu
                onClick={toggleBurger}
                burgerOpen={burgerOpen}
                closing={closing}
                aria-label="Toggle menu"
              />
            </div>
          </div>
        </div>
      </div>
      <Categories cateroriesList={categoryDataList} />
      <div ref={catalogRef}>
        <HeaderCatalog
          isShow={catalogShow}
          className={catalogShow ? css.show : ""}
          categoryList={categoryData}
          linkList={linkData}
          brandList={brandData}
        />
      </div>
      <MobileMenu burgerOpen={burgerOpen} />
    </header>
  )
}
