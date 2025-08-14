"use client"
import React, { DetailedHTMLProps, HtmlHTMLAttributes } from "react"
import css from "./styles.module.scss"
import Image from "next/image"
import classNames from "classnames"
interface MarqueeProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  module: any
}

export const Marquee: React.FC<MarqueeProps> = ({ module }) => {
  const { image } = module
  return (
    <section className={css.marquee_wrapper}>
      <div className={css.items_wrap}>
        <div className={classNames(css.items, css.marquee)}>
          {image.map((logo: any, i: number) => (
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
          {image.map((logo: any, i: number) => (
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
