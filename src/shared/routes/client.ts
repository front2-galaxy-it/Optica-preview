export const DevRoutes = {
  home: {
    path: "/",
    name: "Головна",
  },
  delivery: {
    path: "/delivery",
    name: "Доставка",
  },
  payment: {
    path: "/payment",
    name: "Оплата",
  },
  about: {
    path: "/about",
    name: "Про нас",
  },
  net: {
    path: "/net",
    name: "Мережа",
  },
  diagnostic: {
    path: "/diagnostic",
    name: "Діагностика",
  },
  reviews: {
    path: "/reviews",
    name: "Відгуки",
  },
  faq: {
    path: "/faq",
    name: "Питання та відповіді",
  },
  contacts: {
    path: "/contacts",
    name: "Контакти",
  },
  policy: {
    path: "/policy",
    name: "Політика конфіденційності",
  },
  terms: {
    path: "/terms",
    name: "Правила використання сайту",
  },
  brands: {
    path: "/brands",
    name: "Виробники нашої продукції",
  },
  for_military: {
    path: "/for-military",
    name: "Пропозиції для військових",
  },
  loyalty_program: {
    path: "/loyalty-program",
    name: "Програма лояльності",
  },
  career: {
    path: "/career",
    name: "Кар’єра",
  },
  blog: {
    path: "/blog",
    name: "Блог",
  },
  profile: {
    path: "/profile",
    name: "Особистий профіль",
  },
}

export const ClientRoutes = {
  home: {
    path: "/",
    name: "Головна",
  },
  delivery: {
    path: "/delivery",
    name: "Доставка",
  },
  payment: {
    path: "/payment",
    name: "Оплата",
  },
  about: {
    path: "/about",
    name: "Про нас",
  },
  net: {
    path: "/net",
    name: "Мережа",
  },
  diagnostic: {
    path: "/diagnostic",
    name: "Діагностика",
  },
  reviews: {
    path: "/reviews",
    name: "Відгуки",
  },
  faq: {
    path: "/faq",
    name: "Питання та відповіді",
  },
  contacts: {
    path: "/contacts",
    name: "Контакти",
  },
  policy: {
    path: "/policy",
    name: "Політика конфіденційності",
  },
  terms: {
    path: "/terms",
    name: "Правила використання сайту",
  },
  brands: {
    path: "/brands",
    name: "Виробники нашої продукції",
  },
  for_military: {
    path: "/for-military",
    name: "Пропозиції для військових",
  },
  loyalty_program: {
    path: "/loyalty-program",
    name: "Програма лояльності",
  },
  career: {
    path: "/career",
    name: "Кар’єра",
  },
  blog: {
    path: "/blog",
    name: "Блог",
  },
  profile: {
    path: "/profile",
    name: "Особистий профіль",
  },
  authorization: {
    path: "/profile/authorization",
    name: "Авторизація",
  },
  register: {
    path: "/profile/register",
    name: "Реєстрація",
  },

  /** Get  the path to a specific task route.**/

  product_category: (id: string) => {
    return `/catalog/${id}`
  },
  blog_category: (id: string) => {
    return `/blog/${id}`
  },
  author: (id: string) => {
    return `/blog/author/${id}`
  },
  article: (id: string) => {
    return `/blog/article/${id}`
  },
}
