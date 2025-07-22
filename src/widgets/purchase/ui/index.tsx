import React from "react"
import css from "./styles.module.scss"
import { ButtonLink, RootLink } from "@/shared/ui/links"
import { SectionTip } from "@/shared/ui/modules/section-tip"
import classNames from "classnames"
import { useTranslations } from "next-intl"

export const PurchaseSection: React.FC = () => {
  const tPurchase = useTranslations("purchase-section")
  const tButtons = useTranslations("buttons")
  return (
    <section className={css.purchase_section}>
      <div className={classNames(css.purchase_section_container, "container")}>
        {/* <SectionTip label="Каталог" /> */}
        <SectionTip label={tPurchase("label")} />
        <div className={css.purchase_section_head}>
          <h3 className={css.purchase_section_title}>{tPurchase("title")}</h3>
          <ButtonLink
            modifier="secondary"
            iconName="arrow_right"
            className={css.purchase_section_button}
          >
            {tButtons("catalog_btn")}
          </ButtonLink>
        </div>
        <p className={css.purchase_section_text}>{tPurchase("description")}</p>
        <div className={css.purchase_section_content}>
          <div className={css.block_row}>
            <div className={css.content_block}>
              <RootLink
                className={css.block_link}
                href="/"
              ></RootLink>
              <div className={css.block_text}>
                <h5 className={css.block_title}>{tPurchase("glasses")}</h5>
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
                <h5 className={css.block_title}>{tPurchase("lenses")}</h5>
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
                <h5 className={css.block_title}>{tPurchase("diagnostic")}</h5>
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
                <h5 className={css.block_title}>{tPurchase("sunglasses")}</h5>
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
                <h5 className={css.block_title}>{tPurchase("frames")}</h5>
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
                <h5 className={css.block_title}>{tPurchase("sale")}</h5>
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
