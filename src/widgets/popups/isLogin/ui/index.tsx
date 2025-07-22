"use client"

import classNames from "classnames"
import css from "./styles.module.scss"
import React, { useState } from "react"
import { useAuth } from "@/shared/lib/context/AuthContext"

export const IsLogin: React.FC = () => {
  const { isLoggedIn, logIn, logOut } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div
      className={classNames(css.isLogin, "blured", {
        [css.active]: isOpen,
      })}
    >
      <button onClick={toggleMenu}>Status: {isLoggedIn ? "✅ Logged In" : "❌ Logged Out"}</button>
      {isOpen && (
        <>
          <button onClick={logIn}>Log In</button>
          <button onClick={logOut}>Log Out</button>
        </>
      )}
    </div>
  )
}
