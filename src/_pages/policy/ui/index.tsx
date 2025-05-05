import { unstable_setRequestLocale } from "next-intl/server"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"

import { PageInfo } from "@/widgets/page-info-block"
import { PolicySection } from "@/widgets/policy"

export function PolicyPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  return (
    <>
      <Breadcrumbs
        arr={[{ type: "parent", slug: ClientRoutes.about.path, title: ClientRoutes.policy.name }]}
      />
      <PageInfo
        label="Оптика Добрих Цін"
        title={ClientRoutes.policy.name}
      />
      <PolicySection />
    </>
  )
}
