import { unstable_setRequestLocale, getTranslations } from "next-intl/server"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs, ButtonsList } from "@/shared/components"
import { PageInfo } from "@/widgets/page-info-block"
import { navData } from "@/shared/routes/info-buttons-list"
// import { FaqPageSection } from "@/widgets/faq.page"
import { IGlobalPageProps } from "@/shared/types"
import { fetchPageLayoutData, getPageLayoutMetadata } from "@/shared/lib"
import { notFound } from "next/navigation"
import { ModulesSwitch } from "@/widgets/module-switch"

const getFaqPageData = async ({ locale }: { locale: string }) => {
  return await fetchPageLayoutData({ locale, layoutName: "faq" })
}

export async function FaqPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  const tLabels = await getTranslations("page-labels")
  const tCommon = await getTranslations("common")

  const faqPageData = await getFaqPageData({ locale })
  if (!faqPageData) notFound()

  const {
    layout: { modules },
  } = faqPageData

  return (
    <>
      <Breadcrumbs
        arr={[{ type: "parent", slug: ClientRoutes.faq.path, titleKey: ClientRoutes.faq.nameKey }]}
      />

      <PageInfo
        label={tCommon("company-name")}
        title={tLabels("faq")}
      />
      <ButtonsList items={navData.about_us} />
      {/* <FaqPageSection module={module} /> */}
      <ModulesSwitch modules={modules} />
    </>
  )
}

export async function generateMetadata({ params: { locale } }: IGlobalPageProps) {
  try {
    const layoutData = await getFaqPageData({ locale })
    if (!layoutData) return
    return getPageLayoutMetadata(layoutData.layout)
  } catch (error) {
    console.error("Error fetching categories:", error)
  }
}
