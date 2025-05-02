import React from "react"
import css from "./styles.module.scss"
import { ButtonLink, RootLink } from "@/shared/ui/links"
import { SectionTip } from "@/shared/ui/modules/section-tip"
import classNames from "classnames"

export const PurchaseSection: React.FC = () => {
  return (
    <section className={css.purchase_section}>
      <div className={classNames(css.purchase_section_container, "container")}>
        <SectionTip label="Каталог" />
        <div className={css.purchase_section_head}>
          <h2 className={css.purchase_section_title}>Що придбати в Оптиці Добрих Цін</h2>
          <ButtonLink
            modifier="secondary"
            iconName="arrow_right"
            className={css.purchase_section_button}
          >
            До каталогу
          </ButtonLink>
        </div>
        <p className={css.purchase_section_text}>
          У нашому магазині оптики ви знайдете все необхідне для догляду за вашим зором. Від
          стильних окулярів для зору та сонцезахисних моделей до високоякісних лінз і аксесуарів.
          Кожна категорія товарів створена для того, щоб забезпечити максимальний комфорт та захист
          ваших очей.
        </p>
        <div className={css.purchase_section_content}>
          <div className={css.block_row}>
            <div className={css.content_block}>
              <RootLink
                className={css.block_link}
                href="/"
              ></RootLink>
              <div className={css.block_text}>
                <h5 className={css.block_title}>
                  Окуляри <br /> для зору
                </h5>
              </div>
              <picture className={css.block_img}>
                <source
                  srcSet="/images/purchase/purchase_img_1_mob.png"
                  media="(max-width:768px)"
                />
                <img
                  src="/images/purchase/purchase_img_1.png"
                  alt="girlfriend taking selfie"
                />
              </picture>
            </div>
            <div className={css.content_block}>
              <RootLink
                className={css.block_link}
                href="/"
              ></RootLink>
              <div className={css.block_text}>
                <h5 className={css.block_title}>Контактні лінзи</h5>
              </div>
              <picture className={css.block_img}>
                <source
                  srcSet="/images/purchase/purchase_img_2_mob.png"
                  media="(max-width:768px)"
                />
                <img
                  src="/images/purchase/purchase_img_2.png"
                  alt="lense"
                />
              </picture>
            </div>
          </div>
          <div className={css.block_row}>
            <div className={css.content_block}>
              <RootLink
                className={css.block_link}
                href="/"
              ></RootLink>
              <div className={css.block_text}>
                <h5 className={css.block_title}>Діагностика</h5>
              </div>
              <picture className={css.block_img}>
                <source
                  srcSet="/images/purchase/purchase_img_3_mob.png"
                  media="(max-width:768px)"
                />
                <img
                  src="/images/purchase/purchase_img_3.png"
                  alt="diagnostic"
                />
              </picture>
            </div>
            <div className={css.content_block}>
              <RootLink
                className={css.block_link}
                href="/"
              ></RootLink>
              <div className={css.block_text}>
                <h5 className={css.block_title}>Сонцезахисні окуляри</h5>
              </div>
              <picture className={css.block_img}>
                <source
                  srcSet="/images/purchase/purchase_img_4_mob.png"
                  media="(max-width:768px)"
                />
                <img
                  src="/images/purchase/purchase_img_4.png"
                  alt="sunglasses"
                />
              </picture>
            </div>
          </div>
          <div className={css.block_row}>
            <div className={css.content_block}>
              <RootLink
                className={css.block_link}
                href="/"
              ></RootLink>
              <div className={css.block_text}>
                <h5 className={css.block_title}>Оправи</h5>
              </div>
              <picture className={css.block_img}>
                <source
                  srcSet="/images/purchase/purchase_img_5_mob.png"
                  media="(max-width:768px)"
                />
                <img
                  src="/images/purchase/purchase_img_5.png"
                  alt="frame"
                />
              </picture>
            </div>
            <div className={css.content_block}>
              <RootLink
                className={css.block_link}
                href="/"
              ></RootLink>
              <div className={css.block_text}>
                <h5 className={css.block_title}>
                  АКЦІЇ <br /> %
                </h5>
              </div>
              <picture className={css.block_img}>
                <source
                  srcSet="/images/purchase/purchase_img_6_mob.png"
                  media="(max-width:768px)"
                />
                <img
                  src="/images/purchase/purchase_img_6.png"
                  alt="sales"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
