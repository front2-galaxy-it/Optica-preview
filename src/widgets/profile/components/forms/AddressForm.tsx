import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { FormField, Button } from "@/shared/ui"
import { AddressData } from "@/shared/types/form-data.interface"
import css from "./styles.module.scss"

interface AddressFormProps {
  onSubmit: (data: AddressData) => void
  initialValues?: AddressData
}

export const AddressForm: React.FC<AddressFormProps> = ({ onSubmit, initialValues }) => {
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
          placeholder="Адреса"
          type="text"
          register={register("address", { required: "Заповніть поле" })}
          error={errors.address?.message}
        />
        <FormField
          className={css.profile_data_input}
          id="postOffice"
          placeholder="Відділення пошти"
          type="text"
          register={register("postOffice", { required: "Заповніть поле" })}
          error={errors.postOffice?.message}
        />
        <FormField
          className={css.profile_data_input}
          id="name"
          placeholder="Ваше ім’я"
          type="text"
          register={register("name", { required: "Заповніть поле" })}
          error={errors.name?.message}
        />
        <FormField
          className={css.profile_data_input}
          id="surname"
          placeholder="Прізвище"
          type="text"
          register={register("surname", { required: "Заповніть поле" })}
          error={errors.surname?.message}
        />
        <FormField
          className={css.profile_data_input}
          id="patronymic"
          placeholder="По батькові"
          type="text"
          register={register("patronymic", { required: "Заповніть поле" })}
          error={errors.patronymic?.message}
        />
        <FormField
          className={css.profile_data_input}
          id="phone"
          placeholder="+38(___)___-__-__"
          type="tel"
          register={register("phone", {
            required: "Заповніть поле",
            pattern: {
              value: /^\+38\s?\(?0\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
              message: "Невірний формат телефону",
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
        Зберегти
      </Button>
    </form>
  )
}
