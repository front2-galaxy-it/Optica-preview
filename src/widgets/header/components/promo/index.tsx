import React from "react"
import css from "./styles.module.scss"

export const Promo: React.FC = () => {
  return (
    <div className={css.promo_wrap}>
      <div className="container">
        <p className={css.promo_text}>
          Скористайся знижкою до - 20%! Реєструйся на сайті та отримай свою знижку за промокодом:
          LITO2025
        </p>
      </div>
    </div>
  )
}
