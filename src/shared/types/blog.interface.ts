export interface ICateroriesLink {
  categorySlug: string
  label: string
  href: string
  specialColorGreen?: boolean
  specialColorRed?: boolean
}

export interface IBlogCateroriesLink {
  label: string
  slug: string
}

export interface IBlogAuthorLink {
  label: string
  position?: string
  slug: string
  image?: string
}
