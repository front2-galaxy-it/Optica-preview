"use client"

import React, { useState } from "react"
import css from "./styles.module.scss"
import { Button, FormField } from "@/shared/ui"
import { useForm } from "react-hook-form"
import { FormData, AddressData } from "@/shared/types/form-data.interface"
import { RegisterPopup } from "@/widgets/popups/register-popup"
import { AuthenticationPopup, AuthorizationPopup } from "@/widgets/popups"
import Image from "next/image"
import { Icon } from "@/shared/ui/icons"
import { AnimatePresence, motion } from "framer-motion"

export const CheckoutSection: React.FC = () => {
  interface CheckoutFormData extends FormData, AddressData {}

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  const [openCodePopup, isOpenCodePopup] = useState(false)
  const [openRegisterPopup, isOpenRegisterPopup] = useState(false)
  const [openAuthPopup, isOpenAuthPopup] = useState(false)

  const [counterValue, setCounterValue] = useState(1)

  const handleIncreaseCounterValue = () => {
    setCounterValue(counterValue + 1)
  }

  const handleDecreaseCounterValue = () => {
    if (counterValue > 1) {
      setCounterValue(counterValue - 1)
    }
  }

  const [step, setStep] = useState(1)

  const [deliveryMethod, setDeliveryMethod] = useState<
    "ukrpost" | "novapost" | "novapost-courier" | "optica-courier" | null
  >(null)

  return (
    <section className={css.checkout}>
      <div className="container">
        <div className={css.checkout_content}>
          <div className={css.checkout_steps}>
            <div className={css.checkout_steps_head}>
              <div className={`${css.checkout_step} ${step === 1 ? css.active : ""}`}>
                <span>01</span>
                <span>
                  Контактна <br /> інформація покупця
                </span>
              </div>
              <div className={`${css.checkout_step} ${step === 2 ? css.active : ""}`}>
                <span>02</span>
                <span>
                  Вибір способів <br /> доставки та оплати
                </span>
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {step === 1 && (
                  <>
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
                  </>
                )}

                {step === 2 && (
                  <>
                    <button
                      className={css.return_btn}
                      onClick={() => setStep(1)}
                    >
                      <Icon
                        name="icon_arrow_bc"
                        className={css.return_btn_icon}
                      />
                    </button>
                    <div className={css.checkblock}>
                      <p className={css.checkblock_title}>Оберіть спосіб доставки:</p>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <label
                          htmlFor="self-delivery"
                          className={css.checkblock_item}
                          onClick={() => setDeliveryMethod(null)}
                        >
                          <input
                            type="radio"
                            name="delivery"
                            id="self-delivery"
                            className={css.radio_input}
                          />
                          <span className={css.custom_radio}></span>
                          самовивіз з магазина
                        </label>

                        <label
                          htmlFor="ukrpost"
                          className={css.checkblock_item}
                          onClick={() => setDeliveryMethod("ukrpost")}
                        >
                          <input
                            type="radio"
                            name="delivery"
                            id="ukrpost"
                            className={css.radio_input}
                          />
                          <span className={css.custom_radio}></span>
                          відділення Укрпошти
                        </label>

                        <label
                          htmlFor="novapost"
                          className={css.checkblock_item}
                          onClick={() => setDeliveryMethod("novapost")}
                        >
                          <input
                            type="radio"
                            name="delivery"
                            id="novapost"
                            className={css.radio_input}
                          />
                          <span className={css.custom_radio}></span>
                          відділення Нової Пошти
                        </label>

                        <label
                          htmlFor="novapost_courier"
                          className={css.checkblock_item}
                          onClick={() => setDeliveryMethod("novapost-courier")}
                        >
                          <input
                            type="radio"
                            name="delivery"
                            id="novapost_courier"
                            className={css.radio_input}
                          />
                          <span className={css.custom_radio}></span>
                          кур’єром Нової Пошти
                        </label>

                        <label
                          htmlFor="optica_courier"
                          className={css.checkblock_item}
                          onClick={() => setDeliveryMethod("optica-courier")}
                        >
                          <input
                            type="radio"
                            name="delivery"
                            id="optica_courier"
                            className={css.radio_input}
                          />
                          <span className={css.custom_radio}></span>
                          кур’єром Оптики Добрих Цін
                        </label>
                      </form>
                    </div>
                    <motion.div
                      className={css.checkblock_wrap}
                      key={deliveryMethod}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      {deliveryMethod === "ukrpost" && (
                        <div className={css.checkblock}>
                          <p className={css.checkblock_title}>Адреса доставки:</p>
                          <form onSubmit={handleSubmit(onSubmit)}>
                            <FormField
                              id="district"
                              name="district"
                              placeholder="Область"
                              register={register("district", {
                                required: {
                                  value: true,
                                  message: "Заповніть поле",
                                },
                              })}
                              error={errors.district?.message}
                            />
                            <FormField
                              id="city"
                              name="city"
                              placeholder="Місто"
                              register={register("city", {
                                required: {
                                  value: true,
                                  message: "Заповніть поле",
                                },
                              })}
                              error={errors.city?.message}
                            />
                            <FormField
                              id="zipCode"
                              name="zipCode"
                              type="number"
                              placeholder="Індекс"
                              register={register("zipCode", {
                                required: {
                                  value: true,
                                  message: "Заповніть поле",
                                },
                              })}
                              error={errors.zipCode?.message}
                            />
                            <FormField
                              id="address"
                              name="address"
                              placeholder="Адреса"
                              register={register("address", {
                                required: {
                                  value: true,
                                  message: "Заповніть поле",
                                },
                              })}
                              error={errors.address?.message}
                            />
                          </form>
                        </div>
                      )}
                      {deliveryMethod === "novapost" && (
                        <div className={css.checkblock}>
                          <p className={css.checkblock_title}>Адреса доставки:</p>
                          <form onSubmit={handleSubmit(onSubmit)}>
                            <FormField
                              id="district"
                              name="district"
                              placeholder="Область"
                              register={register("district", {
                                required: {
                                  value: true,
                                  message: "Заповніть поле",
                                },
                              })}
                              error={errors.district?.message}
                            />
                            <FormField
                              id="city"
                              name="city"
                              placeholder="Місто"
                              register={register("city", {
                                required: {
                                  value: true,
                                  message: "Заповніть поле",
                                },
                              })}
                              error={errors.city?.message}
                            />
                            <FormField
                              id="postOffice"
                              name="postOffice"
                              placeholder="Відділення пошти"
                              register={register("postOffice", {
                                required: {
                                  value: true,
                                  message: "Заповніть поле",
                                },
                              })}
                              error={errors.postOffice?.message}
                            />
                          </form>
                        </div>
                      )}
                      {deliveryMethod === "novapost-courier" && (
                        <div className={css.checkblock}>
                          <p className={css.checkblock_title}>Адреса доставки:</p>
                          <form onSubmit={handleSubmit(onSubmit)}>
                            <FormField
                              id="district"
                              name="district"
                              placeholder="Область"
                              register={register("district", {
                                required: {
                                  value: true,
                                  message: "Заповніть поле",
                                },
                              })}
                              error={errors.district?.message}
                            />
                            <FormField
                              id="city"
                              name="city"
                              placeholder="Місто"
                              register={register("city", {
                                required: {
                                  value: true,
                                  message: "Заповніть поле",
                                },
                              })}
                              error={errors.city?.message}
                            />
                            <FormField
                              id="street"
                              name="street"
                              placeholder="Вулиця"
                              register={register("street", {
                                required: {
                                  value: true,
                                  message: "Заповніть поле",
                                },
                              })}
                              error={errors.street?.message}
                            />
                            <FormField
                              id="houseNumber"
                              name="houseNumber"
                              type="number"
                              placeholder="Номер будинку"
                              register={register("houseNumber", {
                                required: {
                                  value: true,
                                  message: "Заповніть поле",
                                },
                              })}
                              error={errors.houseNumber?.message}
                            />
                            <FormField
                              id="houseHull"
                              name="houseHull"
                              placeholder="Корпус"
                              register={register("houseHull", {
                                required: {
                                  value: true,
                                  message: "Заповніть поле",
                                },
                              })}
                              error={errors.houseHull?.message}
                            />
                            <FormField
                              id="apartments"
                              name="apartments"
                              type="number"
                              placeholder="Квартира"
                              register={register("apartments", {
                                required: {
                                  value: true,
                                  message: "Заповніть поле",
                                },
                              })}
                              error={errors.apartments?.message}
                            />
                          </form>
                        </div>
                      )}
                      {deliveryMethod === "optica-courier" && (
                        <div className={css.checkblock}>
                          <p className={css.checkblock_title}>Адреса доставки:</p>
                          <form onSubmit={handleSubmit(onSubmit)}>
                            <FormField
                              id="city"
                              name="city"
                              value="Одеса"
                              readOnly
                              register={register("city", {
                                required: {
                                  value: true,
                                  message: "Заповніть поле",
                                },
                              })}
                              error={errors.city?.message}
                            />
                            <FormField
                              id="street"
                              name="street"
                              placeholder="Вулиця"
                              register={register("street", {
                                required: {
                                  value: true,
                                  message: "Заповніть поле",
                                },
                              })}
                              error={errors.street?.message}
                            />
                            <FormField
                              id="houseNumber"
                              name="houseNumber"
                              type="number"
                              placeholder="Номер будинку"
                              register={register("houseNumber", {
                                required: {
                                  value: true,
                                  message: "Заповніть поле",
                                },
                              })}
                              error={errors.houseNumber?.message}
                            />
                            <FormField
                              id="houseHull"
                              name="houseHull"
                              placeholder="Корпус"
                              register={register("houseHull", {
                                required: {
                                  value: true,
                                  message: "Заповніть поле",
                                },
                              })}
                              error={errors.houseHull?.message}
                            />
                            <FormField
                              id="apartments"
                              name="apartments"
                              type="number"
                              placeholder="Квартира"
                              register={register("apartments", {
                                required: {
                                  value: true,
                                  message: "Заповніть поле",
                                },
                              })}
                              error={errors.apartments?.message}
                            />
                          </form>
                        </div>
                      )}
                    </motion.div>
                    <div className={css.checkblock}>
                      <p className={css.checkblock_title}>Оберіть метод оплати:</p>
                      <form>
                        <label
                          htmlFor="cash"
                          className={css.checkblock_item}
                        >
                          <input
                            type="radio"
                            name="pay"
                            id="cash"
                            className={css.radio_input}
                          />
                          <span className={css.custom_radio}></span>
                          оплата готівкою
                        </label>

                        <label
                          htmlFor="card"
                          className={css.checkblock_item}
                        >
                          <input
                            type="radio"
                            name="pay"
                            id="card"
                            className={css.radio_input}
                          />
                          <span className={css.custom_radio}></span>
                          оплата картою на сайті
                        </label>

                        <label
                          htmlFor="credentials"
                          className={css.checkblock_item}
                        >
                          <input
                            type="radio"
                            name="pay"
                            id="credentials"
                            className={css.radio_input}
                          />
                          <span className={css.custom_radio}></span>
                          оплата за реквізитами
                        </label>

                        <label
                          htmlFor="part-pay"
                          className={css.checkblock_item}
                        >
                          <input
                            type="radio"
                            name="pay"
                            id="part-pay"
                            className={css.radio_input}
                          />
                          <span className={css.custom_radio}></span>
                          оплата частинами
                        </label>
                      </form>
                    </div>
                    <div className={css.checkblock}>
                      <p className={css.checkblock_title}>Коментар:</p>
                      <form>
                        <textarea></textarea>
                      </form>
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className={css.checkout_info}>
            <h5 className={css.checkout_info_title}>Ваше замовлення</h5>
            <div className={css.cart_products}>
              <div className={css.product_body}>
                <Image
                  className={css.product_img}
                  src="/images/product_preview.png"
                  width={100}
                  height={100}
                  alt="product name"
                />
                <div className={css.product_info}>
                  <span className={css.product_category}>Сонцезахисні окуляри</span>
                  <strong className={css.product_name}>SAINT LAURENT SL 276 MICA 032 GREY</strong>
                  <div className={css.product_price}>
                    <span>1160</span>
                    <span>грн</span>
                  </div>
                </div>
                <div className={css.product_actions}>
                  <button className={css.remove_btn}>
                    <Icon name="icon_bin" />
                  </button>
                  <div className={css.counter_wrap}>
                    <button onClick={() => handleDecreaseCounterValue()}>
                      <Icon name="icon_minus" />
                    </button>
                    <span>{counterValue}</span>
                    <button onClick={() => handleIncreaseCounterValue()}>
                      <Icon name="icon_plus" />
                    </button>
                  </div>
                </div>
              </div>
              <div className={css.product_body}>
                <Image
                  className={css.product_img}
                  src="/images/product_preview.png"
                  width={100}
                  height={100}
                  alt="product name"
                />
                <div className={css.product_info}>
                  <span className={css.product_category}>Сонцезахисні окуляри</span>
                  <strong className={css.product_name}>SAINT LAURENT SL 276 MICA 032 GREY</strong>
                  <div className={css.product_price}>
                    <span>1160</span>
                    <span>грн</span>
                  </div>
                </div>
                <div className={css.product_actions}>
                  <button className={css.remove_btn}>
                    <Icon name="icon_bin" />
                  </button>
                  <div className={css.counter_wrap}>
                    <button onClick={() => handleDecreaseCounterValue()}>
                      <Icon name="icon_minus" />
                    </button>
                    <span>{counterValue}</span>
                    <button onClick={() => handleIncreaseCounterValue()}>
                      <Icon name="icon_plus" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={css.cart_total}>
              <div className={css.cart_total_head}>
                <p>
                  Всього <span>3</span> товари на суму:
                </p>
                <div className={css.total_sum}>
                  <span>2550</span>
                  <span>грн</span>
                </div>
              </div>
              <div className={css.cart_total_bonus}>
                <p>Нараховано бонусів</p>
                <div className={css.total_bonus}>
                  <span>+</span>
                  <span>255</span>
                  <span>бонусів</span>
                </div>
              </div>
              <div className={css.cart_total_pay}>
                <p>До сплати</p>
                <div className={css.total_sum}>
                  <span>2550</span>
                  <span>грн</span>
                </div>
              </div>
              <div className={css.available_bonus}>
                <p>Доступні бонуси для використання:</p>
                <div className={css.total_bonus}>
                  <span>200</span>
                  <span>бонусів</span>
                </div>
              </div>
              <div className={css.promo_wrap}>
                <div className={css.promo_body}>
                  <FormField
                    className={css.promo_input}
                    id="bonus"
                    type="text"
                    placeholder="Використати бонусів"
                  />
                  <Button
                    modifier="secondary"
                    className={css.promo_btn}
                    size="small"
                  >
                    Застосувати
                  </Button>
                </div>
                <div className={css.promo_body}>
                  <FormField
                    className={css.promo_input}
                    id="promo"
                    type="text"
                    placeholder="Використати промокод"
                  />
                  <Button
                    modifier="secondary"
                    className={css.promo_btn}
                    size="small"
                  >
                    Застосувати
                  </Button>
                </div>
              </div>
              <label
                htmlFor="callback"
                className={css.checkout_checkbox}
              >
                <input
                  type="checkbox"
                  id="callback"
                />
                телефонуйте мені тільки за необхідністю
              </label>
              <label
                htmlFor="policy"
                className={css.checkout_checkbox}
              >
                <input
                  type="checkbox"
                  id="policy"
                />
                Погоджуюсь з Політикою конфіденційності, Умовами та положенням користування сайту,
                Умовами договору куплі-продажу, в тому числі доставки, оплати, обміну та гарантії.
              </label>
            </div>
            <Button
              className={css.cart_btn}
              modifier="primary"
              iconName="basket_icon"
              size="medium"
              onClick={handleSubmit((data) => {
                onSubmit(data)
                setStep(2)
              })}
            >
              Оформити замовлення
            </Button>
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
      <AuthenticationPopup
        isOpen={openCodePopup}
        onClose={() => isOpenCodePopup(false)}
      />
    </section>
  )
}
