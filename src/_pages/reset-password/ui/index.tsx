import { unstable_setRequestLocale, getTranslations } from "next-intl/server"

import { IHomePageProps } from "./props"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs } from "@/shared/components"

import { PageInfo } from "@/widgets/page-info-block"
import { notFound } from "next/navigation"
import { ModulesSwitch } from "@/widgets/module-switch"
import { IGlobalPageProps } from "@/shared/types"
import { fetchPageLayoutData, getPageLayoutMetadata } from "@/shared/lib"
import { ResetPasswordSection } from "@/widgets/reset-password-section"

const getResetPasswordPageData = async ({ locale }: { locale: string }) => {
  return await fetchPageLayoutData({ locale, layoutName: "resetpassword" })
}

export async function ChangePasswordPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  const tLabels = await getTranslations("page-labels")

  const resetPasswordPageData = await getResetPasswordPageData({ locale })
  if (!resetPasswordPageData) notFound()

  const {
    layout: { modules },
  } = resetPasswordPageData

  return (
    <>
      <Breadcrumbs
        arr={[
          {
            type: "parent",
            slug: ClientRoutes.reset_password.path,
            titleKey: ClientRoutes.reset_password.nameKey,
          },
        ]}
      />
      <PageInfo
        label={tLabels("reset_password")}
        title={tLabels("personal-profile")}
      />
      <ResetPasswordSection />
      <ModulesSwitch modules={modules} />
    </>
  )
}

export async function generateMetadata({ params: { locale } }: IGlobalPageProps) {
  try {
    const layoutData = await getResetPasswordPageData({ locale })
    if (!layoutData) return
    return getPageLayoutMetadata(layoutData.layout)
  } catch (error) {
    console.error("Error fetching categories:", error)
  }
}
