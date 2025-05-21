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
import productsData from "@/shared/data/products.json"
import { ICateroriesLink, IProductCardProps, LabelType, StatusType } from "@/shared/types"
import { ProductSection } from "@/widgets/product"

const categoryDataList: ICateroriesLink[] = categoryData.categories_list
const productsDataList: IProductCardProps[] = productsData.products.map((product) => ({
  ...product,
  labelTypes: product.labelTypes as LabelType[],
  statusTypes: product.statusTypes as StatusType[],
  images:
    product.images && typeof product.images === "object" && !Array.isArray(product.images)
      ? product.images
      : { white: [], black: [] },
  colors: Array.isArray(product.colors) ? product.colors : [],
  image_url: typeof product.image_url === "string" ? product.image_url : "",
}))

export function ProductPage({
  params,
}: IHomePageProps & { params: { slug: string; locale: string; id: string } }) {
  const { locale, slug, id } = params
  unstable_setRequestLocale(locale)

  const category = categoryDataList.find((cat) => cat.categorySlug === slug)
  const product = productsDataList.find((p) => p.id.toString() === id)

  if (!category || !product) return notFound()

  return (
    <>
      <Breadcrumbs
        arr={[
          {
            type: "parent",
            slug: ClientRoutes.product_category(slug),
            title: category.label,
          },
          {
            type: "current",
            slug: ClientRoutes.product(slug, id),
            title: product.name,
          },
        ]}
      />
      <PageInfo
        label={category.label}
        title={product.name}
      />
      <ProductSection product={product} />
      <TopSalesSection />
      <ReviewsSection />
      <MailingSection />
    </>
  )
}
