"use client"

import React, { useState, useEffect } from "react"
import Slider from "rc-slider"
import css from "./styles.module.scss"
import { useTranslations } from "next-intl"
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
  const tCatalog = useTranslations("catalog-page")
  const [sliderValue, setSliderValue] = useState(value)

  useEffect(() => {
    setSliderValue(value)
  }, [value])

  const handleSliderChange = (newValue: number | number[]) => {
    if (Array.isArray(newValue) && newValue.length === 2) {
      setSliderValue(newValue as [number, number])
      onChange(newValue as [number, number])
    }
  }

  const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = [...sliderValue]
    const inputValue = Math.min(max, Math.max(min, parseInt(event.target.value)))
    newValue[index] = inputValue
    setSliderValue(newValue as [number, number])
    onChange(newValue as [number, number])
  }

  return (
    <div className={css.price_filter}>
      <h4 className={css.title}>{tCatalog("catalog-filter-price-title")}</h4>
      <div className={css.price_values}>
        <input
          type="number"
          value={sliderValue[0]}
          onChange={(e) => handleInputChange(0, e)}
          className={css.price_input}
          placeholder={`Від ${min}`}
        />
        <input
          type="number"
          value={sliderValue[1]}
          onChange={(e) => handleInputChange(1, e)}
          className={css.price_input}
          placeholder={`До ${max}`}
        />
      </div>
      <Slider
        range
        min={min}
        max={max}
        value={sliderValue}
        onChange={handleSliderChange}
      />
    </div>
  )
}
