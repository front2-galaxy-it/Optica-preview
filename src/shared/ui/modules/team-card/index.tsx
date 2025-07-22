import React from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import Image from "next/image"

interface TeamCardProps {
  className?: string
  cardData: any
}

export const TeamCard: React.FC<TeamCardProps> = ({ className, cardData }) => {
  const { title, description } = cardData.content
  const { image } = cardData
  return (
    <div className={classNames(css.team_card, className)}>
      <Image
        className={css.team_card_image}
        src={image}
        width={403}
        height={415}
        alt={title || "image not found"}
      />
      <div className={css.team_card_text_wrap}>
        <h6 className={css.team_card_name}>{title}</h6>
        <div className={css.team_card_info}>
          <span>{description}</span>
        </div>
      </div>
    </div>
  )
}
