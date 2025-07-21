import React from "react"
import css from "./styles.module.scss"
import { SectionTip } from "@/shared/ui/modules/section-tip"
import classNames from "classnames"
import Image from "next/image"
import { useTranslations } from "next-intl"

export const AdvantageSection: React.FC = () => {
  const tMilitaryAdvantages = useTranslations("military-benefits-section")
  return (
    <section className={css.choose_section}>
      <div className={classNames(css.choose_section_container, "container")}>
        <SectionTip label="Оптика Добрих Цін" />
        <h5 className={css.choose_section_title}>{tMilitaryAdvantages("title")}</h5>
        <p className={css.choose_section_text}>{tMilitaryAdvantages("description-1")}</p>
        <p className={css.choose_section_text}>{tMilitaryAdvantages("description-2")}</p>
        <div className={css.choose_section_content}>
          <div className={css.central_banner}>
            <h5>{tMilitaryAdvantages("title-2")}</h5>
          </div>
          <div className={css.content_block_wrap}>
            <div className={css.content_block}>
              <div className={css.banner}>
                <b>{tMilitaryAdvantages("item-label-1")}</b>
                <span>{tMilitaryAdvantages("item-content-1")}</span>
              </div>
              <div className={css.block_img}>
                <Image
                  src="/images/advantage/advantage_img_1.png"
                  width={635}
                  height={400}
                  alt="image not found"
                />
              </div>
            </div>
            <div className={css.content_block}>
              <div className={css.banner}>
                <b>{tMilitaryAdvantages("item-label-2")}</b>
                <span>{tMilitaryAdvantages("item-content-2")}</span>
              </div>
              <div className={css.block_img}>
                <Image
                  src="/images/advantage/advantage_img_2.png"
                  width={635}
                  height={400}
                  alt="image not found"
                />
              </div>
            </div>
            <div className={css.content_block}>
              <div className={css.banner}>
                <b>{tMilitaryAdvantages("item-label-3")}</b>
                <span>{tMilitaryAdvantages("item-content-3")}</span>
              </div>
              <div className={css.block_img}>
                <Image
                  src="/images/advantage/advantage_img_3.png"
                  width={635}
                  height={400}
                  alt="image not found"
                />
              </div>
            </div>
            <div className={css.content_block}>
              <div className={css.banner}>
                <b>{tMilitaryAdvantages("item-label-4")}</b>
                <span>{tMilitaryAdvantages("item-content-4")}</span>
              </div>
              <div className={css.block_img}>
                <Image
                  src="/images/advantage/advantage_img_4.png"
                  width={635}
                  height={400}
                  alt="image not found"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
