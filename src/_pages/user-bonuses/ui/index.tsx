import { unstable_setRequestLocale, getTranslations } from "next-intl/server"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"

import { PageInfo } from "@/widgets/page-info-block"
import { notFound } from "next/navigation"
import { ModulesSwitch } from "@/widgets/module-switch"
import { IGlobalPageProps } from "@/shared/types"
import { fetchPageLayoutData, getPageLayoutMetadata } from "@/shared/lib"
import { UserBonusesSection } from "@/widgets/user-bonuses-section"

const getUserBonusesPageData = async ({ locale }: { locale: string }) => {
  return await fetchPageLayoutData({ locale, layoutName: "userbonuses" })
}

export async function UserBonusesDataPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  const tLabels = await getTranslations("page-labels")

  const UserBonusesPageData = await getUserBonusesPageData({ locale })
  if (!UserBonusesPageData) notFound()

  const {
    layout: { modules },
  } = UserBonusesPageData

  return (
    <>
      <Breadcrumbs
        arr={[
          {
            type: "parent",
            slug: ClientRoutes.user_bonuses.path,
            titleKey: ClientRoutes.user_bonuses.nameKey,
          },
        ]}
      />
      <PageInfo
        label={tLabels("user_bonuses")}
        title={tLabels("personal-profile")}
      />
      <UserBonusesSection />
      <ModulesSwitch modules={modules} />
    </>
  )
}

export async function generateMetadata({ params: { locale } }: IGlobalPageProps) {
  try {
    const layoutData = await getUserBonusesPageData({ locale })
    if (!layoutData) return
    return getPageLayoutMetadata(layoutData.layout)
  } catch (error) {
    console.error("Error fetching categories:", error)
  }
}
