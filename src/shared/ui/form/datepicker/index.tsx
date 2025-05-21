"use client"
import React from "react"
import { Controller, Control } from "react-hook-form"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { FormData } from "@/shared/types/form-data.interface"
import css from "./styles.module.scss"
import classNames from "classnames"

type Mode = "date" | "time" | "datetime"

interface DatePickerFieldProps {
  name: keyof FormData
  control: Control<FormData>
  mode?: Mode
  placeholder?: string
  dateFormat?: string
  className?: string
  error?: string
  minTime?: Date
  maxTime?: Date
}

const getDateFormat = (mode: Mode) => {
  switch (mode) {
    case "time":
      return "HH:mm"
    case "datetime":
      return "yyyy-MM-dd HH:mm"
    case "date":
    default:
      return "yyyy-MM-dd"
  }
}

export const DatePickerField: React.FC<DatePickerFieldProps> = ({
  name,
  control,
  mode = "date",
  placeholder,
  dateFormat,
  className,
  error,
  minTime,
  maxTime,
}) => {
  const showTimeSelect = mode === "time" || mode === "datetime"
  const onlyTimeSelect = mode === "time"

  return (
    <div className={classNames(css.datepicker_filed, className, `${error ? css._invalid : ""}`)}>
      <Controller
        name={name}
        control={control}
        rules={{
          validate: (value) => {
            if (!value && mode === "date") {
              return error || "Оберіть дату"
            }
            if (!value && mode === "time") {
              return error || "Оберіть час"
            }
            return true
          },
        }}
        render={({ field }) => (
          <DatePicker
            className={`${css.datepicker} ${className}`}
            selected={
              field.value instanceof Date
                ? field.value
                : typeof field.value === "string" || typeof field.value === "number"
                  ? new Date(field.value)
                  : null
            }
            onChange={(date) => field.onChange(date)}
            showTimeSelect={showTimeSelect}
            showTimeSelectOnly={onlyTimeSelect}
            timeIntervals={15}
            timeCaption="Time"
            dateFormat={dateFormat || getDateFormat(mode)}
            minTime={showTimeSelect ? minTime : undefined}
            maxTime={showTimeSelect ? maxTime : undefined}
            placeholderText={placeholder || "Оберіть дату/час"}
            minDate={new Date()}
          />
        )}
      />
      {error && <div className={css.error}>{error}</div>}
    </div>
  )
}
