"use client"

import React from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { AuthorizationForm } from "@/shared/ui"

interface authorizationPopupProps {
  isOpen: boolean
  onClose: () => void
}

export const AuthorizationPopup: React.FC<authorizationPopupProps> = ({ isOpen, onClose }) => {
  const closePopup = () => {
    onClose()
  }

  return (
    <>
      <div className={classNames(css.authorization_popup_container, isOpen && css.show)}>
        <div className={css.authorization_popup}>
          <div className={css.authorization_popup_head}>
            <p className={css.authorization_popup_head_title}>Авторизація</p>
            <button
              type="button"
              className={css.authorization_popup_head_close}
              onClick={closePopup}
            >
              <span></span>
              <span></span>
            </button>
          </div>
          <div className={css.authorization_popup_content}>
            <AuthorizationForm className={css.popup_form} />
          </div>
        </div>
      </div>
    </>
  )
}
