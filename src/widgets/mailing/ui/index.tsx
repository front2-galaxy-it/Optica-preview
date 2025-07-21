"use client"

import React, { DetailedHTMLProps, HtmlHTMLAttributes } from "react"
import css from "./styles.module.scss"
import { SectionTip } from "@/shared/ui/modules/section-tip"
import Image from "next/image"
import classNames from "classnames"
import { Button, CheckboxPolicy } from "@/shared/ui"
import { useForm } from "react-hook-form"
import { useTranslations } from "next-intl"

interface IMailingSectionProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  module: any
}

type FormValues = {
  email: string
}

export const MailingSection: React.FC<IMailingSectionProps> = ({ module }) => {
  const tButtons = useTranslations("buttons")
  const tForm = useTranslations("form.email")

  const { title, sub_title, text } = module.content

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log("Submitted email:", data.email)
    reset()
  }

  return (
    <section className={css.mailing_section}>
      <div className={css.mailing_bg_mob}>
        <Image
          src="/images/mailing/mailing_img_mob.png"
          width={375}
          height={375}
          alt="image not found"
        />
      </div>
      <div className={classNames(css.mailing_section_container, "container")}>
        <div className={css.mailing_bg}>
          <Image
            src="/images/mailing/mailing_img.png"
            width={1280}
            height={578}
            alt="image not found"
          />
        </div>
        <div className={css.mailing_section_content}>
          <SectionTip
            className={css.mailing_section_tip}
            label={sub_title}
          />
          <h3 className={css.mailing_section_title}>{title}</h3>
          <p className={css.mailing_section_text}>{text}</p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={css.mailing_form}
          >
            <CheckboxPolicy />
            <div className={css.input_wrap}>
              <input
                type="email"
                placeholder={tForm("placeholder")}
                {...register("email", {
                  required: { value: true, message: tForm("required") },
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: tForm("error"),
                  },
                })}
              />
              <Button
                className={css.mailing_form_btn}
                modifier="primary"
                iconName="arrow_right"
                type="submit"
              >
                {tButtons("subscribe_btn")}
              </Button>
            </div>
            {errors.email && <p className={css.error}>{errors.email.message}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
