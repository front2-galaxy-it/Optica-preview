import { unstable_setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"

import { IHomePageProps } from "./props"
import { MailingSection } from "@/widgets/mailing"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"
import { PageInfo } from "@/widgets/page-info-block"
import authorData from "@/shared/data/author-list.json"
import { AuthorPageSection } from "@/widgets/author.page"
import { BlogSection } from "@/widgets/blog"

export function AuthorPage({
  params,
}: IHomePageProps & { params: { slug: string; locale: string } }) {
  const { locale, slug } = params
  unstable_setRequestLocale(locale)

  const author = authorData.find((cat) => cat.slug === slug)
  if (!author) return notFound()

  return (
    <>
      <Breadcrumbs
        arr={[
          { type: "parent", slug: ClientRoutes.blog.path, title: ClientRoutes.blog.name },
          { type: "current", slug: ClientRoutes.author(slug), title: author.label },
        ]}
      />
      <PageInfo
        label={ClientRoutes.blog.name}
        title={author.label}
      />
      <AuthorPageSection slug={slug} />
      <BlogSection />
      <MailingSection />
    </>
  )
}
