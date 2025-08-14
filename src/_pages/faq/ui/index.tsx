import { unstable_setRequestLocale, getTranslations } from "next-intl/server"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs, ButtonsList } from "@/shared/components"
import { PageInfo } from "@/widgets/page-info-block"
import { navData } from "@/shared/routes/info-buttons-list"
import { FaqPageSection } from "@/widgets/faq.page"
import { IGlobalPageProps } from "@/shared/types"
import { fetchPageLayoutData, getPageLayoutMetadata } from "@/shared/lib"
import { notFound } from "next/navigation"
import { ModulesSwitch } from "@/widgets/module-switch"
import { FaqService } from "@/shared/services/faq.service"

const getFaqLayoutData = async ({ locale }: { locale: string }) => {
  return await fetchPageLayoutData({ locale, layoutName: "faq" })
}

const getFaqPageData = async ({ locale }: { locale: string }) => {
  const options = {
    headers: {
      "Accept-Locale": locale,
    },
  }

  try {
    return await FaqService.getData(options)
  } catch (error) {
    console.error("Error fetching diagnostic data:", error)
    return null
  }
}

export async function FaqPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  const tLabels = await getTranslations("page-labels")
  const tCommon = await getTranslations("common")
  const tBreadcrumbs = await getTranslations("breadcrumbs")

  const [faqData, faqLayout] = await Promise.all([
    getFaqPageData({ locale }),
    getFaqLayoutData({ locale }),
  ])
  if (!faqData || !faqLayout) {
    notFound()
  }
  const faqDataList = faqData.data

  const faqPageData = await getFaqLayoutData({ locale })
  if (!faqPageData) notFound()

  const {
    layout: { modules },
  } = faqPageData

  return (
    <>
      <Breadcrumbs
        arr={[{ type: "parent", slug: ClientRoutes.faq.path, title: tBreadcrumbs("faq") }]}
      />

      <PageInfo
        label={tCommon("company-name")}
        title={tLabels("faq")}
      />
      <ButtonsList items={navData.about_us} />
      <FaqPageSection faqList={faqDataList} />
      <ModulesSwitch modules={modules} />
    </>
  )
}

export async function generateMetadata({ params: { locale } }: IGlobalPageProps) {
  try {
    const layoutData = await getFaqLayoutData({ locale })
    if (!layoutData) return
    return getPageLayoutMetadata(layoutData.layout)
  } catch (error) {
    console.error("Error fetching categories:", error)
  }
}
