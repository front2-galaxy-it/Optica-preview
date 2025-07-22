import { unstable_setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"
import { PageInfo } from "@/widgets/page-info-block"
import { TopSalesSection } from "@/widgets/top-sales"
import CategoryList from "@/shared/data/categories-list.json"
import productsData from "@/shared/data/products.json"
import {
  ICateroriesLink,
  IProductCardProps,
  LabelType,
  StatusType,
  PaymentType,
} from "@/shared/types"
import { ProductSection } from "@/widgets/product"
import { useTranslations } from "next-intl"

const productsDataList: IProductCardProps[] = productsData.products.map((product) => ({
  ...product,
  labelTypes: product.labelTypes as LabelType[],
  statusTypes: product.statusTypes as StatusType[],
  paymentTypes: product.paymentTypes as PaymentType[],
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
  const tCategories = useTranslations("categories_list")

  const categoryDataList: ICateroriesLink[] = CategoryList.categories_list.map((item) => ({
    ...item,
    label: tCategories(item.label),
  }))

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
            titleKey: category.label,
          },
          {
            type: "current",
            slug: ClientRoutes.product(slug, id),
            titleKey: product.name,
          },
        ]}
      />
      <PageInfo
        label={category.label}
        title={product.name}
      />
      <ProductSection product={product} />
      <TopSalesSection />
    </>
  )
}
