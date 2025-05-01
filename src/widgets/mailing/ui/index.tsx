"use client"

import React from "react"
import css from "./styles.module.scss"
import { SectionTip } from "@/shared/ui/modules/section-tip"
import Image from "next/image"
import classNames from "classnames"
import { Icon } from "@/shared/ui/icons"
import { Button, CheckboxPolicy } from "@/shared/ui"
import { useForm } from "react-hook-form"

type FormValues = {
  email: string
}

export const MailingSection: React.FC = () => {
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
            label="Дізнавайся перший про акції"
          />
          <h5 className={css.mailing_section_title}>Підпишись на нашу розсилку</h5>
          <p className={css.mailing_section_text}>
            Будь першим хто дізнається про знижки, новинки та вигідні пропозиції
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={css.mailing_form}
          >
            <CheckboxPolicy />
            <div className={css.input_wrap}>
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email обов’язковий",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Невірний формат email",
                  },
                })}
              />
              <Button
                className={css.mailing_form_btn}
                modifier="primary"
                type="submit"
              >
                Підписатися
                <Icon name="arrow_right" />
              </Button>
            </div>
            {errors.email && <p className={css.error}>{errors.email.message}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
