import React, { PropsWithChildren } from "react"
import type { Metadata } from "next"
import { unstable_setRequestLocale } from "next-intl/server"
import { localeConfig } from "@/app/localization"
import { Layout } from "@/widgets/layout"
import ClientLayout from "@/widgets/layout/ClientLayout"
export const metadata: Metadata = {
  title: "Оптика добрих цін",
  description: "Galaxy IT",
}

export function generateStaticParams() {
  return localeConfig.locales.map((locale: string) => ({ locale }))
}

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<ILocaleLayoutProps>) {
  unstable_setRequestLocale(locale)

  return (
    <html lang={locale}>
      <body>
        <ClientLayout>
          <Layout locale={locale}>{children}</Layout>
        </ClientLayout>
      </body>
    </html>
  )
}

export interface ILocaleLayoutProps extends PropsWithChildren {
  params: {
    locale: string
  }
}
