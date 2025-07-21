import { unstable_setRequestLocale, getTranslations } from "next-intl/server"
import { notFound } from "next/navigation"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"
import { PageInfo } from "@/widgets/page-info-block"
import articleData from "@/shared/data/blog-card-list.json"
import { ArticlePageSection } from "@/widgets/article.page"
import { IGlobalPageProps } from "@/shared/types"
import { fetchPageLayoutData, getPageLayoutMetadata } from "@/shared/lib"
import { ModulesSwitch } from "@/widgets/module-switch"

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

const getArticlePageData = async ({ locale }: { locale: string }) => {
  return await fetchPageLayoutData({ locale, layoutName: "article" })
}

export async function ArticlePage({
  params,
}: IHomePageProps & { params: { slug: string; locale: string } }) {
  const { locale, slug } = params
  unstable_setRequestLocale(locale)

  const tCommon = await getTranslations("common")

  const article = articleData.cards.find((cat) => cat.slug === slug)
  if (!article) return notFound()

  const categorySlug = slugify(article.category)
  const authorSlug = slugify(article.author)

  const articlePageData = await getArticlePageData({ locale })
  if (!articlePageData) notFound()

  const {
    layout: { modules },
  } = articlePageData

  return (
    <>
      <Breadcrumbs
        arr={[
          { type: "parent", slug: ClientRoutes.blog.path, titleKey: ClientRoutes.blog.nameKey },
          {
            type: "parent",
            slug: ClientRoutes.blog_category(categorySlug),
            titleKey: article.category,
          },
          {
            type: "current",
            slug: ClientRoutes.article(slug),
            titleKey: article.title,
          },
        ]}
      />
      <PageInfo
        label={tCommon("blog")}
        title={article.category}
      />
      <ArticlePageSection
        activeCategorySlug={categorySlug}
        activeAuthorSlug={authorSlug}
        slug={slug}
      />
      <ModulesSwitch modules={modules} />
    </>
  )
}

export async function generateMetadata({ params: { locale } }: IGlobalPageProps) {
  try {
    const layoutData = await getArticlePageData({ locale })
    if (!layoutData) return
    return getPageLayoutMetadata(layoutData.layout)
  } catch (error) {
    console.error("Error fetching categories:", error)
  }
}
