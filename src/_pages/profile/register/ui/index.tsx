import { unstable_setRequestLocale } from "next-intl/server"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"

import { PageInfo } from "@/widgets/page-info-block"
import { RegisterSection } from "@/widgets/profile/register"

export function RegisterPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  return (
    <>
      <Breadcrumbs
        arr={[
          { type: "parent", slug: ClientRoutes.profile.path, title: ClientRoutes.profile.name },
          {
            type: "current",
            slug: ClientRoutes.register.path,
            title: ClientRoutes.authorization.name,
          },
        ]}
      />
      <PageInfo
        label={ClientRoutes.register.name}
        title={ClientRoutes.profile.name}
      />
      <RegisterSection />
    </>
  )
}
