"use client"

import React, { useState } from "react"
import css from "./styles.module.scss"
import { DevRoutes } from "@/shared/routes"
import classNames from "classnames"

export const DevMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  return (
    <div className={css.dev_menu}>
      <button
        type="button"
        className={classNames(css.dev_btn, { [css.active]: isOpen })}
        onClick={toggleMenu}
      >
        <span className={css.head_title}>Мапа сайту</span>
        <div className={css.close}>
          <span></span>
          <span></span>
        </div>
      </button>
      {isOpen && (
        <div className={css.content}>
          <ul className={css.menu_list}>
            {Object.keys(DevRoutes).map((routeKey) => {
              const route = DevRoutes[routeKey as keyof typeof DevRoutes]
              return (
                <li key={route.path}>
                  <a
                    href={route.path}
                    className={css.dev_menu_link}
                  >
                    {route.name}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
