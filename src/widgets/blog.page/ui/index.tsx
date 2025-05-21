"use client"

import React, { useState } from "react"
import css from "./styles.module.scss"
import { BlogCard, CustomPagination } from "@/shared/ui"
import blogCardData from "@/shared/data/blog-card-list.json"
import { IBlogCardProps } from "@/shared/types"
import { motion, AnimatePresence } from "framer-motion"
import { BlogPageNavigation } from "@/shared/components/blog-navigation"

interface BlogPageSectionProps {
  slug: string
}

const blogCardDataList: IBlogCardProps[] = blogCardData.cards

const itemsPerPage = 6

export const BlogPageSection: React.FC<BlogPageSectionProps> = ({ slug }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedItems = blogCardDataList.slice(startIndex, startIndex + itemsPerPage)

  return (
    <section className={css.blog_section}>
      <div className="container">
        <div className={css.blog_section_content}>
          <BlogPageNavigation
            activeCategorySlug={slug}
            activeAuthorSlug={slug}
          />
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
                totalItems={paginatedItems.length}
                itemsPerPage={itemsPerPage}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
