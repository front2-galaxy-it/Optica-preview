"use client"

import React, { useState } from "react"
import css from "./styles.module.scss"
import { DiagnosticServiceBlock } from "../components/diagnostic-service-block"
import { DiagnosticPopup, ThanksPopup } from "@/widgets/popups"
import { useTranslations } from "next-intl"

interface DiagnosticSectionProps {
  diagnostics: any[]
}

export const DiagnosticSection: React.FC<DiagnosticSectionProps> = ({ diagnostics }) => {
  const tDiagnostic = useTranslations("diagnostic-section")
  const [popupOpen, setPopupOpen] = useState(false)
  const [thanksPopupOpen, setThanksPopupOpen] = useState(false)

  const tPopupDiagnostic = useTranslations("popups.diagnostic-popup")

  return (
    <section className={css.diagnistic_section}>
      <div className="container">
        <div className={css.diagnistic_section_content}>
          <p className={css.diagnistic_section_text}>{tDiagnostic("description")}</p>
          <div className={css.diagnistic_service_list}>
            {diagnostics.map((service, index) => (
              <DiagnosticServiceBlock
                key={index}
                {...service}
                onSignUpClick={() => setPopupOpen(true)}
              />
            ))}
          </div>
        </div>
      </div>
      <DiagnosticPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        onSuccess={() => setThanksPopupOpen(true)}
      />
      <ThanksPopup
        title={tPopupDiagnostic("thanks_label")}
        message={tPopupDiagnostic("thanks_text")}
        isOpen={thanksPopupOpen}
        onClose={() => setThanksPopupOpen(false)}
      />
    </section>
  )
}
