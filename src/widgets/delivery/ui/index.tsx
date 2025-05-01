"use client"

import React from "react"
import css from "./styles.module.scss"
import Image from "next/image"
import { SelfDelivery } from "@/shared/ui"

export const Delivery: React.FC = () => {
  return (
    <section className={css.delivery_section}>
      <div className="container">
        <div className={css.delivery_section_content}>
          <div className={css.tab_wrap}>
            <div className={css.similar_section_tab}>
              <p className={css.tab_text}>
                Ми здійснюємо швидку та надійну доставку по всій Україні. Ваші замовлення будуть
                оброблені та відправлені в найкоротші терміни. Для зручності ви можете обрати
                доставку кур'єром або до найближчого відділення. Вартість та час доставки залежать
                від вашого місцезнаходження.
              </p>
              <p className={css.tab_text}>
                Ми гарантуємо безпечне пакування і уважне ставлення до кожного товару.
              </p>
              <div className={css.delivery_block_wrap}>
                <div className={css.delivery_block}>
                  <h6 className={css.delivery_block_title}>Доставка до найближчого відділення</h6>
                  <div className={css.delivery_block_items}>
                    <div className={css.delivery_block_item}>
                      <div className={css.delivery_block_item_img_wrap}>
                        <Image
                          className={css.delivery_block_item_img}
                          src="/images/delivery/ukr_post.png"
                          width={142}
                          height={32}
                          alt="укрпошта"
                        />
                      </div>
                      <div className={css.delivery_block_item_content}>
                        <b>Про доставку</b>
                        <p>Ви можете замовити доставку товару на будь-яке відділення «Укрпошти».</p>
                        <b>Вартість доставки</b>
                        <p>
                          БЕЗКОШТОВНА доставка замовлення вартістю від 1200 грн. Замовлення вартістю
                          до 1200 грн. сплачується за тарифами "Укрпошта"
                        </p>
                        <b>Час доставки</b>
                        <p>
                          Орієнтовну дату отримання замовлення можна відслідкувати у мобільному
                          застосунку «Укрпошта».
                        </p>
                      </div>
                    </div>
                    <div className={css.delivery_block_item}>
                      <div className={css.delivery_block_item_img_wrap}>
                        <Image
                          className={css.delivery_block_item_img}
                          src="/images/delivery/nova_post.png"
                          width={100}
                          height={32}
                          alt="нова пошта"
                        />
                      </div>
                      <div className={css.delivery_block_item_content}>
                        <b>Про доставку</b>
                        <p>Ви можете замовити доставку товару на будь-яке відділення «Укрпошти».</p>
                        <b>Вартість доставки</b>
                        <p>
                          БЕЗКОШТОВНА доставка замовлення вартістю від 1200 грн. Замовлення вартістю
                          до 1200 грн. сплачується за тарифами "Укрпошта"
                        </p>
                        <b>Час доставки</b>
                        <p>
                          Орієнтовну дату отримання замовлення можна відслідкувати у мобільному
                          застосунку «Укрпошта».
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={css.delivery_block}>
                  <h6 className={css.delivery_block_title}>Адресна доставка кур’єром до дверей</h6>
                  <div className={css.delivery_block_items}>
                    <div className={css.delivery_block_item}>
                      <div className={css.delivery_block_item_img_wrap}>
                        <Image
                          className={css.delivery_block_item_img}
                          src="/images/delivery/nova_post_courier.png"
                          width={142}
                          height={32}
                          alt="нова пошта"
                        />
                      </div>
                      <div className={css.delivery_block_item_content}>
                        <b>Про доставку</b>
                        <p>Ви можете замовити доставку товару на будь-яке відділення «Укрпошти».</p>
                        <b>Вартість доставки</b>
                        <p>
                          БЕЗКОШТОВНА доставка замовлення вартістю від 1200 грн. Замовлення вартістю
                          до 1200 грн. сплачується за тарифами "Укрпошта"
                        </p>
                        <b>Час доставки</b>
                        <p>
                          Орієнтовну дату отримання замовлення можна відслідкувати у мобільному
                          застосунку «Укрпошта».
                        </p>
                      </div>
                    </div>
                    <div className={css.delivery_block_item}>
                      <div className={css.delivery_block_item_img_wrap}>
                        <Image
                          className={css.delivery_block_item_img}
                          src="/images/delivery/optica_logo.png"
                          width={142}
                          height={32}
                          alt="оптика"
                        />
                      </div>
                      <div className={css.delivery_block_item_content}>
                        <b>Про доставку</b>
                        <p>Ви можете замовити доставку товару на будь-яке відділення «Укрпошти».</p>
                        <b>Вартість доставки</b>
                        <p>
                          БЕЗКОШТОВНА доставка замовлення вартістю від 1200 грн. Замовлення вартістю
                          до 1200 грн. сплачується за тарифами "Укрпошта"
                        </p>
                        <b>Час доставки</b>
                        <p>
                          Орієнтовну дату отримання замовлення можна відслідкувати у мобільному
                          застосунку «Укрпошта».
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <SelfDelivery />
          </div>
        </div>
      </div>
    </section>
  )
}
