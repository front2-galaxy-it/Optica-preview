"use client"

import React from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { Button } from "@/shared/ui"
import { useAuth } from "@/shared/lib/context/AuthContext"
import { useRouter } from "next/navigation"
import { ClientRoutes } from "@/shared/routes"

interface LogoutPopupProps {
  isOpen: boolean
  onClose: () => void
}

export const LogoutPopup: React.FC<LogoutPopupProps> = ({ isOpen, onClose }) => {
  const router = useRouter()
  const closePopup = () => {
    onClose()
    router.push(ClientRoutes.authorization.path)
  }

  const { logOut } = useAuth()

  return (
    <>
      <div className={classNames(css.logout_popup_container, isOpen && css.show)}>
        <div className={css.logout_popup}>
          <div className={css.logout_popup_head}>
            <p className={css.logout_popup_head_title}>Залиште свій відгук</p>
            <button
              type="button"
              className={css.logout_popup_head_close}
              onClick={closePopup}
            >
              <span></span>
              <span></span>
            </button>
          </div>
          <div className={css.logout_popup_content}>
            <h6 className={css.logout_popup_content_title}>Вийти з особистого профілю!</h6>
            <p className={css.logout_popup_content_text}>
              Ви впевнені, що бажаєте вийти з особистого профілю?
            </p>
            <div className={css.logout_popup_content_buttons_wrap}>
              <Button
                modifier="secondary"
                iconName="icon_logout"
                onClick={() => {
                  logOut()
                  closePopup()
                }}
              >
                Вийти
              </Button>
              <Button
                modifier="secondary"
                iconName="icon_cross"
                onClick={closePopup}
              >
                Скасувати
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
