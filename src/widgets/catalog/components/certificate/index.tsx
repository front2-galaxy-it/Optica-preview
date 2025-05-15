import React from "react"
import css from "./styles.module.scss"
import { CertificateList } from "./CertificateList"
import { ICertificateProps } from "@/shared/types"
import certificateData from "@/shared/data/certificate-list.json"

const certificateDataList: ICertificateProps[] = certificateData

export const Certificate: React.FC = () => {
  return (
    <div className={css.certificate}>
      <div className={css.certificate_text}>
        <h5 className={css.certificate_title}>Подарунок з турботою про зір близьких</h5>
        <p>
          Шукаєте ідеальний подарунок для близьких? Подарунковий сертифікат від нашого магазину — це
          чудова можливість подарувати свободу вибору стильних окулярів!
        </p>
        <strong>Як це працює?</strong>
        <ul>
          <li>Виберіть суму сертифікату.</li>
          <li>Отримайте електронну версію сертифікату на свою пошту.</li>
          <li>
            Подаруйте сертифікат і дайте можливість отримати якісні окуляри на будь-який смак.
          </li>
        </ul>
        <p>Зробіть подарунок, який не потребує обміну!</p>
      </div>
      <CertificateList certificateList={certificateDataList} />
    </div>
  )
}
