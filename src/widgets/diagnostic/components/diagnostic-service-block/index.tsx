"use client"

import React from "react"
import css from "./styles.module.scss"
import Image from "next/image"
import { Price } from "@/shared/ui/modules/price"
import { Button } from "@/shared/ui"
import { Icon } from "@/shared/ui/icons"
import { IDiagnosticService } from "@/shared/types/diagnostic-service.interface"
import { ButtonLink } from "@/shared/ui/links"

export const DiagnosticServiceBlock: React.FC<
  IDiagnosticService & { onSignUpClick: () => void }
> = ({
  slug,
  img,
  title,
  description,
  result,
  duration,
  price,
  oldPrice,
  condition,
  isFree = false,
  onSignUpClick,
}) => {
  return (
    <div className={css.diagnostic_service_block}>
      <span className={css.number}></span>
      <Image
        className={css.block_img}
        src={img}
        width={536}
        height={381}
        alt="image not found"
      />
      <div className={css.block_text_wrap}>
        <h5 className={css.block_title}>{title}</h5>
        <div className={css.block_info}>
          <p className={css.block_text}>{description}</p>
          <p className={css.block_text}>{result}</p>
        </div>
        <div className={css.duration}>
          <Icon name="icon_clock" />
          <span>{duration} хв</span>
        </div>
        {isFree ? (
          <span className={css.free_text}>Безкоштовно</span>
        ) : (
          <Price
            className={css.service_price}
            price={price ?? 0}
            oldPrice={oldPrice}
          />
        )}
        <span className={css.condition}>{condition}</span>
        <div className={css.buttons_wrap}>
          <Button
            modifier="primary"
            iconPosition="right"
            iconName="arrow_right"
            onClick={onSignUpClick}
          >
            Записатися
          </Button>
          <ButtonLink
            href={`/diagnostic/${slug}`}
            modifier="secondary"
            iconPosition="right"
            iconName="arrow_right"
          >
            Детальніше
          </ButtonLink>
        </div>
      </div>
    </div>
  )
}
