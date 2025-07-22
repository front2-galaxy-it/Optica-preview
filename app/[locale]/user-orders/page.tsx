export const dynamic = process.env.NEXT_DYNAMIC === "true" ? "force-dynamic" : "auto"
export { MyOrdersDataPage as default, generateMetadata } from "@/_pages/my-orders"
