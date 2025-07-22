import { unstable_setRequestLocale, getTranslations } from "next-intl/server"

import { IHomePageProps } from "./props"

import { PageInfo } from "@/widgets/page-info-block"
import { TopSalesSection } from "@/widgets/top-sales"
import { CheckoutSection } from "@/widgets/checkout"
import { IGlobalPageProps } from "@/shared/types"
import { fetchPageLayoutData, getPageLayoutMetadata } from "@/shared/lib"
import { notFound } from "next/navigation"
import { ModulesSwitch } from "@/widgets/module-switch"

const getCheckoutPageData = async ({ locale }: { locale: string }) => {
  return await fetchPageLayoutData({ locale, layoutName: "checkout" })
}

export async function CheckoutPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  const tLabels = await getTranslations("page-labels")
  const tCommon = await getTranslations("common")

  const checkoutPageData = await getCheckoutPageData({ locale })
  if (!checkoutPageData) notFound()

  const {
    layout: { modules },
  } = checkoutPageData

  return (
    <>
      <PageInfo
        label={tCommon("cart")}
        title={tLabels("checkout")}
      />
      <CheckoutSection />
      <TopSalesSection />
      <ModulesSwitch modules={modules} />
    </>
  )
}

export async function generateMetadata({ params: { locale } }: IGlobalPageProps) {
  try {
    const layoutData = await getCheckoutPageData({ locale })
    if (!layoutData) return
    return getPageLayoutMetadata(layoutData.layout)
  } catch (error) {
    console.error("Error fetching categories:", error)
  }
}
