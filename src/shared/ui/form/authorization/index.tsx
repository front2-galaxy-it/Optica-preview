"use client"

import React from "react"
import css from "./styles.module.scss"
import { Button, CheckboxPolicy, FormField, RootLink } from "@/shared/ui"
import { useForm } from "react-hook-form"
import { ClientRoutes } from "@/shared/routes"
import classNames from "classnames"

interface AuthorizationFormProps {
  className?: string
}

export const AuthorizationForm: React.FC<AuthorizationFormProps> = ({ className }) => {
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
      <p className={css.form_title}>
        Якщо ви ще не зараєстровані, перейдіть на сторінку{" "}
        <RootLink
          href={ClientRoutes.register.path}
          className={css.link}
        >
          реєстрації
        </RootLink>
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          placeholder="+3 8(___) ___ - __ - __"
          type="tel"
          register={register("phone", {
            required: {
              value: true,
              message: "Поле обов'язкове",
            },
            pattern: {
              value: /^\+38\s?\(?0\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
              message: "Невірний формат телефону",
            },
          })}
          error={errors.phone?.message}
        />
        <FormField
          placeholder="Пароль"
          type="text"
          register={register("password", {
            required: {
              value: true,
              message: "Заповніть поле",
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
          Авторизуватися
        </Button>
        <span className={css.spacer}>або</span>
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
