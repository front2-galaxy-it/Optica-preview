"use client"

import React, { useState } from "react"
import css from "./styles.module.scss"
import { MapBlock, SearchField } from "@/shared/ui"
import { AddressList } from "../components/address-list"
import { IAddressListProps } from "@/shared/types"
import addressList from "@/shared/data/address-list.json"

const addressListData: IAddressListProps[] = addressList

export const NetSection: React.FC = () => {
  const [coords, setCoords] = useState<[number, number]>([46.4825, 30.7233]) // Киев по умолчанию
  const [address, setAddress] = useState("")

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`,
      )
      const data = await response.json()
      if (data.length > 0) {
        const lat = parseFloat(data[0].lat)
        const lon = parseFloat(data[0].lon)
        setCoords([lat, lon])
      } else {
        alert("Адреса не знайдена.")
      }
    } catch (error) {
      console.error("Помилка при геокодуванні:", error)
    }
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
          <AddressList addressList={addressListData} />
        </div>
      </div>
    </section>
  )
}
