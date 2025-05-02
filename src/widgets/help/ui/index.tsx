"use client"

import React from "react"
import css from "./styles.module.scss"

import Image from "next/image"
import { ButtonLink } from "@/shared/ui/links"

export const HelpSection: React.FC = () => {
  return (
    <section className={css.help_section}>
      <div className="container">
        <div className={css.help_content}>
          <div className={css.help_card}>
            <Image
              className={css.card_img}
              src="/images/help/help_img_1.png"
              width={635}
              height={635}
              alt="image not found"
            />
            <div className={css.card_content}>
              <h3 className={css.card_title}>
                Види <br /> діагностики зору
              </h3>
              <p className={css.card_text}>Попіклуйтесь про свій зір вже сьогодні!</p>
              <ButtonLink
                modifier="primary"
                iconName="arrow_right"
              >
                Діагностика зору
              </ButtonLink>
            </div>
          </div>
          <div className={css.help_card}>
            <Image
              className={css.card_img}
              src="/images/help/help_img_2.png"
              width={635}
              height={635}
              alt="image not found"
            />
            <div className={css.card_content}>
              <h3 className={css.card_title}>Запишіться на підбір окулярів</h3>
              <p className={css.card_text}>Допоможемо покращити Ваш зір!</p>
              <ButtonLink modifier="primary">Обрати час та день</ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
