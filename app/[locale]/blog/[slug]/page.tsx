export const dynamic = process.env.NEXT_DYNAMIC === "true" ? "force-dynamic" : "auto"
export { CategoryPage as default, generateMetadata } from "@/_pages/blog/blog-category"
