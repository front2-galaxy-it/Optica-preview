"use client"

import React, { useState } from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { ProfileNav } from "@/shared/components/profile-navigation"
import { PasswordChange } from "@/widgets/change-password"
import { LogoutPopup, ThanksPopup } from "@/widgets/popups"

import { useTranslations } from "next-intl"

export const ResetPasswordSection: React.FC = () => {
  const tPopup = useTranslations("popups")

  const [popupOpen, setPopupOpen] = useState(false)
  const [popupThanksOpen, setPopupThanksOpen] = useState(false)

  const handleLogoutClick = () => {
    setPopupOpen(true)
  }

  const handlePersonalDataSuccess = () => {
    setPopupThanksOpen(true)
    setTimeout(() => setPopupThanksOpen(false), 3000)
  }

  const handlePersonalDataSuccessClose = () => {
    setPopupThanksOpen(false)
  }

  return (
    <section className={css.profile_section}>
      <div className={classNames(css.profile_section_container, "container")}>
        <div className={css.profile_section_content}>
          <ProfileNav onLogoutClick={handleLogoutClick} />
          <div className={css.profile_section_blocks}>
            <PasswordChange onSuccess={handlePersonalDataSuccess} />
          </div>
        </div>
      </div>
      <LogoutPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />
      <ThanksPopup
        isOpen={popupThanksOpen}
        onClose={handlePersonalDataSuccessClose}
        title={tPopup("thanks-label")}
        message={tPopup("save_message")}
      />
    </section>
  )
}
