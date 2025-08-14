"use client"

import React, { DetailedHTMLProps, HtmlHTMLAttributes } from "react"
import css from "./styles.module.scss"
import Image from "next/image"
import { PageInfo } from "@/widgets/page-info-block"
import classNames from "classnames"

interface TextImageSectionProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  module: any
  className?: string
}

export const TextImageSection: React.FC<TextImageSectionProps> = ({ module, className }) => {
  const { title, sub_title, text } = module.content
  const { type } = module

  return (
    <section className={classNames(css.text_image, className)}>
      {title && sub_title ? (
        <PageInfo
          label={title}
          title={sub_title}
        />
      ) : null}
      <div className="container">
        <div
          className={classNames(css.text_image_content, css.no_image, {
            [css.image_right]: type === "image_right",
          })}
        >
          <div
            className={css.career_section_text}
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
          {type === "image_right" ? (
            <Image
              className={css.text_image_img}
              src="/images/content_img_7.png"
              width={634}
              height={538}
              alt="image not found"
            />
          ) : null}
        </div>
      </div>
    </section>
  )
}
