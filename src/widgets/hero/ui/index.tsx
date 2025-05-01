"use client"

import React from "react"
import css from "./styles.module.scss"
import { SectionTip } from "@/shared/ui/modules/section-tip"
import { ButtonLink } from "@/shared/ui/links"
import classNames from "classnames"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

const swiperSettings = {
  className: css.hero_swiper,
  spaceBetween: 20,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination.hero-pagination",
    clickable: true,
  },
}

export const Hero: React.FC = () => {
  return (
    <section className={css.hero}>
      <Swiper
        {...swiperSettings}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <div className={css.slide_container}>
            <picture className={css.hero_img}>
              <source
                srcSet="/images/hero/hero_img_mob.png"
                media="(max-width:1024px)"
              />
              <img
                src="/images/hero/hero_img.png"
                alt="close up shot smiling"
              />
            </picture>
            <div className={classNames(css.hero_container, "container")}>
              <div className={css.hero_content}>
                <SectionTip
                  label="Акція"
                  className={css.hero_tip}
                />
                <h1 className={css.hero_title}>Знижка -20%</h1>
                <p className={css.hero_text}>
                  Даруємо знижку на всі моделі жіночих окулярів! Тільки зараз, купуючи стильні та
                  якісні окуляри, ви зможете заощадити до 20% на будь-яку модель з нашого
                  асортименту!
                </p>
                <time
                  className={css.date_duration}
                  dateTime="2025-04-14/2025-04-21"
                >
                  14–21 квітня
                </time>
                <ButtonLink modifier="primary">Акційні пропозиції</ButtonLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css.slide_container}>
            <picture className={css.hero_img}>
              <source
                srcSet="/images/hero/hero_img_2_mob.png"
                media="(max-width:1024px)"
              />
              <img
                src="/images/hero/hero_img_2.png"
                alt="close up shot smiling"
              />
            </picture>
            <div className={classNames(css.hero_container, "container")}>
              <div className={css.hero_content}>
                <SectionTip
                  label="Акція"
                  className={css.hero_tip}
                />
                <h1 className={css.hero_title}>Знижка -20%</h1>
                <p className={css.hero_text}>
                  Даруємо знижку на всі моделі жіночих окулярів! Тільки зараз, купуючи стильні та
                  якісні окуляри, ви зможете заощадити до 20% на будь-яку модель з нашого
                  асортименту!
                </p>
                <time
                  className={css.date_duration}
                  dateTime="2025-04-14/2025-04-21"
                >
                  14–21 квітня
                </time>
                <ButtonLink modifier="primary">Акційні пропозиції</ButtonLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css.slide_container}>
            <picture className={css.hero_img}>
              <source
                srcSet="/images/hero/hero_img_3_mob.png"
                media="(max-width:1024px)"
              />
              <img
                src="/images/hero/hero_img_3.png"
                alt="close up shot smiling"
              />
            </picture>
            <div className={classNames(css.hero_container, "container")}>
              <div className={css.hero_content}>
                <SectionTip
                  label="Акція"
                  className={css.hero_tip}
                />
                <h1 className={css.hero_title}>Знижка -20%</h1>
                <p className={css.hero_text}>
                  Даруємо знижку на всі моделі жіночих окулярів! Тільки зараз, купуючи стильні та
                  якісні окуляри, ви зможете заощадити до 20% на будь-яку модель з нашого
                  асортименту!
                </p>
                <time
                  className={css.date_duration}
                  dateTime="2025-04-14/2025-04-21"
                >
                  14–21 квітня
                </time>
                <ButtonLink modifier="primary">Акційні пропозиції</ButtonLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="swiper-pagination hero-pagination"></div>
      </Swiper>
    </section>
  )
}
