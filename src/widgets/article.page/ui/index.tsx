"use client"

import React, { DetailedHTMLProps, HtmlHTMLAttributes } from "react"
import css from "./styles.module.scss"

import { BlogPageNavigation } from "@/shared/components/blog-navigation"
import { SectionTip } from "@/shared/ui/modules/section-tip"
import Image from "next/image"
import { useTranslations } from "next-intl"
// import { ButtonLink } from "@/shared/ui/links"

interface IBlogArtilcePageSectionProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  blogArticleData: any
  categoriesList: any
}

export const ArticlePageSection: React.FC<IBlogArtilcePageSectionProps> = ({
  blogArticleData,
  categoriesList,
}) => {
  const tCommon = useTranslations("common")
  const { title, human_date, posted_date, author, image, description } = blogArticleData
  // const [currentSlug, setCurrentSlug] = useState(slug)

  // const articleIndex = blogArticleData.findIndex((item: any) => item.slug === currentSlug)

  // if (articleIndex === -1) return null

  // const article = blogArticleData[articleIndex]

  // const prevArticle = blogArticleData[articleIndex - 1] || null
  // const nextArticle = blogArticleData[articleIndex + 1] || null

  // const handlePrevArticle = () => {
  //   if (prevArticle) {
  //     setCurrentSlug(prevArticle.slug)
  //   }
  // }

  // const handleNextArticle = () => {
  //   if (nextArticle) {
  //     setCurrentSlug(nextArticle.slug)
  //   }
  // }

  // const author = authorDataList.find(
  //   (item) => item.slug.trim().toLowerCase() === article.authorSlug.trim().toLowerCase(),
  // )

  // if (!author) return null

  return (
    <section className={css.blog_section}>
      <div className="container">
        <div className={css.blog_section_content}>
          <BlogPageNavigation
            categoriesList={categoriesList}
            articlesList={blogArticleData}
          />
          <div className={css.article_content}>
            <div className={css.article_head}>
              <SectionTip label={author?.name || tCommon("article_author")} />

              <h6 className={css.head_title}>{title}</h6>
              {human_date && <time dateTime={posted_date}>{human_date}</time>}
            </div>
            <div className={css.article_body}>
              {/* <p>
                У сучасному світі, коли більшість часу ми проводимо за комп’ютерами, важливо
                піклуватися про здоров’я очей. Тривала робота за монітором може призводити до втоми,
                сухості в очах, головного болю та зниження зору.
              </p> */}
              {image && (
                <Image
                  src={image ? image : ""}
                  width={849}
                  height={523}
                  alt="image not found"
                />
              )}
              <div
                className={css.article_template_content}
                dangerouslySetInnerHTML={{ __html: description ? description : "" }}
              />
              {/* <h6>
                Щоб уникнути цих проблем, варто звернути увагу на правильний вибір окулярів для
                роботи за комп’ютером.
              </h6>
              <p>
                У сучасному світі, коли більшість часу ми проводимо за комп’ютерами, важливо
                піклуватися про здоров’я очей. Тривала робота за монітором може призводити до втоми,
                сухості в очах, головного болю та зниження зору.
              </p>
              <ol>
                <li>Консультація клієнтів щодо підбору окулярів та контактних лінз.</li>
                <li>Консультація клієнтів щодо підбору окулярів та контактних лінз.</li>
                <li>Консультація клієнтів щодо підбору окулярів та контактних лінз.</li>
              </ol>
              <ul>
                <li>Консультація клієнтів щодо підбору окулярів та контактних лінз.</li>
                <li>Консультація клієнтів щодо підбору окулярів та контактних лінз.</li>
                <li>Консультація клієнтів щодо підбору окулярів та контактних лінз.</li>
              </ul>
              <blockquote>
                <div>
                  <Icon name="icon_qoute" />
                  <p>
                    Комп’ютерні монітори випромінюють синє світло, яке може впливати на якість сну і
                    викликати втомленість очей. Спеціальні лінзи з фільтром синього світла
                    допомагають знизити навантаження на очі та зберегти комфорт протягом довгих
                    годин роботи.
                  </p>
                </div>
              </blockquote> */}
            </div>
            {author && (
              <div className={css.article_footer}>
                {author.name && <span>{author.name}</span>}
                {author?.position && <span>{author.position}</span>}
              </div>
            )}
            {/* <div className={css.article_buttons}>
              {prevArticle && (
                <ButtonLink
                  className={css.article_btn}
                  modifier="secondary"
                  iconName="arrow_right"
                  iconPosition="left"
                  onClick={handlePrevArticle}
                >
                  Попередня стаття
                </ButtonLink>
              )}
              {nextArticle && (
                <ButtonLink
                  className={css.article_btn}
                  modifier="secondary"
                  iconName="arrow_right"
                  onClick={handleNextArticle}
                >
                  Наступна стаття
                </ButtonLink>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
