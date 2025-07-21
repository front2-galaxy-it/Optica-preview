"use client"

import React from "react"
import css from "./styles.module.scss"
import { Button, CheckboxPolicy, FormField, RootLink } from "@/shared/ui"
import { useForm } from "react-hook-form"
import { ClientRoutes } from "@/shared/routes"
import classNames from "classnames"
import { useTranslations } from "next-intl"

interface RegisterFormFProps {
  className?: string
}

export const RegisterForm: React.FC<RegisterFormFProps> = ({ className }) => {
  const tProfileRegister = useTranslations("profile-page.register-description")
  const tProfile = useTranslations("profile-page")
  const tButtons = useTranslations("buttons")

  const tFormName = useTranslations("form.name")
  const tFormSurname = useTranslations("form.surname")
  const tFormPhone = useTranslations("form.phone")
  const tFormPassword = useTranslations("form.password")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  interface FormData {
    name: string
    surname: string
    phone: string
    password: string
    policy_agree: boolean
  }

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <div className={classNames(css.form_wrap, className)}>
      <div className={css.form_title}>
        <p>{tProfileRegister("content")}</p> {""}
        <RootLink
          href={ClientRoutes.authorization.path}
          className={css.link}
        >
          {tProfileRegister("link")}
        </RootLink>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          id="name"
          placeholder={tFormName("placeholder")}
          type="text"
          colorType="white"
          register={register("name", {
            required: {
              value: true,
              message: tFormName("required"),
            },
          })}
          error={errors.name?.message}
        />
        <FormField
          id="surname"
          placeholder={tFormSurname("placeholder")}
          type="text"
          colorType="white"
          register={register("surname", {
            required: {
              value: true,
              message: tFormSurname("required"),
            },
          })}
          error={errors.surname?.message}
        />
        <FormField
          id="phone"
          placeholder="+38(___)___-__-__"
          type="tel"
          colorType="white"
          register={register("phone", {
            required: {
              value: true,
              message: tFormPhone("required"),
            },
            pattern: {
              value: /^\+38\s?\(?0\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
              message: tFormPhone("pattern"),
            },
          })}
          error={errors.phone?.message}
        />
        <FormField
          placeholder={tFormPassword("placeholder")}
          type="text"
          register={register("password", {
            required: {
              value: true,
              message: tFormPassword("error"),
            },
          })}
          error={errors.password?.message}
        />
        <CheckboxPolicy
          className={css.checkbox}
          register={register("policy_agree", {
            required: {
              value: true,
              message: "Погодьтеся з політикою конфіденційності.",
            },
          })}
          error={errors.policy_agree?.message}
        />
        <Button
          className={css.submit_btn}
          modifier="primary"
          iconName="arrow_right"
          type="submit"
        >
          {tButtons("register_btn")}
        </Button>
        <span className={css.spacer}>{tProfile("connecting-label")}</span>
        <div className={css.form_btn_wrap}>
          <Button
            className={css.auth_btn_social}
            modifier="secondary"
            iconName="icon_google"
          >
            Google
          </Button>
          <Button
            className={css.auth_btn_social}
            modifier="secondary"
            iconName="icon_facebook"
          >
            Facebook
          </Button>
        </div>
      </form>
    </div>
  )
}
