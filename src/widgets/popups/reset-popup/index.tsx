"use client"

import React, { useRef, useState } from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { Button, FormField } from "@/shared/ui"
import { useForm } from "react-hook-form"
import { useTranslations } from "next-intl"
import { AuthService } from "@/shared/services/auth.service"
// import { useRouter } from "next/navigation"
// import { ClientRoutes } from "@/shared/routes"
interface ResetPopupProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export interface RestoreBody {
  phone: string
}

export interface VerifyBody {
  phone: string
  code: string
}

export interface ResetBody {
  phone: string
  password: string
  confirmPassword: string
}

export const ResetPopup: React.FC<ResetPopupProps> = ({ isOpen, onClose, onSuccess }) => {
  const tPopupsResetPass = useTranslations("popups.password-recovery-popup")
  const tFormPhone = useTranslations("form.phone")
  const tFormNewPass = useTranslations("form.new-password")
  const tFormReNewPass = useTranslations("form.confirm-password")
  const tButtons = useTranslations("buttons")
  const tCommon = useTranslations("common")

  const [step, setStep] = useState<"phone" | "code" | "password">("phone")
  const inputs = useRef<Array<HTMLInputElement | null>>([])

  const [isSendConfirmation, setIsSendConfirmation] = useState<boolean>(false)
  const [isError, setISError] = useState<boolean>(false)
  // const router = useRouter()

  const { getValues } = useForm<any>()
  const password = getValues("password")

  const {
    handleSubmit,
    register,
    reset,
    setError,
    formState: { errors },
  } = useForm<any>()

  const resetHandle = () => {
    reset()
  }

  // const onSubmit = handleSubmit(async (data: IForgotData) => {
  //   // console.log(data)

  //   const successHandle = () => {
  //     resetHandle()
  //     setIsSendConfirmation(true)
  //     setTimeout(() => {
  //       setIsSendConfirmation(false)
  //       router.push(ClientRoutes.authorization.path)
  //     }, 7000)
  //   }

  //   const errorHandle = (err: any) => {
  //     console.log(err)

  //     if (step === "phone") {
  //       console.log("Телефон отправлен:", data.phone)
  //       setStep("code")
  //     } else if (step === "code") {
  //       console.log("Код:")
  //       setStep("password")
  //     } else if (step === "password") {
  //       console.log("Новый пароль:", data.password)
  //       onClose()
  //       onSuccess()
  //       setStep("phone")
  //     }

  //     if (err.response.data.errors) {
  //       const { phone } = err.response.data.errors

  //       if (phone) {
  //         setError("phone", {
  //           type: "custom",
  //           message: phone,
  //         })
  //       }
  //     } else if (err.response.data.message == "Email is not confirmed") {
  //       console.log(err.response.data.message)
  //       resetHandle()
  //       setIsSendConfirmation(true)
  //       setTimeout(() => {
  //         setIsSendConfirmation(false)
  //       }, 10000)
  //     } else {
  //       resetHandle()
  //       setISError(true)
  //       setTimeout(() => {
  //         setISError(false)
  //       }, 7000)
  //     }
  //   }

  //   await AuthService.forgot(data).then(successHandle, errorHandle).catch(errorHandle)
  // })

  const onSubmit = handleSubmit(async (data: any) => {
    try {
      if (step === "phone") {
        await AuthService.restore({ phone: data.phone })

        setStep("code") // переходим только если restore() прошёл успешно
      } else if (step === "code") {
        const code = inputs.current.map((input) => input?.value).join("")
        if (code.length !== 4) {
          setISError(true)
          setTimeout(() => setISError(false), 3000)
          return
        }

        await AuthService.verify({ phone: data.phone, code })

        setStep("password")
      } else if (step === "password") {
        if (data.password !== data.confirmPassword) {
          setError("confirmPassword", {
            type: "custom",
            message: tFormReNewPass("mismatch"),
          })
          return
        }

        await AuthService.reset({
          phone: data.phone,
          password: data.password,
          confirmPassword: data.confirmPassword,
        })

        resetHandle()
        onClose()
        onSuccess()
        setStep("phone")
      }
    } catch (err: any) {
      console.error(err)
      const errorData = err?.response?.data

      if (errorData?.errors?.phone) {
        setError("phone", {
          type: "custom",
          message: errorData.errors.phone,
        })
      } else if (errorData?.message === "Email is not confirmed") {
        resetHandle()
        setIsSendConfirmation(true)
        setTimeout(() => setIsSendConfirmation(false), 10000)
      } else {
        resetHandle()
        setISError(true)
        setTimeout(() => setISError(false), 7000)
      }
    }
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value.replace(/\D/g, "")
    if (value) {
      e.target.value = value[0]
      if (index < 3) {
        inputs.current[index + 1]?.focus()
      }
    } else {
      e.target.value = ""
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputs.current[index - 1]?.focus()
    }
  }

  const closePopup = () => {
    onClose()
  }

  return (
    <div className={classNames(css.reset_popup_container, isOpen && css.show)}>
      <div className={css.reset_popup}>
        <div className={css.reset_popup_head}>
          <p className={css.reset_popup_head_title}>{tPopupsResetPass("label-2")}</p>
          <button
            type="button"
            className={css.reset_popup_head_close}
            onClick={closePopup}
          >
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={css.reset_popup_content}>
          {isSendConfirmation && (
            <div className={css.send_info}>{tCommon("confirmation-email")}</div>
          )}
          {isError && <div className={css.send_info}>{tCommon("error-send")}</div>}
          <form onSubmit={onSubmit}>
            <h6 className={css.reset_popup_content_title}>
              {step === "phone" && tPopupsResetPass("forgot_password_instruction")}
              {step === "code" && tPopupsResetPass("code_instruction")}
              {step === "password" && tPopupsResetPass("new_pass_instruction")}
            </h6>

            {step === "phone" && (
              <FormField
                className={css.reset_popup_content_input}
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
                error={typeof errors.phone?.message === "string" ? errors.phone.message : undefined}
              />
            )}

            {step === "code" && (
              <div className={css.reset_popup_content_code}>
                {[0, 1, 2, 3].map((i) => (
                  <input
                    key={i}
                    type="text"
                    maxLength={1}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    ref={(el) => {
                      inputs.current[i] = el
                    }}
                    onChange={(e) => handleChange(e, i)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                  />
                ))}
              </div>
            )}

            {step === "password" && (
              <>
                <FormField
                  className={css.reset_popup_content_input}
                  placeholder={tFormNewPass("placeholder")}
                  type="password"
                  register={register("password", {
                    required: {
                      value: true,
                      message: tFormNewPass("required"),
                    },
                    minLength: {
                      value: 6,
                      message: tFormNewPass("error"),
                    },
                  })}
                  error={
                    typeof errors.password?.message === "string"
                      ? errors.password?.message
                      : undefined
                  }
                />
                <FormField
                  className={css.reset_popup_content_input}
                  placeholder={tFormReNewPass("placeholder")}
                  type="password"
                  register={register("confirmPassword", {
                    required: {
                      value: true,
                      message: tFormReNewPass("required"),
                    },
                    minLength: {
                      value: 6,
                      message: tFormReNewPass("required"),
                    },
                    validate: (value) => value === password || tFormReNewPass("mismatch"),
                  })}
                  error={
                    typeof errors.confirmPassword?.message === "string"
                      ? errors.confirmPassword.message
                      : undefined
                  }
                />
              </>
            )}

            <Button
              className={css.reset_popup_btn}
              modifier="primary"
              iconName="arrow_right"
              size="medium"
              type="submit"
            >
              {step === "phone" && tButtons("reset_btn")}
              {step === "code" && tButtons("continue_btn")}
              {step === "password" && tButtons("save_btn")}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
