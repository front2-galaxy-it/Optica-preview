import React from "react"
import css from "./styles.module.scss"

import Image from "next/image"
import { ButtonLink } from "@/shared/ui/links"
import { ClientRoutes } from "@/shared/routes"
import { useTranslations } from "next-intl"

export const ForMilitarySection: React.FC = () => {
  const tMilitary = useTranslations("military-page")
  const tButtons = useTranslations("buttons")
  return (
    <section className={css.for_military_section}>
      <div className="container">
        <div className={css.for_military_section_head}>
          <Image
            className={css.for_military_section_head_img}
            src="/images/content_img_5.png"
            width={1280}
            height={617}
            alt="image not found"
          />
          <div className={css.head_text}>
            <h2 className={css.head_title}>{tMilitary("title-2")}</h2>
            <ButtonLink
              iconName="arrow_right"
              modifier="primary"
              href={ClientRoutes.diagnostic.path}
            >
              {tButtons("diagnostic_btn")}
            </ButtonLink>
          </div>
        </div>
        <div className={css.for_military_section_content}>
          <h5 className={css.for_military_section_title}>{tMilitary("title-3")}</h5>
          <strong>{tMilitary("subtitle-1")}</strong>
          <p>{tMilitary("description-1")}</p>
          <strong>{tMilitary("subtitle-2")}</strong>
          <p>{tMilitary("description-2")}</p>
          <strong>{tMilitary("subtitle-3")}</strong>
          <ul>
            <li>{tMilitary("list-item-1")}</li>
            <li>{tMilitary("list-item-2")}</li>
            <li>{tMilitary("list-item-3")}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
