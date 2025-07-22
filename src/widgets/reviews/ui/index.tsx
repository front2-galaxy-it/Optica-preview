"use client"

import React, { useRef, DetailedHTMLProps, HtmlHTMLAttributes } from "react"
import css from "./styles.module.scss"
import { SectionTip } from "@/shared/ui/modules/section-tip"
import { ReviewCard } from "@/shared/ui"
import { Swiper as SwiperType } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import { SliderButton } from "@/shared/ui/buttons"

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

interface IReviewSectionProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  module: any
}

export const ReviewsSection: React.FC<IReviewSectionProps> = ({ module }) => {
  const swiperRef = useRef<SwiperType | null>(null)

  const { title, sub_title } = module.content
  const { items } = module

  return (
    <section className={css.reviews_section}>
      <div className="container">
        <SectionTip label={sub_title} />
        <div className={css.reviews_section_head}>
          <h3 className={css.reviews_section_title}>{title}</h3>
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
        {Array.isArray(items) &&
          items.slice(0, 12).map((item: any, index: number) => (
            <SwiperSlide key={index}>
              <ReviewCard itemData={item} />
            </SwiperSlide>
          ))}
        <div className="swiper-pagination reviews-pagination"></div>
      </Swiper>
    </section>
  )
}
