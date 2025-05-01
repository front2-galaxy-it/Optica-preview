import { unstable_setRequestLocale } from "next-intl/server"

import { IHomePageProps } from "./props"
import { MailingSection } from "@/widgets/mailing"
import { ReviewsSection } from "@/widgets/reviews"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs, ButtonsList } from "@/shared/components"
import { TeamSection } from "@/widgets/team"
import { PageInfo } from "@/widgets/page-info-block"
import { navData } from "@/shared/routes/info-buttons-list"
import { DiagnosticSection } from "@/widgets/diagnostic"

export function DiagnosticPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  return (
    <>
      <Breadcrumbs
        arr={[{ type: "parent", slug: ClientRoutes.diagnostic, title: "Діагностика" }]}
      />
      <PageInfo
        label="Оптика Добрих Цін"
        title="Види діагностики зору"
      />
      <ButtonsList items={navData.about_us} />
      <DiagnosticSection />
      <TeamSection />
      <ReviewsSection />
      <MailingSection />
    </>
  )
}
