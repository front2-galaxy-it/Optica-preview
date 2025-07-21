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
import { GallerySection } from "../gallery"

interface IModulesSwitchProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  modules: any
}

export const ModulesSwitch: React.FC<IModulesSwitchProps> = ({ modules }) => {
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
            case "gallery":
              return (
                <GallerySection
                  module={module.settings}
                  key={index}
                />
              )
          }
        })}
    </>
  )
}
