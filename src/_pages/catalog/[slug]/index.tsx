import { unstable_setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"
import { PageInfo } from "@/widgets/page-info-block"
import { TopSalesSection } from "@/widgets/top-sales"
import CategoryList from "@/shared/data/categories-list.json"
import { ICateroriesLink } from "@/shared/types"
import { CatalogSection } from "@/widgets/catalog"
import { useTranslations } from "next-intl"

export function CategoryPage({
  params,
}: IHomePageProps & { params: { slug: string; locale: string } }) {
  const { locale, slug } = params
  unstable_setRequestLocale(locale)
  const tLabels = useTranslations("page-labels")
  const tCommon = useTranslations("common")
  const tCategories = useTranslations("categories_list")

  const categoryDataList: ICateroriesLink[] = CategoryList.categories_list.map((item) => ({
    ...item,
    label: tCategories(item.label),
  }))

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
        label={tCommon("company-name")}
        title={tLabels("catalog")}
      />
      <CatalogSection slug={slug} />
      <TopSalesSection />
    </>
  )
}
