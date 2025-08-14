import React, { DetailedHTMLProps, HtmlHTMLAttributes } from "react"
import css from "./styles.module.scss"
import { SectionTip } from "@/shared/ui/modules/section-tip"

import Image from "next/image"
import classNames from "classnames"
import { ButtonLink } from "@/shared/ui/links"
interface BrandSectionProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  module: any
  className?: string
}

export const BrandSection: React.FC<BrandSectionProps> = ({ className, module }) => {
  const { title, sub_title, text, button_text, button_url } = module.content
  const { image } = module

  return (
    <section className={classNames(css.brand_section, className)}>
      <div className={css.brand_bg_mob}>
        <Image
          src={image ?? null}
          width={375}
          height={375}
          alt="image not found"
        />
      </div>
      <div className={classNames(css.brand_section_container, "container")}>
        <div className={css.brand_bg}>
          <Image
            src={image ?? null}
            width={1280}
            height={670}
            alt="image not found"
          />
        </div>
        <div className={css.brand_section_content}>
          <SectionTip label={sub_title} />
          <h3
            className={css.brand_section_title}
            dangerouslySetInnerHTML={{ __html: title }}
          ></h3>
          <p
            className={css.brand_section_text}
            dangerouslySetInnerHTML={{ __html: text }}
          ></p>
          <ButtonLink
            className="brand_btn"
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
