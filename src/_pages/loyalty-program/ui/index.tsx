import { unstable_setRequestLocale } from "next-intl/server"

import { IHomePageProps } from "./props"
import { MailingSection } from "@/widgets/mailing"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"
import { PageInfo } from "@/widgets/page-info-block"
import { FormSection } from "@/widgets/contact-form"
import { LoyaltySection } from "@/widgets/loyalty-program"

export function LoyaltyPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  return (
    <>
      <Breadcrumbs
        arr={[
          {
            type: "parent",
            slug: ClientRoutes.loyalty_program.path,
            title: ClientRoutes.loyalty_program.name,
          },
        ]}
      />
      <PageInfo
        label="Оптика Добрих Цін"
        title={ClientRoutes.loyalty_program.name}
      />
      <LoyaltySection />
      <FormSection />
      <MailingSection />
    </>
  )
}
