import { unstable_setRequestLocale, getTranslations } from "next-intl/server"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"

import { PageInfo } from "@/widgets/page-info-block"
import { TopSalesSection } from "@/widgets/top-sales"
import { CartSection } from "@/widgets/cart"
import { IGlobalPageProps } from "@/shared/types"
import { fetchPageLayoutData, getPageLayoutMetadata } from "@/shared/lib"
import { notFound } from "next/navigation"
import { ModulesSwitch } from "@/widgets/module-switch"

const getCartPageData = async ({ locale }: { locale: string }) => {
  return await fetchPageLayoutData({ locale, layoutName: "cart" })
}

export async function CartPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  const tLabels = await getTranslations("page-labels")
  const tCommon = await getTranslations("common")
  const tBreadcrumbs = await getTranslations("breadcrumbs")

  const cartPageData = await getCartPageData({ locale })
  if (!cartPageData) notFound()

  const {
    layout: { modules },
  } = cartPageData

  return (
    <>
      <Breadcrumbs
        arr={[{ type: "current", slug: ClientRoutes.cart.path, title: tBreadcrumbs("cart") }]}
      />
      <PageInfo
        label={tCommon("cart")}
        title={tLabels("cart")}
      />
      <CartSection />
      <TopSalesSection />
      <ModulesSwitch modules={modules} />
    </>
  )
}

export async function generateMetadata({ params: { locale } }: IGlobalPageProps) {
  try {
    const layoutData = await getCartPageData({ locale })
    if (!layoutData) return
    return getPageLayoutMetadata(layoutData.layout)
  } catch (error) {
    console.error("Error fetching categories:", error)
  }
}
