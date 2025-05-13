import React from "react"
import css from "./styles.module.scss"
import Image from "next/image"
import { ButtonLink } from "@/shared/ui/links"

export const Bonuses: React.FC = () => {
  return (
    <div className={css.bonuses}>
      <div className={css.bonuses_content}>
        <div className={css.bonuses_img_wrap}>
          <Image
            className={css.bonuses_img}
            src="/images/bonuses_img.png"
            width={250}
            height={250}
            alt="image not found"
          />
        </div>
        <div className={css.bonuses_info}>
          <div className={css.total}>
            <strong>Всього накопичено:</strong>
            <span>450 грн.</span>
          </div>
          <div className={css.available}>
            <strong>Доступно:</strong>
            <span>200 грн.</span>
          </div>
          <div className={css.reserved}>
            <strong>Буде доступно протягом 7 днів:</strong>
            <span>450 грн.</span>
          </div>
        </div>
      </div>
      <p className={css.bonuses_text}>
        Постійні покупці магазину “Оптика добрих цін” отримують бонуси за покупку товарів. Бонуси
        можна використовувати під час оплати наступних покупок, зменшуючи поточну вартість товару. А
        ще всі учасники програми лояльності першими дізнаються про спеціальні пропозиції, акції та
        новинки у нашому магазині.
      </p>
      <ul className={css.bonuses_list}>
        <li className={css.bonuses_list_item}>
          10% від кожної вашої покупки нараїовується на ваш бонусний рахунок
        </li>
        <li className={css.bonuses_list_item}>1 бонус = 1 гривня</li>
        <li className={css.bonuses_list_item}>
          протягом 7 днів після покупки бонуси будуть доступні на вашому рахунку
        </li>
      </ul>
      <ButtonLink
        className={css.bonuses_btn}
        modifier="secondary"
        iconName="arrow_right"
      >
        Детальніше
      </ButtonLink>
    </div>
  )
}
