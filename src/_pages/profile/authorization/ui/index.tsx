import { unstable_setRequestLocale } from "next-intl/server"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"

import { PageInfo } from "@/widgets/page-info-block"
import { AuthorizationSection } from "@/widgets/profile/authorization"

export function AuthorizationPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  return (
    <>
      <Breadcrumbs
        arr={[
          { type: "parent", slug: ClientRoutes.profile.path, title: ClientRoutes.profile.name },
          {
            type: "current",
            slug: ClientRoutes.authorization.path,
            title: ClientRoutes.authorization.name,
          },
        ]}
      />
      <PageInfo
        label={ClientRoutes.authorization.name}
        title={ClientRoutes.profile.name}
      />
      <AuthorizationSection />
    </>
  )
}
