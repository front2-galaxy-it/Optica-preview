"use client"

import React, { DetailedHTMLProps, HtmlHTMLAttributes } from "react"
import css from "./styles.module.scss"
import { BlogCard, CustomPagination } from "@/shared/ui"
import { motion, AnimatePresence } from "framer-motion"
import { BlogPageNavigation } from "@/shared/components/blog-navigation"

interface IBlogListingSectionProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  categoriesList: any
  articlesList: any
  meta: any
}

export const BlogPageSection: React.FC<IBlogListingSectionProps> = ({
  meta,
  categoriesList,
  articlesList,
}) => {
  return (
    <section
      className={css.blog_section}
      id="blog-section"
    >
      <div className="container">
        <div className={css.blog_section_content}>
          <BlogPageNavigation
            categoriesList={categoriesList}
            articlesList={articlesList}
          />
          <div className={css.blog_section_articels}>
            <AnimatePresence mode="wait">
              <motion.div
                className={css.blog_section_articels_wrap}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {articlesList.map((card: any, index: number) => (
                  <BlogCard
                    cardData={card}
                    className={css.blog_section_card}
                    {...card}
                    key={index}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
            <CustomPagination
              meta={meta}
              isVisible={articlesList && articlesList.length > 0}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
