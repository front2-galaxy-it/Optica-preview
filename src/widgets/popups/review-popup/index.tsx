"use client"

import React, { useEffect, useState } from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { Button, CheckboxPolicy, FormField, FormTextArea } from "@/shared/ui"
import { useForm } from "react-hook-form"
import { Icon } from "@/shared/ui/icons"

interface ReviewPopupProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

interface FormData {
  name: string
  surname: string
  phone: string
  text: string
  policy: boolean
  rating: number
}

export const ReviewPopup: React.FC<ReviewPopupProps> = ({ isOpen, onClose, onSuccess }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>()

  const [rating, setRating] = useState<number | null>(null)
  const [hoveredRating, setHoveredRating] = useState<number | null>(null)

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

  const handleStarClick = (index: number) => {
    setRating(index + 1)
    setValue("rating", index + 1)
  }

  const handleStarHover = (index: number) => {
    setHoveredRating(index + 1)
  }

  const handleStarLeave = () => {
    setHoveredRating(null)
  }

  return (
    <>
      <div className={classNames(css.review_popup_container, isOpen && css.show)}>
        <div className={css.review_popup}>
          <div className={css.review_popup_head}>
            <p className={css.review_popup_head_title}>Залиште свій відгук</p>
            <button
              type="button"
              className={css.review_popup_head_close}
              onClick={closePopup}
            >
              <span></span>
              <span></span>
            </button>
          </div>
          <div className={css.review_popup_content}>
            <h6 className={css.review_popup_content_title}>
              Ми будемо раді отримати ваш відгук про данний товар!
            </h6>
            <form
              className={css.review_popup_form}
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
                error={errors.name?.message}
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
                    message: "Заповніть поле",
                  },
                  pattern: {
                    value: /^\+38\s?\(?0\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
                    message: "Невірний формат телефону",
                  },
                })}
                error={errors.phone?.message}
              />
              <FormTextArea
                placeholder="Напишіть свій відгук"
                register={register("text")}
              />
              <div className={css.evaluation}>
                <span className={css.evaluation_title}>Оцінка</span>
                <div className={css.evaluation_stars}>
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <Icon
                        key={index}
                        name="icon_starV2"
                        className={classNames(css.evaluation_star, {
                          [css.selected]: rating && rating >= index + 1,
                          [css.hovered]: hoveredRating && hoveredRating >= index + 1,
                        })}
                        onClick={() => handleStarClick(index)}
                        onMouseEnter={() => handleStarHover(index)}
                        onMouseLeave={handleStarLeave}
                      />
                    ))}
                </div>
              </div>
              <CheckboxPolicy
                className={css.review_checkbox}
                error={errors.policy?.message}
              />
              <Button
                type="submit"
                modifier="primary"
                iconName="arrow_right"
              >
                Залишити відгук
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
