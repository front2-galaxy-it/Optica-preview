"use client"

import React, { useState } from "react"
import css from "./styles.module.scss"

import Image from "next/image"
import { ButtonsList } from "@/shared/components"
import { navData } from "@/shared/routes/info-buttons-list"

import classNames from "classnames"
import { AuthorizationForm } from "@/shared/ui"
import { ResetPopup, ThanksPopup } from "@/widgets/popups"
import { useTranslations } from "next-intl"

export const AuthorizationSection: React.FC = () => {
  const tPopup = useTranslations("popups")
  const tPopupResetPass = useTranslations("popups.password-recovery-popup")

  const [popupOpen, setPopupOpen] = useState(false)
  const [thanksPopupOpen, setThanksPopupOpen] = useState(false)

  const handleOpenPopup = () => {
    setPopupOpen(true)
    document.body.classList.add("_lock")
  }

  const handleClosePopup = () => {
    setPopupOpen(false)
    document.body.classList.remove("_lock")
  }

  return (
    <>
      <section className={css.profile_section}>
        <ButtonsList items={navData.profile} />
        <div className={classNames(css.profile_section_container, "container")}>
          <Image
            className={css.profile_section_bg}
            src="/images/content_img_12.png"
            width={1370}
            height={806}
            alt="image not found"
          />
          <AuthorizationForm onOpenReset={handleOpenPopup} />
        </div>
      </section>
      <ResetPopup
        isOpen={popupOpen}
        onClose={handleClosePopup}
        onSuccess={() => setThanksPopupOpen(true)}
      />
      <ThanksPopup
        title={tPopup("thanks-label")}
        message={tPopupResetPass("success_message")}
        isOpen={thanksPopupOpen}
        onClose={() => setThanksPopupOpen(false)}
      />
    </>
  )
}
