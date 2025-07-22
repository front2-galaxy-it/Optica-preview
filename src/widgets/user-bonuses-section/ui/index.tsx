"use client"

import React, { useState } from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { ProfileNav } from "@/shared/components/profile-navigation"
import { LogoutPopup } from "@/widgets/popups"
import { Bonuses } from "@/widgets/bonuses"

export const UserBonusesSection: React.FC = () => {
  const [popupOpen, setPopupOpen] = useState(false)

  const handleLogoutClick = () => {
    setPopupOpen(true)
  }

  return (
    <section className={css.profile_section}>
      <div className={classNames(css.profile_section_container, "container")}>
        <div className={css.profile_section_content}>
          <ProfileNav onLogoutClick={handleLogoutClick} />
          <div className={css.profile_section_blocks}>
            <Bonuses />
          </div>
        </div>
      </div>
      <LogoutPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />
    </section>
  )
}
