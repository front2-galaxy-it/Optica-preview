"use client"

import React, { useState } from "react"
import css from "./styles.module.scss"
import { IAddressProps } from "@/shared/types"
import addressList from "@/shared/data/address.json"
import classNames from "classnames"
import { MapBlock } from "../map-view"

export const SelfDelivery: React.FC = () => {
  const addressListData: IAddressProps[] = addressList.map((address) => ({
    ...address,
    coordinates: [address.coordinates[0], address.coordinates[1]] as [number, number],
  }))

  const [activeId, setActiveId] = useState<number | null>(null)
  const [selectedCoords, setSelectedCoords] = useState<[number, number]>(
    addressList[0].coordinates as [number, number],
  )

  const handleAddressClick = (id: number, coords: [number, number]) => {
    setActiveId(id)
    setSelectedCoords(coords)
  }

  return (
    <div className={css.self_delivery}>
      <div className={css.self_delivery_content}>
        <ul className={css.self_delivery_address_list}>
          {addressListData.map((address) => (
            <li
              key={address.id}
              className={classNames(css.self_delivery_address_item, {
                [css.active]: activeId === address.id,
              })}
              onClick={() => handleAddressClick(address.id, address.coordinates)}
            >
              <div className={css.item_text_wrap}>
                <address>{address.label}</address>
                <span>{address.time}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className={css.interactive_map}>
          <MapBlock coords={selectedCoords} />
        </div>
      </div>
    </div>
  )
}
