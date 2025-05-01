"use client"

import React, { useRef } from "react"
import css from "./styles.module.scss"
import { SectionTip } from "@/shared/ui/modules/section-tip"
import { BlogCard } from "@/shared/ui"
import blogCardData from "@/shared/data/blog-card-list.json"
import { IBlogCardProps } from "@/shared/types"
import { Swiper as SwiperType } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import { SliderButton } from "@/shared/ui/buttons"

const blogCardDataList: IBlogCardProps[] = blogCardData.cards

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

export const BlogSection: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <section className={css.blog_section}>
      <div className="container">
        <SectionTip label="Про нас" />

        <div className={css.blog_section_head}>
          <h5 className={css.blog_section_title}>
            Будь в курсі останніх новин та порад для твого зору!
          </h5>
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
        {blogCardDataList.map((card, index) => (
          <SwiperSlide key={index}>
            <BlogCard {...card} />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination blog-pagination"></div>
      </Swiper>
    </section>
  )
}
