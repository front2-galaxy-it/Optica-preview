export interface IProductCardProps {
  id: string
  className?: string
  name: string
  categoryName: string
  image_url: string
  labelTypes?: LabelType[]
  statusTypes: StatusType[]
  price: number
  oldPrice?: number
  isBin?: boolean
  categorySlug: string
  basketButtonClass?: string
}

export type LabelType = "novelty" | "discount" | "top-sales"
export type StatusType = "available" | "unavailable" | "pre-order"
