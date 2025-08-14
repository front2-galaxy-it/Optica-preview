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
  image: string | null
  title: string
  short_description: string
  notice: string
  duration: number
  price?: number
  discount?: number
  condition?: string
  isFree?: boolean
  contentBlocks?: Array<{
    title: string
    type: "text" | "image" | "list"
    value: string | string[]
    listType?: "ul" | "ol"
  }>
}
