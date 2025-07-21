"use client"

import React from "react"
import css from "./styles.module.scss"
import Image from "next/image"
import { useTranslations } from "next-intl"

export const AboutUsSection: React.FC = () => {
  const tAbout = useTranslations("about-page")
  return (
    <section className={css.about_us_section}>
      <div className="container">
        <div className={css.about_us_content}>
          <Image
            className={css.about_us_content_line}
            src="/images/svg/line-with-dots.svg"
            width={12}
            height={593}
            alt="image not found"
          />
          <div className={css.about_us_content_text_wrap}>
            <p className={css.about_us_content_text}>{tAbout("description-1")}</p>
            <p className={css.about_us_content_text}>{tAbout("description-2")}</p>
            <p className={css.about_us_content_text}>{tAbout("description-3")}</p>
            <p className={css.about_us_content_text}>{tAbout("description-4")}</p>
            <p className={css.about_us_content_text}>{tAbout("description-5")}</p>
            <p className={css.about_us_content_text}>{tAbout("description-6")}</p>
          </div>
          <Image
            className={css.about_us_content_img}
            src="/images/content_img_2.png"
            width={526}
            height={593}
            alt="image not found"
          />
        </div>
      </div>
    </section>
  )
}
