"use client"

import React, { useEffect } from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { useTranslations } from "next-intl"
interface ThanksPopupProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  message?: string
}

export const ThanksPopup: React.FC<ThanksPopupProps> = ({
  isOpen,
  onClose,
  title = "Дякуємо за звернення!",
  message = "Наші фахівці зв'яжуться з вами найближчим часом, щоб підтвердити запис та уточнити деталі.",
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("_lock")
    } else {
      document.body.classList.remove("_lock")
    }

    return () => {
      document.body.classList.remove("_lock")
    }
  }, [isOpen])

  const tPopups = useTranslations("popups")

  return (
    <div className={classNames(css.thanks_popup_container, isOpen && css.show)}>
      <div className={css.thanks_popup}>
        <div className={css.thanks_popup_head}>
          <p className={css.thanks_popup_head_title}>{tPopups("thanks-label")}</p>
          <button
            type="button"
            className={css.thanks_popup_head_close}
            onClick={onClose}
          >
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={css.thanks_popup_content}>
          <div className={css.thanks_popup_thanks_message}>
            <h6 className={css.thanks_popup_content_title}>{title}</h6>
            <p className={css.thanks_popup_content_text}>{message}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
