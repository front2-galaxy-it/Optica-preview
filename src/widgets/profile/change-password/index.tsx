import React from "react"
import css from "./styles.module.scss"
import { Button, FormField } from "@/shared/ui"
import { useForm } from "react-hook-form"
import { FormData } from "@/shared/types/form-data.interface"

interface PasswordChangeProps {
  onSuccess?: () => void
}

export const PasswordChange: React.FC<PasswordChangeProps> = ({ onSuccess }) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log("Password Change:", data)

    if (onSuccess) {
      onSuccess()
    }
  }
  return (
    <div className={css.password_change}>
      <h6 className={css.password_change_title}>Зміна паролю</h6>
      <form
        className={css.password_change_form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormField
          id="email"
          type="email"
          placeholder="Email"
          register={register("email", { required: "Заповніть поле" })}
          error={errors.email?.message}
        />
        <FormField
          id="oldPassword"
          type="password"
          placeholder="Старий пароль"
          register={register("oldPassword", { required: "Заповніть поле" })}
          error={errors.oldPassword?.message}
        />
        <FormField
          id="newPassword"
          type="password"
          placeholder="Новий пароль"
          register={register("newPassword", {
            required: {
              value: true,
              message: "Заповніть поле",
            },
          })}
          error={errors.newPassword?.message}
        />
        <FormField
          id="reNewPassword"
          type="password"
          placeholder="Повторіть новий пароль"
          register={register("reNewPassword", {
            required: "Заповніть поле",
            validate: (value) => value === getValues("newPassword") || "Паролі не співпадають",
          })}
          error={errors.reNewPassword?.message}
        />
        <Button
          modifier="secondary"
          iconName="icon_check"
          type="submit"
        >
          Зберегти
        </Button>
      </form>
    </div>
  )
}
