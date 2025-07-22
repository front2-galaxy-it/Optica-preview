import { useState } from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { CustomSelect } from "@/shared/ui/modules/custom-select"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

export default function EyesTabSelector() {
  const tProduct = useTranslations("product-page")
  const [activeTab, setActiveTab] = useState("same")

  const [sameRadius, setSameRadius] = useState("8,4")
  const [sameDiopters, setSameDiopters] = useState("8,4")

  const [leftRadius, setLeftRadius] = useState("8,4")
  const [leftDiopters, setLeftDiopters] = useState("8,4")
  const [rightRadius, setRightRadius] = useState("8,4")
  const [rightDiopters, setRightDiopters] = useState("8,4")

  const radiusOptions = ["8,4", "8,6", "8,8"]
  const diopterOptions = ["8,4", "8,6", "8,8"]

  return (
    <div className={css.eyes_selector}>
      <div className={css.tabs}>
        <button
          className={classNames(css.tabButton, {
            [css.tabActive]: activeTab === "same",
          })}
          onClick={() => setActiveTab("same")}
        >
          {tProduct("same_eyes")}
        </button>
        <button
          className={classNames(css.tabButton, {
            [css.tabActive]: activeTab === "different",
          })}
          onClick={() => setActiveTab("different")}
        >
          {tProduct("different_eyes")}
        </button>
      </div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {activeTab === "same" && (
          <div className={css.controlsRow}>
            <div className={css.controlGroup}>
              <label className={css.label}>{tProduct("radius")}:</label>
              <CustomSelect
                className={css.customSelect}
                options={radiusOptions}
                value={sameRadius}
                onChange={setSameRadius}
              />
            </div>

            <div className={css.controlGroup}>
              <label className={css.label}>{tProduct("diopters")}:</label>
              <CustomSelect
                className={css.customSelect}
                options={diopterOptions}
                value={sameDiopters}
                onChange={setSameDiopters}
              />
            </div>
          </div>
        )}

        {activeTab === "different" && (
          <>
            <div className={classNames(css.controlsRow, css.differentEyes)}>
              <div className={css.eyeLabel}>{tProduct("left_eye")}:</div>

              <div className={css.controlGroup_wrap}>
                <div className={css.controlGroup}>
                  <label className={css.label}>{tProduct("radius")}:</label>
                  <CustomSelect
                    className={css.customSelect}
                    options={radiusOptions}
                    value={leftRadius}
                    onChange={setLeftRadius}
                  />
                </div>

                <div className={css.controlGroup}>
                  <label className={css.label}>{tProduct("diopters")}:</label>
                  <CustomSelect
                    className={css.customSelect}
                    options={diopterOptions}
                    value={leftDiopters}
                    onChange={setLeftDiopters}
                  />
                </div>
              </div>
            </div>

            <div className={classNames(css.controlsRow, css.differentEyes)}>
              <div className={css.eyeLabel}>{tProduct("right_eye")}:</div>

              <div className={css.controlGroup_wrap}>
                <div className={css.controlGroup}>
                  <label className={css.label}>{tProduct("radius")}:</label>
                  <CustomSelect
                    className={css.customSelect}
                    options={radiusOptions}
                    value={rightRadius}
                    onChange={setRightRadius}
                  />
                </div>

                <div className={css.controlGroup}>
                  <label className={css.label}>{tProduct("diopters")}:</label>
                  <CustomSelect
                    className={css.customSelect}
                    options={diopterOptions}
                    value={rightDiopters}
                    onChange={setRightDiopters}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  )
}
