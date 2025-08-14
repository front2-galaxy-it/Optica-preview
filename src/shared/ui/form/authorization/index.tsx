"use client"

import React, { useState } from "react"
import css from "./styles.module.scss"
import { Button, CheckboxPolicy, FormField, RootLink } from "@/shared/ui"
import { useForm } from "react-hook-form"
import { ClientRoutes } from "@/shared/routes"
import classNames from "classnames"
import { useTranslations } from "next-intl"
import { AuthService } from "@/shared/services/auth.service"

interface AuthorizationFormProps {
  className?: string
  onOpenReset?: () => void
}
export interface ISignInFormData {
  phone: string
  password: string
  policy_agree: string
}

export const AuthorizationForm: React.FC<AuthorizationFormProps> = ({ className, onOpenReset }) => {
  const tProfileLogin = useTranslations("profile-page.auth-description")
  const tProfile = useTranslations("profile-page")
  const tButtons = useTranslations("buttons")
  const tCommon = useTranslations("common")
  const tFormPhone = useTranslations("form.phone")
  const tFormPassword = useTranslations("form.password")

  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [infoMessage, setInfoMessage] = useState<string | null>(null)

  const [isSendConfirmation, setIsSendConfirmation] = useState<boolean>(false)
  const [isError, setISError] = useState<boolean>(false)

  const {
    handleSubmit,
    register,
    reset,
    setError,
    formState: { errors },
  } = useForm<ISignInFormData>()

  const resetHandle = () => {
    reset()
  }

  const onSubmit = handleSubmit(async (data: ISignInFormData) => {
    // console.log(data)

    const successHandle = (res: any) => {
      console.log(res)
      resetHandle()
      AuthService.setCookie("auth_token", res.data.access_token)
      window.location.href = "/"
    }

    const errorHandle = (err: any) => {
      console.log(err)

      if (err.response.data.errors) {
        const { phone, password } = err.response.data.errors

        if (phone) {
          setError("phone", {
            type: "custom",
            message: phone,
          })
        }

        if (password) {
          setError("password", {
            type: "custom",
            message: password,
          })
        }
      } else if (err.response.data.message == "Email is not confirmed") {
        console.log(err.response.data.message)
        resetHandle()
        setIsSendConfirmation(true)
        setTimeout(() => {
          setIsSendConfirmation(false)
        }, 15000)
      } else {
        resetHandle()
        setISError(true)
        setTimeout(() => {
          setISError(false)
        }, 7000)
      }
    }

    await AuthService.login(data).then(successHandle, errorHandle).catch(errorHandle)
  })

  const handleGoogleAuthClick = async () => {
    try {
      const response = await AuthService.loginGoogle()

      if (response.notify) {
        setInfoMessage(`${response.notify.title}: ${response.notify.text}`)
      }

      if (response.url) {
        setTimeout(() => {
          window.location.href = response.url
        }, 1500)
      }
    } catch (err: any) {
      console.error("Google login error", err)
      setErrorMessage(null)

      if (err?.response?.data?.errors) {
        const errors = err.response.data.errors
        if (errors.token) {
          setErrorMessage(`Token error: ${errors.token}`)
        } else if (errors.email) {
          setErrorMessage(`Email error: ${errors.email}`)
        }
        return
      }

      if (err?.response?.data?.message) {
        if (err.response.data.message === "Phone is not confirmed") {
          setErrorMessage("Phone is not confirmed.")
          return
        }
      }

      setErrorMessage(tCommon("google-login-error"))
    }
  }

  const handleFacebookAuthClick = async () => {
    try {
      const response = await AuthService.loginFacebook()

      if (response.notify) {
        setInfoMessage(`${response.notify.title}: ${response.notify.text}`)
      }

      if (response.url) {
        setTimeout(() => {
          window.location.href = response.url
        }, 1500)
      }
    } catch (err: any) {
      console.error("Google login error", err)
      setErrorMessage(null)

      if (err?.response?.data?.errors) {
        const errors = err.response.data.errors
        if (errors.token) {
          setErrorMessage(`Token error: ${errors.token}`)
        } else if (errors.email) {
          setErrorMessage(`Email error: ${errors.email}`)
        }
        return
      }

      if (err?.response?.data?.message) {
        if (err.response.data.message === "Phone is not confirmed") {
          setErrorMessage("Phone is not confirmed.")
          return
        }
      }

      setErrorMessage(tCommon("facebook-login-error"))
    }
  }

  return (
    <div className={classNames(css.form_wrap, className)}>
      {infoMessage && <div className={css.send_info}>{infoMessage}</div>}
      {errorMessage && <div className={css.send_info}>{errorMessage}</div>}
      {isSendConfirmation && <div className={css.send_info}>{tCommon("confirmation-email")}</div>}
      {isError && <div className={css.send_info}>{tCommon("error-send")}</div>}
      <div className={css.form_title}>
        <p>{tProfileLogin("content")}</p>
        <RootLink
          href={ClientRoutes.authorization.path}
          className={css.link}
        >
          {tProfileLogin("link")}
        </RootLink>
      </div>
      <form onSubmit={onSubmit}>
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
          type="password"
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
          {tButtons("login_btn")}
        </Button>
        <span className={css.spacer}>{tProfile("connecting-label")}</span>
        <div className={css.form_btn_wrap}>
          <Button
            className={css.auth_btn_social}
            modifier="secondary"
            iconName="icon_google"
            onClick={handleGoogleAuthClick}
          >
            Google
          </Button>
          <Button
            className={css.auth_btn_social}
            modifier="secondary"
            iconName="icon_facebook"
            onClick={handleFacebookAuthClick}
          >
            Facebook
          </Button>
        </div>
        <button
          type="button"
          className={css.reset}
          onClick={onOpenReset}
        >
          {tProfile("fogot-password-title")}
        </button>
      </form>
    </div>
  )
}
