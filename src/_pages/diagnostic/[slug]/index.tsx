import { unstable_setRequestLocale, getTranslations } from "next-intl/server"
import { IHomePageProps } from "../ui/props"
import { Breadcrumbs, ButtonsList } from "@/shared/components"
import { PageInfo } from "@/widgets/page-info-block"
import { ClientRoutes } from "@/shared/routes"
import { IDiagnosticService } from "@/shared/types/diagnostic-service.interface"
import { NotFoundPage } from "@/_pages/not-found"
import { DiagnosticServiceSection } from "@/widgets/diagnostic"
import { navData } from "@/shared/routes/info-buttons-list"
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

export async function DiagnosticServicePage({ params: { locale, slug } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  const tCommon = await getTranslations("common")
  const tBreadcrumbs = await getTranslations("breadcrumbs")

  const [diagnosticLayoutData, diagnosticPageData] = await Promise.all([
    getDiagnosticLayoutData({ locale }),
    getDiagnosticPageData({ locale }),
  ])

  if (!diagnosticLayoutData || !diagnosticPageData) {
    notFound()
  }

  const diagnosticItem = diagnosticPageData.data

  const service = (diagnosticItem as IDiagnosticService[]).find((item) => item.slug === slug)

  if (!service) return NotFoundPage()

  const {
    layout: { modules },
  } = diagnosticLayoutData

  return (
    <>
      <Breadcrumbs
        arr={[
          {
            type: "parent",
            slug: ClientRoutes.diagnostic.path,
            title: tBreadcrumbs("diagnostic"),
          },
          { type: "current", slug: `/diagnostic/${service.slug}`, title: service.title },
        ]}
      />
      <PageInfo
        label={tCommon("company-name")}
        title={service.title}
      />
      <ButtonsList items={navData.about_us} />
      <DiagnosticServiceSection {...service} />
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
