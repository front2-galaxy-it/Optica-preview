export const dynamic = process.env.NEXT_DYNAMIC === "true" ? "force-dynamic" : "auto"
export { HomePage as default, generateMetadata } from "@/_pages/home"
