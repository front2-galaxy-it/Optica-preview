"use client"

import cn from "classnames"
import { DetailedHTMLProps, InputHTMLAttributes, useEffect, useState } from "react"
import css from "./styles.module.scss"
import Image from "next/image"
import { UseFormRegisterReturn } from "react-hook-form"

export interface IFormFieldProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  isInvalid?: boolean
  isRequired?: boolean
  register?: UseFormRegisterReturn<string>
  error?: string
  colorType?: "white" | "gray"
  isNeedToClean?: boolean
}

export const FormField: React.FC<IFormFieldProps> = ({
  register,
  error,
  className,
  disabled,
  placeholder,
  defaultValue = "",
  colorType = "white",
  isNeedToClean,
  ...props
}): JSX.Element => {
  const [isError, setIsError] = useState<boolean>(false)
  const [isFilled, setIsFilled] = useState<boolean>(Boolean(defaultValue))
  const [isFocus, setIsFocus] = useState<boolean>(false)

  useEffect(() => {
    setIsError(!!error)
  }, [error])

  useEffect(() => {
    if (isNeedToClean) {
      setIsFilled(false)
    }
  }, [isNeedToClean])

  useEffect(() => {
    setIsFilled(Boolean(defaultValue))
  }, [defaultValue])

  const handleFocus = () => setIsFocus(true)

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFilled(Boolean(event.target.value))
    setIsFocus(false)
  }

  return (
    <div className={cn(css.form_field_wrap, className)}>
      <div
        className={cn(css.form_field, {
          [css._invalid]: isError,
          [css._disabled]: disabled,
          [css._invalid_filled]: isError && isFilled,
          [css._filled]: isFilled,
          [css._focused]: isFocus,
          [css._white]: colorType === "white",
          [css._gray]: colorType === "gray",
        })}
      >
        {placeholder && <span className={css.form_field_input_placeholder}>{placeholder}</span>}
        <input
          className={css.form_field_input}
          onFocus={handleFocus}
          defaultValue={defaultValue}
          {...props}
          {...register}
          onBlur={(e) => {
            register?.onBlur(e)
            handleBlur(e)
          }}
        />
        <Image
          className={css.error_icon}
          src="/images/svg/error-icon.svg"
          width={15}
          height={15}
          alt="error icon"
        />
      </div>
      {error && <span className={css.error}>{error}</span>}
    </div>
  )
}
