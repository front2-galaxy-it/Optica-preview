"use client"

import React from "react"
import css from "./styles.module.scss"
import { AddressData } from "@/shared/types/form-data.interface"
import { Icon } from "@/shared/ui/icons"
import classNames from "classnames"
import { useTranslations } from "next-intl"

interface SavedAddressProps {
  addressData: AddressData
  onEdit: () => void
  onRemove: () => void
}

export const SavedAddress: React.FC<SavedAddressProps> = ({ addressData, onEdit, onRemove }) => {
  const tPersonalData = useTranslations("profile-page.personal_data")

  if (!addressData) return null
  return (
    <div className={css.saved_address}>
      <div className={css.saved_address_list}>
        <button
          className={css.saved_address_action_btn}
          onClick={onEdit}
        >
          <Icon
            name="icon_edit"
            className={css.action_icon}
          />
        </button>
        <ul className={css.saved_address_wrap}>
          <li className={css.saved_address_item}>
            <span className={css.label}>{tPersonalData("adress")}</span>
            <span className={css.value}>{addressData.address}</span>
          </li>
          <li className={css.saved_address_item}>
            <span className={css.label}>{tPersonalData("post-office")}</span>
            <span className={css.value}>{addressData.postOffice}</span>
          </li>
          <li className={css.saved_address_item}>
            <span className={css.label}>{tPersonalData("full-name-recipient")}</span>
            <span className={css.value}>
              {addressData.surname} {addressData.name} {addressData.patronymic}
            </span>
          </li>
          <li className={css.saved_address_item}>
            <span className={css.label}>{tPersonalData("phone")}</span>
            <span className={css.value}>{addressData.phone}</span>
          </li>
        </ul>
        <button
          className={classNames(css.saved_address_action_btn, css.remove_btn)}
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
