"use client"

import React, { useState } from "react"
import css from "./styles.module.scss"
import { BlogCard } from "@/shared/ui"
import { AnimatePresence, motion } from "framer-motion"
import classNames from "classnames"

interface BlogCategoryPageProps {
  slug: any
  list: any
}

export const BlogCategoryPage: React.FC<BlogCategoryPageProps> = ({ list }) => {
  const [currentPage] = useState(1)

  // const activeCategory = list.find((cat: any) => cat.slug === slug)
  // const posts = activeCategory?.posts || []

  return (
    <section className={css.blog_section}>
      <div className="container">
        <div className={classNames(css.blog_section_content, css.category_section_content)}>
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
                {list.map((card: any, index: number) => (
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
