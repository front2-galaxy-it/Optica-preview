import { unstable_setRequestLocale } from "next-intl/server"

import { IHomePageProps } from "./props"
import { MailingSection } from "@/widgets/mailing"
import { FormSection } from "@/widgets/contact-form"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs, ButtonsList } from "@/shared/components"
import { Delivery } from "@/widgets/delivery"
import { PageInfo } from "@/widgets/page-info-block"
import { navData } from "@/shared/routes/info-buttons-list"

export function DeliveryPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  return (
    <>
      <Breadcrumbs
        arr={[
          { type: "parent", slug: ClientRoutes.delivery.path, title: ClientRoutes.delivery.name },
        ]}
      />
      <PageInfo
        label="Оптика Добрих Цін"
        title="Умови доставки і оплати"
      />
      <ButtonsList items={navData.delivery} />
      <Delivery />
      <FormSection />
      <MailingSection />
    </>
  )
}
