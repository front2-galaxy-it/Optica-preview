"use client"

import React, { useState } from "react"
import css from "./styles.module.scss"
import { Button, FormField } from "@/shared/ui"
import { useForm } from "react-hook-form"
import { FormData } from "@/shared/types/form-data.interface"
import { RegisterPopup } from "@/widgets/popups/register-popup"
import { AuthorizationPopup } from "@/widgets/popups"

export const CheckoutSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  const [openRegisterPopup, isOpenRegisterPopup] = useState(false)
  const [openAuthPopup, isOpenAuthPopup] = useState(false)

  return (
    <section className={css.checkout}>
      <div className="container">
        <div className={css.checkout_content}>
          <div className={css.checkout_steps}>
            <div className={css.checkout_steps_head}>
              <div className={css.checkout_step}>
                <span>01</span>
                <span>
                  Контактна <br /> інформація покупця
                </span>
              </div>
              <div className={css.checkout_step}>
                <span>02</span>
                <span>
                  Вибір способів <br /> доставки та оплати
                </span>
              </div>
            </div>
            <div className={css.checkout_steps_buttons}>
              <Button
                className={css.checkout_steps_button}
                modifier="secondary"
                iconName="arrow_right"
                size="small"
                onClick={() => isOpenAuthPopup(true)}
              >
                Я постійний клієнт
              </Button>
              <Button
                className={css.checkout_steps_button}
                modifier="primary"
                iconName="icon_plus"
                size="small"
                onClick={() => isOpenRegisterPopup(true)}
              >
                Я новий покупець
              </Button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormField
                id="name"
                type="text"
                placeholder="Ваше ім’я"
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
                type="text"
                placeholder="Прізвище"
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
                type="tel"
                placeholder="+3 8(___) ___- __ - __"
                register={register("phone", {
                  required: {
                    value: true,
                    message: "Заповніть поле",
                  },
                })}
                error={errors.phone?.message}
              />
            </form>
          </div>
        </div>
      </div>
      <RegisterPopup
        isOpen={openRegisterPopup}
        onClose={() => isOpenRegisterPopup(false)}
      />
      <AuthorizationPopup
        isOpen={openAuthPopup}
        onClose={() => isOpenAuthPopup(false)}
      />
    </section>
  )
}
