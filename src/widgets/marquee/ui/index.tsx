"use client"
import React from "react"
// import { gsap } from "gsap"
import css from "./styles.module.scss"
import Image from "next/image"
import classNames from "classnames"

const logos = [
  { src: "/images/marquee/marquee_img_1.svg", width: 211, height: 33, alt: "gucci" },
  { src: "/images/marquee/marquee_img_2.svg", width: 147, height: 33, alt: "furla" },
  { src: "/images/marquee/marquee_img_3.svg", width: 211, height: 33, alt: "gucci" },
  { src: "/images/marquee/marquee_img_4.svg", width: 218, height: 32, alt: "guess" },
  { src: "/images/marquee/marquee_img_5.svg", width: 206, height: 33, alt: "tom ford" },
  { src: "/images/marquee/marquee_img_6.svg", width: 64, height: 33, alt: "ray ban" },
  { src: "/images/marquee/marquee_img_7.svg", width: 211, height: 33, alt: "valentino" },
]

export const Marquee: React.FC = () => {
  return (
    <section className={css.marquee_wrapper}>
      <div className={css.items_wrap}>
        <div className={classNames(css.items, css.marquee)}>
          {logos.map((logo, i) => (
            <Image
              key={i}
              className={css.marquee_element}
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt={logo.alt}
            />
          ))}
        </div>
        <div
          aria-hidden="true"
          className={classNames(css.items, css.marquee)}
        >
          {logos.map((logo, i) => (
            <Image
              key={i}
              className={css.marquee_element}
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt={logo.alt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
