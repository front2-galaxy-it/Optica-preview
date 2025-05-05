import { unstable_setRequestLocale } from "next-intl/server"

import { IHomePageProps } from "./props"
import { MailingSection } from "@/widgets/mailing"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs, ButtonsList } from "@/shared/components"
import { PageInfo } from "@/widgets/page-info-block"
import { navData } from "@/shared/routes/info-buttons-list"
import { FormSection } from "@/widgets/contact-form"
import { Reviews } from "@/widgets/reviews.page"

export function ReviewsPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  return (
    <>
      <Breadcrumbs
        arr={[
          { type: "parent", slug: ClientRoutes.reviews.path, title: ClientRoutes.reviews.name },
        ]}
      />
      <PageInfo
        label="Оптика Добрих Цін"
        title="Відгуки наших клієнтів"
      />
      <ButtonsList items={navData.about_us} />
      <Reviews />
      <FormSection />
      <MailingSection />
    </>
  )
}
