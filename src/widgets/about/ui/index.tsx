import React from "react"
import css from "./styles.module.scss"
import { SectionTip } from "@/shared/ui/modules/section-tip"

import Image from "next/image"
import classNames from "classnames"
import { ButtonLink } from "@/shared/ui/links"
import { ClientRoutes } from "@/shared/routes"
import { useTranslations } from "next-intl"

export const AboutSection: React.FC = () => {
  const tAbout = useTranslations("about-us-section")
  const tButtons = useTranslations("buttons")
  return (
    <section className={css.about_section}>
      <div className={css.about_bg_mob}>
        <Image
          src="/images/about/about_img_mob.png"
          width={375}
          height={375}
          alt="image not found"
        />
      </div>
      <div className={classNames(css.about_section_container, "container")}>
        <div className={css.about_bg}>
          <Image
            src="/images/about/about_img.png"
            width={1920}
            height={740}
            alt="image not found"
          />
        </div>
        <div className={css.about_section_content}>
          <SectionTip label={tAbout("label")} />
          <h3 className={css.about_section_title}>{tAbout("title")}</h3>
          <p className={css.about_section_text}>{tAbout("description-1")}</p>
          <p className={css.about_section_text}>{tAbout("description-2")}</p>
          <p className={css.about_section_text}>{tAbout("description-3")}</p>
          <ButtonLink
            href={ClientRoutes.about.path}
            modifier="secondary"
            iconName="arrow_right"
          >
            {tButtons("details_btn")}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
