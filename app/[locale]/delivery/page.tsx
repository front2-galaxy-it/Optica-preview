export const dynamic = process.env.NEXT_DYNAMIC === "true" ? "force-dynamic" : "auto"
export { DeliveryPage as default, generateMetadata } from "@/_pages/delivery"
