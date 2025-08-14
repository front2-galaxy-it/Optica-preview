"use client"

import React, { useEffect, useState } from "react"
import { RootLink } from "../../links"
import css from "./styles.module.scss"
import classNames from "classnames"
import { UseFormRegisterReturn } from "react-hook-form"
import { useTranslations } from "next-intl"
interface CheckboxPolicyProps {
  checked?: boolean
  error?: string
  className?: string
  register?: UseFormRegisterReturn<string>
  isNeedToClean?: boolean
}

export const CheckboxPolicy: React.FC<CheckboxPolicyProps> = ({
  checked = false,
  error,
  className,
  register,
  isNeedToClean,
}) => {
  const tForm = useTranslations("form.policyAgree")

  const [isChecked, setIsChecked] = useState(checked)

  useEffect(() => {
    if (isNeedToClean) {
      setIsChecked(false)
    }
  }, [isNeedToClean])

  return (
    <div className={classNames(css.label_wrap, className, { [css.checked]: isChecked })}>
      <label className={css.label}>
        <input
          type="checkbox"
          aria-required="true"
          aria-invalid={!!error}
          {...register}
        />
        {tForm("label")}
        <RootLink
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className={css.checkbox_link}
        >
          {tForm("link")}
        </RootLink>
      </label>
      {error && <p className={css.error}>{error}</p>}
    </div>
  )
}
