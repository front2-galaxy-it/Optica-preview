export const dynamic = process.env.NEXT_DYNAMIC === "true" ? "force-dynamic" : "auto"
export { AuthorPage as default, generateMetadata } from "@/_pages/blog/author"
