import { ClientRoutes } from "./client"

export const navData = {
  about_us: [
    {
      label: "Про нас",
      href: ClientRoutes.about.path,
    },
    {
      label: "Мережа",
      href: ClientRoutes.net.path,
    },
    {
      label: "Діагностика",
      href: ClientRoutes.diagnostic.path,
    },
    {
      label: "Відгуки",
      href: ClientRoutes.reviews.path,
    },
    {
      label: "Питання та відповіді",
      href: ClientRoutes.faq.path,
    },
    {
      label: "Контакти",
      href: ClientRoutes.contacts.path,
    },
  ],
  delivery: [
    {
      label: "Умови доставки",
      href: ClientRoutes.delivery.path,
    },
    {
      label: "Умови оплати",
      href: ClientRoutes.payment.path,
    },
  ],
  policy: {
    label: "Політика конфіденційності",
    href: ClientRoutes.policy.path,
  },
  profile: [
    {
      label: "Реєстрація",
      href: ClientRoutes.register.path,
    },
    {
      label: "Авторизація",
      href: ClientRoutes.authorization.path,
    },
  ],
}
