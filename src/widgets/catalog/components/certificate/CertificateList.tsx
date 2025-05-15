import React from "react"
import css from "./styles.module.scss"
import Image from "next/image"
import { Button } from "@/shared/ui"
import { ICertificateProps } from "@/shared/types"
import { Icon } from "@/shared/ui/icons"

interface CertificateListProps {
  certificateList: ICertificateProps[]
}

export const CertificateList: React.FC<CertificateListProps> = ({ certificateList }) => {
  return (
    <div className={css.certificate_list_wrap}>
      <h5 className={css.certificate_list_wrap_title}>Оберіть суму сертифікату</h5>

      <div className={css.certificate_list}>
        {certificateList.map((certificate, index) => (
          <div
            key={index}
            className={css.certificate_list_item}
          >
            <button className={css.wish_btn}>
              <Icon
                name="icon_heart"
                className={css.icon_heart}
              />
            </button>
            <Image
              className={css.certificate_list_img}
              src={certificate.image}
              width={536}
              height={324}
              alt={`Подарунковий сертифікат на ${certificate.price} грн`}
            />

            <div className={css.certificate_list_text}>
              <span className={css.tip}>Подарункові сертифікати</span>
              <strong
                className={css.title}
              >{`Подарунковий сертифікат на ${certificate.price} грн`}</strong>
              <div className={css.price}>
                <span>{certificate.price}</span>
                <span> грн</span>
              </div>

              <div className={css.certificate_text_footer}>
                <span className={css.available}>{certificate.available}</span>
                <Button
                  size="medium"
                  modifier="primary"
                  iconName="basket_icon"
                >
                  До кошика
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
