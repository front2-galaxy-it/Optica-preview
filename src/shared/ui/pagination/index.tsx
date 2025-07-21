// "use client"

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

export const CustomPagination: React.FC<IPaginationProps> = ({ className, meta, isVisible }) => {
  const { setParam, removeParam } = useQueryParams()

  const scrollAction = () => {
    const listingSection = document.querySelector(".blog_section")
    const header = document.querySelector("header")
    if (listingSection && header) {
      const headerOffset = (header as HTMLElement).offsetHeight
      const elementPosition = listingSection.getBoundingClientRect().top + window.scrollY
      let offsetPosition
      if (headerOffset) {
        offsetPosition = elementPosition - headerOffset + 1
      } else {
        offsetPosition = elementPosition
      }

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  // Always call the hook
  const pagination = useMemo(() => (meta ? getPagination(meta) : null), [meta])

  const onPaginationButtonClickHandle = (number: string | null): void => {
    if (number === null) {
      return
    }

    if (number === "1") {
      removeParam("page", "")
      scrollAction()
      return
    }

    setParam("page", number)
    scrollAction()
  }

  if (!meta || !pagination) return null

  return pagination.pageNumbers.length <= 1 || !isVisible ? null : (
    <div className={classNames(css.pagination, className)}>
      <div className={css.pagination}>
        <button
          type={"button"}
          className={classNames(css.nav_button, {})}
          aria-label={"Previously page, current is: " + meta.current_page}
          onClick={() => onPaginationButtonClickHandle(pagination.prev)}
        >
          <Icon
            name="icon_arrow_bc"
            className={css.prev_icon}
          />
        </button>
        <div className={css.paginations_pages}>
          {pagination.pageNumbers.map((number: string) => {
            const isActive = meta.current_page.toString() === number
            const isDisabled = number === "..."

            return (
              <button
                key={number + "-pagination"}
                className={classNames(css.nav_button, {
                  [css.current_page]: isActive,
                  [css.disabled]: isDisabled,
                })}
                aria-label={"Change page to: " + number}
                onClick={() => onPaginationButtonClickHandle(number)}
                disabled={isDisabled}
              >
                {number}
              </button>
            )
          })}
        </div>
        {pagination.next !== null && (
          <button
            type={"button"}
            className={css.nav_button}
            aria-label={"Next page, current is: " + meta.current_page}
            onClick={() => onPaginationButtonClickHandle(pagination.next)}
          >
            <Icon
              name="icon_arrow_bc"
              className={css.next_icon}
            />
          </button>
        )}
      </div>
    </div>
  )
}

function getPagination(meta: any) {
  if (!meta) {
    return null
  }

  const { last_page: lastPage, current_page: currentPage } = meta
  const result = []
  const minNum = 1
  const prevPage = currentPage - 1
  const nextPage = currentPage + 1
  result.push(minNum.toString())

  if (prevPage - 1 > minNum && prevPage < lastPage) {
    result.push("...")
  }

  if (prevPage > minNum && prevPage < currentPage) {
    result.push(prevPage.toString())
  }

  if (minNum !== currentPage) {
    result.push(currentPage.toString())
  }

  if (nextPage < lastPage && nextPage > minNum) {
    result.push(nextPage.toString())
  }

  if (nextPage + 1 < lastPage && nextPage > minNum) {
    result.push("...")
  }

  if (currentPage !== lastPage) {
    result.push(lastPage.toString())
  }

  return {
    prev: currentPage > minNum ? prevPage.toString() : null,
    pageNumbers: result,
    next: currentPage < lastPage ? nextPage.toString() : null,
  }
}
