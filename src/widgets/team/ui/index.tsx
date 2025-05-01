"use client"

import React, { useRef } from "react"
import css from "./styles.module.scss"
import { SectionTip } from "@/shared/ui/modules/section-tip"
import dataTeamList from "@/shared/data/team-list.json"
import { Swiper as SwiperType } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import { SliderButton } from "@/shared/ui/buttons"
import { TeamCard } from "@/shared/ui/modules/team-card"

const teamDataList = dataTeamList

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

export const TeamSection: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <section className={css.team_section}>
      <div className="container">
        <SectionTip label="Наша команда" />
        <div className={css.team_section_head}>
          <h5 className={css.team_section_title}>У нас працюють тільки найкращі</h5>
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
        {teamDataList.map((card, index) => (
          <SwiperSlide key={index}>
            <TeamCard {...card} />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination team-pagination"></div>
      </Swiper>
    </section>
  )
}
