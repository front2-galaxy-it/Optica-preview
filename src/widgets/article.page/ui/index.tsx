"use client"

import React, { useState } from "react"
import css from "./styles.module.scss"

import blogCardData from "@/shared/data/blog-card-list.json"
import authorData from "@/shared/data/author-list.json"
import { IBlogCardProps, IBlogAuthorLink } from "@/shared/types"

import { BlogPageNavigation } from "@/shared/components/blog-navigation"
import { SectionTip } from "@/shared/ui/modules/section-tip"
import Image from "next/image"
import { ButtonLink } from "@/shared/ui/links"

interface AuthorPageSectionProps {
  slug: string
  activeCategorySlug: string
  activeAuthorSlug: string
}

const blogCardDataList: IBlogCardProps[] = blogCardData.cards
const authorDataList: IBlogAuthorLink[] = authorData

export const ArticlePageSection: React.FC<AuthorPageSectionProps> = ({
  activeCategorySlug,
  activeAuthorSlug,
  slug,
}) => {
  const [currentSlug, setCurrentSlug] = useState(slug)

  const articleIndex = blogCardDataList.findIndex((item) => item.slug === currentSlug)

  if (articleIndex === -1) return null

  const article = blogCardDataList[articleIndex]

  const prevArticle = blogCardDataList[articleIndex - 1] || null
  const nextArticle = blogCardDataList[articleIndex + 1] || null

  const handlePrevArticle = () => {
    if (prevArticle) {
      setCurrentSlug(prevArticle.slug)
    }
  }

  const handleNextArticle = () => {
    if (nextArticle) {
      setCurrentSlug(nextArticle.slug)
    }
  }

  const author = authorDataList.find(
    (item) => item.slug.trim().toLowerCase() === article.authorSlug.trim().toLowerCase(),
  )

  if (!author) return null

  const formattedDate = new Date(article.date).toLocaleDateString("uk-UA", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })

  const displayDate = formattedDate.replace("р.", "року")

  return (
    <section className={css.blog_section}>
      <div className="container">
        <div className={css.blog_section_content}>
          <BlogPageNavigation
            activeCategorySlug={activeCategorySlug}
            activeAuthorSlug={activeAuthorSlug}
          />
          <div className={css.article_content}>
            <div className={css.article_head}>
              <SectionTip label={author?.label || article.author} />
              <h6 className={css.head_title}>{article.title}</h6>
              <time dateTime={article.date}>{displayDate}</time>
            </div>
            <div className={css.article_body}>
              <p>
                У сучасному світі, коли більшість часу ми проводимо за комп’ютерами, важливо
                піклуватися про здоров’я очей. Тривала робота за монітором може призводити до втоми,
                сухості в очах, головного болю та зниження зору.
              </p>
              <Image
                src="/images/content_img_8.png"
                width={849}
                height={523}
                alt="image not found"
              />
              <h6>
                Щоб уникнути цих проблем, варто звернути увагу на правильний вибір окулярів для
                роботи за комп’ютером.
              </h6>
              <p>
                У сучасному світі, коли більшість часу ми проводимо за комп’ютерами, важливо
                піклуватися про здоров’я очей. Тривала робота за монітором може призводити до втоми,
                сухості в очах, головного болю та зниження зору.
              </p>
            </div>
            <div className={css.article_footer}>
              <span>{author?.label || article.author}</span>
              {author?.position && <span>{author.position}</span>}
            </div>
            <div className={css.article_buttons}>
              {prevArticle && (
                <ButtonLink
                  className={css.article_btn}
                  modifier="secondary"
                  iconName="arrow_right"
                  iconPosition="left"
                  onClick={handlePrevArticle}
                >
                  Попередня стаття
                </ButtonLink>
              )}
              {nextArticle && (
                <ButtonLink
                  className={css.article_btn}
                  modifier="secondary"
                  iconName="arrow_right"
                  onClick={handleNextArticle}
                >
                  Наступна стаття
                </ButtonLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
