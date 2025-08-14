"use client"

import React, { DetailedHTMLProps, HtmlHTMLAttributes } from "react"
import css from "./styles.module.scss"

import Image from "next/image"
import { ButtonLink } from "@/shared/ui/links"

interface HelpSectionProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  module: any
}

export const HelpSection: React.FC<HelpSectionProps> = ({ module }) => {
  const {
    title_left,
    text_left,
    button_left,
    button_left_url,
    title_right,
    text_right,
    button_right,
    button_right_url,
  } = module.content
  const { picture_left, picture_right } = module

  return (
    <section className={css.help_section}>
      <div className="container">
        <div className={css.help_content}>
          <div className={css.help_card}>
            <Image
              className={css.card_img}
              src={picture_left ?? null}
              width={635}
              height={635}
              alt="image not found"
            />
            <div className={css.card_content}>
              <h3
                className={css.card_title}
                dangerouslySetInnerHTML={{ __html: title_left }}
              ></h3>
              <p
                className={css.card_text}
                dangerouslySetInnerHTML={{ __html: text_left }}
              ></p>
              <ButtonLink
                href={button_left_url}
                modifier="primary"
                iconName="arrow_right"
              >
                {button_left}
              </ButtonLink>
            </div>
          </div>
          <div className={css.help_card}>
            <Image
              className={css.card_img}
              src={picture_right ?? null}
              width={635}
              height={635}
              alt="image not found"
            />
            <div className={css.card_content}>
              <h3
                className={css.card_title}
                dangerouslySetInnerHTML={{ __html: title_right }}
              ></h3>
              <p
                className={css.card_text}
                dangerouslySetInnerHTML={{ __html: text_right }}
              ></p>
              <ButtonLink
                href={button_right_url}
                modifier="primary"
                iconName="arrow_right"
              >
                {button_right}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
