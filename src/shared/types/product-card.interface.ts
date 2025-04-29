export interface IProductCardProps {
  id: string
  className?: string
  name: string
  category: string
  image_url: string
  labelTypes?: LabelType[]
  statusTypes: StatusType[]
  price: number
  oldPrice?: number
}

export type LabelType = "novelty" | "discount" | "top-sales"
export type StatusType = "available" | "unavailable" | "pre-order"
