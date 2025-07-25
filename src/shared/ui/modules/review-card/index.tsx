import React from "react"
import css from "./styles.module.scss"
import Image from "next/image"
import classNames from "classnames"
import { Icon } from "../../icons"

interface Props {
  className?: string
  onReplyClick?: () => void
  hideMediaIcon?: boolean
  hideReplyButton?: boolean
  itemData: any
}

export const ReviewCard: React.FC<Props> = ({
  className,
  hideMediaIcon = false,
  hideReplyButton = true,
  onReplyClick,
  itemData,
}) => {
  // const [day, month, year] = date.split(".")
  // const formattedDate = `${year}-${month}-${day}`

  const mediaImg = `/images/svg/${itemData.type}.svg`
  const rating = parseInt(itemData.rating) // "1" → 1

  return (
    <div
      className={classNames(css.review_card, className, {
        [css.isReplyBtn]: hideReplyButton,
      })}
    >
      <div className={css.review_card_head}>
        <div className={css.user_info}>
          <h6 className={css.username}>{itemData.name}</h6>
          <span className={css.nickname}>{itemData.nick_name}</span>
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
            name="icon_starV2"
            className={classNames(css.icon_star, {
              [css.active]: idx < rating,
            })}
          />
        ))}
      </div>

      <p className={css.review_card_text}>{itemData.description}</p>

      <div className={css.review_card_footer}>
        {/* <time
          dateTime={formattedDate}
          className={css.review_card_date}
        >
          {date}
        </time> */}

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
