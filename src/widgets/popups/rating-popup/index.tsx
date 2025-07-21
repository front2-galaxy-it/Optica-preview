"use client"

import React, { useEffect, useState } from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { Button } from "@/shared/ui"
import { useForm } from "react-hook-form"
import { Icon } from "@/shared/ui/icons"
import { useTranslations } from "next-intl"

interface RatingPopupProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

interface FormData {
  rating: number
}

export const RatingPopup: React.FC<RatingPopupProps> = ({ isOpen, onClose, onSuccess }) => {
  const { handleSubmit, setValue } = useForm<FormData>()

  const [rating, setRating] = useState<number | null>(null)
  const [hoveredRating, setHoveredRating] = useState<number | null>(null)

  const tPopupRating = useTranslations("popups.rating-popup")
  const tButtons = useTranslations("buttons")

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
      <div className={classNames(css.rating_popup_container, isOpen && css.show)}>
        <div className={css.rating_popup}>
          <div className={css.rating_popup_head}>
            <p className={css.rating_popup_head_title}>{tPopupRating("label")}</p>
            <button
              type="button"
              className={css.rating_popup_head_close}
              onClick={closePopup}
            >
              <span></span>
              <span></span>
            </button>
          </div>
          <div className={css.rating_popup_content}>
            <h6 className={css.rating_popup_content_title}>{tPopupRating("title")}</h6>
            <form
              className={css.rating_popup_form}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className={css.evaluation}>
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
              <Button
                className={css.rating_btn}
                type="submit"
                modifier="secondary"
                iconName="arrow_right"
              >
                {tButtons("rating_btn")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
