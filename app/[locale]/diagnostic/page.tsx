export const dynamic = process.env.NEXT_DYNAMIC === "true" ? "force-dynamic" : "auto"
export { DiagnosticPage as default, generateMetadata } from "@/_pages/diagnostic"
