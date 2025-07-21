export const dynamic = process.env.NEXT_DYNAMIC === "true" ? "force-dynamic" : "auto"
export { CartPage as default, generateMetadata } from "@/_pages/cart"
