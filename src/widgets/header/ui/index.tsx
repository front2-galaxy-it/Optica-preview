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
import { ClientRoutes } from "@/shared/routes"
import { useAuth } from "@/shared/lib/context/AuthContext"
import { CategoriesMenu } from "../components/categories-menu"
import { AnimatePresence, motion } from "framer-motion"
import { CartPopup } from "@/widgets/popups"

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
  const [searchValue, setSearchValue] = useState("")

  const showSearch = () => setSearchOpen(!searchOpen)
  const searchRef = useRef<HTMLFormElement>(null)

  const [catalogShow, setCatalogShow] = useState(false)
  const catalogRef = useRef<HTMLDivElement>(null)

  const toggleCatalog = () => setCatalogShow((prev) => !prev)

  const { isLoggedIn } = useAuth()

  const profileLink = isLoggedIn ? ClientRoutes.profile.path : ClientRoutes.register.path

  const categoriesMenuRef = useRef<HTMLDivElement>(null)

  useClickOutside(
    [catalogRef, searchRef, categoriesMenuRef],
    () => {
      setSearchOpen(false)
      setCatalogShow(false)
    },
    searchOpen || catalogShow,
  )

  const [activeCategorySlug, setActiveCategorySlug] = useState<string | null>(null)

  const handleCategoryHover = (slug: string | null) => {
    if (slug !== activeCategorySlug) {
      setActiveCategorySlug(slug)
    }
  }

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveCategorySlug(null)
    }, 200)
  }

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const [popupOpen, setPopupOpen] = useState(false)

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
              searchOpen={searchOpen}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onSearch={() => {
                console.log("Searching for:", searchValue)
              }}
            />
            <div className={css.action_buttons}>
              <LanguageDropdown className={css.lang_switcher_desk} />
              <RootLink href={profileLink}>
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
              <RootLink href={`${ClientRoutes.profile.path}?tab=selected`}>
                <Icon
                  name="wish_icon"
                  className={css.action_icons}
                />
              </RootLink>
              <button onClick={() => setPopupOpen(true)}>
                <Icon
                  name="basket_icon"
                  className={css.action_icons}
                />
              </button>
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
      <Categories
        cateroriesList={categoryDataList}
        onCategoryHover={handleCategoryHover}
      />
      <div ref={catalogRef}>
        <HeaderCatalog
          isShow={catalogShow}
          className={catalogShow ? css.show : ""}
          categoryList={categoryData}
          linkList={linkData}
          brandList={brandData}
        />
      </div>
      <MobileMenu
        burgerOpen={burgerOpen}
        onClose={() => setBurgerOpen(false)}
      />
      <AnimatePresence mode="wait">
        {activeCategorySlug === "soncezahysni-okulyary" && (
          <motion.div
            key={activeCategorySlug}
            ref={categoriesMenuRef}
            className={css.categories_menu_wrap}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <CategoriesMenu />
          </motion.div>
        )}
        {activeCategorySlug === "kontaktni-linzy" && (
          <motion.div
            key={activeCategorySlug}
            ref={categoriesMenuRef}
            className={css.categories_menu_wrap}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <CategoriesMenu />
          </motion.div>
        )}
        {activeCategorySlug === "opravy" && (
          <motion.div
            key={activeCategorySlug}
            ref={categoriesMenuRef}
            className={css.categories_menu_wrap}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <CategoriesMenu />
          </motion.div>
        )}
        {activeCategorySlug === "linzy-dlya-okulyariv" && (
          <motion.div
            key={activeCategorySlug}
            ref={categoriesMenuRef}
            className={css.categories_menu_wrap}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <CategoriesMenu />
          </motion.div>
        )}
        {activeCategorySlug === "zasoby-dlya-doglyadu" && (
          <motion.div
            key={activeCategorySlug}
            ref={categoriesMenuRef}
            className={css.categories_menu_wrap}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <CategoriesMenu />
          </motion.div>
        )}
      </AnimatePresence>
      <CartPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />
    </header>
  )
}
