import { unstable_setRequestLocale } from "next-intl/server"

import { IHomePageProps } from "./props"
import { MailingSection } from "@/widgets/mailing"
import { FaqSection } from "@/widgets/faq"
import { ReviewsSection } from "@/widgets/reviews"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs, ButtonsList } from "@/shared/components"
import { NetSection } from "@/widgets/net"
import { GallerySection } from "@/widgets/gallery"
import { PageInfo } from "@/widgets/page-info-block"
import { navData } from "@/shared/routes/info-buttons-list"

export function NetPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  return (
    <>
      <Breadcrumbs arr={[{ type: "parent", slug: ClientRoutes.net, title: "Мережа" }]} />
      <PageInfo
        label="Оптика Добрих Цін"
        title="Магазини оптики у м. Одеса"
      />
      <ButtonsList items={navData.about_us} />
      <NetSection />
      <GallerySection />
      <FaqSection />
      <ReviewsSection />
      <MailingSection />
    </>
  )
}
