"use client"

import React, { useState } from "react"
import css from "./styles.module.scss"
import { CustomPagination, ReviewCard } from "@/shared/ui"
import dataReviewsList from "@/shared/data/reviews-list.json"
import { IReviewCardProps } from "@/shared/types"
import { Icon } from "@/shared/ui/icons"
import { motion } from "framer-motion"

const reviewsDataList: IReviewCardProps[] = dataReviewsList.review_cards

const itemsPerPage = 6

export const ProductReviewsTab: React.FC = () => {
  const [activeReplyIndex, setActiveReplyIndex] = useState<number | null>(null)

  const [currentPage, setCurrentPage] = useState(1)
  const startIndex = (currentPage - 1) * itemsPerPage

  const filteredCards = reviewsDataList

  const paginatedItems = filteredCards.slice(startIndex, startIndex + itemsPerPage)

  const toggleReplyBlock = (index: number) => {
    setActiveReplyIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className={css.reviews}>
      {paginatedItems.map((card, index) => {
        let formattedDate = ""
        if (card.date) {
          const [day, month, year] = card.date.split(".")
          formattedDate = `${year}-${month}-${day}`
        }

        return (
          <div
            key={index}
            className={css.product_reviews_card_wrap}
          >
            <ReviewCard
              className={css.product_reviews_card}
              {...card}
              hideMediaIcon={true}
              hideReplyButton={false}
              onReplyClick={() => toggleReplyBlock(index)}
            />
            <motion.div
              key={activeReplyIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeReplyIndex === index && (
                <div className={css.reply_block}>
                  <strong className={css.reply_block_title}>
                    <Icon
                      name="icon_chat"
                      className={css.reply_block_icon}
                    />
                    Відповідь представника мережі
                  </strong>
                  <p className={css.reply_block_text}>{card.replyText}</p>
                  <time
                    dateTime={formattedDate}
                    className={css.reply_block_date}
                  >
                    {card.replyDate}
                  </time>
                </div>
              )}
            </motion.div>
          </div>
        )
      })}
      {paginatedItems.length > itemsPerPage ? (
        <CustomPagination
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          totalItems={filteredCards.length}
          itemsPerPage={itemsPerPage}
        />
      ) : null}
    </div>
  )
}
