export const dynamic = process.env.NEXT_DYNAMIC === "true" ? "force-dynamic" : "auto"
export { ReviewsPage as default, generateMetadata } from "@/_pages/reviews"
