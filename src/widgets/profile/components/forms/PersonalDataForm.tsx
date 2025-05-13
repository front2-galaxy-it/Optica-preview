import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { FormField, DatePickerField, Button } from "@/shared/ui"
import { FormData } from "@/shared/types/form-data.interface"
import css from "./styles.module.scss"

interface PersonalDataFormProps {
  onSuccess?: (data: FormData) => void
  initialValues?: FormData
}

export const PersonalDataForm: React.FC<PersonalDataFormProps> = ({ onSuccess, initialValues }) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: initialValues,
  })

  useEffect(() => {
    if (initialValues) {
      reset(initialValues)
    }
  }, [initialValues, reset])

  const onSubmit = (data: FormData) => {
    console.log("Personal Data:", data)

    if (onSuccess) {
      onSuccess(data)
    }
  }

  return (
    <form
      className={css.profile_data_form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={css.profile_data_input_wrap}>
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
        <DatePickerField
          name="birthDate"
          control={control}
          rules={{ required: "Заповніть поле" }}
          error={errors.birthDate?.message}
          placeholder="дд/мм/рррр народження"
          className={css.profile_data_input}
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
        <FormField
          className={css.profile_data_input}
          id="email"
          placeholder="Email"
          type="email"
          register={register("email", { required: "Заповніть поле" })}
          error={errors.email?.message}
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
