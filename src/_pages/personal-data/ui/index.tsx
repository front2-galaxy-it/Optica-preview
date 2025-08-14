import { unstable_setRequestLocale, getTranslations } from "next-intl/server"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"

import { PageInfo } from "@/widgets/page-info-block"
import { notFound } from "next/navigation"
import { ModulesSwitch } from "@/widgets/module-switch"
import { IGlobalPageProps } from "@/shared/types"
import { fetchPageLayoutData, getPageLayoutMetadata } from "@/shared/lib"
import { PersonalDataSection } from "@/widgets/personal-data-section"

const getPersonalPageData = async ({ locale }: { locale: string }) => {
  return await fetchPageLayoutData({ locale, layoutName: "useraccount" })
}

export async function PersonalDataPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  const tLabels = await getTranslations("page-labels")
  const tBreadcrumbs = await getTranslations("breadcrumbs")

  const pesonalPageData = await getPersonalPageData({ locale })
  if (!pesonalPageData) notFound()

  const {
    layout: { modules },
  } = pesonalPageData

  return (
    <>
      <Breadcrumbs
        arr={[
          {
            type: "parent",
            slug: ClientRoutes.personal_data.path,
            title: tBreadcrumbs("personal_data"),
          },
        ]}
      />
      <PageInfo
        label={tLabels("profile")}
        title={tLabels("personal-profile")}
      />
      <PersonalDataSection />
      <ModulesSwitch modules={modules} />
    </>
  )
}

export async function generateMetadata({ params: { locale } }: IGlobalPageProps) {
  try {
    const layoutData = await getPersonalPageData({ locale })
    if (!layoutData) return
    return getPageLayoutMetadata(layoutData.layout)
  } catch (error) {
    console.error("Error fetching categories:", error)
  }
}
