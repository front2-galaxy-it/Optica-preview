// ProductTab.tsx
"use client"

import React, { forwardRef } from "react"
import { ProductCard } from "@/shared/ui"
import { IProductCardProps } from "@/shared/types"
import css from "./styles.module.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import { Swiper as SwiperType } from "swiper"

interface ProductTabProps {
  category: string
  productList: IProductCardProps[]
}

export const ProductTab = forwardRef<SwiperType, ProductTabProps>(
  ({ category, productList }, ref) => {
    const filteredProducts = productList.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase(),
    )

    if (filteredProducts.length === 0) {
      return <div>Немає продуктів у цій категорії.</div>
    }

    return (
      <div className={css.product_list}>
        <Swiper
          className={css.product_swiper}
          slidesPerView={3}
          spaceBetween={12}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {
            if (ref && typeof ref === "object" && ref !== null) {
              ref.current = swiper
            }
          }}
          breakpoints={{
            320: { slidesPerView: 1.1 },
            480: { slidesPerView: 1.4 },
            611: { slidesPerView: 1.7 },
            768: { slidesPerView: 2 },
            920: { slidesPerView: 2.3 },
            1024: { slidesPerView: 2.7 },
            1200: { slidesPerView: 3 },
          }}
        >
          {filteredProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  },
)

ProductTab.displayName = "ProductTab"
