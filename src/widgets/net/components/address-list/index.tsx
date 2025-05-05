import React from "react"
import css from "./styles.module.scss"
import { IAddressListProps } from "@/shared/types"

interface AddressListProps {
  addressList: IAddressListProps[]
}

export const AddressList: React.FC<AddressListProps> = ({ addressList }) => {
  return (
    <div className={css.table_wrap}>
      <table className={css.adress_list}>
        <thead>
          <tr>
            <th>Адресса</th>
            <th>Час</th>
            <th>Майстер</th>
            <th>Лікар</th>
            <th>Інщі послуги</th>
          </tr>
        </thead>
        <tbody>
          {addressList &&
            addressList.map((address, index) => (
              <tr key={index}>
                <td className={css.address}>{address.address}</td>
                <td>{address.time}</td>
                <td>{address.master}</td>
                <td>{address.doctor}</td>
                <td>{address.otherServices || "—"}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
