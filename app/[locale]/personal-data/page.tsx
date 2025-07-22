export const dynamic = process.env.NEXT_DYNAMIC === "true" ? "force-dynamic" : "auto"
export { PersonalDataPage as default, generateMetadata } from "@/_pages/personal-data"
