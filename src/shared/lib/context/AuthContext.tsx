"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"

type AuthContextType = {
  isLoggedIn: boolean
  logIn: () => void
  logOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("isLoggedIn")
    if (stored === "true") {
      setIsLoggedIn(true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("isLoggedIn", String(isLoggedIn))
  }, [isLoggedIn])

  const logIn = () => setIsLoggedIn(true)
  const logOut = () => setIsLoggedIn(false)

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
