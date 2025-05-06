import React from "react"
import css from "./styles.module.scss"
import { SectionTip } from "@/shared/ui/modules/section-tip"
import classNames from "classnames"
import Image from "next/image"

export const AdvantageSection: React.FC = () => {
  return (
    <section className={css.choose_section}>
      <div className={classNames(css.choose_section_container, "container")}>
        <SectionTip label="Оптика Добрих Цін" />
        <h5 className={css.choose_section_title}>Наші переваги для військових</h5>
        <p className={css.choose_section_text}>
          Ми цінуємо відданість та сміливість військових і прагнемо забезпечити їх найкращими
          окулярами для захисту та комфорту в будь-яких умовах. У нашому магазині ви знайдете
          спеціальні пропозиції для військових, включаючи окуляри з поляризацією, антибліковим
          покриттям та підвищеним захистом від ультрафіолетових променів.
        </p>
        <p className={css.choose_section_text}>
          Ми пропонуємо широкий асортимент окулярів для військових, що відповідають високим вимогам
          до якості, безпеки та зручності. Обирайте надійний захист для ваших очей разом з нашим
          магазином оптики!
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
                <b>Знижки для військових:</b>
                <span>Спеціальні ціни на всю продукцію для службовців.</span>
              </div>
              <div className={css.block_img}>
                <Image
                  src="/images/advantage/advantage_img_1.png"
                  width={635}
                  height={400}
                  alt="image not found"
                />
              </div>
            </div>
            <div className={css.content_block}>
              <div className={css.banner}>
                <b>Високий рівень захисту:</b>
                <span>
                  Лінзи, що зменшують відблиски і захищають від UV-променів, ідеальні для активного
                  використання на відкритому повітрі.
                </span>
              </div>
              <div className={css.block_img}>
                <Image
                  src="/images/advantage/advantage_img_2.png"
                  width={635}
                  height={400}
                  alt="image not found"
                />
              </div>
            </div>
            <div className={css.content_block}>
              <div className={css.banner}>
                <b>Надійність і міцність:</b>
                <span>
                  Окуляри, що витримують екстремальні умови та забезпечують комфорт навіть під час
                  інтенсивних тренувань або на бойових завданнях.
                </span>
              </div>
              <div className={css.block_img}>
                <Image
                  src="/images/advantage/advantage_img_3.png"
                  width={635}
                  height={400}
                  alt="image not found"
                />
              </div>
            </div>
            <div className={css.content_block}>
              <div className={css.banner}>
                <b>Захист від пилу та вологи:</b>
                <span>
                  Високоякісні лінзи та конструкція оправи, що захищають очі від пилу, бруду та
                  вологи під час активного використання в польових умовах.
                </span>
              </div>
              <div className={css.block_img}>
                <Image
                  src="/images/advantage/advantage_img_4.png"
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
