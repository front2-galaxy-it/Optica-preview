"use client"

import React, { useRef } from "react"
import css from "./styles.module.scss"
import { SectionTip } from "@/shared/ui/modules/section-tip"
import { ReviewCard } from "@/shared/ui"
import dataReviewsList from "@/shared/data/reviews-list.json"
import { IReviewCardProps } from "@/shared/types"
import { Swiper as SwiperType } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import { SliderButton } from "@/shared/ui/buttons"

const reviewsDataList: IReviewCardProps[] = dataReviewsList.review_cards

const swiperSettings = {
  className: css.reviews_swiper,
  slidesPerView: 3,
  spaceBetween: 12,
  pagination: { el: ".swiper-pagination.reviews-pagination", clickable: true },
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

export const ReviewsSection: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <section className={css.reviews_section}>
      <div className="container">
        <SectionTip label="Відгуки" />
        <div className={css.reviews_section_head}>
          <h3 className={css.reviews_section_title}>Що говорять про Оптику Добрих Цін</h3>
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
        {reviewsDataList.map((card, index) => (
          <SwiperSlide key={index}>
            <ReviewCard {...card} />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination reviews-pagination"></div>
      </Swiper>
    </section>
  )
}
