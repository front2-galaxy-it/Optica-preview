"use client"

import React from "react"
import Slider from "rc-slider"
import css from "./styles.module.scss"

interface PriceRangeFilterProps {
  min: number
  max: number
  value: [number, number]
  onChange: (value: [number, number]) => void
}

export const PriceRangeFilter: React.FC<PriceRangeFilterProps> = ({
  min,
  max,
  value,
  onChange,
}) => {
  return (
    <div className={css.price_filter}>
      <h4 className={css.title}>Ціна</h4>
      <div className={css.price_values}>
        <span>{value[0]} грн</span>
        <span>{value[1]} грн</span>
      </div>
      <Slider
        range
        min={min}
        max={max}
        value={value}
        onChange={(val) => onChange(val as [number, number])}
      />
    </div>
  )
}
