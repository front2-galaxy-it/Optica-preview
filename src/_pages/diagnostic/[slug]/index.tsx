import { unstable_setRequestLocale } from "next-intl/server"

import { Breadcrumbs, ButtonsList } from "@/shared/components"
import { PageInfo } from "@/widgets/page-info-block"
import { ClientRoutes } from "@/shared/routes"
import serviceList from "@/shared/data/diagnostic-servises-list.json"
import { IDiagnosticService } from "@/shared/types/diagnostic-service.interface"
import { NotFoundPage } from "@/_pages/not-found"
import { DiagnosticServiceSection } from "@/widgets/diagnostic"
import { navData } from "@/shared/routes/info-buttons-list"
import { TeamSection } from "@/widgets/team"
import { ReviewsSection } from "@/widgets/reviews"
import { MailingSection } from "@/widgets/mailing"

interface DiagnosticServicePageProps {
  params: {
    locale: string
    slug: string
  }
}

export function DiagnosticServicePage({ params }: DiagnosticServicePageProps) {
  unstable_setRequestLocale(params.locale)

  const service = (serviceList as IDiagnosticService[]).find((item) => item.slug === params.slug)

  if (!service) return NotFoundPage()

  return (
    <>
      <Breadcrumbs
        arr={[
          {
            type: "parent",
            slug: ClientRoutes.diagnostic.path,
            title: ClientRoutes.diagnostic.name,
          },
          { type: "current", slug: `/diagnostic/${service.slug}`, title: service.title },
        ]}
      />
      <PageInfo
        title={service.title}
        label="Оптика Добрих Цін"
      />
      <ButtonsList items={navData.about_us} />
      <DiagnosticServiceSection {...service} />
      <TeamSection />
      <ReviewsSection />
      <MailingSection />
    </>
  )
}
