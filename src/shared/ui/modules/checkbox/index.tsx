import React from "react"
import { RootLink } from "../../links"
import css from "./styles.module.scss"
import classNames from "classnames"

interface CheckboxPolicyProps {
  error?: string
  className?: string
}

export const CheckboxPolicy: React.FC<CheckboxPolicyProps> = ({ error, className }) => {
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
