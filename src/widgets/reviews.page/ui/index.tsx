"use client"

import React, { useState, useRef, useEffect } from "react"
import css from "./styles.module.scss"
import { Button, CustomPagination, ReviewCard } from "@/shared/ui"
import dataReviewsList from "@/shared/data/reviews-list.json"
import { IReviewCardProps } from "@/shared/types"
import { motion, AnimatePresence } from "framer-motion"
import { ReviewPopup, ThanksPopup } from "@/widgets/popups"

const reviewsDataList: IReviewCardProps[] = dataReviewsList.review_cards
const itemsPerPage = 3

export const Reviews: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedItems = reviewsDataList.slice(startIndex, startIndex + itemsPerPage)

  const reviewsListRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    reviewsListRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [currentPage])

  const [popupOpen, setPopupOpen] = useState(false)
  const [thanksPopupOpen, setThanksPopupOpen] = useState(false)
  return (
    <section
      className={css.reviews_section}
      ref={reviewsListRef}
    >
      <div className="container">
        <div className={css.reviews_section_content}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className={css.reviews_section_items}>
                {paginatedItems.map((card, index) => (
                  <ReviewCard
                    className={css.reviews_section_card}
                    {...card}
                    key={index}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
          {reviewsDataList.length > itemsPerPage && (
            <CustomPagination
              currentPage={currentPage}
              onPageChange={setCurrentPage}
              totalItems={reviewsDataList.length}
              itemsPerPage={itemsPerPage}
            />
          )}
        </div>
        <div className={css.send_review}>
          <h5 className={css.send_review_title}>Залиш відгук про нашу мережу оптик</h5>
          <p className={css.send_review_text}>
            Поділіться своєю думкою з іншими нашими відвідувачами та клієнтами. Ми цінуємо Вашу
            думку.
          </p>
          <Button
            modifier="primary"
            iconName="arrow_right"
            onClick={() => setPopupOpen(true)}
          >
            Залишити відгук
          </Button>
        </div>
      </div>
      <ReviewPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        onSuccess={() => setThanksPopupOpen(true)}
      />

      <ThanksPopup
        title="Дякуємо за Ваш відгук!"
        message="Ваші думки дуже важливі для нас. Ми цінуємо Ваш час і будемо працювати над тим, щоб зробити наш сервіс ще кращим. Якщо у Вас є додаткові питання або пропозиції, не соромтеся звертатися до нас!"
        isOpen={thanksPopupOpen}
        onClose={() => setThanksPopupOpen(false)}
      />
    </section>
  )
}
