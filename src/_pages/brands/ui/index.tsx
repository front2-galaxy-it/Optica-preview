import { unstable_setRequestLocale, getTranslations } from "next-intl/server"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"
import { PageInfo } from "@/widgets/page-info-block"
import { BrandSection } from "@/widgets/brand"
import { Marquee } from "@/widgets/marquee"
import { TopSalesSection } from "@/widgets/top-sales"
import { BrandGrid } from "@/widgets/brand-grid"
import { IGlobalPageProps } from "@/shared/types"
import { fetchPageLayoutData, getPageLayoutMetadata } from "@/shared/lib"
import { notFound } from "next/navigation"
import { ModulesSwitch } from "@/widgets/module-switch"

const getManufacturersPageData = async ({ locale }: { locale: string }) => {
  return await fetchPageLayoutData({ locale, layoutName: "manufacturers" })
}

export async function BrandsPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  const tLabels = await getTranslations("page-labels")
  const tCommon = await getTranslations("common")

  const manufacturersPageData = await getManufacturersPageData({ locale })
  if (!manufacturersPageData) notFound()

  const {
    layout: { modules },
  } = manufacturersPageData

  return (
    <>
      <Breadcrumbs
        arr={[
          { type: "parent", slug: ClientRoutes.brands.path, titleKey: ClientRoutes.brands.nameKey },
        ]}
      />
      <PageInfo
        label={tCommon("company-name")}
        title={tLabels("manufacturer")}
      />
      <BrandSection className="brand_page" />
      <Marquee />
      <BrandGrid />
      <TopSalesSection />
      <ModulesSwitch modules={modules} />
    </>
  )
}

export async function generateMetadata({ params: { locale } }: IGlobalPageProps) {
  try {
    const layoutData = await getManufacturersPageData({ locale })
    if (!layoutData) return
    return getPageLayoutMetadata(layoutData.layout)
  } catch (error) {
    console.error("Error fetching categories:", error)
  }
}
