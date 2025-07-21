"use client"

import React, { useState } from "react"
import css from "./styles.module.scss"

import Image from "next/image"
import { ButtonLink } from "@/shared/ui/links"
import { Button } from "@/shared/ui"
import { ClientRoutes } from "@/shared/routes"
import { DiagnosticPopup, ThanksPopup } from "@/widgets/popups"
import { useTranslations } from "next-intl"

export const HelpSection: React.FC = () => {
  const tHelp = useTranslations("help-section")

  const [popupOpen, setPopupOpen] = useState(false)
  const [thanksPopupOpen, setThanksPopupOpen] = useState(false)
  return (
    <section className={css.help_section}>
      <div className="container">
        <div className={css.help_content}>
          <div className={css.help_card}>
            <Image
              className={css.card_img}
              src="/images/help/help_img_1.png"
              width={635}
              height={635}
              alt="image not found"
            />
            <div className={css.card_content}>
              <h3 className={css.card_title}>{tHelp("card-title-1")}</h3>
              <p className={css.card_text}>{tHelp("card-description-1")}</p>
              <ButtonLink
                href={ClientRoutes.diagnostic.path}
                modifier="primary"
                iconName="arrow_right"
              >
                {tHelp("card-button-1")}
              </ButtonLink>
            </div>
          </div>
          <div className={css.help_card}>
            <Image
              className={css.card_img}
              src="/images/help/help_img_2.png"
              width={635}
              height={635}
              alt="image not found"
            />
            <div className={css.card_content}>
              <h3 className={css.card_title}>{tHelp("card-title-2")}</h3>
              <p className={css.card_text}>{tHelp("card-description-2")}</p>
              <Button
                modifier="primary"
                iconName="arrow_right"
                onClick={() => setPopupOpen(true)}
              >
                {tHelp("card-button-2")}
              </Button>
            </div>
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
