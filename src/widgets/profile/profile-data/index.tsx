import React, { useState, useEffect } from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { motion, AnimatePresence } from "framer-motion"
import { PersonalDataForm } from "../components/forms/PersonalDataForm"
import { AddressForm } from "../components/forms/AddressForm"
import { SavedAddress } from "../components/saved-address"
import { AddressData, FormData } from "@/shared/types/form-data.interface"
import { SavedPersonalData } from "../components/saved-personal-data"

interface ProfileDataProps {
  onPersonalDataSuccess: () => void
}

export const ProfileData: React.FC<ProfileDataProps> = ({ onPersonalDataSuccess }) => {
  const [isOpenEdit, setIsOpenEdit] = useState(false)
  const handleToggleEdit = () => setIsOpenEdit(!isOpenEdit)

  const [addresses, setAddresses] = useState<AddressData[]>([])
  const [editIndex, setEditIndex] = useState<number | null>(null)
  const [personalData, setPersonalData] = useState<FormData | null>(null)
  const [isEditingPersonalData, setIsEditingPersonalData] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("savedAddresses")
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed)) {
          setAddresses(parsed)
        } else {
          console.warn("Некорректный формат savedAddresses")
        }
      } catch (err) {
        console.error("Ошибка при парсинге savedAddresses:", err)
      }
    }
    const savedPersonal = localStorage.getItem("personalData")
    if (savedPersonal) {
      try {
        const parsed = JSON.parse(savedPersonal)
        parsed.birthDate = new Date(parsed.birthDate)
        setPersonalData(parsed)
      } catch (err) {
        console.error("Ошибка при парсинге personalData:", err)
      }
    }
  }, [])

  const handleAddressSubmit = (data: AddressData) => {
    let updated: AddressData[] = []
    if (editIndex !== null) {
      updated = [...addresses]
      updated[editIndex] = data
      setEditIndex(null)
    } else {
      updated = [...addresses, data]
    }
    setAddresses(updated)
    localStorage.setItem("savedAddresses", JSON.stringify(updated))
    setIsOpenEdit(false)
  }

  const handleRemove = (index: number) => {
    const updated = addresses.filter((_, i) => i !== index)
    setAddresses(updated)
    localStorage.setItem("savedAddresses", JSON.stringify(updated))
  }

  const handleEdit = (index: number) => {
    setEditIndex(index)
    setIsOpenEdit(true)
  }

  return (
    <div className={css.profile_data}>
      <h6 className={css.profile_data_title}>Ваші персональні дані</h6>
      <AnimatePresence mode="wait">
        {!personalData || isEditingPersonalData ? (
          <PersonalDataForm
            initialValues={personalData || undefined}
            onSuccess={(data) => {
              setPersonalData(data)
              localStorage.setItem("personalData", JSON.stringify(data))
              setIsEditingPersonalData(false)
              onPersonalDataSuccess()
            }}
          />
        ) : (
          <motion.div
            key="saved"
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {personalData.birthDate ? (
              <SavedPersonalData
                name={personalData.name}
                surname={personalData.surname}
                patronymic={personalData.patronymic}
                birthDate={personalData.birthDate}
                phone={personalData.phone}
                email={personalData.email}
                onEdit={() => setIsEditingPersonalData(true)}
                onRemove={() => {
                  setPersonalData(null)
                  localStorage.removeItem("personalData")
                }}
              />
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className={classNames(css.address_edit_btn, { [css.open]: isOpenEdit })}
        onClick={handleToggleEdit}
      >
        <h6 className={css.profile_data_title}>Адреса доставки</h6>
        <motion.div className={css.open_status}>
          <motion.span
            className={css.bar}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className={css.bar}
            animate={{ opacity: isOpenEdit ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpenEdit && (
          <motion.div
            key="addressForm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <AddressForm
              onSubmit={handleAddressSubmit}
              initialValues={editIndex !== null ? addresses[editIndex] : undefined}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        <AnimatePresence initial={false}>
          {addresses.length > 0 ? (
            addresses.map((address, index) => (
              <motion.div
                key="addressList"
                initial={false}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <SavedAddress
                  key={index}
                  addressData={address}
                  onEdit={() => handleEdit(index)}
                  onRemove={() => handleRemove(index)}
                />
              </motion.div>
            ))
          ) : (
            <p className={css.value_without_address}>Немає збережених адрес.</p>
          )}
        </AnimatePresence>
      </AnimatePresence>
      <p className={css.profile_data_address_tip}>
        Ми зберігаємо останні адреси доставки, які ви вказуєте при оформленні замовлення.
      </p>
    </div>
  )
}
