import { unstable_setRequestLocale } from "next-intl/server"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"

import { PageInfo } from "@/widgets/page-info-block"
import { TermsSection } from "@/widgets/terms/ui"

export function TermsPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  return (
    <>
      <Breadcrumbs
        arr={[{ type: "parent", slug: ClientRoutes.terms.path, title: ClientRoutes.terms.name }]}
      />
      <PageInfo
        label="Оптика Добрих Цін"
        title={ClientRoutes.terms.name}
      />
      <TermsSection />
    </>
  )
}
