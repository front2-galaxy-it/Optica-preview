export const dynamic = process.env.NEXT_DYNAMIC === "true" ? "force-dynamic" : "auto"
export { DiagnosticServicePage as default } from "@/_pages/diagnostic/[slug]"
