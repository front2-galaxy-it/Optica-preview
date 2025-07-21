"use client"

import React from "react"
import css from "./styles.module.scss"
import { Icon } from "@/shared/ui/icons"
import classNames from "classnames"
import { useTranslations } from "next-intl"

interface SavedPersonalDataProps {
  name: string
  surname: string
  patronymic: string
  birthDate: Date
  phone: string
  email: string
  onEdit: () => void
  onRemove: () => void
}

export const SavedPersonalData: React.FC<SavedPersonalDataProps> = ({
  onEdit,
  onRemove,
  name,
  surname,
  patronymic,
  birthDate,
  phone,
  email,
}) => {
  const tPersonalData = useTranslations("profile-page.personal_data")
  return (
    <div className={css.saved_personal_data}>
      <div className={css.saved_personal_data_list}>
        <button
          className={css.saved_personal_data_action_btn}
          onClick={onEdit}
        >
          <Icon
            name="icon_edit"
            className={css.action_icon}
          />
        </button>
        <ul className={css.saved_personal_data_wrap}>
          <li className={css.saved_personal_data_item}>
            <span className={css.label}>{tPersonalData("full-name")}</span>
            <span className={css.value}>
              {surname} {name} {patronymic}
            </span>
          </li>
          <li className={css.saved_personal_data_item}>
            <span className={css.label}>{tPersonalData("birthday")}</span>
            <span className={css.value}>{birthDate.toLocaleDateString()}</span>
          </li>
          <li className={css.saved_personal_data_item}>
            <span className={css.label}>{tPersonalData("phone")}</span>
            <span className={css.value}>{phone}</span>
          </li>
          <li className={css.saved_personal_data_item}>
            <span className={css.label}>Email</span>
            <span className={css.value}>{email}</span>
          </li>
        </ul>
        <button
          className={classNames(css.saved_personal_data_action_btn, css.remove_btn)}
          onClick={onRemove}
        >
          <Icon
            name="icon_bin"
            className={css.action_icon}
          />
        </button>
      </div>
    </div>
  )
}
