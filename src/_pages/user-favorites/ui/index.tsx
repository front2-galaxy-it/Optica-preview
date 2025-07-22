import { unstable_setRequestLocale, getTranslations } from "next-intl/server"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"

import { PageInfo } from "@/widgets/page-info-block"
import { notFound } from "next/navigation"
import { ModulesSwitch } from "@/widgets/module-switch"
import { IGlobalPageProps } from "@/shared/types"
import { fetchPageLayoutData, getPageLayoutMetadata } from "@/shared/lib"
import { UserFavoritesSection } from "@/widgets/user-favorites-section"

const getUserFavoritesPageData = async ({ locale }: { locale: string }) => {
  return await fetchPageLayoutData({ locale, layoutName: "userfavorites" })
}

export async function UserFavoritesDataPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  const tLabels = await getTranslations("page-labels")

  const UserFavoritesPageData = await getUserFavoritesPageData({ locale })
  if (!UserFavoritesPageData) notFound()

  const {
    layout: { modules },
  } = UserFavoritesPageData

  return (
    <>
      <Breadcrumbs
        arr={[
          {
            type: "parent",
            slug: ClientRoutes.user_favorites.path,
            titleKey: ClientRoutes.user_favorites.nameKey,
          },
        ]}
      />
      <PageInfo
        label={tLabels("user_favorites")}
        title={tLabels("personal-profile")}
      />
      <UserFavoritesSection />
      <ModulesSwitch modules={modules} />
    </>
  )
}

export async function generateMetadata({ params: { locale } }: IGlobalPageProps) {
  try {
    const layoutData = await getUserFavoritesPageData({ locale })
    if (!layoutData) return
    return getPageLayoutMetadata(layoutData.layout)
  } catch (error) {
    console.error("Error fetching categories:", error)
  }
}
