import { ClientRoutes } from "./client"

export const navData = {
  about_us: [
    {
      label: "Про нас",
      href: ClientRoutes.about,
    },
    {
      label: "Мережа",
      href: ClientRoutes.net,
    },
    {
      label: "Діагностика",
      href: ClientRoutes.diagnostic,
    },
    {
      label: "Відгуки",
      href: ClientRoutes.reviews,
    },
    {
      label: "Питання та відповіді",
      href: ClientRoutes.faq,
    },
    {
      label: "Контакти",
      href: ClientRoutes.contacts,
    },
  ],
  delivery: [
    {
      label: "Умови доставки",
      href: ClientRoutes.delivery,
    },
    {
      label: "Умови оплати",
      href: ClientRoutes.payment,
    },
  ],
}
