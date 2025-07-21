"use client"

import React, { useState, useRef, useEffect } from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { Icon } from "@/shared/ui/icons"
import { useLocale } from "next-intl"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
interface LanguageDropdownProps {
  className?: string
}
interface Language {
  code: "uk" | "ru"
  label: string
}

const LANGUAGES: Language[] = [
  { code: "uk", label: "Українська" },
  { code: "ru", label: "Русский" },
]

export const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const locale = useLocale()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const queryString = searchParams.toString()
  const paramsList = queryString ? `?${queryString}` : ""
  const router = useRouter()

  const toggleDropdown = () => setIsOpen(!isOpen)

  const selectLanguage = (lang: "uk" | "ru") => {
    let newPath = pathname
    if (locale !== "uk") {
      newPath = `/${lang}${pathname.substring(3)}` + paramsList
    } else {
      newPath = `/${lang}${pathname}` + paramsList
    }
    router.push(newPath)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

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
          {locale}
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
                className={classNames(css.item, {
                  [css.active]: lang.code === locale,
                })}
                onClick={() => selectLanguage(lang.code)}
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
