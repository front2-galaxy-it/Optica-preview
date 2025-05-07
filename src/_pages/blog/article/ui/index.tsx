import { unstable_setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"

import { IHomePageProps } from "./props"
import { MailingSection } from "@/widgets/mailing"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"
import { PageInfo } from "@/widgets/page-info-block"
import articleData from "@/shared/data/blog-card-list.json"
import { BlogSection } from "@/widgets/blog"
import { ArticlePageSection } from "@/widgets/article.page"

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export function ArticlePage({
  params,
}: IHomePageProps & { params: { slug: string; locale: string } }) {
  const { locale, slug } = params
  unstable_setRequestLocale(locale)

  const article = articleData.cards.find((cat) => cat.slug === slug)
  if (!article) return notFound()

  const categorySlug = slugify(article.category)
  const authorSlug = slugify(article.author)

  return (
    <>
      <Breadcrumbs
        arr={[
          { type: "parent", slug: ClientRoutes.blog.path, title: ClientRoutes.blog.name },
          {
            type: "parent",
            slug: ClientRoutes.blog_category(categorySlug),
            title: article.category,
          },
          {
            type: "current",
            slug: ClientRoutes.article(slug),
            title: article.title,
          },
        ]}
      />
      <PageInfo
        label={ClientRoutes.blog.name}
        title={article.category}
      />
      <ArticlePageSection
        activeCategorySlug={categorySlug}
        activeAuthorSlug={authorSlug}
        slug={slug}
      />
      <BlogSection />
      <MailingSection />
    </>
  )
}
