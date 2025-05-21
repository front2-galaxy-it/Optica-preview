"use client"

import React, { useRef } from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { Icon } from "../icons"

interface PaginationProps {
  className?: string
  totalItems: number
  currentPage: number
  onPageChange: (page: number) => void
  itemsPerPage?: number
  scrollTargetRef?: React.RefObject<HTMLElement>
}

export const CustomPagination: React.FC<PaginationProps> = ({
  className,
  totalItems,
  currentPage,
  onPageChange,
  itemsPerPage = 4,
  scrollTargetRef,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const paginationRef = useRef<HTMLDivElement>(null)

  const scrollToTarget = () => {
    scrollTargetRef?.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1)
    scrollToTarget()
  }

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1)
    scrollToTarget()
  }

  const renderPageNumbers = () => {
    const pages = []

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1, 2, 3)

      if (currentPage > 4 && currentPage < totalPages - 1) {
        pages.push("...")
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 1) {
        pages.push("...")
        pages.push(totalPages)
      } else {
        pages.push("...")
        pages.push(totalPages)
      }
    }

    return pages.map((page, index) =>
      page === "..." ? (
        <span
          key={`dots-${index}`}
          className={css.dots}
        >
          ...
        </span>
      ) : (
        <button
          key={page}
          className={classNames(css.nav_button, {
            [css.active]: page === currentPage,
          })}
          onClick={() => onPageChange(Number(page))}
        >
          {page}
        </button>
      ),
    )
  }

  return (
    <div
      className={classNames(css.pagination, className)}
      ref={paginationRef}
    >
      <button
        className={css.nav_button}
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        <Icon
          name="icon_arrow_bc"
          className={css.prev_icon}
        />
      </button>

      {renderPageNumbers()}

      <button
        className={css.nav_button}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <Icon
          name="icon_arrow_bc"
          className={css.next_icon}
        />
      </button>
    </div>
  )
}
