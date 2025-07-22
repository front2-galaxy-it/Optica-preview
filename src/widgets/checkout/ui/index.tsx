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
import { useTranslations } from "next-intl"

export const CheckoutSection: React.FC = () => {
  const tCheckout = useTranslations("checkout-page")
  const tCheckoutInfo = useTranslations("checkout-page.checkout-info")
  const tCheckoutDelivery = useTranslations("checkout-page.delivery-method")
  const tCheckoutPayment = useTranslations("checkout-page.payment-method")
  const tFormName = useTranslations("form.name")
  const tFormSurname = useTranslations("form.surname")
  const tFormPhone = useTranslations("form.phone")
  const tFormDistrict = useTranslations("form.district")
  const tFormCity = useTranslations("form.city")
  const tFormPostIndex = useTranslations("form.post-index")
  const tFormAddress = useTranslations("form.address")
  const tFormPostOffice = useTranslations("form.post-office")
  const tFormStreet = useTranslations("form.street")
  const tFormHouse = useTranslations("form.house")
  const tFormApartment = useTranslations("form.apartment")
  const tFormBlock = useTranslations("form.building-block")
  const tButtons = useTranslations("buttons")

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
                <span>{tCheckout("checkout_step_1_label")}</span>
              </div>
              <div className={`${css.checkout_step} ${step === 2 ? css.active : ""}`}>
                <span>02</span>
                <span>{tCheckout("checkout_step_2_label")}</span>
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
                        {tCheckout("checkout_returning_customer")}
                      </Button>
                      <Button
                        className={css.checkout_steps_button}
                        modifier="primary"
                        iconName="icon_plus"
                        size="small"
                        onClick={() => isOpenRegisterPopup(true)}
                      >
                        {tCheckout("checkout_new_customer")}
                      </Button>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <FormField
                        id="name"
                        placeholder={tFormName("placeholder")}
                        type="text"
                        colorType="white"
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
                        placeholder={tFormSurname("placeholder")}
                        type="text"
                        colorType="white"
                        register={register("surname", {
                          required: {
                            value: true,
                            message: tFormSurname("required"),
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
                      <p className={css.checkblock_title}>{tCheckoutDelivery("label")}</p>
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
                          {tCheckoutDelivery("delivery-method-item-1")}
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
                          {tCheckoutDelivery("delivery-method-item-2")}
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
                          {tCheckoutDelivery("delivery-method-item-3")}
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
                          {tCheckoutDelivery("delivery-method-item-4")}
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
                          {tCheckoutDelivery("delivery-method-item-5")}
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
                          <p className={css.checkblock_title}>{tCheckoutDelivery("address")}</p>
                          <form onSubmit={handleSubmit(onSubmit)}>
                            <FormField
                              id="district"
                              name="district"
                              placeholder={tFormDistrict("placeholder")}
                              register={register("district", {
                                required: {
                                  value: true,
                                  message: tFormDistrict("error"),
                                },
                              })}
                              error={errors.district?.message}
                            />
                            <FormField
                              id="city"
                              name="city"
                              placeholder={tFormCity("placeholder")}
                              register={register("city", {
                                required: {
                                  value: true,
                                  message: tFormCity("error"),
                                },
                              })}
                              error={errors.city?.message}
                            />
                            <FormField
                              id="zipCode"
                              name="zipCode"
                              type="number"
                              placeholder={tFormPostIndex("placeholder")}
                              register={register("zipCode", {
                                required: {
                                  value: true,
                                  message: tFormPostIndex("error"),
                                },
                              })}
                              error={errors.zipCode?.message}
                            />
                            <FormField
                              id="address"
                              name="address"
                              placeholder={tFormAddress("placeholder")}
                              register={register("address", {
                                required: {
                                  value: true,
                                  message: tFormAddress("error"),
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
                              placeholder={tFormDistrict("placeholder")}
                              register={register("district", {
                                required: {
                                  value: true,
                                  message: tFormDistrict("error"),
                                },
                              })}
                              error={errors.district?.message}
                            />
                            <FormField
                              id="city"
                              name="city"
                              placeholder={tFormCity("placeholder")}
                              register={register("city", {
                                required: {
                                  value: true,
                                  message: tFormCity("error"),
                                },
                              })}
                              error={errors.city?.message}
                            />
                            <FormField
                              id="postOffice"
                              name="postOffice"
                              placeholder={tFormPostOffice("placeholder")}
                              register={register("postOffice", {
                                required: {
                                  value: true,
                                  message: tFormPostOffice("error"),
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
                              placeholder={tFormDistrict("placeholder")}
                              register={register("district", {
                                required: {
                                  value: true,
                                  message: tFormDistrict("error"),
                                },
                              })}
                              error={errors.district?.message}
                            />
                            <FormField
                              id="city"
                              name="city"
                              placeholder={tFormCity("placeholder")}
                              register={register("city", {
                                required: {
                                  value: true,
                                  message: tFormCity("error"),
                                },
                              })}
                              error={errors.city?.message}
                            />
                            <FormField
                              id="street"
                              name="street"
                              placeholder={tFormStreet("placeholder")}
                              register={register("street", {
                                required: {
                                  value: true,
                                  message: tFormStreet("error"),
                                },
                              })}
                              error={errors.street?.message}
                            />
                            <FormField
                              id="houseNumber"
                              name="houseNumber"
                              type="number"
                              placeholder={tFormHouse("placeholder")}
                              register={register("houseNumber", {
                                required: {
                                  value: true,
                                  message: tFormHouse("error"),
                                },
                              })}
                              error={errors.houseNumber?.message}
                            />
                            <FormField
                              id="houseHull"
                              name="houseHull"
                              placeholder={tFormBlock("placeholder")}
                              register={register("houseHull", {
                                required: {
                                  value: true,
                                  message: tFormBlock("error"),
                                },
                              })}
                              error={errors.houseHull?.message}
                            />
                            <FormField
                              id="apartments"
                              name="apartments"
                              type="number"
                              placeholder={tFormApartment("placeholder")}
                              register={register("apartments", {
                                required: {
                                  value: true,
                                  message: tFormApartment("error"),
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
                              placeholder={tFormStreet("placeholder")}
                              register={register("street", {
                                required: {
                                  value: true,
                                  message: tFormStreet("error"),
                                },
                              })}
                              error={errors.street?.message}
                            />
                            <FormField
                              id="houseNumber"
                              name="houseNumber"
                              type="number"
                              placeholder={tFormHouse("placeholder")}
                              register={register("houseNumber", {
                                required: {
                                  value: true,
                                  message: tFormHouse("error"),
                                },
                              })}
                              error={errors.houseNumber?.message}
                            />
                            <FormField
                              id="houseHull"
                              name="houseHull"
                              placeholder={tFormBlock("placeholder")}
                              register={register("houseHull", {
                                required: {
                                  value: true,
                                  message: tFormBlock("error"),
                                },
                              })}
                              error={errors.houseHull?.message}
                            />
                            <FormField
                              id="apartments"
                              name="apartments"
                              type="number"
                              placeholder={tFormApartment("placeholder")}
                              register={register("apartments", {
                                required: {
                                  value: true,
                                  message: tFormApartment("error"),
                                },
                              })}
                              error={errors.apartments?.message}
                            />
                          </form>
                        </div>
                      )}
                    </motion.div>
                    <div className={css.checkblock}>
                      <p className={css.checkblock_title}>{tCheckoutPayment("label")}</p>
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
                          {tCheckoutPayment("payment-method-item-1")}
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
                          {tCheckoutPayment("payment-method-item-2")}
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
                          {tCheckoutPayment("payment-method-item-3")}
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
                          {tCheckoutPayment("payment-method-item-4")}
                        </label>
                      </form>
                    </div>
                    <div className={css.checkblock}>
                      <p className={css.checkblock_title}>{tCheckout("comment-field")}</p>
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
            <h5 className={css.checkout_info_title}>{tCheckoutInfo("checkout_order_title")}</h5>
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
                <div className={css.total_text}>
                  <p>{tCheckoutInfo("checkout_total_items_label")}</p>
                  <p>3</p>
                  <p>{tCheckoutInfo("checkout_total_items_suffix")}</p>
                </div>
                <div className={css.total_sum}>
                  <span>2550</span>
                  <span>грн</span>
                </div>
              </div>
              <div className={css.cart_total_bonus}>
                <p>{tCheckoutInfo("checkout_bonus_earned_label")}</p>
                <div className={css.total_bonus}>
                  <span>+</span>
                  <span>255</span>
                  <span>{tCheckoutInfo("checkout_bonus_suffix")}</span>
                </div>
              </div>
              <div className={css.cart_total_pay}>
                <p>{tCheckoutInfo("checkout_total_to_pay")}</p>
                <div className={css.total_sum}>
                  <span>2550</span>
                  <span>грн</span>
                </div>
              </div>
              <div className={css.available_bonus}>
                <p>{tCheckoutInfo("checkout_available_bonuses_label")}</p>
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
                    placeholder={tCheckoutInfo("checkout_use_bonus_placeholder")}
                  />
                  <Button
                    modifier="secondary"
                    className={css.promo_btn}
                    size="small"
                  >
                    {tButtons("checkout_apply_button")}
                  </Button>
                </div>
                <div className={css.promo_body}>
                  <FormField
                    className={css.promo_input}
                    id="promo"
                    type="text"
                    placeholder={tCheckoutInfo("checkout_use_promo_placeholder")}
                  />
                  <Button
                    modifier="secondary"
                    className={css.promo_btn}
                    size="small"
                  >
                    {tButtons("checkout_apply_button")}
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
                {tCheckoutInfo("checkout_call_only_if_necessary")}
              </label>
              <label
                htmlFor="policyCheckout"
                className={css.checkout_checkbox}
              >
                <input
                  type="checkbox"
                  id="policyCheckout"
                />
                {tCheckoutInfo("checkout_privacy_policy_agreement")}
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
              {tButtons("cart_button_checkout")}
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
