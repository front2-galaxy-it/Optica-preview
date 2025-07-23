import React from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import Image from "next/image"
import { DefaultLink } from "../../links"
import { ClientRoutes } from "@/shared/routes"

interface BlogCardProps {
  className?: string
  cardData: any
}

export const BlogCard: React.FC<BlogCardProps> = ({ className, cardData }) => {
  const { title, human_date, posted_date, image, category, short_description, author, slug } =
    cardData

  return (
    <div className={classNames(css.blog_card, className)}>
      <Image
        className={css.blog_card_image}
        src={image ?? "/images/image-not-found.jpg"}
        width={403}
        height={321}
        alt={title || "image not found"}
      />
      <span className={css.blog_card_category}>{category?.title ?? ""}</span>
      <h6 className={css.blog_card_title}>{title}</h6>
      <p className={css.blog_card_text}>{short_description}</p>
      <div className={css.blog_card_info}>
        {author?.name && <span className={css.author}>{author.name}</span>}
        <time
          dateTime={posted_date}
          className={css.date}
        >
          {human_date}
        </time>
      </div>
      <DefaultLink href={ClientRoutes.article(slug ? slug : "#")}>Читати</DefaultLink>
    </div>
  )
}
