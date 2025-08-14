import { unstable_setRequestLocale, getTranslations } from "next-intl/server"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"
import { PageInfo } from "@/widgets/page-info-block"
import { IGlobalPageProps } from "@/shared/types"
import { fetchPageLayoutData, getPageLayoutMetadata } from "@/shared/lib"
import { notFound } from "next/navigation"
import { ModulesSwitch } from "@/widgets/module-switch"

const getBonusesPageData = async ({ locale }: { locale: string }) => {
  return await fetchPageLayoutData({ locale, layoutName: "bonuses" })
}

export async function LoyaltyPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)
  const tBreadcrumbs = await getTranslations("breadcrumbs")

  const bonusesPageData = await getBonusesPageData({ locale })
  if (!bonusesPageData) notFound()

  const {
    layout: { modules },
  } = bonusesPageData

  return (
    <>
      <Breadcrumbs
        arr={[
          {
            type: "parent",
            slug: ClientRoutes.loyalty_program.path,
            title: tBreadcrumbs("loyalty_program"),
          },
        ]}
      />
      {bonusesPageData.layout.title && bonusesPageData.layout.description ? (
        <PageInfo
          label={bonusesPageData.layout.title}
          title={bonusesPageData.layout.description}
        />
      ) : null}
      <ModulesSwitch modules={modules} />
    </>
  )
}

export async function generateMetadata({ params: { locale } }: IGlobalPageProps) {
  try {
    const layoutData = await getBonusesPageData({ locale })
    if (!layoutData) return
    return getPageLayoutMetadata(layoutData.layout)
  } catch (error) {
    console.error("Error fetching categories:", error)
  }
}
