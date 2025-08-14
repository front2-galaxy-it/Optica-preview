import { RootService } from "./root.service"
import { IDiagnosticApointmentForm } from "@/widgets/popups/diagnostic-popup"

export interface DiagnosticItem {
  id: number
  title: string
  short_description: string
  image: string | null
  price: number
  discount: number
  notice: string
  duration: number
  slug: string
}

class Diagnostic extends RootService {
  async getData(options?: RequestInit) {
    return this.request<{ data: DiagnosticItem[] }>("/diagnostics", options)
  }

  async makeAppointment(body: IDiagnosticApointmentForm) {
    return await this.request("/diagnostics/make-appointment", {
      method: "POST",
      body: JSON.stringify(body),
    })
  }
}

export const DiagnosticService = new Diagnostic()
