"use client"

import React, { useState, useRef } from "react"
import css from "./styles.module.scss"
import { Button, ReviewCard, CustomPagination } from "@/shared/ui"
import { ReviewPopup, ThanksPopup } from "@/widgets/popups"
import { useTranslations } from "next-intl"

interface ReviewsProps {
  reviews: any
}

export const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  const reviewsList = reviews.data
  const reviewsMeta = reviews.meta

  const reviewsListRef = useRef<HTMLDivElement>(null)

  const [popupOpen, setPopupOpen] = useState(false)
  const [thanksPopupOpen, setThanksPopupOpen] = useState(false)

  const tReviews = useTranslations("reviews-page")
  const tButtons = useTranslations("buttons")
  const tPopupReview = useTranslations("popups.reviews-popup")

  return (
    <section
      className={css.reviews_section}
      ref={reviewsListRef}
    >
      <div className="container">
        <div className={css.reviews_section_content}>
          <div className={css.reviews_section_items}>
            {reviewsList.map((card: any, index: number) => (
              <ReviewCard
                className={css.reviews_section_card}
                {...card}
                key={index}
              />
            ))}
          </div>
          <CustomPagination
            meta={reviewsMeta}
            isVisible={reviewsList && reviewsList.length > 0}
          />
        </div>
        <div className={css.send_review}>
          <h5 className={css.send_review_title}>{tReviews("subtitle")}</h5>
          <p className={css.send_review_text}>{tReviews("description")}</p>
          <Button
            modifier="primary"
            iconName="arrow_right"
            onClick={() => setPopupOpen(true)}
          >
            {tButtons("reviews_btn")}
          </Button>
        </div>
      </div>
      <ReviewPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        onSuccess={() => setThanksPopupOpen(true)}
      />
      <ThanksPopup
        title={tPopupReview("thanks_label")}
        message={tPopupReview("thanks_text")}
        isOpen={thanksPopupOpen}
        onClose={() => setThanksPopupOpen(false)}
      />
    </section>
  )
}
