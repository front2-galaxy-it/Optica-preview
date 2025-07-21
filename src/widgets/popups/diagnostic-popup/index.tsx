"use client"

import React, { useEffect } from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { Button, DatePickerField, FormField } from "@/shared/ui"
import { useForm } from "react-hook-form"
import { FormData } from "@/shared/types/form-data.interface"
import { useTranslations } from "next-intl"

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

  const tPopups = useTranslations("popups.diagnostic-popup")
  const tFormName = useTranslations("form.name")
  const tFormSurname = useTranslations("form.surname")
  const tFormPhone = useTranslations("form.phone")
  const tFormDate = useTranslations("form.date")
  const tFormTime = useTranslations("form.time")
  const tButtons = useTranslations("buttons")

  return (
    <>
      <div className={classNames(css.diagnostic_popup_container, isOpen && css.show)}>
        <div className={css.diagnostic_popup}>
          <div className={css.diagnostic_popup_head}>
            <p className={css.diagnostic_popup_head_title}>{tPopups("label")}</p>
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
            <h6 className={css.diagnostic_popup_content_title}>{tPopups("title")}</h6>
            <form
              className={css.diagnostic_popup_form}
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormField
                id="name"
                placeholder={tFormName("placeholder")}
                type="text"
                colorType="white"
                register={register("name", {
                  required: {
                    value: true,
                    message: tFormName("error"),
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
                    message: tFormSurname("error"),
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
              <div className={css.inputs_wrap}>
                <DatePickerField
                  name="birthDate"
                  control={control}
                  mode="date"
                  placeholder={tFormDate("placeholder")}
                  error={errors.birthDate?.message}
                />
                <DatePickerField
                  name="time"
                  control={control}
                  mode="time"
                  placeholder={tFormTime("placeholder")}
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
                {tButtons("signup_btn")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
