import React from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import Image from "next/image"

interface TeamCardProps {
  className?: string
  name: string
  image_url: string
  position: string
  experience: string
}

export const TeamCard: React.FC<TeamCardProps> = ({
  className,
  image_url,
  name,
  position,
  experience,
}) => {
  return (
    <div className={classNames(css.team_card, className)}>
      <Image
        className={css.team_card_image}
        src={image_url}
        width={403}
        height={415}
        alt={name || "image not found"}
      />
      <div className={css.team_card_text_wrap}>
        <h6 className={css.team_card_name}>{name}</h6>
        <div className={css.team_card_info}>
          <span>{position}</span>
          <span>|</span>
          <span>{experience}</span>
        </div>
      </div>
    </div>
  )
}
