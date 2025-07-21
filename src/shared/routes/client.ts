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
  cart: {
    path: "/cart",
    name: "Кошик",
  },
  checkout: {
    path: "/checkout",
    name: "Оформлення замовлення",
  },
  thanks: {
    path: "/thanks",
    name: "Дякуємо",
  },
}

export const ClientRoutes = {
  home: {
    path: "/",
    nameKey: "home",
  },
  delivery: {
    path: "/delivery",
    nameKey: "delivery",
  },
  payment: {
    path: "/payment",
    nameKey: "payment",
  },
  about: {
    path: "/about",
    nameKey: "about",
  },
  net: {
    path: "/net",
    nameKey: "net",
  },
  diagnostic: {
    path: "/diagnostic",
    nameKey: "diagnostic",
  },
  reviews: {
    path: "/reviews",
    nameKey: "reviews",
  },
  faq: {
    path: "/faq",
    nameKey: "faq",
  },
  contacts: {
    path: "/contacts",
    nameKey: "contacts",
  },
  policy: {
    path: "/policy",
    nameKey: "privacy_policy",
  },
  terms: {
    path: "/terms",
    nameKey: "terms",
  },
  brands: {
    path: "/brands",
    nameKey: "brands",
  },
  for_military: {
    path: "/for-military",
    nameKey: "for_military",
  },
  loyalty_program: {
    path: "/loyalty-program",
    nameKey: "loyalty_program",
  },
  career: {
    path: "/career",
    nameKey: "career",
  },
  blog: {
    path: "/blog",
    nameKey: "blog",
  },
  profile: {
    path: "/profile",
    nameKey: "profile",
  },
  authorization: {
    path: "/profile/authorization",
    nameKey: "authorization",
  },
  register: {
    path: "/profile/register",
    nameKey: "register",
  },
  cart: {
    path: "/cart",
    nameKey: "cart",
  },
  checkout: {
    path: "/checkout",
    nameKey: "checkout",
  },
  thanks: {
    path: "/thanks",
    nameKey: "thanks",
  },

  /** Dynamic paths **/
  product: (slug: string, id: string) => `/catalog/${slug}/${id}`,

  product_category: (id: string) => `/catalog/${id}`,

  blog_category: (id: string) => `/blog/${id}`,

  author: (id: string) => `/blog/author/${id}`,

  article: (id: string) => `/blog/article/${id}`,
}
