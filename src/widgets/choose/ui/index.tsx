import React, { DetailedHTMLProps, HtmlHTMLAttributes } from "react"
import css from "./styles.module.scss"
import { SectionTip } from "@/shared/ui/modules/section-tip"
import classNames from "classnames"
import Image from "next/image"

interface IChooseSectionProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  module: any
}

export const ChooseSection: React.FC<IChooseSectionProps> = ({ module }) => {
  const { title, sub_title, text, center_text } = module.content
  const { items, image, type } = module

  return (
    <section className={css.choose_section}>
      <div className={classNames(css.choose_section_container, "container")}>
        <SectionTip label={sub_title} />
        <h3 className={css.choose_section_title}>{title}</h3>
        <p
          className={css.choose_section_text}
          dangerouslySetInnerHTML={{ __html: text }}
        ></p>
        <div className={css.choose_section_content}>
          {center_text && (
            <div className={css.central_banner}>
              <h5 dangerouslySetInnerHTML={{ __html: center_text }}></h5>
            </div>
          )}
          {type === 1 && (
            <div className={classNames(css.central_banner, css.central_banner_img)}>
              <Image
                className={css.banner_img}
                src={image ?? null}
                width={635}
                height={400}
                alt="image not found"
              />
            </div>
          )}
          <div className={css.content_block_wrap}>
            {items.map((item: any, index: number) => {
              return (
                <div
                  className={css.content_block}
                  key={index}
                >
                  {item.description && (
                    <div
                      className={css.banner}
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></div>
                  )}
                  <div className={css.block_img}>
                    <Image
                      src={item.image ?? null}
                      width={635}
                      height={400}
                      alt="image not found"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
