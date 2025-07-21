import { unstable_setRequestLocale, getTranslations } from "next-intl/server"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"

import { PageInfo } from "@/widgets/page-info-block"
import { PolicySection } from "@/widgets/policy"
import { IGlobalPageProps } from "@/shared/types"
import { fetchPageLayoutData, getPageLayoutMetadata } from "@/shared/lib"
import { notFound } from "next/navigation"
import { ModulesSwitch } from "@/widgets/module-switch"

const getPrivacyPageData = async ({ locale }: { locale: string }) => {
  return await fetchPageLayoutData({ locale, layoutName: "privacy" })
}

export async function PolicyPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  const tLabels = await getTranslations("page-labels")
  const tCommon = await getTranslations("common")

  const privacyPageData = await getPrivacyPageData({ locale })
  if (!privacyPageData) notFound()

  const {
    layout: { modules },
  } = privacyPageData

  return (
    <>
      <Breadcrumbs
        arr={[
          { type: "parent", slug: ClientRoutes.terms.path, titleKey: ClientRoutes.policy.nameKey },
        ]}
      />
      <PageInfo
        label={tCommon("company-name")}
        title={tLabels("policy")}
      />
      <PolicySection />
      <ModulesSwitch modules={modules} />
    </>
  )
}

export async function generateMetadata({ params: { locale } }: IGlobalPageProps) {
  try {
    const layoutData = await getPrivacyPageData({ locale })
    if (!layoutData) return
    return getPageLayoutMetadata(layoutData.layout)
  } catch (error) {
    console.error("Error fetching categories:", error)
  }
}
