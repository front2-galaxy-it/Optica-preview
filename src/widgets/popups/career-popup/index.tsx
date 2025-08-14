"use client"

import React, { useEffect, useRef, useState } from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { Button, CheckboxPolicy, FormField, FormTextArea } from "@/shared/ui"
import { useForm } from "react-hook-form"
import { FormData } from "@/shared/types/form-data.interface"
import { useTranslations } from "next-intl"
interface careerPopupProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export const CareerPopup: React.FC<careerPopupProps> = ({ isOpen, onClose, onSuccess }) => {
  const tButtons = useTranslations("buttons")
  const tPopupCareer = useTranslations("popups.career-popup")
  const tFormName = useTranslations("form.name")
  const tFormSurname = useTranslations("form.surname")
  const tFormPhone = useTranslations("form.phone")
  const tFormVacancy = useTranslations("form.vacancy")
  const tFormComment = useTranslations("form.comment-message")
  const tFormPolicy = useTranslations("form.policyAgree")
  const tFormFile = useTranslations("form.form-file")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const {
    ref: registerFileRef,
    onChange: registerOnChange,
    ...restFileProps
  } = register("file", {
    required: tFormFile("required"),
    validate: {
      allowedType: (files) =>
        (files &&
          [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ].includes(files[0]?.type)) ||
        tFormFile("wrong-format"),
      maxSize: (files) => (files && files[0]?.size < 5 * 1024 * 1024) || tFormFile("max-file-size"),
    },
  })

  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const [fileName, setFileName] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setFileName(file.name)
      setError(null)
    }
  }

  return (
    <>
      <div className={classNames(css.career_popup_container, isOpen && css.show)}>
        <div className={css.career_popup}>
          <div className={css.career_popup_head}>
            <p className={css.career_popup_head_title}>{tPopupCareer("label")}</p>
            <button
              type="button"
              className={css.career_popup_head_close}
              onClick={closePopup}
            >
              <span></span>
              <span></span>
            </button>
          </div>
          <div className={css.career_popup_content}>
            <h6 className={css.career_popup_content_title}>{tPopupCareer("title-2")}</h6>
            <form
              className={css.career_popup_form}
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
                    message: tFormPhone("error"),
                  },
                  pattern: {
                    value: /^\+38\s?\(?0\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
                    message: tFormPhone("pattern"),
                  },
                })}
                error={errors.phone?.message}
              />
              <FormField
                id="vacancy"
                placeholder={tFormVacancy("placeholder")}
                type="text"
                colorType="white"
                register={register("vacancy", {
                  required: {
                    value: true,
                    message: tFormVacancy("error"),
                  },
                })}
                error={errors.phone?.message}
              />
              <div className={css.upload_wrap}>
                <input
                  type="file"
                  ref={(e) => {
                    registerFileRef(e)
                    fileInputRef.current = e
                  }}
                  onChange={(e) => {
                    registerOnChange(e)
                    handleFileChange(e)
                  }}
                  accept=".pdf,.doc,.docx"
                  className={css.hidden_input}
                  {...restFileProps}
                />

                <Button
                  className={css.career_btn}
                  modifier="secondary"
                  iconName="icon_pin"
                  onClick={handleClick}
                >
                  {tButtons("cv_btn")}
                </Button>
                <span className={css.error_message}>{error}</span>
                <span className={css.file_info}>{fileName && `Файл: ${fileName}`}</span>
              </div>
              <FormTextArea placeholder={tFormComment("placeholder")} />
              <CheckboxPolicy
                className={css.career_policy}
                register={register("policyAgree", {
                  required: {
                    value: true,
                    message: tFormPolicy("error"),
                  },
                })}
                error={errors.policyAgree?.message}
              />
              <Button
                type="submit"
                modifier="primary"
                iconName="arrow_right"
              >
                {tButtons("join_btn")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
