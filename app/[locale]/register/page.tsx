export const dynamic = process.env.NEXT_DYNAMIC === "true" ? "force-dynamic" : "auto"
export { RegisterPage as default, generateMetadata } from "@/_pages/register"
