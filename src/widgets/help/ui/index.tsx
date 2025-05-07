"use client"

import React, { useState } from "react"
import css from "./styles.module.scss"

import Image from "next/image"
import { ButtonLink } from "@/shared/ui/links"
import { Button } from "@/shared/ui"
import { ClientRoutes } from "@/shared/routes"
import { DiagnosticPopup, ThanksPopup } from "@/widgets/popups"

export const HelpSection: React.FC = () => {
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
              <h3 className={css.card_title}>
                Види <br /> діагностики зору
              </h3>
              <p className={css.card_text}>Попіклуйтесь про свій зір вже сьогодні!</p>
              <ButtonLink
                href={ClientRoutes.diagnostic.path}
                modifier="primary"
                iconName="arrow_right"
              >
                Діагностика зору
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
              <h3 className={css.card_title}>Запишіться на підбір окулярів</h3>
              <p className={css.card_text}>Допоможемо покращити Ваш зір!</p>
              <Button
                modifier="primary"
                iconName="arrow_right"
                onClick={() => setPopupOpen(true)}
              >
                Обрати час та день
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
