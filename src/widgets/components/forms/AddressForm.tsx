import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { FormField, Button } from "@/shared/ui"
import { AddressData } from "@/shared/types/form-data.interface"
import css from "./styles.module.scss"
import { useTranslations } from "next-intl"

interface AddressFormProps {
  onSubmit: (data: AddressData) => void
  initialValues?: AddressData
}

export const AddressForm: React.FC<AddressFormProps> = ({ onSubmit, initialValues }) => {
  const tFormName = useTranslations("form.name")
  const tFormSurname = useTranslations("form.surname")
  const tFormPatronymic = useTranslations("form.patronymic")
  const tFormPhone = useTranslations("form.phone")
  const tFormAddress = useTranslations("form.address")
  const tFormPostOffice = useTranslations("form.post-office")
  const tButtons = useTranslations("buttons")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddressData>({
    defaultValues: initialValues,
  })
  useEffect(() => {
    if (initialValues) {
      reset(initialValues)
    }
  }, [initialValues, reset])

  const handleFormSubmit = (data: AddressData) => {
    onSubmit(data)
    reset()
  }

  return (
    <form
      className={`${css.profile_data_form} ${css.address_form}`}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className={css.profile_data_input_wrap}>
        <FormField
          className={css.profile_data_input}
          id="address"
          placeholder={tFormAddress("placeholder")}
          type="text"
          register={register("address", { required: tFormAddress("error") })}
          error={errors.address?.message}
        />
        <FormField
          className={css.profile_data_input}
          id="postOffice"
          placeholder={tFormPostOffice("placeholder")}
          type="text"
          register={register("postOffice", { required: tFormPostOffice("error") })}
          error={errors.postOffice?.message}
        />
        <FormField
          className={css.profile_data_input}
          id="name"
          placeholder={tFormName("placeholder")}
          type="text"
          register={register("name", { required: tFormName("error") })}
          error={errors.name?.message}
        />
        <FormField
          className={css.profile_data_input}
          id="surname"
          placeholder={tFormSurname("placeholder")}
          type="text"
          register={register("surname", { required: tFormSurname("error") })}
          error={errors.surname?.message}
        />
        <FormField
          className={css.profile_data_input}
          id="patronymic"
          placeholder={tFormPatronymic("placeholder")}
          type="text"
          register={register("patronymic", { required: tFormPatronymic("error") })}
          error={errors.patronymic?.message}
        />
        <FormField
          className={css.profile_data_input}
          id="phone"
          placeholder="+38(___)___-__-__"
          type="tel"
          register={register("phone", {
            required: tFormPhone("error"),
            pattern: {
              value: /^\+38\s?\(?0\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
              message: tFormPhone("pattern"),
            },
          })}
          error={errors.phone?.message}
        />
      </div>
      <Button
        modifier="secondary"
        iconName="icon_check"
        type="submit"
      >
        {tButtons("save_btn")}
      </Button>
    </form>
  )
}
