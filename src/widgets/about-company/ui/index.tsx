"use client"

import React, { DetailedHTMLProps, HtmlHTMLAttributes } from "react"
import css from "./styles.module.scss"
import Image from "next/image"

interface AboutUsSectionProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  module: any
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({ module }) => {
  const { text } = module.content
  const { image } = module
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
            <p dangerouslySetInnerHTML={{ __html: text }}></p>
          </div>
          <Image
            className={css.about_us_content_img}
            src={image ?? null}
            width={526}
            height={593}
            alt="image not found"
          />
        </div>
      </div>
    </section>
  )
}
