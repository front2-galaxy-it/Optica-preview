"use client"

import React, { useEffect, useState, useRef } from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { Icon } from "@/shared/ui/icons"

interface CustomSelectProps {
  className?: string
  options: string[]
  value: string
  onChange: (value: string) => void
  renderOption?: (value: string) => React.ReactNode
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  className,
  options,
  value,
  onChange,
  renderOption,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSelect = (val: string) => {
    onChange(val)
    setIsOpen(false)
  }

  return (
    <div
      className={classNames(css.selectWrapper, className)}
      ref={wrapperRef}
    >
      <button
        type="button"
        className={css.selectButton}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {renderOption ? renderOption(value) : value || ""}
        <Icon
          name="icon_arrow_bc"
          className={css.arrow}
        />
      </button>

      <div
        className={classNames(css.optionsList, {
          [css.open]: isOpen,
        })}
      >
        {options.map((opt) => (
          <div
            key={opt}
            className={css.option}
            onClick={() => handleSelect(opt)}
          >
            {renderOption ? renderOption(opt) : opt}
          </div>
        ))}
      </div>
    </div>
  )
}
