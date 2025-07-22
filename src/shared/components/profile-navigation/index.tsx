import React from "react"
import css from "./styles.module.scss"
import { Icon } from "@/shared/ui/icons"
import { useTranslations } from "next-intl"
import { RootLink } from "@/shared/ui"
import { ClientRoutes } from "@/shared/routes"

interface ProfileNavProps {
  onLogoutClick: () => void
}

export const ProfileNav: React.FC<ProfileNavProps> = ({ onLogoutClick }) => {
  const tProfileNav = useTranslations("profile-page.profile_nav")
  const tButtons = useTranslations("buttons")

  return (
    <div className={css.profile_nav}>
      <RootLink
        className={css.nav_button}
        href={ClientRoutes.personal_data.path}
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
      </RootLink>
      <RootLink
        className={css.nav_button}
        href={ClientRoutes.reset_password.path}
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
      </RootLink>
      <RootLink
        className={css.nav_button}
        href={ClientRoutes.user_orders.path}
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
      </RootLink>
      <RootLink
        className={css.nav_button}
        href={ClientRoutes.user_favorites.path}
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
      </RootLink>
      <RootLink
        className={css.nav_button}
        href={ClientRoutes.user_bonuses.path}
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
      </RootLink>
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
