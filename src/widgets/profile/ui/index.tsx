"use client"

import React, { useEffect, useState } from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { useRouter, useSearchParams } from "next/navigation"
import { ProfileNav } from "../components/profile-navigation"
import { ProfileData } from "../profile-data"
import { PasswordChange } from "../change-password"
import { AnimatePresence, motion } from "framer-motion"
import { LogoutPopup, ThanksPopup } from "@/widgets/popups"
import { Orders } from "../orders"
import { SelectedProducts } from "../selected-products"
import { Bonuses } from "../bonuses"

type Tab = "data" | "password" | "orders" | "selected" | "bonus"

export const ProfileSection: React.FC = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const tabFromUrl = searchParams.get("tab") as Tab | null
  const [popupOpen, setPopupOpen] = useState(false)
  const [popupThanksOpen, setPopupThanksOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<Tab>("data")

  useEffect(() => {
    if (tabFromUrl && ["data", "password", "orders", "selected", "bonus"].includes(tabFromUrl)) {
      setActiveTab(tabFromUrl)
    }
  }, [tabFromUrl])

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab)
    const params = new URLSearchParams(window.location.search)
    params.set("", tab)
    router.replace(`?${params.toString()}`)
  }

  const handleLogoutClick = () => {
    setPopupOpen(true)
  }

  const handlePersonalDataSuccess = () => {
    setPopupThanksOpen(true)
    setTimeout(() => setPopupThanksOpen(false), 3000)
  }

  const handlePersonalDataSuccessClose = () => {
    setPopupThanksOpen(false)
  }

  return (
    <section className={css.profile_section}>
      <div className={classNames(css.profile_section_container, "container")}>
        <div className={css.profile_section_content}>
          <ProfileNav
            activeTab={activeTab}
            onTabChange={handleTabChange}
            onLogoutClick={handleLogoutClick}
          />
          <div className={css.profile_section_blocks}>
            <AnimatePresence mode="wait">
              {activeTab === "data" && (
                <motion.div
                  key="data"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProfileData onPersonalDataSuccess={handlePersonalDataSuccess} />
                </motion.div>
              )}
              {activeTab === "password" && (
                <motion.div
                  key="password"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <PasswordChange onSuccess={handlePersonalDataSuccess} />
                </motion.div>
              )}
              {activeTab === "orders" && (
                <motion.div
                  key="orders"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Orders />
                </motion.div>
              )}
              {activeTab === "selected" && (
                <motion.div
                  key="selected"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <SelectedProducts />
                </motion.div>
              )}
              {activeTab === "bonus" && (
                <motion.div
                  key="bonus"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Bonuses />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <LogoutPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />
      <ThanksPopup
        isOpen={popupThanksOpen}
        onClose={handlePersonalDataSuccessClose}
        title="Дякуємо!"
        message="Ваші данні були успішно збереженні."
      />
    </section>
  )
}
