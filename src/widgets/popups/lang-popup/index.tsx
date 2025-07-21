"use client"
import React, { useEffect, useState } from "react"
import css from "./styles.module.scss"
import { Icon } from "@/shared/ui/icons"
import classNames from "classnames"

export const LangPopup: React.FC = (): JSX.Element => {
  const [langPopupOpen, setLangPopupOpen] = useState(false)

  useEffect(() => {
    const isShown = localStorage.getItem("lang_popup_shown")

    if (!isShown) {
      const timer = setTimeout(() => {
        setLangPopupOpen(true)
        localStorage.setItem("lang_popup_shown", "true")
        document.body.classList.add("_lock")
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [])

  const closePopup = () => {
    setLangPopupOpen(false)
    document.body.classList.remove("_lock")
  }

  return (
    <div className={classNames(css.lang_popup_container, langPopupOpen && css.show)}>
      <div className={css.lang_popup}>
        <div className={css.lang_popup_head}>
          <p className={css.lang_popup_head_title}>Вибір мови</p>
          <button
            type="button"
            className={css.lang_popup_head_close}
            onClick={closePopup}
          >
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={css.lang_popup_content}>
          <p className={css.lang_popup_content_text}>
            Будь ласка, оберіть мову, яка зручна для вас. <br /> Це дозволить покращити досвід{" "}
            <br /> користування сайтом.
          </p>
          <div className={css.lang_popup_buttons}>
            <button
              className={css.lang_popup_button}
              type="button"
            >
              <Icon
                name="globe_icon"
                className={css.globe}
              />
              UA
            </button>
            <button
              className={css.lang_popup_button}
              type="button"
            >
              <Icon
                name="globe_icon"
                className={css.globe}
              />
              RU
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
