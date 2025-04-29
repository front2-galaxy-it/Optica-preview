import React from "react"
import css from "./styles.module.scss"
// import classNames from "classnames"
import { INavLink } from "@/shared/types"
import LinksData from "@/shared/data/nav_footer.json"
import { Navigation } from "@/shared/ui"
import { Icon } from "@/shared/ui/icons"
import Image from "next/image"

export const Footer: React.FC = () => {
  const navDataAbout: INavLink[] = LinksData.nav_links
  const navDataCategory: INavLink[] = LinksData.category_links
  const navDataInfo: INavLink[] = LinksData.info_links
  return (
    <footer className={css.footer}>
      <div className="container">
        <div className={css.footer_top}>
          <div className={css.footer_col}>
            <h6 className={css.footer_col_title}>Про нас</h6>
            <Navigation
              className={css.footer_nav}
              navList={navDataAbout}
            />
          </div>
          <div className={css.footer_col}>
            <h6 className={css.footer_col_title}>Категорії</h6>
            <Navigation
              className={css.footer_nav}
              navList={navDataCategory}
            />
          </div>
          <div className={css.footer_col}>
            <h6 className={css.footer_col_title}>Інформація</h6>
            <Navigation
              className={css.footer_nav}
              navList={navDataInfo}
            />
          </div>
          <div className={css.footer_col}>
            <h6 className={css.footer_col_title}>Дзвінки по україні</h6>
            <div className={css.contact_block}>
              <a
                href="tel:+380963171897"
                className={css.footer_item}
              >
                +380963171897
              </a>
              <a
                href="tel:+380963171897"
                className={css.footer_item}
              >
                +380963171897
              </a>
            </div>
            <h6 className={css.footer_col_title}>Графік роботи</h6>
            <div className={css.contact_block}>
              <p className={css.footer_item}>Пн-Пт: 08:00 - 20:00</p>
              <p className={css.footer_item}>Сб-Нд: 08:00 - 20:00</p>
            </div>
            <h6 className={css.footer_col_title}>Ми в соціальних мережах</h6>
            <div className={css.social_links}>
              <a
                href="/"
                className={css.link}
              >
                <Icon
                  className={css.social_icon}
                  name="icon_instagram"
                />
              </a>
              <a
                href="/"
                className={css.link}
              >
                <Icon
                  className={css.social_icon}
                  name="icon_telegram"
                />
              </a>
              <a
                href="/"
                className={css.link}
              >
                <Icon
                  className={css.social_icon}
                  name="icon_tiktok"
                />
              </a>
            </div>
          </div>
        </div>
        <div className={css.footer_bottom}>
          <div className={css.footer_logo_wrap}>
            <Image
              className={css.footer_logo}
              src="/images/logo_gray.svg"
              width={257}
              height={32}
              alt="ОПТИКА ДОБРИХ ЦІН"
            />
            <p>2025 Интернет-магазин “ОПТИКА ДОБРИХ ЦІН”</p>
          </div>
          <a href="/">
            <Image
              src="/images/svg/Logo_GalaxyIT.svg"
              width={300}
              height={91}
              alt="GalaxyIT"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
