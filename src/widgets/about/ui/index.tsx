import React, { DetailedHTMLProps, HtmlHTMLAttributes } from "react"
import css from "./styles.module.scss"
import { SectionTip } from "@/shared/ui/modules/section-tip"

import Image from "next/image"
import classNames from "classnames"
import { ButtonLink } from "@/shared/ui/links"

interface AboutSectionProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  module: any
}

export const AboutSection: React.FC<AboutSectionProps> = ({ module }) => {
  const { sub_title, title, text, button_text, button_url } = module.content
  const { image } = module

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
            src={image ?? null}
            width={1920}
            height={740}
            alt="image not found"
          />
        </div>
        <div className={css.about_section_content}>
          <SectionTip label={sub_title} />
          <h3 className={css.about_section_title}>{title}</h3>
          <p
            className={css.about_section_text}
            dangerouslySetInnerHTML={{ __html: text }}
          ></p>
          <ButtonLink
            href={button_url}
            modifier="secondary"
            iconName="arrow_right"
          >
            {button_text}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
