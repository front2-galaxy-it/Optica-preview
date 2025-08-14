import { unstable_setRequestLocale, getTranslations } from "next-intl/server"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"

import { PageInfo } from "@/widgets/page-info-block"
import { RegisterSection } from "@/widgets/register"
import { IGlobalPageProps } from "@/shared/types"
import { fetchPageLayoutData, getPageLayoutMetadata } from "@/shared/lib"
import { notFound } from "next/navigation"
import { ModulesSwitch } from "@/widgets/module-switch"

const getRegisterPageData = async ({ locale }: { locale: string }) => {
  return await fetchPageLayoutData({ locale, layoutName: "register" })
}

export async function RegisterPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  const tLabels = await getTranslations("page-labels")
  const tBreadcrumbs = await getTranslations("breadcrumbs")

  const registerPageData = await getRegisterPageData({ locale })
  if (!registerPageData) notFound()

  const {
    layout: { modules },
  } = registerPageData

  return (
    <>
      <Breadcrumbs
        arr={[
          {
            type: "current",
            slug: ClientRoutes.register.path,
            title: tBreadcrumbs("register"),
          },
        ]}
      />
      <PageInfo
        label={tLabels("register")}
        title={tLabels("personal-profile")}
      />
      <RegisterSection />
      <ModulesSwitch modules={modules} />
    </>
  )
}

export async function generateMetadata({ params: { locale } }: IGlobalPageProps) {
  try {
    const layoutData = await getRegisterPageData({ locale })
    if (!layoutData) return
    return getPageLayoutMetadata(layoutData.layout)
  } catch (error) {
    console.error("Error fetching categories:", error)
  }
}
