import React from "react"
import css from "./styles.module.scss"
import { SectionTip } from "@/shared/ui/modules/section-tip"

import Image from "next/image"
import classNames from "classnames"
import { ButtonLink } from "@/shared/ui/links"
import { ClientRoutes } from "@/shared/routes"

interface BrandSectionProps {
  className?: string
}

export const BrandSection: React.FC<BrandSectionProps> = ({ className }) => {
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
          <SectionTip label="Бренди" />
          <h3 className={css.brand_section_title}>Світові бренди, яким довіряють мільйони</h3>
          <p className={css.brand_section_text}>
            Ми працюємо тільки з найкращими брендами, що пропонують стильні та високоякісні окуляри
            для будь-якого смаку. Ознайомтесь з нашими партнерами — лідерами індустрії.
          </p>
          <p className={css.brand_section_text}>
            Обирайте окуляри від світових брендів і переконайтесь у їхній неперевершеній якості. Ви
            заслужили найкраще!
          </p>
          <ButtonLink
            className="brand_btn"
            href={ClientRoutes.brands.path}
            modifier="secondary"
            iconName="arrow_right"
          >
            Детальніше
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
