import React from "react"
import css from "./styles.module.scss"
import { SectionTip } from "@/shared/ui/modules/section-tip"
import classNames from "classnames"
import Image from "next/image"

export const GallerySection: React.FC = () => {
  return (
    <section className={css.choose_section}>
      <div className={classNames(css.choose_section_container, "container")}>
        <SectionTip label="Галерея" />
        <h5 className={css.choose_section_title}>Мережа оптик</h5>
        <p className={css.choose_section_text}>
          Ми завжди намагаємося знайти індивідуальний підхід до кожного нашого клієнта, щоб
          допомогти вибрати оптимальні рішення для зору та стилю.
        </p>
        <div className={css.choose_section_content}>
          <div className={css.central_banner}>
            <Image
              className={css.banner_img}
              src="/images/content_img_3.png"
              width={635}
              height={400}
              alt="image not found"
            />
          </div>
          <div className={css.content_block_wrap}>
            <div className={css.content_block}>
              <div className={css.block_img}>
                <Image
                  src="/images/choose/choose_img_1.png"
                  width={635}
                  height={400}
                  alt="image not found"
                />
              </div>
            </div>
            <div className={css.content_block}>
              <div className={css.block_img}>
                <Image
                  src="/images/choose/choose_img_2.png"
                  width={635}
                  height={400}
                  alt="image not found"
                />
              </div>
            </div>
            <div className={css.content_block}>
              <div className={css.block_img}>
                <Image
                  src="/images/choose/choose_img_3.png"
                  width={635}
                  height={400}
                  alt="image not found"
                />
              </div>
            </div>
            <div className={css.content_block}>
              <div className={css.block_img}>
                <Image
                  src="/images/choose/choose_img_4.png"
                  width={635}
                  height={400}
                  alt="image not found"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
