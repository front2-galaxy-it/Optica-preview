export const getPageLayoutMetadata = ({
  meta_title,
  meta_description,
  meta_keywords,
  robots,
  og_title,
  og_description,
  og_image,
}: any) => {
  return {
    title: meta_title ? meta_title : "Оптика Добрих Цін",
    description: meta_description,
    keywords: meta_keywords,
    openGraph: {
      title: og_title || meta_title || "",
      description: og_description || meta_description || "",
      keywords: meta_keywords || meta_keywords || "",
      siteName: "Optika",
      images: og_image?.original ? [og_image.original] : [],
      type: "website",
    },
    robots: robots,
  }
}
