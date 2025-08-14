import { unstable_setRequestLocale, getTranslations } from "next-intl/server"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs, ButtonsList } from "@/shared/components"
import { PageInfo } from "@/widgets/page-info-block"
import { navData } from "@/shared/routes/info-buttons-list"
import { Reviews } from "@/widgets/reviews.page"
import { IGlobalPageProps } from "@/shared/types"
import { fetchPageLayoutData, getPageLayoutMetadata } from "@/shared/lib"
import { notFound } from "next/navigation"
import { ModulesSwitch } from "@/widgets/module-switch"
import { ReviewsService } from "@/shared/services/reviews.service"

const getReviewsLayoutData = async ({ locale }: { locale: string }) => {
  return await fetchPageLayoutData({ locale, layoutName: "reviews" })
}

const getReviewsPageData = async ({ locale }: { locale: string }) => {
  const options = {
    headers: {
      "Accept-Locale": locale,
    },
  }

  try {
    return await ReviewsService.getData(options)
  } catch (error) {
    console.error("Error fetching diagnostic data:", error)
    return null
  }
}

export async function ReviewsPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  const tLabels = await getTranslations("page-labels")
  const tCommon = await getTranslations("common")
  const tBreadcrumbs = await getTranslations("breadcrumbs")

  const [reviewData, reviewLayout] = await Promise.all([
    getReviewsPageData({ locale }),
    getReviewsLayoutData({ locale }),
  ])
  if (!reviewData || !reviewLayout) {
    notFound()
  }

  const {
    layout: { modules },
  } = reviewLayout

  return (
    <>
      <Breadcrumbs
        arr={[
          {
            type: "parent",
            slug: ClientRoutes.reviews.path,
            title: tBreadcrumbs("reviews"),
          },
        ]}
      />
      <PageInfo
        label={tCommon("company-name")}
        title={tLabels("reviews")}
      />
      <ButtonsList items={navData.about_us} />
      <Reviews reviews={reviewData} />
      <ModulesSwitch modules={modules} />
    </>
  )
}

export async function generateMetadata({ params: { locale } }: IGlobalPageProps) {
  try {
    const layoutData = await getReviewsLayoutData({ locale })
    if (!layoutData) return
    return getPageLayoutMetadata(layoutData.layout)
  } catch (error) {
    console.error("Error fetching categories:", error)
  }
}
