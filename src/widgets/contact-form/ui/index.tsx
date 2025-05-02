"use client"

import React from "react"
import css from "./styles.module.scss"
import Image from "next/image"
import { Button, CheckboxPolicy, FormField, FormTextArea } from "@/shared/ui"
import { useForm } from "react-hook-form"

export const FormSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  interface FormData {
    name: string
    surname: string
    phone: string
    email: string
    message: string
  }

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <section className={css.form_section}>
      <div className="container">
        <div className={css.form_section_content}>
          <Image
            className={css.form_section_img}
            src="/images/content_img.png"
            width={526}
            height={505}
            alt="image not found"
          />
          <div className={css.form_wrap}>
            <h5 className={css.form_wrap_title}>
              Якщо у вас виникли питання чи зауваження, напишіть нам!
            </h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormField
                id="name"
                type="text"
                placeholder="Ваше ім’я"
                colorType="gray"
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
                type="text"
                placeholder="Прізвище"
                colorType="gray"
                register={register("surname", {
                  required: {
                    value: true,
                    message: "Заповніть поле",
                  },
                })}
                error={errors.name}
              />
              <FormField
                id="phone"
                type="tel"
                placeholder="+38 (0__) ___ __ __"
                colorType="gray"
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
                error={errors.phone}
              />

              <FormTextArea
                id="message"
                placeholder="Яке у вас питання?"
                colorType="gray"
                register={register("message", {
                  required: {
                    value: true,
                    message: "Заповніть поле",
                  },
                })}
                error={errors.name}
              />
              <CheckboxPolicy />
              <Button
                className={css.form_btn}
                modifier="primary"
                type="submit"
                iconName="arrow_right"
              >
                Надіслати
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
