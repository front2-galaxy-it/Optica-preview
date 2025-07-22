import { LayoutsService } from "../services"

export const fetchPageLayoutData = async ({
  locale,
  layoutName,
}: IFetchPageProps): Promise<any | null> => {
  const fetchOptions = {
    headers: {
      "Accept-Locale": locale,
    },
  }

  try {
    const layoutData = await LayoutsService.getLayout(layoutName, fetchOptions)

    return {
      layout: layoutData.data,
    }
  } catch (error) {
    console.error("Error fetching categories:", error)
    return null
  }
}

export interface IFetchPageProps {
  locale: string
  layoutName:
    | "home"
    | "blog"
    | "faq"
    | "notfound"
    | "delivery"
    | "payment"
    | "author"
    | "article"
    | "about"
    | "ourstores"
    | "diagnostics"
    | "reviews"
    | "faq"
    | "contact"
    | "privacy"
    | "terms"
    | "manufacturers"
    | "military"
    | "bonuses"
    | "careers"
    | "login"
    | "register"
    | "cart"
    | "useraccount"
    | "resetpassword"
    | "userorders"
    | "userfavorites"
    | "userbonuses"
}
