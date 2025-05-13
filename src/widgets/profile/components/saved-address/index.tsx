"use client"

import React from "react"
import css from "./styles.module.scss"
import { AddressData } from "@/shared/types/form-data.interface"
import { Icon } from "@/shared/ui/icons"
import classNames from "classnames"

interface SavedAddressProps {
  addressData: AddressData
  onEdit: () => void
  onRemove: () => void
}

export const SavedAddress: React.FC<SavedAddressProps> = ({ addressData, onEdit, onRemove }) => {
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
            <span className={css.label}>Адреса доставки</span>
            <span className={css.value}>{addressData.address}</span>
          </li>
          <li className={css.saved_address_item}>
            <span className={css.label}>Відділення пошти</span>
            <span className={css.value}>{addressData.postOffice}</span>
          </li>
          <li className={css.saved_address_item}>
            <span className={css.label}>ПІБ отримувача</span>
            <span className={css.value}>
              {addressData.surname} {addressData.name} {addressData.patronymic}
            </span>
          </li>
          <li className={css.saved_address_item}>
            <span className={css.label}>Номер телефону</span>
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
