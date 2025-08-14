import React, { DetailedHTMLProps, HtmlHTMLAttributes } from "react"
import css from "./styles.module.scss"
import classNames from "classnames"

interface BrandGridProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  module: any
  className?: string
}

export const BrandGrid: React.FC<BrandGridProps> = ({ module, className }) => {
  const { items } = module
  return (
    <section className={classNames(css.brand_section, className)}>
      <div className="container">
        <div className={css.brand_section_content}>
          {items.map((item: any, index: number) => (
            <div
              className={css.brand_section_item}
              key={index}
            >
              <span className={css.brand_name}>{item.item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
