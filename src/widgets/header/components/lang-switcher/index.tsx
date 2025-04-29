"use client"

import React, { useState, useRef } from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { Icon } from "@/shared/ui/icons"
import { useClickOutside } from "@/shared/hooks"
interface LanguageDropdownProps {
  className?: string
}
interface Language {
  code: string
  label: string
}

const LANGUAGES: Language[] = [
  { code: "UA", label: "Українська" },
  { code: "RU", label: "Русский" },
]

export const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ className }) => {
  const [selected, setSelected] = useState<Language>(LANGUAGES[0])
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => setIsOpen(!isOpen)
  const selectLanguage = (lang: Language) => {
    setSelected(lang)
    setIsOpen(false)
  }

  useClickOutside(
    [dropdownRef],
    () => {
      setIsOpen(false)
    },
    isOpen,
  )

  return (
    <div
      ref={dropdownRef}
      className={classNames(css.dropdown_wrap, className)}
    >
      <div className={classNames(css.dropdown, isOpen && css.open)}>
        <button
          className={classNames(css.trigger, isOpen && css.open)}
          onClick={toggleDropdown}
          type="button"
        >
          <Icon
            name="globe_icon"
            className={css.globe}
          />
          {selected.code}
          <Icon
            name="arrow_icon"
            className={css.arrow}
          />
        </button>
        {isOpen && (
          <ul className={css.menu}>
            {LANGUAGES.map((lang) => (
              <li
                key={lang.code}
                className={classNames(css.item, lang.code === selected.code && css.active)}
                onClick={() => selectLanguage(lang)}
              >
                {lang.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
