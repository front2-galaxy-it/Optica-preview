import React from "react"
import css from "./styles.module.scss"
import { RootLink } from "../../links"

export const CheckboxPolicy: React.FC = () => {
  return (
    <>
      <label
        htmlFor="policy"
        className={css.label}
      >
        <input
          type="checkbox"
          id="policy"
        />
        я погоджуюсь з
        <RootLink
          href="/"
          target="_blank"
          className={css.checkbox_link}
        >
          політикою конфіденційності
        </RootLink>
      </label>
    </>
  )
}
