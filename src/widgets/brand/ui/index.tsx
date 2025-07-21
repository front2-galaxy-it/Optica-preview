import React from "react"
import css from "./styles.module.scss"
import { SectionTip } from "@/shared/ui/modules/section-tip"

import Image from "next/image"
import classNames from "classnames"
import { ButtonLink } from "@/shared/ui/links"
import { ClientRoutes } from "@/shared/routes"
import { useTranslations } from "next-intl"
interface BrandSectionProps {
  className?: string
}

export const BrandSection: React.FC<BrandSectionProps> = ({ className }) => {
  const tBrand = useTranslations("brands-section")
  const tButtons = useTranslations("buttons")

  return (
    <section className={classNames(css.brand_section, className)}>
      <div className={css.brand_bg_mob}>
        <Image
          src="/images/brands/brand_img_mob.png"
          width={375}
          height={375}
          alt="image not found"
        />
      </div>
      <div className={classNames(css.brand_section_container, "container")}>
        <div className={css.brand_bg}>
          <Image
            src="/images/brands/brand_img.png"
            width={1280}
            height={670}
            alt="image not found"
          />
        </div>
        <div className={css.brand_section_content}>
          <SectionTip label={tBrand("label")} />
          <h3 className={css.brand_section_title}>{tBrand("title")}</h3>
          <p className={css.brand_section_text}>{tBrand("description-1")}</p>
          <p className={css.brand_section_text}>{tBrand("description-2")}</p>
          <ButtonLink
            className="brand_btn"
            href={ClientRoutes.brands.path}
            modifier="secondary"
            iconName="arrow_right"
          >
            {tButtons("details_btn")}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
