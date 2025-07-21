import React from "react"
import css from "./styles.module.scss"
import { Icon } from "@/shared/ui/icons"

export const FilterList: React.FC = () => {
  return (
    <div className={css.filter_list_wrap}>
      <div className={css.filter_list_head}>
        <Icon
          name="icon_filter"
          className={css.icon_filter}
        />
        <strong>Фільтр</strong>
      </div>
    </div>
  )
}
