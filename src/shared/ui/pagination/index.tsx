"use client"

import css from "./styles.module.scss"
import classNames from "classnames"
import React, { DetailedHTMLProps, HtmlHTMLAttributes, useMemo } from "react"
import { Icon } from "../icons"
import { useQueryParams } from "@/shared/hooks"

interface IPaginationProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  meta: any
  isVisible: boolean
}

type Pagination = {
  prev: number | null
  next: number | null
  pageNumbers: string[]
}

export const CustomPagination: React.FC<IPaginationProps> = ({ className, meta, isVisible }) => {
  const { setParam, removeParam } = useQueryParams()

  const extractPageNumber = (url: string | null): number | null => {
    if (!url) return null
    const match = url.match(/page=(\d+)/)
    return match ? Number(match[1]) : null
  }

  const buildPagination = React.useCallback((meta: any): Pagination => {
    const prev = extractPageNumber(
      meta.links.find((l: any) => l.label === "pagination.previous")?.url,
    )
    const next = extractPageNumber(meta.links.find((l: any) => l.label === "pagination.next")?.url)

    const pageNumbers = meta.links
      .filter((link: any) => !["pagination.previous", "pagination.next"].includes(link.label))
      .map((link: any) => link.label)

    return { prev, next, pageNumbers }
  }, [])

  const onPaginationButtonClickHandle = (page: number | string | null) => {
    if (!page || page === "...") return

    const pageNum = Number(page)

    if (pageNum === 1) {
      removeParam("page", "")
    } else {
      setParam("page", pageNum.toString())
    }

    const headerElement = document.getElementById("main")
    if (headerElement) {
      headerElement.scrollIntoView({ behavior: "smooth" })
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const pagination = useMemo(() => buildPagination(meta), [meta, buildPagination])

  if (pagination.pageNumbers.length <= 1 || !isVisible) return null

  return (
    <div className={classNames(css.pagination, className)}>
      <button
        type="button"
        className={classNames(css.nav_button, {
          [css.disabled]: pagination.prev === null,
        })}
        aria-label={`Previous page, current is: ${meta.current_page}`}
        onClick={() => onPaginationButtonClickHandle(pagination.prev)}
        disabled={pagination.prev === null}
      >
        <Icon
          name="icon_arrow_bc"
          className={css.prev_icon}
        />
      </button>

      <div className={css.paginations_pages}>
        {pagination.pageNumbers.map((number) => {
          const isActive = meta.current_page.toString() === number
          const isDisabled = number === "..."

          return (
            <button
              key={`${number}-pagination`}
              className={classNames(css.nav_button, {
                [css.current_page]: isActive,
                [css.disabled]: isDisabled,
              })}
              aria-label={`Change page to: ${number}`}
              onClick={() => onPaginationButtonClickHandle(number)}
              disabled={isDisabled}
            >
              {number}
            </button>
          )
        })}
      </div>

      <button
        type="button"
        className={classNames(css.nav_button, {
          [css.disabled]: pagination.next === null,
        })}
        aria-label={`Next page, current is: ${meta.current_page}`}
        onClick={() => onPaginationButtonClickHandle(pagination.next)}
        disabled={pagination.next === null}
      >
        <Icon
          name="icon_arrow_bc"
          className={css.next_icon}
        />
      </button>
    </div>
  )
}
