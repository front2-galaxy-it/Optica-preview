import React from "react"
import css from "./styles.module.scss"
import { SectionTip } from "@/shared/ui/modules/section-tip"
import classNames from "classnames"
import Image from "next/image"

export const ChooseSection: React.FC = () => {
  return (
    <section className={css.choose_section}>
      <div className={classNames(css.choose_section_container, "container")}>
        <SectionTip label="Оптика Добрих Цін" />
        <h3 className={css.choose_section_title}>Чому нас обирають</h3>
        <p className={css.choose_section_text}>
          Ми завжди намагаємося знайти індивідуальний підхід до кожного нашого клієнта, щоб
          допомогти вибрати оптимальні рішення для зору та стилю.
        </p>
        <p className={css.choose_section_text}>
          Надаємо гарантію на продукцію та забезпечуємо післяпродажний сервіс, щоб ви могли бути
          впевнені в якості та довговічності ваших окулярів!
        </p>
        <div className={css.choose_section_content}>
          <div className={css.central_banner}>
            <h5>
              Якість, <br /> якій можна довіряти!
            </h5>
          </div>
          <div className={css.content_block_wrap}>
            <div className={css.content_block}>
              <div className={css.banner}>
                <b>15</b>
                <span>років досвіду</span>
              </div>
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
              <div className={css.banner}>
                <b>15тис+</b>
                <span>оправ світових брендів</span>
              </div>
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
              <div className={css.banner}>
                <b>5тис+</b>
                <span>задоволених клієнтів</span>
              </div>
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
              <div className={css.banner}>
                <b>10+</b>
                <span>салонів оптики</span>
              </div>
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
