"use client"

import { useEffect } from "react"

export function useClickOutside(
  refs: React.RefObject<HTMLElement>[],
  onClose: () => void,
  active: boolean,
) {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const clickedOutside = refs.every((ref) => {
        const element = ref.current
        if (!element) return true
        return !element.contains(e.target as Node)
      })

      if (clickedOutside) onClose()
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (active) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [refs, onClose, active])
}
