import { unstable_setRequestLocale, getTranslations } from "next-intl/server"
import { IHomePageProps } from "../ui/props"
import { Breadcrumbs, ButtonsList } from "@/shared/components"
import { PageInfo } from "@/widgets/page-info-block"
import { ClientRoutes } from "@/shared/routes"
import serviceList from "@/shared/data/diagnostic-servises-list.json"
import { IDiagnosticService } from "@/shared/types/diagnostic-service.interface"
import { NotFoundPage } from "@/_pages/not-found"
import { DiagnosticServiceSection } from "@/widgets/diagnostic"
import { navData } from "@/shared/routes/info-buttons-list"
import { IGlobalPageProps } from "@/shared/types"
import { fetchPageLayoutData, getPageLayoutMetadata } from "@/shared/lib"
import { notFound } from "next/navigation"
import { ModulesSwitch } from "@/widgets/module-switch"

const getDiagnosticPageData = async ({ locale }: { locale: string }) => {
  return await fetchPageLayoutData({ locale, layoutName: "diagnostics" })
}

export async function DiagnosticServicePage({ params: { locale, slug } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  const tCommon = await getTranslations("common")

  const service = (serviceList as IDiagnosticService[]).find((item) => item.slug === slug)

  if (!service) return NotFoundPage()

  const diagnosticPageData = await getDiagnosticPageData({ locale })
  if (!diagnosticPageData) notFound()

  const {
    layout: { modules },
  } = diagnosticPageData

  return (
    <>
      <Breadcrumbs
        arr={[
          {
            type: "parent",
            slug: ClientRoutes.diagnostic.path,
            titleKey: ClientRoutes.diagnostic.nameKey,
          },
          { type: "current", slug: `/diagnostic/${service.slug}`, titleKey: service.title },
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
    const layoutData = await getDiagnosticPageData({ locale })
    if (!layoutData) return
    return getPageLayoutMetadata(layoutData.layout)
  } catch (error) {
    console.error("Error fetching categories:", error)
  }
}
