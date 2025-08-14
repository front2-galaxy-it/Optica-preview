import { unstable_setRequestLocale, getTranslations } from "next-intl/server"
import { notFound } from "next/navigation"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"
import { PageInfo } from "@/widgets/page-info-block"
import { ArticlePageSection } from "@/widgets/article.page"
import { IGlobalPageProps } from "@/shared/types"
import { fetchPageLayoutData, getPageLayoutMetadata } from "@/shared/lib"
import { ModulesSwitch } from "@/widgets/module-switch"

import { BlogService } from "@/shared/services"

const getBlogArticlePageData = async ({ locale, slug }: { locale: string; slug: string }) => {
  const options = {
    headers: {
      "Accept-Locale": locale,
    },
  }

  try {
    const blogArticle = await BlogService.getArticle(slug, options)
    const blogCategoriesList = await BlogService.getCategory("", options)

    const blogArticleData = blogArticle.data
    const blogCategoriesData = blogCategoriesList.data
    return { blogArticleData, blogCategoriesData }
  } catch (error) {
    console.error("Error fetching categories:", error)
    return null
  }
}

const getArticleLayoutData = async ({ locale }: { locale: string }) => {
  return await fetchPageLayoutData({ locale, layoutName: "article" })
}

export async function ArticlePage({
  params,
}: IHomePageProps & { params: { slug: string; locale: string } }) {
  const { locale, slug } = params
  unstable_setRequestLocale(locale)

  const tBreadcrumbs = await getTranslations("breadcrumbs")
  const tCommon = await getTranslations("common")

  const articlePageData = await getArticleLayoutData({ locale })
  const blogArticle = await getBlogArticlePageData({ locale, slug })
  if (!articlePageData || !blogArticle) notFound()

  const {
    layout: { modules },
  } = articlePageData

  return (
    <>
      <Breadcrumbs
        arr={[
          { type: "parent", slug: ClientRoutes.blog.path, title: tBreadcrumbs("blog") },
          {
            type: "parent",
            slug: ClientRoutes.blog_category(slug),
            title: slug,
          },
          {
            type: "current",
            slug: ClientRoutes.article(slug),
            title: blogArticle.blogArticleData.title,
          },
        ]}
      />
      <PageInfo
        label={tCommon("blog")}
        title={blogArticle.blogArticleData.slug}
      />
      <ArticlePageSection
        blogArticleData={blogArticle.blogArticleData}
        categoriesList={blogArticle.blogCategoriesData}
      />
      <ModulesSwitch modules={modules} />
    </>
  )
}

export async function generateMetadata({ params: { locale } }: IGlobalPageProps) {
  try {
    const layoutData = await getArticleLayoutData({ locale })
    if (!layoutData) return
    return getPageLayoutMetadata(layoutData.layout)
  } catch (error) {
    console.error("Error fetching categories:", error)
  }
}
