import React from "react"
import css from "./styles.module.scss"

import Image from "next/image"
// import classNames from "classnames"
import { ButtonLink } from "@/shared/ui/links"
import { ClientRoutes } from "@/shared/routes"

export const ForMilitarySection: React.FC = () => {
  return (
    <section className={css.for_military_section}>
      <div className="container">
        <div className={css.for_military_section_head}>
          <Image
            className={css.for_military_section_head_img}
            src="/images/content_img_5.png"
            width={1280}
            height={617}
            alt="image not found"
          />
          <div className={css.head_text}>
            <h2 className={css.head_title}>Безкоштовна перевірка зору для військових</h2>
            <ButtonLink
              iconName="arrow_right"
              modifier="primary"
              href={ClientRoutes.diagnostic.path}
            >
              Діагностика зору
            </ButtonLink>
          </div>
        </div>
        <div className={css.for_military_section_content}>
          <h5 className={css.for_military_section_title}>Умови пропозиції</h5>
          <strong>Хто може отримати допомогу:</strong>
          <p>
            Допомога надається безпосереднім учасникам бойових дій, які захищають (захищали)
            незалежність, суверенітет та територіальну цілісність України, беруть (брали)
            безпосередню участь у відсічі збройної агресії та забезпеченні національної безпеки,
            усуненні загрози небезпеки державній незалежності України, її територіальній цілісності
            у період з 14.04.2014 року.
          </p>
          <strong>Як отримати допомогу:</strong>
          <p>
            Записатися на безкоштовну перевірку зору можна на нашому сайті або завітати в одну з
            оптик які приймають участь в програмі. Обов'язково необхідно мати при собі посвідчення
            учасника бойових дій.
          </p>
          <strong>Товари та послуги:</strong>
          <ul>
            <li>* безкоштовна перевірка зору</li>
            <li>* виготовлення окулярів за рецептом</li>
            <li>* видача м'яких контактних лінз</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
