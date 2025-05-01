import { unstable_setRequestLocale } from "next-intl/server"

import { IHomePageProps } from "./props"
import { MailingSection } from "@/widgets/mailing"
import { ChooseSection } from "@/widgets/choose"
import { BlogSection } from "@/widgets/blog"
import { FaqSection } from "@/widgets/faq"
import { ReviewsSection } from "@/widgets/reviews"
import { AboutUsSection } from "@/widgets/about-company"
import { ClientRoutes } from "@/shared/routes"
import { Breadcrumbs, ButtonsList } from "@/shared/components"
import { TeamSection } from "@/widgets/team"
import { PageInfo } from "@/widgets/page-info-block"
import { navData } from "@/shared/routes/info-buttons-list"

export function AboutPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  return (
    <>
      <Breadcrumbs arr={[{ type: "parent", slug: ClientRoutes.about, title: "Про нас" }]} />
      <PageInfo
        label="Оптика Добрих Цін"
        title="Про нашу компанію"
      />
      <ButtonsList items={navData.about_us} />
      <AboutUsSection />
      <ChooseSection />
      <TeamSection />
      <BlogSection />
      <FaqSection />
      <ReviewsSection />
      <MailingSection />
    </>
  )
}
