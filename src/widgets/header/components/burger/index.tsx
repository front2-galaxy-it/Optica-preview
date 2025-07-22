import React from "react"
import css from "./styles.module.scss"
import classNames from "classnames"

interface BurgerMenuProps {
  onClick: () => void
  onLinkClick?: () => void
  className?: string
  burgerOpen?: boolean
  closing?: boolean
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({
  onClick,
  className,
  burgerOpen = false,
  closing = false,
}) => {
  return (
    <button
      className={classNames(css.burger, className, {
        [css.active]: burgerOpen,
        [css.closing]: closing,
      })}
      onClick={onClick}
      aria-label="open burger"
    >
      <div className={css.hamburger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={css.cross}>
        <span></span>
        <span></span>
      </div>
    </button>
  )
}
