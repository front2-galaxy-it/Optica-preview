export interface IProductCardProps {
  id: string
  className?: string
  name: string
  categoryName: string
  image_url: string
  price: number
  oldPrice?: number
  isBin?: boolean
  categorySlug: string
  basketButtonClass?: string
  images: ProductImages
  code: number
  labelTypes?: LabelType[]
  statusTypes: StatusType[]
  colors: IProductColor[]
  itemList: IProductDescriptionItem[]
  paymentTypes?: PaymentType[]
  description?: string
  size?: CardSize
  isLense?: boolean
}

export type PaymentType = "mono" | "privat"
export type LabelType = "novelty" | "discount" | "top-sales"
export type StatusType = "available" | "unavailable" | "pre-order"

export type CardSize = "small" | "big"
interface IProductColor {
  id: string
  hex: string
}

interface ProductImages {
  [key: string]: string[]
}

interface IProductDescriptionItem {
  itemLabel: string
  value: string
}
