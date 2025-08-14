import { ISignUpFormData } from "../ui/form/register"
import { ISignInFormData } from "../ui/form/authorization"
import { RestoreBody, VerifyBody, ResetBody } from "@/widgets/popups/reset-popup"
import { RootService } from "./root.service"

class Auth extends RootService {
  private LAYOUTS_ENDPOINT = "/auth"

  async loginGoogle() {
    return this.request<any>("/login/google")
  }

  async loginFacebook() {
    return this.request<any>("/login/facebook")
  }

  async login(body: ISignInFormData) {
    return await this.request("/login", {
      method: "POST",
      body: JSON.stringify(body),
    })
  }

  // async loginGoogle(body: ISignInFormData) {
  //   return await this.request("/login", body)
  // }

  // async login(body: ISignInFormData) {
  //   return await this.http.post("/login", body)
  // }

  // async registration(body: ISignUpFormData) {
  //   return await this.http.post("/register", body)
  // }

  // async getRegistration(params = "", options?: RequestInit) {
  //   return this.request.post<any>("/register" + params, options)
  // }

  async registration(body: ISignUpFormData) {
    return await this.request("/register", {
      method: "POST",
      body: JSON.stringify(body),
    })
  }

  async restore(body: RestoreBody) {
    return await this.request("/password/restore", {
      method: "POST",
      body: JSON.stringify(body),
    })
  }

  async reset(body: ResetBody) {
    return await this.request("/register/reset", {
      method: "POST",
      body: JSON.stringify(body),
    })
  }

  async verify(body: VerifyBody) {
    return await this.request("/register/verify", {
      method: "POST",
      body: JSON.stringify(body),
    })
  }
  async logout() {
    return await this.request("/logout", {})
  }
}

export const AuthService = new Auth()
