import { NotFoundSection } from "@/widgets/not-found"
import { fetchPageLayoutData, getPageLayoutMetadata } from "@/shared/lib"
import { IGlobalPageProps } from "@/shared/types"
/**
 * Note however that Next.js will only render this page when the **notFound** function
 * is called from within a route, not for all unknown routes in general.
 * You can find more info about this in the [Next Intl docs](https://next-intl-docs.vercel.app/docs/environments/error-files)
 *
 * Now it is catching in the `app/[locale]/[...rest]page.tsx` page
 * */

const getNotFoundPageData = async ({ locale }: { locale: string }) => {
  return await fetchPageLayoutData({ locale, layoutName: "notfound" })
}

export function NotFoundPage() {
  return <NotFoundSection />
}

export async function generateMetadata({ params: { locale } }: IGlobalPageProps) {
  try {
    const layoutData = await getNotFoundPageData({ locale })
    if (!layoutData) return
    return getPageLayoutMetadata(layoutData.layout)
  } catch (error) {
    console.error("Error fetching categories:", error)
  }
}
