import React, { useState, useEffect } from "react"
import css from "./styles.module.scss"
import Image from "next/image"
import { ButtonLink } from "@/shared/ui/links"
import { IProductCardProps, LabelType, StatusType } from "@/shared/types"
import productsData from "@/shared/data/products.json"
import { ProductCard } from "@/shared/ui"
import { AnimatePresence, motion } from "framer-motion"
import { useTranslations } from "next-intl"

const productsDataList: IProductCardProps[] = productsData.products.map((product) => ({
  ...product,
  labelTypes: product.labelTypes as LabelType[],
  statusTypes: product.statusTypes as StatusType[],
}))

const itemsPerPage = 4

export const SelectedProducts: React.FC = () => {
  const tSelectedOrders = useTranslations("profile-page.favorite")
  const tButtons = useTranslations("buttons")
  const [currentPage] = useState(1)

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedItems = productsDataList.slice(startIndex, startIndex + itemsPerPage)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [currentPage])

  return (
    <div className={css.selected_wrap}>
      <div className={css.without_selected}>
        <Image
          className={css.selected_img}
          src="/images/content_img_13.png"
          width={420}
          height={488}
          alt="image not found"
        />
        <div className={css.selected_text_wrap}>
          <p className={css.selected_title}>{tSelectedOrders("empty-orders-title")}</p>
          <p className={css.selected_descr}>{tSelectedOrders("empty-orders-description")}</p>
          <ButtonLink
            href="#"
            modifier="primary"
            iconName="arrow_right"
          >
            {tButtons("go-to-cart-btn")}
          </ButtonLink>
        </div>
      </div>
      <div className={css.selected_product_wrap}>
        <AnimatePresence>
          <motion.div
            key={currentPage}
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={css.selected_product_list}>
              {paginatedItems.map((card) => (
                <ProductCard
                  className={css.selected_product}
                  isBin={true}
                  key={card.id}
                  {...card}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
        {/* {productsDataList.length > itemsPerPage && (
          <CustomPagination
            className={css.selected_pagination}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            totalItems={productsDataList.length}
            itemsPerPage={itemsPerPage}
          />
        )} */}
      </div>
    </div>
  )
}
