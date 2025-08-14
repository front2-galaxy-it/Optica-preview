"use client"
import { DetailedHTMLProps, HtmlHTMLAttributes } from "react"
import { BlogSection } from "../blog"
import { DeliveryBlock } from "../delivery-block"
import { FaqSection } from "../faq"
import { ReviewsSection } from "../reviews"
import { MailingSection } from "../mailing"
import { SelfDeliverySection } from "../selfdelivery"
import { FormSection } from "../contact-form"
import { PaymentBlock } from "../payment-block"
import { TeamSection } from "../team"
import { ChooseSection } from "../choose"
import { BrandSection } from "../brand"
// import { Marquee } from "../marquee"
import { AboutSection } from "../about"
import { HelpSection } from "../help"
// import { LoyaltySection } from "../loyalty-program"
import { AboutUsSection } from "../about-company"
import { TextImageSection } from "../text-image"
interface IModulesSwitchProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  modules: any
  pageType?: string
}

export const ModulesSwitch: React.FC<IModulesSwitchProps> = ({ modules, pageType }) => {
  return (
    <>
      {modules &&
        modules.map((module: any, index: number) => {
          switch (module.template) {
            case "delivery":
              return (
                <DeliveryBlock
                  module={module.settings}
                  key={index}
                />
              )
            case "blog":
              return (
                <BlogSection
                  module={module.settings}
                  key={index}
                />
              )
            case "faqs":
              return (
                <FaqSection
                  module={module.settings}
                  key={index}
                />
              )
            case "reviews":
              return (
                <ReviewsSection
                  module={module.settings}
                  key={index}
                />
              )
            case "subscribe":
              return (
                <MailingSection
                  module={module.settings}
                  key={index}
                />
              )
            case "network":
              return (
                <SelfDeliverySection
                  module={module.settings}
                  key={index}
                />
              )
            case "contact":
              return (
                <FormSection
                  module={module.settings}
                  key={index}
                />
              )
            case "payment":
              return (
                <PaymentBlock
                  module={module.settings}
                  key={index}
                />
              )
            case "team":
              return (
                <TeamSection
                  module={module.settings}
                  key={index}
                />
              )
            case "masonry":
              return (
                <ChooseSection
                  module={module.settings}
                  key={index}
                />
              )
            case "mini_banner":
              return (
                <BrandSection
                  module={module.settings}
                  key={index}
                />
              )
            case "full_width_banner":
              return (
                <AboutSection
                  module={module.settings}
                  key={index}
                />
              )
            case "couple_section":
              return (
                <HelpSection
                  module={module.settings}
                  key={index}
                />
              )
            case "about_text_image":
              return (
                <AboutUsSection
                  module={module.settings}
                  key={index}
                />
              )
            case "text_image":
              return (
                <TextImageSection
                  module={module.settings}
                  key={index}
                  className={pageType === "career" ? "career-special" : ""}
                />
              )

            // case "manufacturer_marquee":
            //   return (
            //     <Marquee
            //       module={module.settings}
            //       key={index}
            //     />
            //   )

            // case "manufacturer_grid":
            //   return (
            //     <BrandGrid
            //       module={module.settings}
            //       key={index}
            //     />
            //   )

            // case "manufacturer_marquee":
            //   return (
            //     <Marquee
            //       module={module.settings}
            //       key={index}
            //     />
            //   )
          }
        })}
    </>
  )
}
