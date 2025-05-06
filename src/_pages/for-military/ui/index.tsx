import { unstable_setRequestLocale } from "next-intl/server"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"
import { PageInfo } from "@/widgets/page-info-block"

import { HelpSection } from "@/widgets/help"
import { MapSection } from "@/widgets/map"
import { FormSection } from "@/widgets/contact-form"
import { FaqSection } from "@/widgets/faq"
import { ForMilitarySection } from "@/widgets/for-military/ui"
import { AdvantageSection } from "@/widgets/advantage"

export function ProposalPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  return (
    <>
      <Breadcrumbs
        arr={[
          {
            type: "parent",
            slug: ClientRoutes.for_military.path,
            title: ClientRoutes.for_military.name,
          },
        ]}
      />
      <PageInfo
        label="Оптика Добрих Цін"
        title={ClientRoutes.for_military.name}
      />
      <ForMilitarySection />
      <HelpSection />
      <AdvantageSection />
      <MapSection />
      <FormSection />
      <FaqSection />
    </>
  )
}
