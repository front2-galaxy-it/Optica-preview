import { unstable_setRequestLocale, getTranslations } from "next-intl/server"

import { IHomePageProps } from "./props"
import { PageInfo } from "@/widgets/page-info-block"
import { TopSalesSection } from "@/widgets/top-sales"
import { ThanksSection } from "@/widgets/thanks"

export async function ThanksPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  const tCommon = await getTranslations("common")

  return (
    <>
      <PageInfo
        label={tCommon("company-name")}
        title="Дякуємо! Ваше замовлення №123456 прийнято в обробку!"
      />
      <ThanksSection />
      <TopSalesSection />
    </>
  )
}
