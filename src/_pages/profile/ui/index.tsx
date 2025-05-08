import { unstable_setRequestLocale } from "next-intl/server"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"

import { PageInfo } from "@/widgets/page-info-block"
import { ProfileSection } from "@/widgets/profile"

export function ProfilePage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  return (
    <>
      <Breadcrumbs
        arr={[
          { type: "parent", slug: ClientRoutes.profile.path, title: ClientRoutes.profile.name },
        ]}
      />
      <PageInfo
        label="Реєстрація"
        title={ClientRoutes.profile.name}
      />
      <ProfileSection />
    </>
  )
}
