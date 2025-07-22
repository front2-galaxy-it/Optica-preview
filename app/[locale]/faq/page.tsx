export const dynamic = process.env.NEXT_DYNAMIC === "true" ? "force-dynamic" : "auto"
export { FaqPage as default, generateMetadata } from "@/_pages/faq"
