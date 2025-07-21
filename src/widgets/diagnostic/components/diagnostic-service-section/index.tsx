"use client"

import React, { useState } from "react"
import css from "./styles.module.scss"
import Image from "next/image"
import { Price } from "@/shared/ui/modules/price"
import { Button } from "@/shared/ui"
import { Icon } from "@/shared/ui/icons"
import { ButtonLink } from "@/shared/ui/links"
import { IDiagnosticService } from "@/shared/types/diagnostic-service.interface"
import { ClientRoutes } from "@/shared/routes"
import { DiagnosticPopup, ThanksPopup } from "@/widgets/popups"

export const DiagnosticServiceSection: React.FC<IDiagnosticService> = ({
  duration,
  price,
  oldPrice,
  condition,
  isFree = false,
  contentBlocks,
}) => {
  const [popupOpen, setPopupOpen] = useState(false)
  const [thanksPopupOpen, setThanksPopupOpen] = useState(false)
  return (
    <section className={css.diagnostic_service_section}>
      <div className="container">
        <p className={css.diagnostic_service_section_text}>
          Наша оптика пропонує повний спектр послуг з діагностики зору за допомогою сучасних
          технологій та висококваліфікованих спеціалістів. Ми ретельно оцінюємо ваш зір, визначаємо
          можливі проблеми та надаємо індивідуальні рекомендації для покращення зору.
        </p>
        <p className={css.diagnostic_service_section_text}>
          Звернувшись до нас, ви отримаєте точні результати та професійну консультацію щодо
          подальших кроків.
        </p>
        <div className={css.diagnostic_service_section_content}>
          {contentBlocks?.map((block, index) => (
            <div
              className={css.content_block}
              key={index}
            >
              {block.title && <h6 className={css.block_title}>{block.title}</h6>}
              {block.type === "text" && <p>{block.value}</p>}
              {block.type === "image" && typeof block.value === "string" && (
                <Image
                  className={css.block_img}
                  src={block.value}
                  alt={block.title}
                  width={300}
                  height={200}
                />
              )}
              {block.type === "list" &&
                Array.isArray(block.value) &&
                (block.listType === "ol" ? (
                  <ol>
                    {block.value.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ol>
                ) : (
                  <ul>
                    {block.value.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ))}
            </div>
          ))}
        </div>
        <div className={css.diagnostic_service_section_footer}>
          <div className={css.diagnostic_service_section_footer_top}>
            <div className={css.price_wrap}>
              <span className={css.price_title}>Вартість:</span>
              <div className={css.price_body}>
                {isFree ? (
                  <span className={css.free_text}>Безкоштовно</span>
                ) : (
                  <Price
                    className={css.price}
                    price={price ?? 0}
                    oldPrice={oldPrice}
                    oldPriceClass={css.old_price}
                  />
                )}
                <span className={css.condition}>{condition}</span>
              </div>
            </div>
            <div className={css.duration}>
              <Icon
                name="icon_clock"
                className={css.icon_clock}
              />
              <span>{duration} хв</span>
            </div>
          </div>
          <div className={css.diagnostic_service_section_footer_bottom}>
            <ButtonLink
              className={css.service_button}
              href={ClientRoutes.diagnostic.path}
              modifier="secondary"
              iconPosition="left"
              iconName="arrow_right"
            >
              Види діагностик
            </ButtonLink>
            <Button
              className={css.service_button}
              modifier="primary"
              iconPosition="right"
              iconName="arrow_right"
              onClick={() => setPopupOpen(true)}
            >
              Записатися
            </Button>
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
