"use client"

import React, { useState } from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { MapBlock } from "../map-view"

interface IAdressDeliveryProps {
  addressList: any
}

export const AdressDelivery: React.FC<IAdressDeliveryProps> = ({ addressList }) => {
  const addressListData = addressList.map((address: any, index: number) => ({
    ...address,
    id: index,
    coordinates: [address.latitude, address.longitude] as [number, number],
  }))

  const [activeId, setActiveId] = useState<number | null>(null)
  const [selectedCoords, setSelectedCoords] = useState<[number, number]>(
    addressListData[0]?.coordinates ?? [0, 0],
  )

  const handleAddressClick = (id: number, coords: [number, number]) => {
    setActiveId(id)
    setSelectedCoords(coords)
  }
  return (
    <div className={css.self_delivery}>
      <div className={css.self_delivery_content}>
        <ul className={css.self_delivery_address_list}>
          {addressListData.map((address: any) => (
            <li
              key={address.id}
              className={classNames(css.self_delivery_address_item, {
                [css.active]: activeId === address.id,
              })}
              onClick={() => handleAddressClick(address.id, address.coordinates)}
            >
              <div className={css.item_text_wrap}>
                <address>{address.address}</address>
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
