export const dynamic = process.env.NEXT_DYNAMIC === "true" ? "force-dynamic" : "auto"
export { CareerPage as default, generateMetadata } from "@/_pages/career"
