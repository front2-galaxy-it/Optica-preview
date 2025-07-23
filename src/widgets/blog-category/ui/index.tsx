"use client"

import React, { useState } from "react"
import css from "./styles.module.scss"
import blogCardData from "@/shared/data/blog-card-list.json"
import categoryData from "@/shared/data/blog-categories-list.json"
import { BlogCard } from "@/shared/ui"
// import { BlogPageNavigation } from "@/shared/components/blog-navigation"
import { IBlogCardProps, IBlogCateroriesLink } from "@/shared/types"
import { AnimatePresence, motion } from "framer-motion"

interface BlogCategoryPageProps {
  slug: string
}

const blogCardDataList: IBlogCardProps[] = blogCardData.cards
const categoryDataList: IBlogCateroriesLink[] = categoryData

const itemsPerPage = 6

export const BlogCategoryPage: React.FC<BlogCategoryPageProps> = ({ slug }) => {
  const [currentPage] = useState(1)

  const activeCategory = categoryDataList.find((cat) => cat.slug === slug)
  const filteredCards = blogCardDataList.filter((card) => card.category === activeCategory?.label)

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedItems = filteredCards.slice(startIndex, startIndex + itemsPerPage)

  return (
    <section className={css.blog_section}>
      <div className="container">
        <div className={css.blog_section_content}>
          {/* <BlogPageNavigation
            activeCategorySlug={slug}
            activeAuthorSlug={slug}
          /> */}
          <div className={css.blog_section_articels}>
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
                    cardData={card}
                    className={css.blog_section_card}
                    {...card}
                    key={index}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
            {/* {paginatedItems.length > itemsPerPage && (
              <CustomPagination
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                totalItems={filteredCards.length}
                itemsPerPage={itemsPerPage}
              />
            )} */}
          </div>
        </div>
      </div>
    </section>
  )
}
