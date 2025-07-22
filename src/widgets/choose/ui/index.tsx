import React from "react"
import css from "./styles.module.scss"
import { SectionTip } from "@/shared/ui/modules/section-tip"
import classNames from "classnames"
import Image from "next/image"
import { useTranslations } from "next-intl"

export const ChooseSection: React.FC = () => {
  const tChoose = useTranslations("choose-section")

  return (
    <section className={css.choose_section}>
      <div className={classNames(css.choose_section_container, "container")}>
        <SectionTip label={tChoose("label")} />
        <h3 className={css.choose_section_title}>{tChoose("title")}</h3>
        <p className={css.choose_section_text}>{tChoose("description-1")}</p>
        <p className={css.choose_section_text}>{tChoose("description-2")}</p>
        <div className={css.choose_section_content}>
          <div className={css.central_banner}>
            <h5>{tChoose("description-3")}</h5>
          </div>
          <div className={css.content_block_wrap}>
            <div className={css.content_block}>
              <div className={css.banner}>
                <b>15</b>
                <span>{tChoose("item-1")}</span>
              </div>
              <div className={css.block_img}>
                <Image
                  src="/images/choose/choose_img_1.png"
                  width={635}
                  height={400}
                  alt="image not found"
                />
              </div>
            </div>
            <div className={css.content_block}>
              <div className={css.banner}>
                <b>15тис+</b>
                <span>{tChoose("item-2")}</span>
              </div>
              <div className={css.block_img}>
                <Image
                  src="/images/choose/choose_img_2.png"
                  width={635}
                  height={400}
                  alt="image not found"
                />
              </div>
            </div>
            <div className={css.content_block}>
              <div className={css.banner}>
                <b>5тис+</b>
                <span>{tChoose("item-3")}</span>
              </div>
              <div className={css.block_img}>
                <Image
                  src="/images/choose/choose_img_3.png"
                  width={635}
                  height={400}
                  alt="image not found"
                />
              </div>
            </div>
            <div className={css.content_block}>
              <div className={css.banner}>
                <b>10+</b>
                <span>{tChoose("item-4")}</span>
              </div>
              <div className={css.block_img}>
                <Image
                  src="/images/choose/choose_img_4.png"
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
