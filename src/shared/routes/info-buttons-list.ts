import { ClientRoutes } from "./client"

export const navData = {
  about_us: [
    { labelKey: "about", href: ClientRoutes.about.path },
    { labelKey: "net", href: ClientRoutes.net.path },
    { labelKey: "diagnostic", href: ClientRoutes.diagnostic.path },
    { labelKey: "reviews", href: ClientRoutes.reviews.path },
    { labelKey: "faq", href: ClientRoutes.faq.path },
    { labelKey: "contacts", href: ClientRoutes.contacts.path },
  ],
  delivery: [
    { labelKey: "delivery_terms", href: ClientRoutes.delivery.path },
    { labelKey: "payment_terms", href: ClientRoutes.payment.path },
  ],
  policy: {
    labelKey: "privacy_policy",
    href: ClientRoutes.policy.path,
  },
  profile: [
    { labelKey: "register", href: ClientRoutes.register.path },
    { labelKey: "login", href: ClientRoutes.authorization.path },
  ],
}
