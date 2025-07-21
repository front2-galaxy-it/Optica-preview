import { unstable_setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"
import { PageInfo } from "@/widgets/page-info-block"
import { BlogCategoryPage } from "@/widgets/blog-category"
import categoryData from "@/shared/data/blog-categories-list.json"

export function CategoryPage({
  params,
}: IHomePageProps & { params: { slug: string; locale: string } }) {
  const { locale, slug } = params
  unstable_setRequestLocale(locale)

  const category = categoryData.find((cat) => cat.slug === slug)
  if (!category) return notFound()

  return (
    <>
      <Breadcrumbs
        arr={[
          { type: "parent", slug: ClientRoutes.blog.path, titleKey: ClientRoutes.blog.nameKey },
          { type: "current", slug: ClientRoutes.blog_category(slug), titleKey: category.label },
        ]}
      />
      <PageInfo
        label={ClientRoutes.blog.nameKey}
        title={category.label}
      />
      <BlogCategoryPage slug={slug} />
    </>
  )
}
