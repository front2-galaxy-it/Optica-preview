import { unstable_setRequestLocale } from "next-intl/server"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"

import { PageInfo } from "@/widgets/page-info-block"
import { AuthorizationSection } from "@/widgets/authorization"
import { IGlobalPageProps } from "@/shared/types"
import { fetchPageLayoutData, getPageLayoutMetadata } from "@/shared/lib"
import { notFound } from "next/navigation"
import { ModulesSwitch } from "@/widgets/module-switch"

const getLoginPageData = async ({ locale }: { locale: string }) => {
  return await fetchPageLayoutData({ locale, layoutName: "login" })
}

export async function AuthorizationPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  const loginPageData = await getLoginPageData({ locale })
  if (!loginPageData) notFound()

  const {
    layout: { modules },
  } = loginPageData

  return (
    <>
      <Breadcrumbs
        arr={[
          {
            type: "parent",
            slug: ClientRoutes.profile.path,
            titleKey: ClientRoutes.profile.nameKey,
          },
          {
            type: "current",
            slug: ClientRoutes.authorization.path,
            titleKey: ClientRoutes.authorization.nameKey,
          },
        ]}
      />
      <PageInfo
        label={ClientRoutes.authorization.nameKey}
        title={ClientRoutes.profile.nameKey}
      />
      <AuthorizationSection />
      <ModulesSwitch modules={modules} />
    </>
  )
}

export async function generateMetadata({ params: { locale } }: IGlobalPageProps) {
  try {
    const layoutData = await getLoginPageData({ locale })
    if (!layoutData) return
    return getPageLayoutMetadata(layoutData.layout)
  } catch (error) {
    console.error("Error fetching categories:", error)
  }
}
