"use client"

import React from "react"
import css from "./styles.module.scss"
import { Icon } from "@/shared/ui/icons"

interface SliderButtonProps {
  direction: "prev" | "next"
  onClick: () => void
}

export const SliderButton: React.FC<SliderButtonProps> = ({ direction, onClick }) => {
  return (
    <button
      className={css.slider_btn}
      onClick={onClick}
      aria-label={`Slide ${direction}`}
    >
      <Icon
        name="arrow_right"
        style={{ transform: direction === "prev" ? "rotate(180deg)" : "none" }}
      />
    </button>
  )
}
