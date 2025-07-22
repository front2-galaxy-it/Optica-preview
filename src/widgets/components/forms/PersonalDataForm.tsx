import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { FormField, DatePickerField, Button } from "@/shared/ui"
import { FormData } from "@/shared/types/form-data.interface"
import css from "./styles.module.scss"
import { useTranslations } from "next-intl"

interface PersonalDataFormProps {
  onSuccess?: (data: FormData) => void
  initialValues?: FormData
}

export const PersonalDataForm: React.FC<PersonalDataFormProps> = ({ onSuccess, initialValues }) => {
  const tButtons = useTranslations("buttons")
  const tFormName = useTranslations("form.name")
  const tFormSurname = useTranslations("form.surname")
  const tFormPatronymic = useTranslations("form.patronymic")
  const tFormDate = useTranslations("form.date")
  const tFormPhone = useTranslations("form.phone")
  const tFormEmail = useTranslations("form.email")

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
        <DatePickerField
          name="birthDate"
          control={control}
          error={errors.birthDate?.message}
          placeholder={tFormDate("placeholder-2")}
          className={css.profile_data_input}
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
        <FormField
          className={css.profile_data_input}
          id="email"
          placeholder={tFormEmail("placeholder")}
          type="email"
          register={register("email", { required: tFormEmail("required") })}
          error={errors.email?.message}
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
