import { unstable_setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { IHomePageProps } from "./props"
import { MailingSection } from "@/widgets/mailing"
import { ReviewsSection } from "@/widgets/reviews"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"
import { PageInfo } from "@/widgets/page-info-block"
import { TopSalesSection } from "@/widgets/top-sales"
import categoryData from "@/shared/data/categories-list.json"
import { ICateroriesLink } from "@/shared/types"
import { CatalogSection } from "@/widgets/catalog"

const categoryDataList: ICateroriesLink[] = categoryData.categories_list

export function CategoryPage({
  params,
}: IHomePageProps & { params: { slug: string; locale: string } }) {
  const { locale, slug } = params
  unstable_setRequestLocale(locale)

  const category = categoryDataList.find((cat) => cat.categorySlug === slug)

  if (!category) return notFound()
  return (
    <>
      <Breadcrumbs
        arr={[
          {
            type: "current",
            slug: ClientRoutes.product_category(slug),
            title: category.label,
          },
        ]}
      />
      <PageInfo
        label="Категорії"
        title={category.label}
      />
      <CatalogSection slug={slug} />
      <TopSalesSection />
      <ReviewsSection />
      <MailingSection />
    </>
  )
}
