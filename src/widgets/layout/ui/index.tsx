import React from "react"
import { ServerProviders } from "@/app/providers"
import { Header } from "@/widgets/header"
import { Footer } from "@/widgets/footer"
import css from "./styles.module.scss"
import { ILayoutProps } from "./props"
import { LangPopup } from "@/widgets/popups"

export const Layout: React.FC<ILayoutProps> = ({ children, locale }) => {
  return (
    <ServerProviders locale={locale}>
      <div className={css.wrapper}>
        <Header />
        <main className={css.content}>{children}</main>
        <Footer />
        <LangPopup />
      </div>
    </ServerProviders>
  )
}
