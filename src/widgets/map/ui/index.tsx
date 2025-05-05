"use client"

import React from "react"
import css from "./styles.module.scss"
import { SectionTip } from "@/shared/ui/modules/section-tip"
import classNames from "classnames"
import { SelfDelivery } from "@/shared/ui"

interface MapSectionProps {
  className?: string
}

export const MapSection: React.FC<MapSectionProps> = ({ className }) => {
  return (
    <section className={classNames(css.map_section, className)}>
      <div className="container">
        <div className={css.map_section_content}>
          <SectionTip
            className={css.map_section_tip}
            label="Оптика Добрих Цін"
          />
          <h5 className={css.map_section_title}>Як знайти наші оптики в м.Одеса</h5>
          <p className={css.map_section_text}>
            Для вашої зручності ви можете забронювати товар в оптиці, приїхати і забрати його
            особисто.
          </p>
          <SelfDelivery />
        </div>
      </div>
    </section>
  )
}
