"use client"

import React from "react"
import css from "./styles.module.scss"
import Image from "next/image"

export const AboutUsSection: React.FC = () => {
  return (
    <section className={css.about_us_section}>
      <div className="container">
        <div className={css.about_us_content}>
          <Image
            className={css.about_us_content_line}
            src="/images/svg/line-with-dots.svg"
            width={12}
            height={593}
            alt="image not found"
          />
          <div className={css.about_us_content_text_wrap}>
            <p className={css.about_us_content_text}>
              Ми — команда професіоналів, яка з ініціативою та пристрастю займається турботою про
              зір наших клієнтів.
            </p>
            <p className={css.about_us_content_text}>
              Наша місія — допомогти кожному знайти ідеальні окуляри, які поєднують стиль, комфорт і
              високоякісні матеріали.
            </p>
            <p className={css.about_us_content_text}>
              Ми пропонуємо широкий асортимент окулярів для будь-яких потреб: від модних та
              елегантних моделей до функціональних та зручних варіантів для роботи та спорту. У
              нашому магазині ви знайдете тільки перевірені бренди, надійні оправи та лінзи, що
              гарантують якість і довговічність.
            </p>
            <p className={css.about_us_content_text}>
              Для нас важливо, щоб кожен клієнт отримав індивідуальний підхід і був задоволений
              покупкою. Наші досвідчені консультанти завжди готові допомогти вам підібрати найкраще
              рішення для вашого зору та стилю
            </p>
            <p className={css.about_us_content_text}>
              Ми цінуємо довіру наших клієнтів і прагнемо зробити процес покупки максимально зручним
              та приємним. Підтримка на всіх етапах — від вибору до післяпродажного обслуговування —
              це те, чим ми пишаємося.
            </p>
            <p className={css.about_us_content_text}>
              З нами ви можете бути впевнені в якості, доступних цінах та своєчасній доставці!
            </p>
          </div>
          <Image
            className={css.about_us_content_img}
            src="/images/content_img_2.png"
            width={526}
            height={593}
            alt="image not found"
          />
        </div>
      </div>
    </section>
  )
}
