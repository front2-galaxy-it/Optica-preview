import React from "react"
import css from "./styles.module.scss"
import { Button, FormField } from "@/shared/ui"
import { useForm } from "react-hook-form"
import { FormData } from "@/shared/types/form-data.interface"
import { useTranslations } from "next-intl"

interface PasswordChangeProps {
  onSuccess?: () => void
}

export const PasswordChange: React.FC<PasswordChangeProps> = ({ onSuccess }) => {
  const tProfile = useTranslations("profile-page")
  const tButtons = useTranslations("buttons")
  const tFormEmail = useTranslations("form.email")
  const tFormOldPass = useTranslations("form.old-password")
  const tFormNewPass = useTranslations("form.new-password")
  const tFormConfirmPass = useTranslations("form.confirm-password")
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
      <h6 className={css.password_change_title}>{tProfile("password-change-label")}</h6>
      <form
        className={css.password_change_form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormField
          id="email"
          type="email"
          placeholder={tFormEmail("placeholder")}
          register={register("email", { required: tFormEmail("error") })}
          error={errors.email?.message}
        />
        <FormField
          id="oldPassword"
          type="password"
          placeholder={tFormOldPass("placeholder")}
          register={register("oldPassword", { required: tFormOldPass("error") })}
          error={errors.oldPassword?.message}
        />
        <FormField
          id="newPassword"
          type="password"
          placeholder={tFormNewPass("placeholder")}
          register={register("newPassword", {
            required: {
              value: true,
              message: tFormNewPass("placeholder"),
            },
          })}
          error={errors.newPassword?.message}
        />
        <FormField
          id="reNewPassword"
          type="password"
          placeholder={tFormConfirmPass("placeholder")}
          register={register("reNewPassword", {
            required: tFormConfirmPass("placeholder"),
            validate: (value) => value === getValues("newPassword") || tFormConfirmPass("mismatch"),
          })}
          error={errors.reNewPassword?.message}
        />
        <Button
          modifier="secondary"
          iconName="icon_check"
          type="submit"
        >
          {tButtons("save_btn")}
        </Button>
      </form>
    </div>
  )
}
