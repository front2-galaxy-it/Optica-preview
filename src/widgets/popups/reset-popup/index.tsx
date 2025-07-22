"use client"

import React, { useRef, useState } from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { Button, FormField } from "@/shared/ui"
import { useForm } from "react-hook-form"
import { FormData } from "@/shared/types/form-data.interface"
import { useTranslations } from "next-intl"

interface ResetPopupProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export const ResetPopup: React.FC<ResetPopupProps> = ({ isOpen, onClose, onSuccess }) => {
  const tPopupsResetPass = useTranslations("popups.password-recovery-popup")
  const tFormPhone = useTranslations("form.phone")
  const tFormNewPass = useTranslations("form.new-password")
  const tFormReNewPass = useTranslations("form.confirm-password")
  const tButtons = useTranslations("buttons")

  const [step, setStep] = useState<"phone" | "code" | "password">("phone")
  const inputs = useRef<Array<HTMLInputElement | null>>([])

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>()

  const password = watch("password")

  const closePopup = () => {
    onClose()
  }

  const onSubmit = (data: FormData) => {
    if (step === "phone") {
      console.log("Телефон отправлен:", data.phone)
      setStep("code")
    } else if (step === "code") {
      console.log("Код:")
      setStep("password")
    } else if (step === "password") {
      console.log("Новый пароль:", data.password)
      onClose()
      onSuccess()
      setStep("phone")
    }
  }

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
          <form onSubmit={handleSubmit(onSubmit)}>
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
                error={errors.phone?.message}
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
                  error={errors.password?.message}
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
                    validate: (value) => value === password || tFormReNewPass("mismatch"), // сообщение об ошибке, если не совпадают
                  })}
                  error={errors.confirmPassword?.message}
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
