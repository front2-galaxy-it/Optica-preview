"use client"

import React, { DetailedHTMLProps, HtmlHTMLAttributes } from "react"
import css from "./styles.module.scss"
import Image from "next/image"
import { Button, CheckboxPolicy, FormField, FormTextArea } from "@/shared/ui"
import { useForm } from "react-hook-form"
import { FormData } from "@/shared/types/form-data.interface"
import { useTranslations } from "next-intl"

interface IFormSectionProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  module: any
}

export const FormSection: React.FC<IFormSectionProps> = ({ module }) => {
  const tFormName = useTranslations("form.name")
  const tFormSurname = useTranslations("form.surname")
  const tFormPhone = useTranslations("form.phone")
  const tFormMessage = useTranslations("form.question-message")

  const tButtons = useTranslations("buttons")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

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
            <h5 className={css.form_wrap_title}>{module.content.title}</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormField
                id="name"
                type="text"
                placeholder={tFormName("placeholder")}
                colorType="gray"
                register={register("name", {
                  required: {
                    value: true,
                    message: tFormName("required"),
                  },
                })}
                error={errors.name?.message}
              />
              <FormField
                id="surname"
                type="text"
                placeholder={tFormSurname("placeholder")}
                colorType="gray"
                register={register("surname", {
                  required: {
                    value: true,
                    message: tFormSurname("required"),
                  },
                })}
                error={errors.name?.message}
              />
              <FormField
                id="phone"
                type="tel"
                placeholder="+38 (0__) ___ __ __"
                colorType="gray"
                register={register("phone", {
                  required: {
                    value: true,
                    message: tFormPhone("required"),
                  },
                  pattern: {
                    value: /^\+38\s?\(?0\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
                    message: tFormPhone("error"),
                  },
                })}
                error={errors.phone?.message}
              />

              <FormTextArea
                id="message"
                placeholder={tFormMessage("placeholder")}
                colorType="gray"
              />
              <CheckboxPolicy
                register={register("policyAgree", {
                  required: {
                    value: true,
                    message: "Погодьтеся з політикою конфіденційності.",
                  },
                })}
                error={errors.policyAgree?.message}
              />
              <Button
                className={css.form_btn}
                modifier="primary"
                type="submit"
                iconName="arrow_right"
              >
                {tButtons("send_btn")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
