import React from "react"
import css from "./styles.module.scss"
import classNames from "classnames"

interface BrandGridProps {
  className?: string
}

export const BrandGrid: React.FC<BrandGridProps> = ({ className }) => {
  return (
    <section className={classNames(css.brand_section, className)}>
      <div className="container">
        <div className={css.brand_section_content}>
          <div className={css.brand_section_item}>
            <span className={css.brand_name}>ALEXANDER MCQUEEN</span>
          </div>
          <div className={css.brand_section_item}>
            <span className={css.brand_name}>ALEXANDER MCQUEEN</span>
          </div>
          <div className={css.brand_section_item}>
            <span className={css.brand_name}>ALEXANDER MCQUEEN</span>
          </div>
          <div className={css.brand_section_item}>
            <span className={css.brand_name}>ALEXANDER MCQUEEN</span>
          </div>
          <div className={css.brand_section_item}>
            <span className={css.brand_name}>ALEXANDER MCQUEEN</span>
          </div>
          <div className={css.brand_section_item}>
            <span className={css.brand_name}>ALEXANDER MCQUEEN</span>
          </div>
          <div className={css.brand_section_item}>
            <span className={css.brand_name}>ALEXANDER MCQUEEN</span>
          </div>
          <div className={css.brand_section_item}>
            <span className={css.brand_name}>ALEXANDER MCQUEEN</span>
          </div>
          <div className={css.brand_section_item}>
            <span className={css.brand_name}>ALEXANDER MCQUEEN</span>
          </div>
          <div className={css.brand_section_item}>
            <span className={css.brand_name}>ALEXANDER MCQUEEN</span>
          </div>
          <div className={css.brand_section_item}>
            <span className={css.brand_name}>ALEXANDER MCQUEEN</span>
          </div>
          <div className={css.brand_section_item}>
            <span className={css.brand_name}>ALEXANDER MCQUEEN</span>
          </div>
        </div>
      </div>
    </section>
  )
}
