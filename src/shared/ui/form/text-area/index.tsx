"use client"

import cn from "classnames"
import { DetailedHTMLProps, TextareaHTMLAttributes, useEffect, useState } from "react"
import css from "./styles.module.scss"
import Image from "next/image"
import { FieldError, UseFormRegisterReturn } from "react-hook-form"

export interface IFormFieldProps
  extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  isInvalid?: boolean
  isRequired?: boolean
  register?: UseFormRegisterReturn<string>
  error?: FieldError | undefined
  colorType?: "white" | "gray"
  isNeedToClean?: boolean
}

export const FormTextArea: React.FC<IFormFieldProps> = ({
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

  const handleFocus = () => setIsFocus(true)

  const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFilled(Boolean(event.target.value))
    setIsFocus(false)
  }

  return (
    <div
      className={cn(css.form_field, className, {
        [css._invalid]: isError,
        [css._disabled]: disabled,
        [css._filled]: isFilled,
        [css._focused]: isFocus,
        [css._white]: colorType === "white",
        [css._gray]: colorType === "gray",
      })}
    >
      {placeholder && <span className={css.form_field_input_placeholder}>{placeholder}</span>}
      <textarea
        className={css.form_field_textarea}
        onFocus={handleFocus}
        defaultValue={defaultValue}
        {...props}
        {...register}
        onBlur={(e) => {
          register?.onBlur(e)
          handleBlur(e)
        }}
      ></textarea>
      <span
        className={cn(css.form_field_error, {
          [css._visible_error]: error,
        })}
      ></span>
      <Image
        className={css.error_icon}
        src="/images/svg/error-icon.svg"
        width={15}
        height={15}
        alt="error icons"
      />
    </div>
  )
}
