import { unstable_setRequestLocale } from "next-intl/server"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"

import { PageInfo } from "@/widgets/page-info-block"
import { ProfileSection } from "@/widgets/profile"
import { useTranslations } from "next-intl"

export function ProfilePage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  const tLabels = useTranslations("page-labels")

  return (
    <>
      <Breadcrumbs
        arr={[
          {
            type: "parent",
            slug: ClientRoutes.profile.path,
            titleKey: ClientRoutes.profile.nameKey,
          },
        ]}
      />
      <PageInfo
        label={tLabels("profile")}
        title={ClientRoutes.profile.nameKey}
      />
      <ProfileSection />
    </>
  )
}
