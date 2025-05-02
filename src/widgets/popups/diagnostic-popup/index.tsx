"use client"

import React, { useEffect } from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { Button, FormField } from "@/shared/ui"
import { useForm } from "react-hook-form"

interface DiagnosticPopupProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export const DiagnosticPopup: React.FC<DiagnosticPopupProps> = ({ isOpen, onClose, onSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  interface FormData {
    name: string
    surname: string
    phone: string
    date: string
    time: string
  }

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("_lock")
    } else {
      document.body.classList.remove("_lock")
    }

    return () => {
      document.body.classList.remove("_lock")
    }
  }, [isOpen])

  const closePopup = () => {
    onClose()
  }

  const onSubmit = (data: FormData) => {
    console.log(data)
    onClose()
    onSuccess()
  }
  return (
    <>
      <div className={classNames(css.diagnostic_popup_container, isOpen && css.show)}>
        <div className={css.diagnostic_popup}>
          <div className={css.diagnostic_popup_head}>
            <p className={css.diagnostic_popup_head_title}>Запис на діагностику зору</p>
            <button
              type="button"
              className={css.diagnostic_popup_head_close}
              onClick={closePopup}
            >
              <span></span>
              <span></span>
            </button>
          </div>
          <div className={css.diagnostic_popup_content}>
            <h6 className={css.diagnostic_popup_content_title}>
              Залиште свої контакти і наш менеджер зв’яжеться з Вами!
            </h6>
            <form
              className={css.diagnostic_popup_form}
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormField
                id="name"
                placeholder="Ім’я"
                type="text"
                colorType="white"
                register={register("name", {
                  required: {
                    value: true,
                    message: "Заповніть поле",
                  },
                })}
                error={errors.name}
              />
              <FormField
                id="surname"
                placeholder="Прізвище"
                type="text"
                colorType="white"
                register={register("surname", {
                  required: {
                    value: true,
                    message: "Заповніть поле",
                  },
                })}
                error={errors.surname}
              />
              <FormField
                id="phone"
                placeholder="+38(___)___-__-__"
                type="tel"
                colorType="white"
                register={register("phone", {
                  required: {
                    value: true,
                    message: "Заповніть поле",
                  },
                  pattern: {
                    value: /^\+38\s?\(?0\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
                    message: "Невірний формат телефону",
                  },
                })}
                error={errors.phone}
              />
              <div className={css.inputs_wrap}>
                <FormField
                  id="date"
                  placeholder="дд/мм/рррр"
                  type="date"
                  colorType="white"
                  register={register("date", {
                    required: {
                      value: true,
                      message: "Заповніть поле",
                    },
                  })}
                  error={errors.date}
                />
                <FormField
                  id="time"
                  placeholder="час"
                  type="time"
                  colorType="white"
                  register={register("time", {
                    required: {
                      value: true,
                      message: "Заповніть поле",
                    },
                  })}
                  error={errors.time}
                />
              </div>
              <Button
                type="submit"
                modifier="primary"
                iconName="arrow_right"
              >
                Записатися
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
