export const dynamic = process.env.NEXT_DYNAMIC === "true" ? "force-dynamic" : "auto"
export { ArticlePage as default, generateMetadata } from "@/_pages/blog/article"
