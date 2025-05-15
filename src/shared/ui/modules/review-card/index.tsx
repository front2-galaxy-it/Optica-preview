import React from "react"
import css from "./styles.module.scss"
import Image from "next/image"
import { IReviewCardProps } from "@/shared/types"
import classNames from "classnames"
import { Icon } from "../../icons"

interface Props extends IReviewCardProps {
  className?: string
  onReplyClick?: () => void
  hideMediaIcon?: boolean
  hideReplyButton?: boolean
}

export const ReviewCard: React.FC<Props> = ({
  className,
  username,
  nickname,
  text,
  mediaImg,
  date,
  hideMediaIcon = false,
  hideReplyButton = true,
  onReplyClick,
}) => {
  const [day, month, year] = date.split(".")
  const formattedDate = `${year}-${month}-${day}`

  return (
    <div
      className={classNames(css.review_card, className, {
        [css.isReplyBtn]: hideReplyButton,
      })}
    >
      <div className={css.review_card_head}>
        <div className={css.user_info}>
          <h6 className={css.username}>{username}</h6>
          <span className={css.nickname}>{nickname}</span>
        </div>
        {!hideMediaIcon && (
          <Image
            className={css.card_icon}
            src={mediaImg}
            width={60}
            height={60}
            alt="icon"
          />
        )}
      </div>

      <div className={css.stars_wrap}>
        {[...Array(5)].map((_, idx) => (
          <Icon
            key={idx}
            name="icon_star"
            className={css.icon_star}
          />
        ))}
      </div>

      <p className={css.review_card_text}>{text}</p>

      <div className={css.review_card_footer}>
        <time
          dateTime={formattedDate}
          className={css.review_card_date}
        >
          {date}
        </time>

        {!hideReplyButton && (
          <button
            className={css.reply_btn}
            onClick={onReplyClick}
          >
            <span>Відповідь:</span>
            <span>1</span>
            <Icon
              name="icon_arrow_bc"
              className={css.reply_btn_arrow}
            />
          </button>
        )}
      </div>
    </div>
  )
}
