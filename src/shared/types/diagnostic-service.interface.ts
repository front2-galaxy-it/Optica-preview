export type DiagnosticContentType = "p" | "ul" | "li"

export interface ContentBlock {
  type: DiagnosticContentType
  content: string | string[]
}

export interface IDiagnosticServiceSectionContent {
  contentBlocks?: ContentBlock[]
}

export interface IDiagnosticService {
  slug: string
  img: string
  title: string
  description: string
  result: string
  duration: number
  price?: number
  oldPrice?: number
  condition?: string
  isFree?: boolean
  contentBlocks?: Array<{
    title: string
    type: "text" | "image" | "list"
    value: string | string[]
    listType?: "ul" | "ol"
  }>
}
