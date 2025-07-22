export const dynamic = process.env.NEXT_DYNAMIC === "true" ? "force-dynamic" : "auto"
export { UserBonusesDataPage as default, generateMetadata } from "@/_pages/user-bonuses"
