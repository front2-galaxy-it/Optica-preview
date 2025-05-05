import { unstable_setRequestLocale } from "next-intl/server"

import { IHomePageProps } from "./props"
import { MailingSection } from "@/widgets/mailing"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs, ButtonsList } from "@/shared/components"
import { PageInfo } from "@/widgets/page-info-block"
import { navData } from "@/shared/routes/info-buttons-list"
import { FormSection } from "@/widgets/contact-form"
import { FaqPageSection } from "@/widgets/faq.page"

export function FaqPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  return (
    <>
      <Breadcrumbs
        arr={[{ type: "parent", slug: ClientRoutes.faq.path, title: ClientRoutes.faq.name }]}
      />
      <PageInfo
        label="Оптика Добрих Цін"
        title="Про що нас часто запитують"
      />
      <ButtonsList items={navData.about_us} />
      <FaqPageSection />
      <FormSection />
      <MailingSection />
    </>
  )
}
