import React from "react"
import css from "./styles.module.scss"
import { AccordionItem } from "./AccordionItem"
import filtersData from "@/shared/data/catalog-filter-list.json"
import { Button } from "@/shared/ui"
import { useTranslations } from "next-intl"

export const CatalogFilter: React.FC = () => {
  const tCatalog = useTranslations("catalog-page")
  const tButtons = useTranslations("buttons")
  return (
    <div className={css.catalog_filter}>
      <div className={css.filters_wrap}>
        <AccordionItem
          title={tCatalog("discounts_and_promotions")}
          isRounded={true}
          filterList={filtersData.discounts}
        />
        <AccordionItem
          title={tCatalog("gender")}
          filterList={filtersData.gender}
        />
        <AccordionItem
          title={tCatalog("brand")}
          filterList={filtersData.brand}
        />
        <AccordionItem
          title={tCatalog("collection")}
          filterList={filtersData.collection}
        />
        <AccordionItem
          title={tCatalog("frame_shape")}
          filterList={filtersData.form}
        />
        <AccordionItem
          title={tCatalog("material")}
          filterList={filtersData.material}
        />
      </div>
      <div className={css.buttons_wrap}>
        <Button
          className={css.filter_btn}
          modifier="primary"
          iconName="arrow_right"
        >
          {tButtons("show_btn")}
        </Button>
        <Button
          className={css.filter_btn}
          modifier="secondary"
          iconName="icon_bin"
        >
          {tButtons("cancel-btn")}
        </Button>
      </div>
    </div>
  )
}
