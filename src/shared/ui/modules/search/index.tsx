"use client"

import React, { useState, forwardRef } from "react"
import css from "./styles.module.scss"
import { Icon } from "../../icons"
import classNames from "classnames"
import { Button } from "../../buttons"

interface ISearchFieldProps {
  placeholder?: string
  state?: string
  disabled?: boolean
  className?: string
  searchOpen: boolean
}

export const SearchField = forwardRef<HTMLFormElement, ISearchFieldProps>(
  ({ placeholder, state, disabled = false, className, searchOpen = false }, ref) => {
    const [value, setValue] = useState("")

    return (
      <form
        ref={ref}
        className={classNames(
          css.search_wrap,
          className,
          state && css[`serach_wrap_${state}`],
          disabled && css.disabled,
          value && css.filled,
          searchOpen && css.show,
        )}
      >
        <input
          type="search"
          placeholder={placeholder}
          className={css.search_input}
          disabled={disabled}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          modifier="primary"
          type="submit"
          className={css.serach_btn}
          disabled={disabled}
        >
          Пошук
          <Icon
            name="search_icon"
            className={css.search_icon}
          />
        </Button>
      </form>
    )
  },
)
