"use client"

import React, { useState } from "react"
import css from "./styles.module.scss"
import Image from "next/image"
import { Button } from "@/shared/ui"
import { ICareerSectionProps } from "@/shared/types"
import { motion, AnimatePresence } from "framer-motion"
import { CareerPopup, ThanksPopup } from "@/widgets/popups"

interface CareerSectionProps {
  careerList: ICareerSectionProps[]
}

export const CareerSection: React.FC<CareerSectionProps> = ({ careerList }) => {
  // const fileInputRef = useRef<HTMLInputElement>(null)
  // const [fileName, setFileName] = useState<string | null>(null)
  // const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<number>(0)
  const activeItem = careerList[activeTab]

  const [popupOpen, setPopupOpen] = useState(false)
  const [thanksPopupOpen, setThanksPopupOpen] = useState(false)

  // const handleClick = () => {
  //   fileInputRef.current?.click()
  // }

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0]
  //   if (file) {
  //     const allowedTypes = [
  //       "application/pdf",
  //       "application/msword",
  //       "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  //     ]
  //     if (!allowedTypes.includes(file.type)) {
  //       setError("Недопустимий формат файлу. Дозволено PDF або Word.")
  //       setFileName(null)
  //       return
  //     }

  //     if (file.size > 5 * 1024 * 1024) {
  //       setError("Розмір файлу перевищує 5 МБ.")
  //       setFileName(null)
  //       return
  //     }

  //     setFileName(file.name)
  //     setError(null)
  //   }
  // }

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()

  //   if (!fileName) {
  //     setError("Будь ласка, прикріпіть резюме.")
  //     return
  //   }

  //   const formData = new FormData()
  //   const file = fileInputRef.current?.files?.[0]

  //   if (file) {
  //     formData.append("resume", file)
  //   }

  //   // Пример отправки (можно использовать fetch или axios)
  //   // fetch("/api/upload", {
  //   //   method: "POST",
  //   //   body: formData,
  //   // })
  //   //   .then((response) => response.json())
  //   //   .then((data) => {
  //   //     console.log("File uploaded successfully:", data)
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error("Error uploading file:", error)
  //   //   })

  //   alert("Ваше резюме успішно надіслано!")
  // }

  return (
    <section className={css.career_section}>
      <div className="container">
        <div className={css.career_section_content}>
          <div className={css.career_section_text}>
            <p>
              Ми – команда професіоналів, які прагнуть забезпечити кожному клієнту найкраще
              обслуговування та якісні оптичні рішення. Якщо ви енергійна, ініціативна і хочете
              працювати в динамічній та інноваційній компанії, ми будемо раді вас бачити в нашій
              команді!
            </p>
            <b>Чому варто працювати з нами?</b>
            <strong>Розвиток та навчання:</strong>
            <p>Ми надаємо можливості для професійного зростання та навчання.</p>
            <strong>Командна атмосфера:</strong>
            <p>У нас працюють лише мотивовані та дружні люди, з якими приємно працювати.</p>
            <strong>Справедливе ставлення та бонуси:</strong>
            <p>Ми цінуємо ваші зусилля і винагороджуємо їх відповідно.</p>
            <p>
              Якщо ви зацікавлені в одній з вакансій, надсилайте своє резюме або заповнюйте форму на
              сайті. Ми завжди відкриті для нових талантів!
            </p>
            {/* <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className={css.hidden_input}
            />
            <div className={css.upload_wrap}>
              <Button
                className={css.career_btn}
                modifier="primary"
                iconName="icon_pin"
                onClick={handleClick}
              >
                Прикріпити резюме
              </Button>
              <span className={css.error_message}>{error}</span>
              <span className={css.file_info}>{fileName && `Файл: ${fileName}`}</span>
            </div> */}
          </div>
          <Image
            className={css.career_section_img}
            src="/images/content_img_7.png"
            width={634}
            height={538}
            alt="image not found"
          />
        </div>
        <div className={css.career_section_position}>
          <div className={css.buttons_list_wrap}>
            <div className={css.buttons_list}>
              {careerList.map(({ label }, index) => (
                <button
                  key={index}
                  type="button"
                  className={`${css.button} ${activeTab === index ? css.active : ""}`}
                  onClick={() => setActiveTab(index)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className={css.tab_wrapper}>
            <h5 className={css.tab_wrapper_title}>Відкриті вакансії:</h5>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                {activeItem && (
                  <div className={css.tab_content}>
                    <h6 className={css.tab_title}>{careerList[activeTab].label}</h6>
                    <div className={css.vacancy_description}>
                      <p>{activeItem.description}</p>
                      <strong>Обов'язки:</strong>
                      <ul>
                        {activeItem.duties.map((duty, index) => (
                          <li key={index}>{duty}</li>
                        ))}
                      </ul>
                      <strong>Вимоги:</strong>
                      <ul>
                        {activeItem.requirements.map((requirement, index) => (
                          <li key={index}>{requirement}</li>
                        ))}
                      </ul>
                      <strong>Ми пропонуємо:</strong>
                      <ul>
                        {activeItem.offerings.map((offering, index) => (
                          <li key={index}>{offering}</li>
                        ))}
                      </ul>
                      <p>
                        Якщо ви хочете стати частиною нашої команди, надсилайте своє резюме —
                        можливо, ми чекаємо саме на вас!
                      </p>
                      <Button
                        modifier="primary"
                        iconName="arrow_right"
                        type="submit"
                        onClick={() => setPopupOpen(true)}
                      >
                        Доєднатися до команди
                      </Button>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <CareerPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        onSuccess={() => setThanksPopupOpen(true)}
      />
      <ThanksPopup
        title="Дякуємо за Ваш відгук!"
        message="Дякуємо за ваш відгук і зацікавленість у вакансії! Наші рекрутери найближчим часом зв'яжуться з вами для уточнення деталей. Сподіваємося на подальшу співпрацю та бажаємо вам успіхів!"
        isOpen={thanksPopupOpen}
        onClose={() => setThanksPopupOpen(false)}
      />
    </section>
  )
}
