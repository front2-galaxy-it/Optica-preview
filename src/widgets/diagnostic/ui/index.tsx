"use client"

import React, { useState } from "react"
import css from "./styles.module.scss"
import { DiagnosticServiceBlock } from "../components/diagnostic-service-block"
import serviceList from "@/shared/data/diagnostic-servises-list.json"
import { IDiagnosticService } from "@/shared/types/diagnostic-service.interface"
import { DiagnosticPopup, ThanksPopup } from "@/widgets/popups"

const serviceListData: IDiagnosticService[] = serviceList.map((service) => ({
  ...service,
  contentBlocks: service.contentBlocks.map((block) => ({
    ...block,
    title: block.title || "",
    type: block.type as "image" | "list" | "text",
    value: Array.isArray(block.value) ? block.value : block.value.toString(),
    listType: block.listType as "ol" | "ul" | undefined,
  })),
}))

export const DiagnosticSection: React.FC = () => {
  const [popupOpen, setPopupOpen] = useState(false)
  const [thanksPopupOpen, setThanksPopupOpen] = useState(false)

  return (
    <section className={css.diagnistic_section}>
      <div className="container">
        <div className={css.diagnistic_section_content}>
          <p className={css.diagnistic_section_text}>
            Ми проводимо професійну діагностику зору за допомогою сучасного обладнання. Оберіть
            послугу нижче, щоб записатися на огляд та отримати рекомендації від наших фахівців.
          </p>
          <div className={css.diagnistic_service_list}>
            {serviceListData.map((service, index) => (
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
        title="Дякуємо за запис на діагностику!"
        message="Наші фахівці зв'яжуться з вами найближчим часом, щоб підтвердити запис та уточнити деталі."
        isOpen={thanksPopupOpen}
        onClose={() => setThanksPopupOpen(false)}
      />
    </section>
  )
}
