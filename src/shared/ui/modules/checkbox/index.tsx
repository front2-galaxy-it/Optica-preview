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
    <div className={classNames(css.label_wrap, className)}>
      <label
        htmlFor="policy"
        className={css.label}
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
      </label>
      {error && <p className={css.error}>{error}</p>}
    </div>
  )
}
