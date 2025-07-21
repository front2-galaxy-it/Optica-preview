export const dynamic = process.env.NEXT_DYNAMIC === "true" ? "force-dynamic" : "auto"
export { ContactPage as default, generateMetadata } from "@/_pages/contact"
