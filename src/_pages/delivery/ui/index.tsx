import { unstable_setRequestLocale, getTranslations } from "next-intl/server"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs, ButtonsList } from "@/shared/components"
import { Delivery } from "@/widgets/delivery"
import { PageInfo } from "@/widgets/page-info-block"
import { navData } from "@/shared/routes/info-buttons-list"
import { ModulesSwitch } from "@/widgets/module-switch"
import { IGlobalPageProps } from "@/shared/types"
import { fetchPageLayoutData, getPageLayoutMetadata } from "@/shared/lib"
import { notFound } from "next/navigation"

const getDeliveryPageData = async ({ locale }: { locale: string }) => {
  return await fetchPageLayoutData({ locale, layoutName: "delivery" })
}

export async function DeliveryPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  const tLabels = await getTranslations("page-labels")
  const tCommon = await getTranslations("common")

  const deliveryPageData = await getDeliveryPageData({ locale })
  if (!deliveryPageData) notFound()

  const {
    layout: { modules },
  } = deliveryPageData

  return (
    <>
      <Breadcrumbs
        arr={[
          {
            type: "parent",
            slug: ClientRoutes.delivery.path,
            titleKey: ClientRoutes.delivery.nameKey,
          },
        ]}
      />
      <PageInfo
        label={tCommon("company-name")}
        title={tLabels("delivery")}
      />
      <ButtonsList items={navData.delivery} />
      <Delivery />
      <ModulesSwitch modules={modules} />
    </>
  )
}

export async function generateMetadata({ params: { locale } }: IGlobalPageProps) {
  try {
    const layoutData = await getDeliveryPageData({ locale })
    if (!layoutData) return
    return getPageLayoutMetadata(layoutData.layout)
  } catch (error) {
    console.error("Error fetching categories:", error)
  }
}
