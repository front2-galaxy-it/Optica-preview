import { unstable_setRequestLocale } from "next-intl/server"

import { IHomePageProps } from "./props"
import { ChooseSection } from "@/widgets/choose"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"
import { TeamSection } from "@/widgets/team"
import { PageInfo } from "@/widgets/page-info-block"
import { CareerSection } from "@/widgets/carrer"
import positionList from "@/shared/data/positions-list.json"
import { ICareerSectionProps } from "@/shared/types"

const positionListData: ICareerSectionProps[] = positionList

export function CareerPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  return (
    <>
      <Breadcrumbs
        arr={[{ type: "parent", slug: ClientRoutes.career.path, title: ClientRoutes.career.name }]}
      />
      <PageInfo
        label="Кар’єра"
        title="Стань частиною нашої команди"
      />
      <CareerSection careerList={positionListData} />
      <ChooseSection />
      <TeamSection />
    </>
  )
}
