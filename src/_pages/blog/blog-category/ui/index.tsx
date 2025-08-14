import { unstable_setRequestLocale, getTranslations } from "next-intl/server"
import { notFound } from "next/navigation"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"
import { PageInfo } from "@/widgets/page-info-block"
// import { BlogCategoryPage } from "@/widgets/blog-category"
import { IGlobalPageProps } from "@/shared/types"
import { fetchPageLayoutData, getPageLayoutMetadata } from "@/shared/lib"
import { ModulesSwitch } from "@/widgets/module-switch"

import { BlogService } from "@/shared/services"

const getBlogLayoutData = async ({ locale }: { locale: string }) => {
  return await fetchPageLayoutData({ locale, layoutName: "blog" })
}

const getBlogCategoryPageData = async ({ locale, slug }: { locale: string; slug: string }) => {
  const options = {
    headers: {
      "Accept-Locale": locale,
    },
  }

  try {
    const [blogCategoryRes] = await Promise.all([BlogService.getCategory(slug, options)])

    const blogCategory = blogCategoryRes.data || null

    return {
      blogCategory,
    }
  } catch (error) {
    console.error("Error fetching categories:", error)
    return null
  }
}

export async function CategoryPage({
  params,
}: IHomePageProps & { params: { slug: string; locale: string } }) {
  const { locale, slug } = params
  unstable_setRequestLocale(locale)

  const tBreadcrumbs = await getTranslations("breadcrumbs")

  const blogLayout = await getBlogLayoutData({ locale })
  const blogData = await getBlogCategoryPageData({ locale, slug })

  if (!blogLayout || !blogData) notFound()

  const {
    layout: { modules },
  } = blogLayout

  return (
    <>
      <Breadcrumbs
        arr={[
          { type: "parent", slug: ClientRoutes.blog.path, title: tBreadcrumbs("blog") },
          {
            type: "current",
            slug: ClientRoutes.blog_category(slug),
            title: blogData.blogCategory.breadcrumbs[0]?.title || "",
          },
        ]}
      />
      <PageInfo
        label={tBreadcrumbs("blog")}
        title={blogData.blogCategory.breadcrumbs[0]?.title || ""}
      />
      {/* <BlogCategoryPage
        slug={blogData.blogCategory.slug}
        list={blogData.blogCategory}
      /> */}
      <ModulesSwitch modules={modules} />
    </>
  )
}

export async function generateMetadata({ params: { locale } }: IGlobalPageProps) {
  try {
    const layoutData = await getBlogLayoutData({ locale })
    if (!layoutData) return
    return getPageLayoutMetadata(layoutData.layout)
  } catch (error) {
    console.error("Error fetching categories:", error)
  }
}
