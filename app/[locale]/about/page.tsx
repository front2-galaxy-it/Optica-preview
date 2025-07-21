export const dynamic = process.env.NEXT_DYNAMIC === "true" ? "force-dynamic" : "auto"
export { AboutPage as default, generateMetadata } from "@/_pages/about"
