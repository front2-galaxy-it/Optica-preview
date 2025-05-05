"use client"

import React, { useRef } from "react"
import css from "./styles.module.scss"
import { Icon } from "@/shared/ui/icons"
import Image from "next/image"
import classNames from "classnames"
import { Swiper as SwiperType } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import { SliderButton } from "@/shared/ui/buttons"

export const ContactPageSection: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null)

  const images = ["/images/content_img_4.png"]
  return (
    <section className={css.contact_section}>
      <div className="container">
        <div className={css.contact_section_content}>
          <div className={css.contact_section_text_block}>
            <p className={css.contact_section_text}>
              Якщо у вас виникли питання стосовно вашого замовлення в одному з наших салонів,
              звертайтеся за номером телефону салону, <u>контакти та адреси нашої мереж.</u>
            </p>
            <div className={css.contact_section_text_block_item}>
              <b className={css.contact_section_title}>
                Якщо ваше питання стосується інтернет-замовлення телефонуйте за номером:
              </b>
              <a
                href="tel:+380963171897"
                className={css.contact_section_link}
              >
                +380963171897
              </a>
              <a
                href="tel:+380963171897"
                className={css.contact_section_link}
              >
                +380963171897
              </a>
            </div>
            <div className={css.contact_section_text_block_item}>
              <b className={css.contact_section_title}>Графік роботи</b>
              <p className={classNames(css.contact_section_text, css.time)}>Пн-Пт: 08:00 - 20:00</p>
              <p className={classNames(css.contact_section_text, css.time)}>Сб-Нд: 08:00 - 20:00</p>
            </div>
            <div className={css.contact_section_text_block_item}>
              <b className={css.contact_section_title}>Ми в соціальних мережах</b>
              <div className={css.social_links}>
                <a
                  href="/"
                  target="_blank"
                  className={css.link}
                >
                  <Icon
                    className={css.social_icon}
                    name="icon_instagram"
                  />
                </a>
                <a
                  href="/"
                  target="_blank"
                  className={css.link}
                >
                  <Icon
                    className={css.social_icon}
                    name="icon_telegram"
                  />
                </a>
                <a
                  href="/"
                  target="_blank"
                  className={css.link}
                >
                  <Icon
                    className={css.social_icon}
                    name="icon_tiktok"
                  />
                </a>
              </div>
            </div>
            <p className={css.contact_section_text}>
              Для вашої зручності ви також можете заповнити форму або замовити зворотний дзвінок.
            </p>
          </div>
          <div className={css.contact_section_img_wrap}>
            {images.length > 1 ? (
              <Swiper
                className={css.contact_swiper}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper
                }}
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={10}
                slidesPerView={1}
              >
                {images.map((src, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      className={css.contact_section_img}
                      src={src}
                      width={635}
                      height={514}
                      alt={`Image ${index + 1}`}
                    />
                  </SwiperSlide>
                ))}
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
              </Swiper>
            ) : (
              <Image
                className={css.contact_section_img}
                src={images[0]}
                width={635}
                height={514}
                alt="image not found"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
