export const dynamic = process.env.NEXT_DYNAMIC === "true" ? "force-dynamic" : "auto"
export { BrandsPage as default, generateMetadata } from "@/_pages/brands"
