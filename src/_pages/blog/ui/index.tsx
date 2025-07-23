import { unstable_setRequestLocale, getTranslations } from "next-intl/server"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"
import { PageInfo } from "@/widgets/page-info-block"
import { BlogPageSection } from "@/widgets/blog.page"
import { IGlobalPageProps } from "@/shared/types"
import { fetchPageLayoutData, getPageLayoutMetadata } from "@/shared/lib"
import { notFound } from "next/navigation"
import { ModulesSwitch } from "@/widgets/module-switch"

import { BlogService } from "@/shared/services"

const getBlogLayoutData = async ({ locale }: { locale: string }) => {
  return await fetchPageLayoutData({ locale, layoutName: "blog" })
}

const getBlogPageData = async ({ locale }: { locale: string }) => {
  const options = {
    headers: {
      "Accept-Locale": locale,
    },
  }

  try {
    const blogArticlesList = await BlogService.getArticlesList("", options)
    const blogCategoriesList = await BlogService.getCategory("", options)

    const blogCategories = blogCategoriesList.data || null
    const blogArticles = blogArticlesList.data || null
    const blogArticlesMeta = blogArticlesList.meta || null

    return {
      blogCategories,
      blogArticles,
      blogArticlesMeta,
    }
  } catch (error) {
    console.error("Error fetching categories:", error)
    return null
  }
}

export async function BlogPage({ params }: IHomePageProps) {
  const { locale } = params
  unstable_setRequestLocale(locale)

  const tLabels = await getTranslations("page-labels")
  const tCommon = await getTranslations("common")

  const blogLayout = await getBlogLayoutData({ locale })
  const blogData = await getBlogPageData({ locale })

  if (!blogLayout || !blogData) notFound()

  const {
    layout: { modules },
  } = blogLayout
  return (
    <>
      <Breadcrumbs
        arr={[
          { type: "parent", slug: ClientRoutes.blog.path, titleKey: ClientRoutes.blog.nameKey },
        ]}
      />
      <PageInfo
        label={tCommon("blog")}
        title={tLabels("blog")}
      />
      <BlogPageSection
        categoriesList={blogData.blogCategories}
        meta={blogData.blogArticlesMeta}
        articlesList={blogData.blogArticles}
      />
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
