export const dynamic = process.env.NEXT_DYNAMIC === "true" ? "force-dynamic" : "auto"
export { ChangePasswordPage as default, generateMetadata } from "@/_pages/reset-password"
