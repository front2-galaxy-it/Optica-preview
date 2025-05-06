"use client"

import React, { useEffect, useRef, useState } from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { Button, CheckboxPolicy, FormField, FormTextArea } from "@/shared/ui"
import { useForm } from "react-hook-form"

interface careerPopupProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export const CareerPopup: React.FC<careerPopupProps> = ({ isOpen, onClose, onSuccess }) => {
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
    required: "Файл обов’язковий",
    validate: {
      allowedType: (files) =>
        (files &&
          [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ].includes(files[0]?.type)) ||
        "Неправильний формат файлу",
      maxSize: (files) => (files && files[0]?.size < 5 * 1024 * 1024) || "Файл перевищує 5 МБ",
    },
  })

  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const [fileName, setFileName] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  interface FormData {
    name: string
    surname: string
    phone: string
    vacancy: string
    comment: string
    policy_agree: boolean
    file: FileList
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

  // const onSubmit = (data: FormData) => {
  //   const formData = new FormData()

  //   formData.append("name", data.name)
  //   formData.append("surname", data.surname)
  //   formData.append("phone", data.phone)
  //   formData.append("vacancy", data.vacancy)
  //   formData.append("comment", data.comment || "")
  //   formData.append("policy_agree", String(data.policy_agree))

  //   if (data.file && data.file.length > 0) {
  //     formData.append("file", data.file[0])
  //   }

  //   fetch("/api/send-career-form", {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((res) => {
  //       if (!res.ok) throw new Error("Network response was not ok")
  //       return res.json()
  //     })
  //     .then(() => {
  //       onClose()
  //       onSuccess()
  //     })
  //     .catch((err) => {
  //       console.error("Помилка при відправці форми:", err)
  //       setError("Помилка при відправці форми. Спробуйте пізніше.")
  //     })
  // }

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
            <p className={css.career_popup_head_title}>Запис на діагностику зору</p>
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
            <h6 className={css.career_popup_content_title}>
              Залиште свої контакти і наш менеджер зв’яжеться з Вами!
            </h6>
            <form
              className={css.career_popup_form}
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
              <FormField
                id="vacancy"
                placeholder="Вакансія"
                type="text"
                colorType="white"
                register={register("vacancy", {
                  required: {
                    value: true,
                    message: "Заповніть поле",
                  },
                })}
                error={errors.phone}
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
                  Прикріпити резюме
                </Button>
                <span className={css.error_message}>{error}</span>
                <span className={css.file_info}>{fileName && `Файл: ${fileName}`}</span>
              </div>
              <FormTextArea
                placeholder="Коментар"
                register={register("comment")}
              />
              <CheckboxPolicy
                className={css.career_policy}
                register={register("policy_agree")}
              />
              <Button
                type="submit"
                modifier="primary"
                iconName="arrow_right"
              >
                Доєднатися до команди
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
