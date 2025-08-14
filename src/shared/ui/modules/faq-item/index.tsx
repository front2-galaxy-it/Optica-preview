"use client"

import React, { DetailedHTMLProps, HTMLAttributes, useState } from "react"
import css from "./styles.module.scss"
import classNames from "classnames"

interface IAccordionsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  accordeons: any
}

export const Accordions: React.FC<IAccordionsProps> = ({ accordeons }) => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([])

  const toggleAccordion = (index: number) => {
    setActiveIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index],
    )
  }
  return (
    <div className={css.accordion_wrap}>
      {accordeons &&
        accordeons.map((accordeon: any, index: number) => (
          <div
            className={classNames(css.accordion, {
              [css.open]: activeIndexes.includes(index),
            })}
            key={index}
          >
            <button
              className={css.accordion_trigger}
              onClick={() => toggleAccordion(index)}
            >
              <span className={css.accordion_name}>{accordeon.question}</span>
              <div className={css.open_status}></div>
            </button>
            <div className={css.accordion_content}>
              <div className={css.accordion_content_inner}>
                <p>{accordeon.answer}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
