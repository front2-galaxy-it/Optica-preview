"use client"

import React from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { RegisterForm } from "@/shared/ui"

interface registerPopupProps {
  isOpen: boolean
  onClose: () => void
}

export const RegisterPopup: React.FC<registerPopupProps> = ({ isOpen, onClose }) => {
  const closePopup = () => {
    onClose()
  }

  return (
    <>
      <div className={classNames(css.register_popup_container, isOpen && css.show)}>
        <div className={css.register_popup}>
          <div className={css.register_popup_head}>
            <p className={css.register_popup_head_title}>Реєстрація</p>
            <button
              type="button"
              className={css.register_popup_head_close}
              onClick={closePopup}
            >
              <span></span>
              <span></span>
            </button>
          </div>
          <div className={css.register_popup_content}>
            <RegisterForm className={css.popup_form} />
          </div>
        </div>
      </div>
    </>
  )
}
