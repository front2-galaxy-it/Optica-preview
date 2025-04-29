import { unstable_setRequestLocale } from "next-intl/server"

import { IHomePageProps } from "./props"
import { Hero } from "@/widgets/hero"
import { PurchaseSection } from "@/widgets/purchase"
import { ChooseSection } from "@/widgets/choose"
import { BrandSection } from "@/widgets/brand"
import { Marquee } from "@/widgets/marquee"
import { AboutSection } from "@/widgets/about"
import { TopSalesSection } from "@/widgets/top-sales"
import { HelpSection } from "@/widgets/help"
import { BlogSection } from "@/widgets/blog"
import { FaqSection } from "@/widgets/faq"
import { PromotionSection } from "@/widgets/promotion"
import { ReviewsSection } from "@/widgets/reviews"
import { MailingSection } from "@/widgets/mailing"

export function HomePage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  return (
    <>
      <Hero />
      <PurchaseSection />
      <ChooseSection />
      <BrandSection />
      <Marquee />
      <TopSalesSection />
      <AboutSection />
      <HelpSection />
      <BlogSection />
      <PromotionSection />
      <FaqSection />
      <ReviewsSection />
      <MailingSection />
    </>
  )
}
