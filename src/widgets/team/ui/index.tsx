"use client"

import React, { useRef, DetailedHTMLProps, HtmlHTMLAttributes } from "react"
import css from "./styles.module.scss"
import { SectionTip } from "@/shared/ui/modules/section-tip"
import { Swiper as SwiperType } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import { SliderButton } from "@/shared/ui/buttons"
import { TeamCard } from "@/shared/ui/modules/team-card"

const swiperSettings = {
  className: css.team_swiper,
  slidesPerView: 3,
  spaceBetween: 12,
  pagination: { el: ".swiper-pagination.team-pagination", clickable: true },
  breakpoints: {
    320: { slidesPerView: 1.1 },
    480: { slidesPerView: 1.4 },
    611: { slidesPerView: 1.7 },
    768: { slidesPerView: 2 },
    920: { slidesPerView: 2.3 },
    1024: { slidesPerView: 2.7 },
    1200: { slidesPerView: 3 },
  },
}

interface IAboutSectionProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  module: any
}

export const TeamSection: React.FC<IAboutSectionProps> = ({ module }) => {
  const swiperRef = useRef<SwiperType | null>(null)

  const { title, sub_title } = module.content
  const { items } = module

  return (
    <section className={css.team_section}>
      <div className="container">
        <SectionTip label={sub_title} />
        <div className={css.team_section_head}>
          <h5 className={css.team_section_title}>{title}</h5>
          <div className={css.slider_buttons}>
            <SliderButton
              direction="prev"
              onClick={() => swiperRef.current?.slidePrev()}
            />
            <SliderButton
              direction="next"
              onClick={() => swiperRef.current?.slideNext()}
            />
          </div>
        </div>
      </div>

      <Swiper
        modules={[Pagination]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        {...swiperSettings}
      >
        {items.map((card: any, index: number) => (
          <SwiperSlide key={index}>
            <TeamCard cardData={card} />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination team-pagination"></div>
      </Swiper>
    </section>
  )
}
