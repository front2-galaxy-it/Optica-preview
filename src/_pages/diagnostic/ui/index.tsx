import { unstable_setRequestLocale, getTranslations } from "next-intl/server"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs, ButtonsList } from "@/shared/components"
import { PageInfo } from "@/widgets/page-info-block"
import { navData } from "@/shared/routes/info-buttons-list"
import { DiagnosticSection } from "@/widgets/diagnostic"
import { IGlobalPageProps } from "@/shared/types"
import { fetchPageLayoutData, getPageLayoutMetadata } from "@/shared/lib"
import { notFound } from "next/navigation"
import { ModulesSwitch } from "@/widgets/module-switch"

import { DiagnosticService } from "@/shared/services/diagnostic.service"

const getDiagnosticPageData = async ({ locale }: { locale: string }) => {
  const options = {
    headers: {
      "Accept-Locale": locale,
    },
  }

  try {
    return await DiagnosticService.getData(options)
  } catch (error) {
    console.error("Error fetching diagnostic data:", error)
    return null
  }
}

const getDiagnosticLayoutData = async ({ locale }: { locale: string }) => {
  return await fetchPageLayoutData({ locale, layoutName: "diagnostics" })
}

export async function DiagnosticPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  const tLabels = await getTranslations("page-labels")
  const tCommon = await getTranslations("common")
  const tBreadcrumbs = await getTranslations("breadcrumbs")

  const [diagnosticLayoutData, diagnosticPageData] = await Promise.all([
    getDiagnosticLayoutData({ locale }),
    getDiagnosticPageData({ locale }),
  ])

  if (!diagnosticLayoutData || !diagnosticPageData) {
    notFound()
  }

  const {
    layout: { modules },
  } = diagnosticLayoutData

  console.log(diagnosticPageData.data)

  return (
    <>
      <Breadcrumbs
        arr={[
          {
            type: "parent",
            slug: ClientRoutes.diagnostic.path,
            title: tBreadcrumbs("diagnostic"),
          },
        ]}
      />
      <PageInfo
        label={tCommon("company-name")}
        title={tLabels("diagnostic")}
      />
      <ButtonsList items={navData.about_us} />
      <DiagnosticSection diagnostics={diagnosticPageData.data} />
      <ModulesSwitch modules={modules} />
    </>
  )
}

export async function generateMetadata({ params: { locale } }: IGlobalPageProps) {
  try {
    const layoutData = await getDiagnosticLayoutData({ locale })
    if (!layoutData) return
    return getPageLayoutMetadata(layoutData.layout)
  } catch (error) {
    console.error("Error fetching categories:", error)
  }
}
