import React from "react"
import css from "./styles.module.scss"

import Image from "next/image"
import { SectionTip } from "@/shared/ui/modules/section-tip"
import { ButtonLink } from "@/shared/ui/links"
import classNames from "classnames"
import { ClientRoutes } from "@/shared/routes"
import { useTranslations } from "next-intl"

export const NotFoundSection: React.FC = () => {
  const tNotFound = useTranslations("not-found-section")
  const tButtons = useTranslations("buttons")

  return (
    <section className={css.not_found}>
      <Image
        className={css.not_found_bg}
        src="/images/not_found_img.png"
        width={1920}
        height={1080}
        alt="not found"
      />
      <div className={classNames(css.not_found_container, "container")}>
        <div className={css.not_found_content}>
          <Image
            className={css.not_found_title}
            src="/images/404.png"
            width={425}
            height={185}
            alt="not found"
          />
          <SectionTip
            label={tNotFound("label")}
            className={css.not_found_tip}
          />
          <p>{tNotFound("description")}</p>
          <ButtonLink
            className={css.not_found_btn}
            modifier="primary"
            iconName="arrow_right"
            href={ClientRoutes.home.path}
          >
            {tButtons("return_home_btn")}
          </ButtonLink>
          <ButtonLink
            className={css.not_found_btn}
            modifier="secondary"
            iconName="arrow_right"
            href={ClientRoutes.loyalty_program.path}
          >
            {tButtons("loyalty_program_btn")}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
