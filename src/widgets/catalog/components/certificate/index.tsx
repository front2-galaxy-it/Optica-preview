import React from "react"
import css from "./styles.module.scss"
import { CertificateList } from "./CertificateList"
import { ICertificateProps } from "@/shared/types"
import certificateData from "@/shared/data/certificate-list.json"
import { useTranslations } from "next-intl"

const certificateDataList: ICertificateProps[] = certificateData

export const Certificate: React.FC = () => {
  const tCertificate = useTranslations("certificate")
  return (
    <div className={css.certificate}>
      <div className={css.certificate_text}>
        <h5 className={css.certificate_title}>{tCertificate("title")}</h5>
        <p>{tCertificate("paragraph1")}</p>
        <strong>{tCertificate("how_it_works")}</strong>
        <ul>
          <li>{tCertificate("step1")}</li>
          <li>{tCertificate("step2")}</li>
          <li>{tCertificate("step3")}</li>
        </ul>
        <p>{tCertificate("paragraph2")}</p>
      </div>
      <CertificateList certificateList={certificateDataList} />
    </div>
  )
}
