"use client"

import React, { useState } from "react"
import css from "./styles.module.scss"
import { CategoriesList } from "../components/categories-list"
import { ProductList } from "../components/product-list"
import { CustomPagination } from "@/shared/ui"
import { IProductCardProps, LabelType, StatusType, ICateroriesLink } from "@/shared/types"
import productData from "@/shared/data/products.json"
import categoryData from "@/shared/data/categories-list.json"
import { FilterList } from "../components/filter-list"
import { PriceRangeFilter } from "../components/perice-filter-range"

interface CatalogSectionProps {
  slug: string
}

const categoryDataList: ICateroriesLink[] = categoryData.categories_list

const productDataList: IProductCardProps[] = productData.products.map((product) => ({
  ...product,
  labelTypes: product.labelTypes as LabelType[],
  statusTypes: product.statusTypes as StatusType[],
}))

const itemsPerPage = 15

export const CatalogSection: React.FC<CatalogSectionProps> = ({ slug }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const prices = productDataList.map((p) => p.price)
  const minPriceValue = Math.min(...prices)
  const maxPriceValue = Math.max(...prices)

  const [priceRange, setPriceRange] = useState<[number, number]>([minPriceValue, maxPriceValue])

  const filteredProducts = productDataList
    .filter((product) => product.categorySlug === slug)
    .filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedItems = filteredProducts.slice(startIndex, startIndex + itemsPerPage)
  return (
    <section className={css.catalog}>
      <div className="container">
        <div className={css.catalog_wrap}>
          <div className={css.catalog_sidebar}>
            <CategoriesList
              activeCategorySlug={slug}
              categoryList={categoryDataList}
            />
            <FilterList />
            <PriceRangeFilter
              min={minPriceValue}
              max={maxPriceValue}
              value={priceRange}
              onChange={setPriceRange}
            />
          </div>
          <div className={css.catalog_content}>
            {filteredProducts.length > 0 ? (
              <ProductList
                productList={paginatedItems}
                className={css.product_list}
              />
            ) : (
              <p>Немає продуктів у цій категорії.</p>
            )}
            {filteredProducts.length > itemsPerPage && (
              <CustomPagination
                className={css.product_pagiantion}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                totalItems={filteredProducts.length}
                itemsPerPage={itemsPerPage}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
