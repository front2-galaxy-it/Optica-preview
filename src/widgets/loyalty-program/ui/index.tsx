import React from "react"
import css from "./styles.module.scss"
import Image from "next/image"
import { useTranslations } from "next-intl"

export const LoyaltySection: React.FC = () => {
  const tLoyalty = useTranslations("loyalty-program")
  return (
    <section className={css.loyalty_section}>
      <div className="container">
        <div className={css.loyalty_section_head}>
          <div className={css.loyalty_section_head_text}>
            <p>{tLoyalty("loyalty_head_text_1")}</p>
            <p>{tLoyalty("loyalty_head_text_2")}</p>
            <strong>{tLoyalty("loyalty_how_to_get_card_title")}</strong>
            <p>{tLoyalty("loyalty_how_to_get_card_text")}</p>
            <ul>
              {tLoyalty.raw("loyalty_how_to_get_card_list").map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p>{tLoyalty("loyalty_get_card_online_text")}</p>
            <strong>{tLoyalty("loyalty_how_to_use_card_title")}</strong>
            <p>{tLoyalty("loyalty_how_to_use_card_text")}</p>
          </div>
          <Image
            className={css.loyalty_section_head_img}
            src="/images/content_img_6.png"
            width={634}
            height={579}
            alt="loyalty"
          />
        </div>

        <div className={css.loyalty_section_content}>
          <p>{tLoyalty("loyalty_section_content_1")}</p>
          <p>{tLoyalty("loyalty_section_content_2")}</p>
          <p>{tLoyalty("loyalty_section_content_3")}</p>

          <strong>{tLoyalty("loyalty_how_to_earn_title")}</strong>
          <p>{tLoyalty("loyalty_how_to_earn_text")}</p>
          <ul>
            {tLoyalty.raw("loyalty_bonus_list").map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p>{tLoyalty("loyalty_not_earned_text")}</p>

          <strong>{tLoyalty("loyalty_where_to_spend_title")}</strong>
          <p>{tLoyalty("loyalty_bonus_value")}</p>
          <p>{tLoyalty("loyalty_how_to_use_bonus_text")}</p>
          <ul>
            {tLoyalty.raw("loyalty_spend_bonus_list").map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p>{tLoyalty("loyalty_how_to_pay_with_bonus")}</p>
          <p>{tLoyalty("loyalty_bonus_limitations")}</p>

          <strong>{tLoyalty("loyalty_bonus_expiry_title")}</strong>
          <p>{tLoyalty("loyalty_bonus_activation_text")}</p>
          <ul>
            {tLoyalty.raw("loyalty_check_bonus_list").map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p>{tLoyalty("loyalty_bonus_expiry_info")}</p>
        </div>
      </div>
    </section>
  )
}
