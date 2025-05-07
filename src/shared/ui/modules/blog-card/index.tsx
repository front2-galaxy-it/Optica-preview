import React from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import Image from "next/image"
import { DefaultLink } from "../../links"
import { IBlogCardProps } from "@/shared/types"
import { ClientRoutes } from "@/shared/routes"

interface BlogCardProps extends IBlogCardProps {
  className?: string
  slug: string
}

export const BlogCard: React.FC<BlogCardProps> = ({
  className,
  image_url,
  category,
  title,
  description,
  author,
  date,
  slug,
}) => {
  return (
    <div className={classNames(css.blog_card, className)}>
      <Image
        className={css.blog_card_image}
        src={image_url}
        width={403}
        height={321}
        alt={title || "image not found"}
      />
      <span className={css.blog_card_category}>{category}</span>
      <h6 className={css.blog_card_title}>{title}</h6>
      <p className={css.blog_card_text}>{description}</p>
      <div className={css.blog_card_info}>
        <span className={css.author}>{author}</span>
        <time
          dateTime={date}
          className={css.date}
        >
          {date}
        </time>
      </div>
      <DefaultLink href={ClientRoutes.article(slug)}>Читати</DefaultLink>
    </div>
  )
}
