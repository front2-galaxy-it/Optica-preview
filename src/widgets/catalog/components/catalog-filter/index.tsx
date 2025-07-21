import React from "react"
import css from "./styles.module.scss"
import { AccordionItem } from "./AccordionItem"
import filtersData from "@/shared/data/catalog-filter-list.json"
import { Button } from "@/shared/ui"

export const CatalogFilter: React.FC = () => {
  return (
    <div className={css.catalog_filter}>
      <div className={css.filters_wrap}>
        <AccordionItem
          title="Знижки та акції"
          isRounded={true}
          filterList={filtersData.discounts}
        />
        <AccordionItem
          title="Стать"
          filterList={filtersData.gender}
        />
        <AccordionItem
          title="Бренд"
          filterList={filtersData.brand}
        />
        <AccordionItem
          title="Колекція"
          filterList={filtersData.collection}
        />
        <AccordionItem
          title="Форма оправи"
          filterList={filtersData.form}
        />
        <AccordionItem
          title="Матеріал"
          filterList={filtersData.material}
        />
      </div>
      <div className={css.buttons_wrap}>
        <Button
          className={css.filter_btn}
          modifier="primary"
          iconName="arrow_right"
        >
          Показати
        </Button>
        <Button
          className={css.filter_btn}
          modifier="secondary"
          iconName="icon_bin"
        >
          Скасувати
        </Button>
      </div>
    </div>
  )
}
