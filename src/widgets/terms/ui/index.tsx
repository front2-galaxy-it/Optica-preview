import React from "react"
import css from "./styles.module.scss"
import termsData from "@/shared/data/terms.json"
import { Icon } from "@/shared/ui/icons"

interface PolicySectionProps {
  title: string
  points: string[]
}

const temsDataList: PolicySectionProps[] = termsData

export const TermsSection: React.FC = () => {
  return (
    <section className={css.policy_section}>
      <div className="container">
        <div className={css.policy_section_content}>
          <h6>ПОЛОЖЕННЯ ПРО ПОРЯДОК ОБРОБКИ ТА ЗАХИСТУ ПЕРСОНАЛЬНИХ ДАНИХ КЛІЄНТІВ</h6>
          <p>
            At Atlas Partners, we really care about our partners, and one of our most important
            tasks is to protect your privacy. We know that when you provide us with your personal
            information, we must keep it secure and use it in a fair and lawful manner.
          </p>
          <ol>
            {temsDataList.map((section, i) => (
              <li
                key={i}
                className={css.list}
              >
                <strong>{section.title}</strong>
                <ol>
                  {section.points.map((text, j) => (
                    <li key={j}>
                      <span className={css.point_number}>{`${i + 1}.${j + 1}`}</span> {text}
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ol>
          <p>
            At Atlas Partners, we really care about our partners, and one of our most important
            tasks is to protect your privacy. We know that when you provide us with your personal
            information, we must keep it secure and use it in a fair and lawful manner.
          </p>
        </div>
        <a
          href="/files/policy.pdf"
          download
          className={css.download_btn}
        >
          Завантажити PDF
          <Icon name="icon_download" />
        </a>
      </div>
    </section>
  )
}
