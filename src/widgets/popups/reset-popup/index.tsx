"use client"

import React, { useRef, useState } from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { Button, FormField } from "@/shared/ui"
import { useForm } from "react-hook-form"
import { FormData } from "@/shared/types/form-data.interface"

interface ResetPopupProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export const ResetPopup: React.FC<ResetPopupProps> = ({ isOpen, onClose, onSuccess }) => {
  const [step, setStep] = useState<"phone" | "code" | "password">("phone")
  const inputs = useRef<Array<HTMLInputElement | null>>([])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

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
          <p className={css.reset_popup_head_title}>Забули пароль?</p>
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
              {step === "phone" && "Якщо ви забули пароль – введіть свій номер телефону"}
              {step === "code" && "Введіть код із SMS"}
              {step === "password" && "Придумайте новий пароль"}
            </h6>

            {step === "phone" && (
              <FormField
                className={css.reset_popup_content_input}
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
                  placeholder="Новий пароль"
                  type="password"
                  register={register("password", {
                    required: {
                      value: true,
                      message: "Поле обов'язкове",
                    },
                    minLength: {
                      value: 6,
                      message: "Мінімум 6 символів",
                    },
                  })}
                  error={errors.password?.message}
                />
                <FormField
                  className={css.reset_popup_content_input}
                  placeholder="Повторіть новий пароль"
                  type="password"
                  register={register("confirmPassword", {
                    required: {
                      value: true,
                      message: "Поле обов'язкове",
                    },
                    minLength: {
                      value: 6,
                      message: "Мінімум 6 символів",
                    },
                  })}
                  error={errors.password?.message}
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
              {step === "phone" && "Скинути пароль"}
              {step === "code" && "Продовжити"}
              {step === "password" && "Зберегти"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
