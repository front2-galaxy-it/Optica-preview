"use client"

import React from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { Button } from "@/shared/ui"

interface CanceledPopupProps {
  isOpen: boolean
  onClose: () => void
}

export const CanceledPopup: React.FC<CanceledPopupProps> = ({ isOpen, onClose }) => {
  const closePopup = () => {
    onClose()
  }

  return (
    <>
      <div className={classNames(css.canceled_popup_container, isOpen && css.show)}>
        <div className={css.canceled_popup}>
          <div className={css.canceled_popup_head}>
            <p className={css.canceled_popup_head_title}>Відмінити замовлення</p>
            <button
              type="button"
              className={css.canceled_popup_head_close}
              onClick={closePopup}
            >
              <span></span>
              <span></span>
            </button>
          </div>
          <div className={css.canceled_popup_content}>
            <h6 className={css.canceled_popup_content_title}>Відміна замовлення!</h6>
            <p className={css.canceled_popup_content_text}>
              Ви впевнені, що бажаєте відмовитися від цього замовлення?
            </p>
            <div className={css.canceled_popup_content_buttons_wrap}>
              <Button
                modifier="secondary"
                iconName="icon_bin"
                onClick={closePopup}
              >
                Відмінити замовлення
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
