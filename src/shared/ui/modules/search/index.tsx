"use client"

import React, { forwardRef } from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { Button } from "../../buttons"
interface ISearchFieldProps {
  placeholder: string
  state?: string
  disabled?: boolean
  className?: string
  searchOpen: boolean
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSearch: () => void
}

export const SearchField = forwardRef<HTMLFormElement, ISearchFieldProps>(
  (
    {
      placeholder,
      state,
      disabled = false,
      className,
      searchOpen = false,
      value,
      onChange,
      onSearch,
    },
    ref,
  ) => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      if (!value.trim()) return
      onSearch()
    }

    return (
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className={classNames(
          css.search_wrap,
          className,
          state && css[`search_wrap_${state}`],
          disabled && css.disabled,
          value && css.filled,
          searchOpen && css.show,
        )}
      >
        <input
          type="search"
          aria-label="Поле пошуку"
          placeholder={placeholder}
          className={css.search_input}
          value={value}
          onChange={onChange}
        />
        <Button
          modifier="primary"
          type="submit"
          className={css.serach_btn}
          iconName="search_icon"
          iconPosition="right"
        >
          Пошук
        </Button>
      </form>
    )
  },
)
