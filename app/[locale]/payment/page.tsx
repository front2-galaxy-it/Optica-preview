export const dynamic = process.env.NEXT_DYNAMIC === "true" ? "force-dynamic" : "auto"
export { PaymentPage as default, generateMetadata } from "@/_pages/payment"
