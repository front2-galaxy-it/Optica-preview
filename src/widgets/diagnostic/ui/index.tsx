"use client"

import React from "react"
import css from "./styles.module.scss"
import { DiagnosticServiceBlock } from "../components/diagnostic-service-block"
// import Image from "next/image"

export const DiagnosticSection: React.FC = () => {
  return (
    <section className={css.diagnistic_section}>
      <div className="container">
        <div className={css.diagnistic_section_content}>
          <p className={css.diagnistic_section_text}>
            Ми проводимо професійну діагностику зору за допомогою сучасного обладнання. Оберіть
            послугу нижче, щоб записатися на огляд та отримати рекомендації від наших фахівців.
          </p>
          <div className={css.diagnistic_service_list}>
            <DiagnosticServiceBlock />
          </div>
        </div>
      </div>
    </section>
  )
}
