import { unstable_setRequestLocale, getTranslations } from "next-intl/server"

import { IHomePageProps } from "./props"

import { PageInfo } from "@/widgets/page-info-block"
import { TopSalesSection } from "@/widgets/top-sales"
import { CheckoutSection } from "@/widgets/checkout"

export async function CheckoutPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  const tLabels = await getTranslations("page-labels")
  const tCommon = await getTranslations("common")

  return (
    <>
      <PageInfo
        label={tCommon("cart")}
        title={tLabels("checkout")}
      />
      <CheckoutSection />
      <TopSalesSection />
    </>
  )
}
