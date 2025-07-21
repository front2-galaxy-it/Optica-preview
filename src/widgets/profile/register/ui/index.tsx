"use client"

import React from "react"
import css from "./styles.module.scss"

import Image from "next/image"
import { ButtonsList } from "@/shared/components"
import { navData } from "@/shared/routes/info-buttons-list"

import classNames from "classnames"
import { RegisterForm } from "@/shared/ui"

export const RegisterSection: React.FC = () => {
  return (
    <section className={css.profile_section}>
      <ButtonsList items={navData.profile} />
      <div className={classNames(css.profile_section_container, "container")}>
        <Image
          className={css.profile_section_bg}
          src="/images/content_img_11.png"
          width={1370}
          height={806}
          alt="image not found"
        />
        <RegisterForm />
      </div>
    </section>
  )
}
