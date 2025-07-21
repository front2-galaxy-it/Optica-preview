"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Loader } from "@/shared/ui/loader"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    setLoading(true)

    const timeout = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [pathname])

  if (loading) return <Loader />

  return <>{children}</>
}
