"use client"

import React, { useEffect } from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { Button, DatePickerField, FormField } from "@/shared/ui"
import { useForm } from "react-hook-form"
import { FormData } from "@/shared/types/form-data.interface"

interface DiagnosticPopupProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export const DiagnosticPopup: React.FC<DiagnosticPopupProps> = ({ isOpen, onClose, onSuccess }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      birthDate: null,
      time: null,
    },
  })

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
                error={errors.name?.message}
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
                    message: "Заповніть поле",
                  },
                  pattern: {
                    value: /^\+38\s?\(?0\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
                    message: "Невірний формат телефону",
                  },
                })}
                error={errors.phone?.message}
              />
              <div className={css.inputs_wrap}>
                <DatePickerField
                  name="birthDate"
                  control={control}
                  mode="date"
                  placeholder="дд/мм/рррр"
                  error={errors.birthDate?.message}
                />
                <DatePickerField
                  name="time"
                  control={control}
                  mode="time"
                  placeholder="час"
                  minTime={new Date(0, 0, 0, 9, 0)}
                  maxTime={new Date(0, 0, 0, 18, 0)}
                  error={errors.time?.message}
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
