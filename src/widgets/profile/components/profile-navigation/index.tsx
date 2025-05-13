import React from "react"
import css from "./styles.module.scss"
import { Icon } from "@/shared/ui/icons"
import classNames from "classnames"

interface ProfileNavProps {
  activeTab: "data" | "password" | "orders" | "selected" | "bonus"
  onTabChange: (tab: "data" | "password" | "orders" | "selected" | "bonus") => void
  onLogoutClick: () => void
}

export const ProfileNav: React.FC<ProfileNavProps> = ({
  activeTab,
  onTabChange,
  onLogoutClick,
}) => {
  return (
    <div className={css.profile_nav}>
      <button
        className={classNames(css.nav_button, { [css.active]: activeTab === "data" })}
        onClick={() => onTabChange("data")}
      >
        <Icon
          name="user_icon"
          className={css.button_icon}
        />
        Персональні данні
        <Icon
          name="icon_arrow_bc"
          className={css.button_arrow}
        />
      </button>
      <button
        className={classNames(css.nav_button, { [css.active]: activeTab === "password" })}
        onClick={() => onTabChange("password")}
      >
        <Icon
          name="icon_check"
          className={css.button_icon}
        />
        Зміна паролю
        <Icon
          name="icon_arrow_bc"
          className={css.button_arrow}
        />
      </button>
      <button
        className={classNames(css.nav_button, { [css.active]: activeTab === "orders" })}
        onClick={() => onTabChange("orders")}
      >
        <Icon
          name="basket_icon"
          className={css.button_icon}
        />
        Мої замовлення
        <Icon
          name="icon_arrow_bc"
          className={css.button_arrow}
        />
      </button>
      <button
        className={classNames(css.nav_button, { [css.active]: activeTab === "selected" })}
        onClick={() => onTabChange("selected")}
      >
        <Icon
          name="wish_icon"
          className={css.button_icon}
        />
        Обрані товари
        <Icon
          name="icon_arrow_bc"
          className={css.button_arrow}
        />
      </button>
      <button
        className={classNames(css.nav_button, { [css.active]: activeTab === "bonus" })}
        onClick={() => onTabChange("bonus")}
      >
        <Icon
          name="icon_percent"
          className={css.button_icon}
        />
        Мої бонуси
        <Icon
          name="icon_arrow_bc"
          className={css.button_arrow}
        />
      </button>
      <button
        className={css.logout_button}
        onClick={onLogoutClick}
      >
        <Icon name="icon_logout" />
        Вихід
      </button>
    </div>
  )
}
