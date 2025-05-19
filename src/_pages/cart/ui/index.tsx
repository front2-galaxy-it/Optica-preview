import { unstable_setRequestLocale } from "next-intl/server"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"

import { PageInfo } from "@/widgets/page-info-block"
import { TopSalesSection } from "@/widgets/top-sales"
import { CartSection } from "@/widgets/cart"

export function CartPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  return (
    <>
      <Breadcrumbs
        arr={[{ type: "current", slug: ClientRoutes.cart.path, title: ClientRoutes.cart.name }]}
      />
      <PageInfo
        label={ClientRoutes.cart.name}
        title="Товари у кошику"
      />
      <CartSection />
      <TopSalesSection />
    </>
  )
}
