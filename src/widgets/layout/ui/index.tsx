import React from "react"
import { Header } from "@/widgets/header"
import { Footer } from "@/widgets/footer"
import css from "./styles.module.scss"
import { ILayoutProps } from "./props"
import { LangPopup } from "@/widgets/popups"
import { DevMenu } from "@/shared/ui"
import { AuthProvider } from "@/shared/lib/context/AuthContext"
import { IsLogin } from "@/widgets/popups/isLogin"

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <AuthProvider>
      <div className={css.wrapper}>
        <Header />
        <main className={css.content}>{children}</main>
        <Footer />
        <LangPopup />
        <DevMenu />
        <IsLogin />
      </div>
    </AuthProvider>
  )
}
