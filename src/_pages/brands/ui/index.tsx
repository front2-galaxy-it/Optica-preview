import { unstable_setRequestLocale } from "next-intl/server"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"
import { PageInfo } from "@/widgets/page-info-block"
import { BrandSection } from "@/widgets/brand"
import { Marquee } from "@/widgets/marquee"
import { TopSalesSection } from "@/widgets/top-sales"
import { BrandGrid } from "@/widgets/brand-grid"

export function BrandsPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  return (
    <>
      <Breadcrumbs
        arr={[{ type: "parent", slug: ClientRoutes.brands.path, title: ClientRoutes.brands.name }]}
      />
      <PageInfo
        label="Оптика Добрих Цін"
        title={ClientRoutes.brands.name}
      />
      <BrandSection className="brand_page" />
      <Marquee />
      <BrandGrid />
      <TopSalesSection />
    </>
  )
}
