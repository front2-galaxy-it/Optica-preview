"use client"

import React, { useRef } from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { Button } from "@/shared/ui"

interface AuthenticationPopupProps {
  isOpen: boolean
  onClose: () => void
}

export const AuthenticationPopup: React.FC<AuthenticationPopupProps> = ({ isOpen, onClose }) => {
  const closePopup = () => {
    onClose()
  }
  const inputs = useRef<Array<HTMLInputElement | null>>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value.replace(/\D/g, "")

    if (value) {
      e.target.value = value[0]
      if (index < 3) {
        inputs.current[index + 1]?.focus()
      }
    } else {
      e.target.value = ""
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputs.current[index - 1]?.focus()
    }
  }

  return (
    <>
      <div className={classNames(css.authentication_popup_container, isOpen && css.show)}>
        <div className={css.authentication_popup}>
          <div className={css.authentication_popup_head}>
            <p className={css.authentication_popup_head_title}>Авторизація</p>
            <button
              type="button"
              className={css.authentication_popup_head_close}
              onClick={closePopup}
            >
              <span></span>
              <span></span>
            </button>
          </div>
          <div className={css.authentication_popup_content}>
            <h6 className={css.authentication_popup_content_title}>
              Ми надіслали код підтвердження на ваш мобільний номер
            </h6>
            <div className={css.authentication_popup_content_code}>
              {[0, 1, 2, 3].map((i) => (
                <input
                  key={i}
                  type="text"
                  maxLength={1}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  ref={(el) => {
                    inputs.current[i] = el
                  }}
                  onChange={(e) => handleChange(e, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                />
              ))}
            </div>
            <Button
              className={css.authentication_popup_btn}
              modifier="primary"
              iconName="arrow_right"
              size="medium"
            >
              Продовжити
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
