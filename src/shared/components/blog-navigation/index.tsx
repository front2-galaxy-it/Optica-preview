"use client"

import React from "react"
import css from "./styles.module.scss"
import { CategoryList } from "@/shared/components/category-list"
import { AuthorList } from "@/shared/components/author-list"
import categoryData from "@/shared/data/blog-categories-list.json"
import authorData from "@/shared/data/author-list.json"
import blogCardData from "@/shared/data/blog-card-list.json"
import { IBlogCateroriesLink, IBlogAuthorLink, IBlogCardProps } from "@/shared/types"

const blogCardDataList: IBlogCardProps[] = blogCardData.cards

const categoryDataList: IBlogCateroriesLink[] = categoryData
const authorDataList: IBlogAuthorLink[] = authorData

export const BlogPageNavigation: React.FC<{
  activeAuthorSlug: string
  activeCategorySlug: string
}> = ({ activeAuthorSlug, activeCategorySlug }) => {
  return (
    <div className={css.blog_nav}>
      <CategoryList
        categoryList={categoryDataList}
        articleList={blogCardDataList}
        activeCategorySlug={activeCategorySlug}
      />
      <AuthorList
        authorList={authorDataList}
        articleList={blogCardDataList}
        activeAuthorSlug={activeAuthorSlug}
      />
    </div>
  )
}
