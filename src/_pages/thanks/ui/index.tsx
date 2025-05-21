import { unstable_setRequestLocale } from "next-intl/server"

import { IHomePageProps } from "./props"
import { PageInfo } from "@/widgets/page-info-block"
import { TopSalesSection } from "@/widgets/top-sales"
import { ThanksSection } from "@/widgets/thanks"

export function ThanksPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  return (
    <>
      <PageInfo
        label="Оптика Добрих Цін"
        title="Дякуємо! Ваше замовлення №123456 прийнято в обробку!"
      />
      <ThanksSection />
      <TopSalesSection />
    </>
  )
}
