"use client"

import React from "react"
import css from "./styles.module.scss"
import Image from "next/image"

export const Payment: React.FC = () => {
  return (
    <section className={css.payment_section}>
      <div className="container">
        <div className={css.payment_section_content}>
          <div className={css.tab_wrap}>
            <div className={css.similar_section_tab}>
              <p className={css.tab_text}>
                Ми пропонуємо зручні способи оплати для ваших покупок. Ви можете оплатити замовлення
                онлайн за допомогою картки, через електронні платіжні системи або при отриманні
                товару (післяплатою). Всі платіжні транзакції здійснюються через захищені системи,
                що гарантує безпеку ваших коштів.
              </p>
              <p className={css.tab_text}>
                Виберіть найзручніший для вас спосіб оплати під час оформлення замовлення.
              </p>
              <div className={css.payment_block_wrap}>
                <div className={css.payment_block}>
                  <Image
                    className={css.payment_block_img}
                    src="/images/delivery/money.png"
                    width={203}
                    height={203}
                    alt="money"
                  />
                  <b>Готівкою</b>
                  <p>При самовивозі товару з будь-якої зручної оптики.</p>
                  <div className={css.payment_block_icons}>
                    <Image
                      className={css.delivery_block_item_img}
                      src="/images/delivery/optica_logo.png"
                      width={146}
                      height={32}
                      alt="оптика"
                    />
                  </div>
                </div>
                <div className={css.payment_block}>
                  <Image
                    className={css.payment_block_img}
                    src="/images/delivery/clock .png"
                    width={203}
                    height={203}
                    alt="money"
                  />
                  <b>Післяплата</b>
                  <p>Післяплатою у відділеннях «Нової пошти».</p>
                  <p>
                    Покупець не оплачує відсоток за накладений платіж на замовлення вартістю від
                    1200 грн, сплачується тільки вартість замовлення.
                  </p>
                  <div className={css.payment_block_icons}>
                    <Image
                      className={css.payment_block_icon}
                      src="/images/delivery/nova_post.png"
                      width={100}
                      height={32}
                      alt="нова пошта"
                    />
                    <Image
                      className={css.payment_block_icon}
                      src="/images/delivery/ukr_post.png"
                      width={120}
                      height={32}
                      alt="укрпошта"
                    />
                  </div>
                </div>
                <div className={css.payment_block}>
                  <Image
                    className={css.payment_block_img}
                    src="/images/delivery/credit-card.png"
                    width={203}
                    height={203}
                    alt="credit-card"
                  />
                  <b>Visa/mastercard</b>
                  <p>
                    На сайті Оптики Добрих Цін. А також через сервіси: <br /> — Приват24; <br /> —
                    Google Pay; <br /> — Apple Pay; <br /> — 24Pay.
                  </p>
                  <p>При самовивозі товару з будь-якої зручної оптики.</p>
                  <div className={css.payment_block_icons}>
                    <Image
                      className={css.payment_block_icon}
                      src="/images/svg/mastercard.svg"
                      width={32}
                      height={32}
                      alt="нова пошта"
                    />
                    <Image
                      className={css.payment_block_icon}
                      src="/images/svg/visa.svg"
                      width={32}
                      height={32}
                      alt="укрпошта"
                    />
                  </div>
                </div>
                <div className={css.payment_block}>
                  <Image
                    className={css.payment_block_img}
                    src="/images/delivery/money-cash.png"
                    width={203}
                    height={203}
                    alt="money-cash"
                  />
                  <b>ОПЛАТА ЧАСТИНАМИ</b>
                  <p>
                    — Від Monobank: діє для покупок з сумою до сплати від 1500 грн, на сайті та в
                    оптиках мережі.
                    <br />— Від ПриватБанк: діє для покупок з сумою до сплати від 1500 грн, на сайті
                    та в оптиках мережі.
                  </p>
                  <div className={css.payment_block_icons}>
                    <Image
                      className={css.payment_block_icon}
                      src="/images/svg/IconPayMono.svg"
                      width={32}
                      height={32}
                      alt="mono pay"
                    />
                    <Image
                      className={css.payment_block_icon}
                      src="/images/svg/IconPayPrivat.svg"
                      width={32}
                      height={32}
                      alt="privat pay"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
