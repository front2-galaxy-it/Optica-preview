export const dynamic = process.env.NEXT_DYNAMIC === "true" ? "force-dynamic" : "auto"
export { LoyaltyPage as default, generateMetadata } from "@/_pages/loyalty-program"
