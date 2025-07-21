export const dynamic = process.env.NEXT_DYNAMIC === "true" ? "force-dynamic" : "auto"
export { TermsPage as default, generateMetadata } from "@/_pages/terms"
