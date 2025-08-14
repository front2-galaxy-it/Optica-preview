"use client"

import React from "react"
import css from "./styles.module.scss"
import Image from "next/image"
import { Price } from "@/shared/ui/modules/price"
import { Button } from "@/shared/ui"
import { Icon } from "@/shared/ui/icons"
import { IDiagnosticService } from "@/shared/types/diagnostic-service.interface"
import { ButtonLink } from "@/shared/ui/links"
import { useTranslations } from "next-intl"

export const DiagnosticServiceBlock: React.FC<
  IDiagnosticService & { onSignUpClick: () => void }
> = ({
  slug,
  image,
  title,
  short_description,
  notice,
  duration,
  price,
  discount,
  condition,
  isFree = false,
  onSignUpClick,
}) => {
  const tButtons = useTranslations("buttons")

  return (
    <div className={css.diagnostic_service_block}>
      <span className={css.number}></span>
      <Image
        className={css.block_img}
        src={image ?? "/images/image-not-found.jpg"}
        width={536}
        height={381}
        alt="image not found"
      />
      <div className={css.block_text_wrap}>
        <h5 className={css.block_title}>{title}</h5>
        <div className={css.block_info}>
          <p className={css.block_text}>{short_description}</p>
          <p className={css.block_text}>{notice}</p>
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
            oldPrice={discount}
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
            {tButtons("signup_btn")}
          </Button>
          <ButtonLink
            href={`/diagnostic/${slug}`}
            modifier="secondary"
            iconPosition="right"
            iconName="arrow_right"
          >
            {tButtons("details_btn")}
          </ButtonLink>
        </div>
      </div>
    </div>
  )
}
