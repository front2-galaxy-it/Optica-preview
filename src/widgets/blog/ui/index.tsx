"use client"

import React, { useRef, DetailedHTMLProps, HtmlHTMLAttributes } from "react"
import css from "./styles.module.scss"
import { SectionTip } from "@/shared/ui/modules/section-tip"
import { BlogCard } from "@/shared/ui"
import { Swiper as SwiperType } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import { SliderButton } from "@/shared/ui/buttons"

const swiperSettings = {
  className: css.blog_swiper,
  slidesPerView: 3,
  spaceBetween: 12,
  pagination: {
    el: ".swiper-pagination.blog-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 28,
    },
    480: {
      slidesPerView: 1.4,
    },
    611: {
      slidesPerView: 1.7,
    },
    768: {
      slidesPerView: 2,
    },
    920: {
      slidesPerView: 2.3,
    },
    1024: {
      slidesPerView: 2.7,
    },
    1200: {
      slidesPerView: 3,
    },
  },
}

interface IBlogSectionProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  module: any
}

export const BlogSection: React.FC<IBlogSectionProps> = ({ module }) => {
  const swiperRef = useRef<SwiperType | null>(null)

  const { title } = module.content
  const { items } = module

  return (
    <section className={css.blog_section}>
      <div className="container">
        <SectionTip label={module.content.sub_title} />
        <div className={css.blog_section_head}>
          <h3 className={css.blog_section_title}>{title}</h3>
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
              <BlogCard cardData={item} />
            </SwiperSlide>
          ))}
        <div className="swiper-pagination blog-pagination"></div>
      </Swiper>
    </section>
  )
}
