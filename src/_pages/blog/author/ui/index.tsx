import { unstable_setRequestLocale, getTranslations } from "next-intl/server"
import { notFound } from "next/navigation"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"
import { PageInfo } from "@/widgets/page-info-block"
import authorData from "@/shared/data/author-list.json"
import { AuthorPageSection } from "@/widgets/author.page"
import { IGlobalPageProps } from "@/shared/types"
import { fetchPageLayoutData, getPageLayoutMetadata } from "@/shared/lib"
import { ModulesSwitch } from "@/widgets/module-switch"

const getAuthorPageData = async ({ locale }: { locale: string }) => {
  return await fetchPageLayoutData({ locale, layoutName: "author" })
}

export async function AuthorPage({
  params,
}: IHomePageProps & { params: { slug: string; locale: string } }) {
  const { locale, slug } = params
  unstable_setRequestLocale(locale)

  const tCommon = await getTranslations("common")
  const tBreadcrumbs = await getTranslations("breadcrumbs")

  const author = authorData.find((cat) => cat.slug === slug)
  if (!author) return notFound()

  const authorPageData = await getAuthorPageData({ locale })
  if (!authorPageData) notFound()

  const {
    layout: { modules },
  } = authorPageData

  return (
    <>
      <Breadcrumbs
        arr={[
          { type: "parent", slug: ClientRoutes.blog.path, title: tBreadcrumbs("blog") },
          { type: "current", slug: ClientRoutes.author(slug), title: author.label },
        ]}
      />
      <PageInfo
        label={tCommon("blog")}
        title={author.label}
      />
      <AuthorPageSection slug={slug} />
      <ModulesSwitch modules={modules} />
    </>
  )
}

export async function generateMetadata({ params: { locale } }: IGlobalPageProps) {
  try {
    const layoutData = await getAuthorPageData({ locale })
    if (!layoutData) return
    return getPageLayoutMetadata(layoutData.layout)
  } catch (error) {
    console.error("Error fetching categories:", error)
  }
}
