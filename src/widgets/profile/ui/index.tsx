"use client"

import React from "react"
import css from "./styles.module.scss"

import { ButtonsList } from "@/shared/components"
import { navData } from "@/shared/routes/info-buttons-list"
import classNames from "classnames"

export const ProfileSection: React.FC = () => {
  return (
    <section className={css.profile_section}>
      <ButtonsList items={navData.profile} />
      <div className={classNames(css.profile_section_container, "container")}>
        <h1>Профіль Користувача</h1>
      </div>
    </section>
  )
}
