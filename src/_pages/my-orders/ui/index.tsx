import { unstable_setRequestLocale, getTranslations } from "next-intl/server"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"

import { PageInfo } from "@/widgets/page-info-block"
import { notFound } from "next/navigation"
import { ModulesSwitch } from "@/widgets/module-switch"
import { IGlobalPageProps } from "@/shared/types"
import { fetchPageLayoutData, getPageLayoutMetadata } from "@/shared/lib"
import { OrdersSection } from "@/widgets/my-orders-section"

const getUserOrdersPageData = async ({ locale }: { locale: string }) => {
  return await fetchPageLayoutData({ locale, layoutName: "userorders" })
}

export async function MyOrdersDataPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  const tLabels = await getTranslations("page-labels")
  const tBreadcrumbs = await getTranslations("breadcrumbs")

  const userOrdersPageData = await getUserOrdersPageData({ locale })
  if (!userOrdersPageData) notFound()

  const {
    layout: { modules },
  } = userOrdersPageData

  return (
    <>
      <Breadcrumbs
        arr={[
          {
            type: "parent",
            slug: ClientRoutes.user_orders.path,
            title: tBreadcrumbs("user_orders"),
          },
        ]}
      />
      <PageInfo
        label={tLabels("user_orders")}
        title={tLabels("personal-profile")}
      />
      <OrdersSection />
      <ModulesSwitch modules={modules} />
    </>
  )
}

export async function generateMetadata({ params: { locale } }: IGlobalPageProps) {
  try {
    const layoutData = await getUserOrdersPageData({ locale })
    if (!layoutData) return
    return getPageLayoutMetadata(layoutData.layout)
  } catch (error) {
    console.error("Error fetching categories:", error)
  }
}
