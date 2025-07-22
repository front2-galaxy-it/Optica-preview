import React from "react"
import css from "./styles.module.scss"
import Image from "next/image"
import { ButtonLink } from "@/shared/ui/links"
import { useTranslations } from "next-intl"

export const Bonuses: React.FC = () => {
  const tBonuses = useTranslations("profile-page.bonuses")
  const tButtons = useTranslations("buttons")
  return (
    <div className={css.bonuses}>
      <div className={css.bonuses_content}>
        <div className={css.bonuses_img_wrap}>
          <Image
            className={css.bonuses_img}
            src="/images/bonuses_img.png"
            width={250}
            height={250}
            alt="image not found"
          />
        </div>
        <div className={css.bonuses_info}>
          <div className={css.total}>
            <strong>{tBonuses("bonuses_total_label")}</strong>
            <span>450 грн.</span>
          </div>
          <div className={css.available}>
            <strong>{tBonuses("bonuses_available_label")}</strong>
            <span>200 грн.</span>
          </div>
          <div className={css.reserved}>
            <strong>{tBonuses("bonuses_reserved_label")}</strong>
            <span>450 грн.</span>
          </div>
        </div>
      </div>
      <p className={css.bonuses_text}>{tBonuses("bonuses_description")}</p>
      <ul className={css.bonuses_list}>
        <ul className={css.bonuses_list}>
          {tBonuses.raw("bonuses_list").map((item: string, idx: number) => (
            <li
              key={idx}
              className={css.bonuses_list_item}
            >
              {item}
            </li>
          ))}
        </ul>
      </ul>
      <ButtonLink
        className={css.bonuses_btn}
        modifier="secondary"
        iconName="arrow_right"
      >
        {tButtons("details_btn")}
      </ButtonLink>
    </div>
  )
}
