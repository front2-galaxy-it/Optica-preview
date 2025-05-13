"use client"

import React from "react"
import { Controller, Control } from "react-hook-form"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import css from "./styles.module.scss"
import { FormData } from "@/shared/types/form-data.interface"
import Image from "next/image"
import classNames from "classnames"

interface DatePickerFieldProps {
  name: "birthDate"
  control: Control<FormData>
  defaultValue?: Date | null
  rules?: object
  placeholder?: string
  className?: string
  error?: string
}

export const DatePickerField: React.FC<DatePickerFieldProps> = ({
  name,
  control,
  defaultValue = null,
  rules = {},
  placeholder = "дд/мм/рррр народження",
  className,
  error,
}) => {
  return (
    <div className={classNames(css.datepicker_filed, className, `${error ? css._invalid : ""}`)}>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue ? defaultValue.toISOString() : undefined}
        rules={rules}
        render={({ field }) => (
          <>
            <DatePicker
              selected={field.value ? new Date(field.value) : null}
              onChange={(date) => {
                field.onChange(date)
              }}
              placeholderText={placeholder}
              dateFormat="dd/MM/yyyy"
              className={`${css.datepicker} ${className}`}
            />
            {error && <span className={css.error}>{error}</span>}
            <Image
              className={css.error_icon}
              src="/images/svg/error-icon.svg"
              width={15}
              height={15}
              alt="error icon"
            />
          </>
        )}
      />
    </div>
  )
}
