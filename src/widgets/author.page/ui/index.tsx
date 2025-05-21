"use client"

import React, { useState } from "react"
import css from "./styles.module.scss"
import { BlogCard, CustomPagination } from "@/shared/ui"
import blogCardData from "@/shared/data/blog-card-list.json"
import authorData from "@/shared/data/author-list.json"
import { IBlogCardProps, IBlogAuthorLink } from "@/shared/types"
import { motion, AnimatePresence } from "framer-motion"
import { BlogPageNavigation } from "@/shared/components/blog-navigation"
import { SectionTip } from "@/shared/ui/modules/section-tip"
import Image from "next/image"
import { ClientRoutes } from "@/shared/routes"

interface AuthorPageSectionProps {
  slug: string
}

const blogCardDataList: IBlogCardProps[] = blogCardData.cards
const authorDataList: IBlogAuthorLink[] = authorData

const itemsPerPage = 6

export const AuthorPageSection: React.FC<AuthorPageSectionProps> = ({ slug }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const author = authorDataList.find((item) => item.slug === slug)
  const filteredCards = blogCardDataList.filter((card) => card.author === author?.label)

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedItems = filteredCards.slice(startIndex, startIndex + itemsPerPage)

  return (
    <section className={css.blog_section}>
      <div className="container">
        <div className={css.blog_section_content}>
          <BlogPageNavigation
            activeCategorySlug={slug}
            activeAuthorSlug={slug}
          />
          <div className={css.blog_section_articels}>
            <div className={css.blog_section_personal}>
              <div className={css.personal_text}>
                <SectionTip
                  label={author?.label || "Автор"}
                  className={css.author_tip}
                />
                {author?.position && <h5 className={css.author_position}>{author.position}</h5>}
                <p className={css.personal_descr}>
                  Консультант з підбору оптики та кваліфікований офтальмолог з багаторічним
                  досвідом. Вона спеціалізується на підборі окулярів для різних потреб, враховуючи
                  індивідуальні особливості пацієнтів та їхній стиль життя. Ірина допомагає людям
                  знайти оптимальні рішення для комфортного зору, поєднуючи функціональність та
                  естетику. В її статтях ви знайдете корисні поради щодо правильного вибору
                  окулярів, а також рекомендації з догляду за лінзами та оптикою.
                </p>
              </div>
              <Image
                className={css.personal_img}
                src={author?.image || "/images/author/author_img.png"}
                width={386}
                height={475}
                alt={author?.label || "Автор"}
              />
            </div>
            <div className={css.articles_head}>
              <SectionTip
                label={ClientRoutes.blog.name}
                className={css.author_tip}
              />
              {author?.label && (
                <h5 className={css.author_position}>Статті автора {author.label}</h5>
              )}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                className={css.blog_section_articels_wrap}
                key={currentPage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {paginatedItems.map((card, index) => (
                  <BlogCard
                    className={css.blog_section_card}
                    {...card}
                    key={index}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
            {paginatedItems.length > itemsPerPage && (
              <CustomPagination
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                totalItems={filteredCards.length}
                itemsPerPage={itemsPerPage}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
