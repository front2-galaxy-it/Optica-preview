"use client"

import React, { useEffect, useState } from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { Button, FormField } from "@/shared/ui"
import { useForm } from "react-hook-form"
import { useTranslations } from "next-intl"

import { DiagnosticService } from "@/shared/services/diagnostic.service"

interface DiagnosticPopupProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export interface IDiagnosticApointmentForm {
  name: string
  surname: string
  phone: string
  birthDate: string
  time: string
}

export const DiagnosticPopup: React.FC<DiagnosticPopupProps> = ({ isOpen, onClose, onSuccess }) => {
  const tPopups = useTranslations("popups.diagnostic-popup")
  const tFormName = useTranslations("form.name")
  const tFormSurname = useTranslations("form.surname")
  const tFormPhone = useTranslations("form.phone")
  const tFormDate = useTranslations("form.date")
  const tFormTime = useTranslations("form.time")
  const tButtons = useTranslations("buttons")

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<IDiagnosticApointmentForm>({
    defaultValues: {
      name: "",
      surname: "",
      phone: "",
      birthDate: "",
      // time: "",
    },
  })

  const [isError, setISError] = useState<boolean>(false)

  const resetHandle = () => {
    reset()
  }

  const onSubmit = handleSubmit(async (data: IDiagnosticApointmentForm) => {
    const successHandle = (res: any) => {
      console.log(res)
      resetHandle()
      DiagnosticService.setCookie("auth_token", res.data.access_token)
      window.location.href = "/"
      onClose()
      onSuccess()
    }

    const errorHandle = (err: any) => {
      const errorsFromServer = err?.response?.data?.errors
      if (errorsFromServer) {
        Object.entries(errorsFromServer).forEach(([key, message]) => {
          setError(key as keyof IDiagnosticApointmentForm, {
            type: "custom",
            message: message as string,
          })
        })
      } else {
        resetHandle()
        setISError(true)
        setTimeout(() => setISError(false), 7000)
      }
    }

    await DiagnosticService.makeAppointment(data)
      .then(successHandle, errorHandle)
      .catch(errorHandle)
  })

  useEffect(() => {
    document.body.classList.toggle("_lock", isOpen)
    return () => document.body.classList.remove("_lock")
  }, [isOpen])

  const closePopup = () => {
    onClose()
  }

  return (
    <>
      <div className={classNames(css.diagnostic_popup_container, isOpen && css.show)}>
        <div className={css.diagnostic_popup}>
          <div className={css.diagnostic_popup_head}>
            {isError && <div className={css.send_info}>Помилка</div>}
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
              onSubmit={onSubmit}
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
                <FormField
                  className={css.input}
                  id="date"
                  type="date"
                  colorType="white"
                  placeholder={tFormDate("placeholder")}
                  register={register("birthDate", {
                    required: {
                      value: true,
                      message: tFormDate("error"),
                    },
                  })}
                  error={errors.birthDate?.message}
                />
                <FormField
                  className={css.input}
                  id="time"
                  type="time"
                  colorType="white"
                  placeholder={tFormTime("placeholder")}
                  min="09:00"
                  max="18:00"
                  register={register("time", {
                    required: {
                      value: true,
                      message: tFormTime("error"),
                    },
                  })}
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
