"use client"

import React from "react"
import css from "./styles.module.scss"
import Image from "next/image"
// import { Price } from "@/shared/ui/modules/price"
import { Button } from "@/shared/ui"
import { Icon } from "@/shared/ui/icons"

export const DiagnosticServiceBlock: React.FC = () => {
  return (
    <div className={css.diagnostic_service_block}>
      <span className={css.number}></span>
      <Image
        className={css.block_img}
        src="/images/diagnostic/diagnostic_img_1.png"
        width={536}
        height={381}
        alt="image not found"
      />
      <div className={css.block_text_wrap}>
        <h5 className={css.block_title}>Професійна діагностика зору</h5>
        <div className={css.block_info}>
          <p className={css.block_text}>13 тестів + підбір оптичного рішення</p>
          <p className={css.block_text}>Результат: скорегований зір</p>
        </div>
        <div className={css.duration}>
          <Icon name="icon_clock" />
          <span>90 хв</span>
        </div>
        {/* <Price /> */}
        <span className={css.condition}>*Безкоштовно, за умов придбання товарів в магазині</span>
        <div className={css.buttons_wrap}>
          <Button
            modifier="primary"
            iconPosition="right"
            iconName="arrow_right"
          >
            Записатися
          </Button>
          <Button
            modifier="secondary"
            iconPosition="right"
            iconName="arrow_right"
          >
            Детальніше
          </Button>
        </div>
      </div>
    </div>
  )
}
