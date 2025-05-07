import { unstable_setRequestLocale } from "next-intl/server"

import { IHomePageProps } from "./props"
import { MailingSection } from "@/widgets/mailing"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"
import { PageInfo } from "@/widgets/page-info-block"
import { BlogPageSection } from "@/widgets/blog.page"

export function BlogPage({
  params,
}: IHomePageProps & { params: { slug: string; locale: string } }) {
  const { locale, slug } = params
  unstable_setRequestLocale(locale)

  return (
    <>
      <Breadcrumbs
        arr={[{ type: "parent", slug: ClientRoutes.blog.path, title: ClientRoutes.blog.name }]}
      />
      <PageInfo
        label={ClientRoutes.blog.name}
        title="Модні тенденції в оптиці"
      />
      <BlogPageSection slug={slug} />
      <MailingSection />
    </>
  )
}
