import { unstable_setRequestLocale, getTranslations } from "next-intl/server"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs, ButtonsList } from "@/shared/components"
import { Payment } from "@/widgets/payment"
import { PageInfo } from "@/widgets/page-info-block"
import { navData } from "@/shared/routes/info-buttons-list"
import { notFound } from "next/navigation"
import { IGlobalPageProps } from "@/shared/types"
import { fetchPageLayoutData, getPageLayoutMetadata } from "@/shared/lib"
import { ModulesSwitch } from "@/widgets/module-switch"

const getPaymentPageData = async ({ locale }: { locale: string }) => {
  return await fetchPageLayoutData({ locale, layoutName: "payment" })
}

export async function PaymentPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  const paymentPageData = await getPaymentPageData({ locale })
  if (!paymentPageData) notFound()

  const {
    layout: { modules },
  } = paymentPageData

  const tLabels = await getTranslations("page-labels")
  const tCommon = await getTranslations("common")

  return (
    <>
      <Breadcrumbs
        arr={[
          {
            type: "parent",
            slug: ClientRoutes.payment.path,
            titleKey: ClientRoutes.payment.nameKey,
          },
        ]}
      />
      <PageInfo
        label={tCommon("company-name")}
        title={tLabels("delivery")}
      />
      <ButtonsList items={navData.delivery} />
      <Payment />
      <ModulesSwitch modules={modules} />
    </>
  )
}

export async function generateMetadata({ params: { locale } }: IGlobalPageProps) {
  try {
    const layoutData = await getPaymentPageData({ locale })
    if (!layoutData) return
    return getPageLayoutMetadata(layoutData.layout)
  } catch (error) {
    console.error("Error fetching categories:", error)
  }
}
