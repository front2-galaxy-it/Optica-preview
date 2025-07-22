export const dynamic = process.env.NEXT_DYNAMIC === "true" ? "force-dynamic" : "auto"
export { UserFavoritesDataPage as default, generateMetadata } from "@/_pages/user-favorites"
