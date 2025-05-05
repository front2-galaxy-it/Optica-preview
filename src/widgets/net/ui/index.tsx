"use client"

import React, { useState, useEffect } from "react"
import css from "./styles.module.scss"
import { MapBlock, SearchField } from "@/shared/ui"
import { AddressList } from "../components/address-list"
import { IAddressListProps } from "@/shared/types"
import addressList from "@/shared/data/address-list.json"

const addressListData: IAddressListProps[] = addressList.map((item) => ({
  ...item,
  coords: [item.coords.lat, item.coords.lon] as [number, number],
}))

export const NetSection: React.FC = () => {
  const [coords, setCoords] = useState<[number, number]>([46.4825, 30.7233])
  const [address, setAddress] = useState("")
  const [filteredList, setFilteredList] = useState<IAddressListProps[]>(addressListData)

  const filterAddresses = (searchTerm: string) => {
    const matches = addressListData.filter((item) =>
      item.address.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    if (matches.length > 0) {
      setFilteredList(matches)
      const firstMatch = matches[0]
      if (firstMatch.coords) {
        setCoords(firstMatch.coords)
      }
    } else {
      setFilteredList([])
      alert("Адреса не знайдена.")
    }
  }

  useEffect(() => {
    const searchTerm = address.trim()
    filterAddresses(searchTerm)
  }, [address])

  const handleSearch = () => {
    const searchTerm = address.trim()
    filterAddresses(searchTerm)
  }

  return (
    <section className={css.net_section}>
      <div className="container">
        <div className={css.net_content}>
          <div className={css.interactive_map}>
            <MapBlock coords={coords} />
          </div>
          <div className={css.search_field_wrap}>
            <SearchField
              placeholder="Адреса"
              searchOpen={true}
              className={css.net_content_search}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              onSearch={handleSearch}
            />
            <p className={css.search_text}>
              У всіх Оптиках Добрих Цін є лікар-офтальмолог. <br />
              Записуватися на прийом варто завчасно — онлайн на сайті або за телефоном{" "}
              <a href="tel:0963171897">0963171897</a>
            </p>
          </div>
          <AddressList addressList={filteredList} />
        </div>
      </div>
    </section>
  )
}
