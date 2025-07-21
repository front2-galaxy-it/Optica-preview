import { unstable_setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"
import { PageInfo } from "@/widgets/page-info-block"
import { TopSalesSection } from "@/widgets/top-sales"
import categoryData from "@/shared/data/categories-list.json"
import { ICateroriesLink } from "@/shared/types"
import { CatalogSection } from "@/widgets/catalog"
import { useTranslations } from "next-intl"

const categoryDataList: ICateroriesLink[] = categoryData.categories_list

export function CategoryPage({
  params,
}: IHomePageProps & { params: { slug: string; locale: string } }) {
  const { locale, slug } = params
  unstable_setRequestLocale(locale)

  const tLabels = useTranslations("page-labels")

  const category = categoryDataList.find((cat) => cat.categorySlug === slug)

  if (!category) return notFound()
  return (
    <>
      <Breadcrumbs
        arr={[
          {
            type: "current",
            slug: ClientRoutes.product_category(slug),
            titleKey: category.label,
          },
        ]}
      />
      <PageInfo
        label={tLabels("category")}
        title={category.label}
      />
      <CatalogSection slug={slug} />
      <TopSalesSection />
    </>
  )
}
