import React, { useState } from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { IFilterProps } from "./props"

interface AccordionItemProps {
  title: string
  isRounded?: boolean
  filterList: IFilterProps[]
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  isRounded = false,
  filterList,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const visibleCount = 4
  const hiddenCount = filterList.length - visibleCount

  const toggleExpanded = () => setIsExpanded(!isExpanded)

  const visibleItems = isExpanded ? filterList : filterList.slice(0, visibleCount)

  return (
    <div
      className={classNames(css.accordion, {
        [css.rounded]: isRounded,
      })}
    >
      <span className={css.accordion_title}>{title}</span>
      <ul>
        {visibleItems.map((item, index) => (
          <li
            className={css.item_list}
            key={index}
          >
            <label className={css.checkbox}>
              <input type="checkbox" />
              <span className={css.customCheckbox}></span>
              {item.title}
            </label>
          </li>
        ))}
      </ul>

      {hiddenCount > 0 && (
        <button
          className={css.showMoreBtn}
          onClick={toggleExpanded}
        >
          {isExpanded ? "Згорнути" : `Дивитись всі ${hiddenCount}`}
        </button>
      )}
    </div>
  )
}
