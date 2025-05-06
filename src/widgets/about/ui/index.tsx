import React from "react"
import css from "./styles.module.scss"
import { SectionTip } from "@/shared/ui/modules/section-tip"

import Image from "next/image"
import classNames from "classnames"
import { ButtonLink } from "@/shared/ui/links"

export const AboutSection: React.FC = () => {
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
            src="/images/about/about_img.png"
            width={1920}
            height={740}
            alt="image not found"
          />
        </div>
        <div className={css.about_section_content}>
          <SectionTip label="Про нас" />
          <h3 className={css.about_section_title}>Ваш надійний партнер у світі оптики</h3>
          <p className={css.about_section_text}>
            Ми – команда професіоналів, яка допомагає вам бачити світ чіткіше! У нашій оптиці ви
            знайдете широкий вибір стильних та якісних окулярів, контактних лінз і аксесуарів.
          </p>
          <p className={css.about_section_text}>
            Ми працюємо тільки з перевіреними виробниками, щоб гарантувати комфорт і бездоганний зір
            кожному клієнту.
          </p>
          <p className={css.about_section_text}>Чекаємо вас у нашому салоні!</p>
          <ButtonLink
            modifier="secondary"
            iconName="arrow_right"
          >
            Детальніше
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
