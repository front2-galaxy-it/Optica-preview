import React from "react"
import css from "./styles.module.scss"
import Image from "next/image"
import { Button } from "@/shared/ui"
import { ICertificateProps } from "@/shared/types"
import { Icon } from "@/shared/ui/icons"
import { useTranslations } from "next-intl"

interface CertificateListProps {
  certificateList: ICertificateProps[]
}

export const CertificateList: React.FC<CertificateListProps> = ({ certificateList }) => {
  const tCertificate = useTranslations("certificate")
  const tButtons = useTranslations("buttons")
  return (
    <div className={css.certificate_list_wrap}>
      <h5 className={css.certificate_list_wrap_title}>{tCertificate("title-2")}</h5>

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
              alt={`Gift certificate for ${certificate.price}`}
            />

            <div className={css.certificate_list_text}>
              <span className={css.tip}>{tCertificate("gift_certificates")}</span>
              <strong className={css.title}>
                <strong className={css.title}>
                  {tCertificate("gift_certificate_part-1") +
                    ` ${certificate.price} ` +
                    tCertificate("gift_certificate_part-2")}
                </strong>
              </strong>
              <div className={css.price}>
                <span>{certificate.price}</span>
                <span> грн</span>
              </div>

              <div className={css.certificate_text_footer}>
                {certificate.available === true ? (
                  <span className={css.available}>{tCertificate("available")}</span>
                ) : (
                  <span className={css.unavailable}>{tCertificate("unavailable")}</span>
                )}
                <Button
                  size="medium"
                  modifier="primary"
                  iconName="basket_icon"
                >
                  {tButtons("add-to-cart")}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
