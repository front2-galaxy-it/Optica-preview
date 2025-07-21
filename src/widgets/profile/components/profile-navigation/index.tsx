import React from "react"
import css from "./styles.module.scss"
import { Icon } from "@/shared/ui/icons"
import classNames from "classnames"
import { useTranslations } from "next-intl"

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
  const tProfileNav = useTranslations("profile-page.profile_nav")
  const tButtons = useTranslations("buttons")

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
        {tProfileNav("item-1")}
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
        {tProfileNav("item-2")}
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
        {tProfileNav("item-3")}
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
        {tProfileNav("item-4")}
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
        {tProfileNav("item-5")}
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
        {tButtons("exit-btn")}
      </button>
    </div>
  )
}
