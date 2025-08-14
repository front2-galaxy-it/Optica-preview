import { unstable_setRequestLocale, getTranslations } from "next-intl/server"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"
import { PageInfo } from "@/widgets/page-info-block"
import { CareerSection } from "@/widgets/carrer"
import positionList from "@/shared/data/positions-list.json"
import { ICareerSectionProps, IGlobalPageProps } from "@/shared/types"
import { fetchPageLayoutData, getPageLayoutMetadata } from "@/shared/lib"
import { notFound } from "next/navigation"
import { ModulesSwitch } from "@/widgets/module-switch"

const getCareerPageData = async ({ locale }: { locale: string }) => {
  return await fetchPageLayoutData({ locale, layoutName: "careers" })
}

const positionListData: ICareerSectionProps[] = positionList

export async function CareerPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  const tBreadcrumbs = await getTranslations("breadcrumbs")

  const careersPageData = await getCareerPageData({ locale })
  if (!careersPageData) notFound()

  const {
    layout: { modules },
  } = careersPageData

  return (
    <>
      <Breadcrumbs
        arr={[{ type: "parent", slug: ClientRoutes.career.path, title: tBreadcrumbs("career") }]}
      />
      {careersPageData.layout.title && careersPageData.layout.description ? (
        <PageInfo
          label={careersPageData.layout.title}
          title={careersPageData.layout.description}
        />
      ) : null}
      <CareerSection careerList={positionListData} />
      <ModulesSwitch
        modules={modules}
        pageType="career"
      />
    </>
  )
}

export async function generateMetadata({ params: { locale } }: IGlobalPageProps) {
  try {
    const layoutData = await getCareerPageData({ locale })
    if (!layoutData) return
    return getPageLayoutMetadata(layoutData.layout)
  } catch (error) {
    console.error("Error fetching categories:", error)
  }
}
