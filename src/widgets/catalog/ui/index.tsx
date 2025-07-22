"use client"

import React, { useState } from "react"
import css from "./styles.module.scss"
import { CategoriesList } from "../components/categories-list"
import { ProductList } from "../components/product-list"
// import { CustomPagination } from "@/shared/ui"
import {
  IProductCardProps,
  LabelType,
  StatusType,
  ICateroriesLink,
  PaymentType,
} from "@/shared/types"
import productData from "@/shared/data/products.json"
// import categoryData from "@/shared/data/categories-list.json"
import { PriceRangeFilter } from "../components/price-filter-range"
import CategoryList from "@/shared/data/categories-list.json"
import { CatalogFilter } from "../components/catalog-filter"
import { Icon } from "@/shared/ui/icons"
import classNames from "classnames"
import { Certificate } from "../components/certificate"
import { useTranslations } from "next-intl"
interface CatalogSectionProps {
  slug: string
}

const productDataList: IProductCardProps[] = productData.products.map((product) => ({
  ...product,
  labelTypes: product.labelTypes as LabelType[],
  statusTypes: product.statusTypes as StatusType[],
  paymentTypes: product.paymentTypes as PaymentType[],
}))

const itemsPerPage = 15

export const CatalogSection: React.FC<CatalogSectionProps> = ({ slug }) => {
  const tCategories = useTranslations("categories_list")
  const tButtons = useTranslations("buttons")
  const tCommon = useTranslations("common")

  const categoryDataList: ICateroriesLink[] = CategoryList.categories_list.map((label) => ({
    ...label,
    label: tCategories(label.label),
  }))

  const [currentPage] = useState(1)
  const [openFilterModal, isOpenFilterModal] = useState(false)
  const [openCategoryModal, isOpenCategoryModal] = useState(false)

  const prices = productDataList.map((p) => p.price)
  const minPriceValue = Math.min(...prices)
  const maxPriceValue = Math.max(...prices)

  const [priceRange, setPriceRange] = useState<[number, number]>([minPriceValue, maxPriceValue])

  const filteredProducts = productDataList
    .filter((product) => product.categorySlug === slug)
    .filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedItems = filteredProducts.slice(startIndex, startIndex + itemsPerPage)

  const isSertyfikaty = slug === "sertyfikaty"
  const isAkcii = slug === "akcii"

  const handleOpenFilterModal = () => {
    isOpenFilterModal(true)
    document.body.classList.add("_lock")
  }

  const handleCloseFilterModal = () => {
    isOpenFilterModal(false)
    document.body.classList.remove("_lock")
  }

  const handleOpenCategoryModal = () => {
    isOpenCategoryModal(true)
    document.body.classList.add("_lock")
  }

  const handleCloseCategoryModal = () => {
    isOpenCategoryModal(false)
    document.body.classList.remove("_lock")
  }

  return (
    <section className={css.catalog}>
      <div className="container">
        <div className={css.catalog_wrap}>
          {!isSertyfikaty && !isAkcii && (
            <div className={css.mobile_buttons}>
              <button
                className={css.mobile_button}
                onClick={() => handleOpenCategoryModal()}
              >
                <Icon
                  name="icon_category"
                  className={css.icon_category}
                />
                <strong>{tCommon("category-label")}</strong>
              </button>
              <button
                className={css.mobile_button}
                onClick={() => handleOpenFilterModal()}
              >
                <Icon
                  name="icon_filter"
                  className={css.icon_filter}
                />
                <strong>{tCommon("filter-label")}</strong>
              </button>
            </div>
          )}
          <div className={css.catalog_sidebar}>
            <CategoriesList
              onClose={() => handleCloseCategoryModal()}
              activeCategorySlug={slug}
              categoryList={categoryDataList}
              className={classNames(css.categories_list, {
                [css.open]: openCategoryModal,
              })}
            />
            {!isSertyfikaty && !isAkcii && (
              <div
                className={classNames(css.catalog_filter_wrap, {
                  [css.open]: openFilterModal,
                })}
              >
                <button
                  className={css.closeButton}
                  onClick={() => handleCloseFilterModal()}
                >
                  <span></span>
                  <span></span>
                </button>
                <div className={css.filter_list_head}>
                  <Icon
                    name="icon_filter"
                    className={css.icon_filter}
                  />
                  <strong>{tCommon("filter-label")}</strong>
                </div>
                <PriceRangeFilter
                  min={minPriceValue}
                  max={maxPriceValue}
                  value={priceRange}
                  onChange={setPriceRange}
                />
                <CatalogFilter />
              </div>
            )}
          </div>
          <div className={css.catalog_content}>
            {!isSertyfikaty && !isAkcii && (
              <div className={css.sort_filter}>
                <button className={css.active}>{tButtons("by_popularity")}</button>
                <button>{tButtons("price_asc")}</button>
                <button>{tButtons("price_desc")}</button>
                <button>{tButtons("by_newest")}</button>
              </div>
            )}
            {isSertyfikaty ? (
              <Certificate />
            ) : isAkcii ? (
              <div className={css.special_content}>
                <h2>Акції</h2>
                <p>Перелік поточних акцій, знижок або промо-пропозицій.</p>
              </div>
            ) : filteredProducts.length > 0 ? (
              <ProductList
                productList={paginatedItems}
                className={css.product_list}
              />
            ) : (
              <p>Немає продуктів у цій категорії.</p>
            )}

            {/* {!isSertyfikaty && !isAkcii && filteredProducts.length > itemsPerPage && (
              <CustomPagination
                className={css.product_pagiantion}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                totalItems={filteredProducts.length}
                itemsPerPage={itemsPerPage}
              />
            )} */}
          </div>
        </div>
      </div>
    </section>
  )
}
