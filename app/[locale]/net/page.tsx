export const dynamic = process.env.NEXT_DYNAMIC === "true" ? "force-dynamic" : "auto"
export { NetPage as default, generateMetadata } from "@/_pages/net"
