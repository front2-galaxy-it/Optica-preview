import React from "react"
import css from "./styles.module.scss"
import { ProductCard } from "@/shared/ui"
import { IProductCardProps } from "@/shared/types"
import classNames from "classnames"

interface ProductListProps {
  productList: IProductCardProps[]
  className?: string
}

export const ProductList: React.FC<ProductListProps> = ({ productList, className }) => {
  return (
    <div className={classNames(css.product_list, className)}>
      {productList.map((product) => (
        <ProductCard
          className={css.product_card}
          basketButtonClass={css.product_list_btn}
          key={product.id}
          {...product}
          size="small"
        />
      ))}
    </div>
  )
}
