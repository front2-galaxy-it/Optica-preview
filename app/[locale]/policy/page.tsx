export const dynamic = process.env.NEXT_DYNAMIC === "true" ? "force-dynamic" : "auto"
export { PolicyPage as default, generateMetadata } from "@/_pages/policy"
