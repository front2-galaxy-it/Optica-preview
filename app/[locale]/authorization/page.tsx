export const dynamic = process.env.NEXT_DYNAMIC === "true" ? "force-dynamic" : "auto"
export { AuthorizationPage as default, generateMetadata } from "@/_pages/authorization"
