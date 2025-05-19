import { unstable_setRequestLocale } from "next-intl/server"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"

import { PageInfo } from "@/widgets/page-info-block"
import { TopSalesSection } from "@/widgets/top-sales"
import { CheckoutSection } from "@/widgets/checkout"

export function CheckoutPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  return (
    <>
      <PageInfo
        label={ClientRoutes.checkout.name}
        title="Оформлення замовлення"
      />
      <CheckoutSection />
      <TopSalesSection />
    </>
  )
}
