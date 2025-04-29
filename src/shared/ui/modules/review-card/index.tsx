import React from "react"
import css from "./styles.module.scss"
import Image from "next/image"
import { IReviewCardProps } from "@/shared/types"

export const ReviewCard: React.FC<IReviewCardProps> = ({
  username,
  nickname,
  text,
  mediaImg,
  date,
}) => {
  const [day, month, year] = date.split(".")
  const formattedDate = `${year}-${month}-${day}`

  return (
    <div className={css.review_card}>
      <div className={css.review_card_head}>
        <div className={css.user_info}>
          <h6 className={css.username}>{username}</h6>
          <span className={css.nickname}>{nickname}</span>
        </div>
        <Image
          className={css.card_icon}
          src={mediaImg}
          width={60}
          height={60}
          alt="instagram"
        />
      </div>
      <p className={css.review_card_text}>{text}</p>
      <time
        dateTime={formattedDate}
        className={css.review_card_date}
      >
        {date}
      </time>
    </div>
  )
}
