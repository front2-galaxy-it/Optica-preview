import React from "react"
import { RootLink } from "../../links"
import css from "./styles.module.scss"
import classNames from "classnames"
import { UseFormRegisterReturn } from "react-hook-form"

interface CheckboxPolicyProps {
  error?: string
  className?: string
  register?: UseFormRegisterReturn<string>
}

export const CheckboxPolicy: React.FC<CheckboxPolicyProps> = ({ error, className, register }) => {
  return (
    <label
      htmlFor="policy"
      className={classNames(css.label, className)}
    >
      <input
        type="checkbox"
        id="policy"
        aria-required="true"
        aria-invalid={!!error}
        {...register}
      />
      я погоджуюсь з
      <RootLink
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className={css.checkbox_link}
      >
        політикою конфіденційності
      </RootLink>
      {error && <p className={css.error}>{error}</p>}
    </label>
  )
}
