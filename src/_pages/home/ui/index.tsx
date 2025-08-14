import { unstable_setRequestLocale } from "next-intl/server"

import { IHomePageProps } from "./props"
import { Hero } from "@/widgets/hero"
import { PurchaseSection } from "@/widgets/purchase"
import { TopSalesSection } from "@/widgets/top-sales"
import { PromotionSection } from "@/widgets/promotion"
import { IGlobalPageProps } from "@/shared/types"
import { fetchPageLayoutData, getPageLayoutMetadata } from "@/shared/lib"
import { notFound } from "next/navigation"
import { ModulesSwitch } from "@/widgets/module-switch"

const getHomePageData = async ({ locale }: { locale: string }) => {
  return await fetchPageLayoutData({ locale, layoutName: "home" })
}

export async function HomePage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  const homePageData = await getHomePageData({ locale })
  if (!homePageData) notFound()

  const {
    layout: { modules },
  } = homePageData

  return (
    <>
      <Hero />
      <PurchaseSection />
      <TopSalesSection />
      <PromotionSection />
      <ModulesSwitch modules={modules} />
    </>
  )
}

export async function generateMetadata({ params: { locale } }: IGlobalPageProps) {
  try {
    const layoutData = await getHomePageData({ locale })
    if (!layoutData) return
    return getPageLayoutMetadata(layoutData.layout)
  } catch (error) {
    console.error("Error fetching categories:", error)
  }
}
