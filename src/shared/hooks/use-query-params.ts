"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

const singleParams = ["page"]

export const useQueryParams = () => {
  const router = useRouter()
  const pathname: string = usePathname()
  const queryParams = useSearchParams()
  const searchParams: URLSearchParams = new URLSearchParams(queryParams.toString())

  const isValueActive = (key: string, value: string) => {
    return !!searchParams.get(key)?.split(",").includes(value)
  }

  const setParam = (key: string | Record<string, string>, value = "") => {
    if (typeof key === "object") {
      Object.entries(key).forEach(([k, v]) => {
        setParam(k, v)
      })
      return
    }

    if (singleParams.includes(key)) {
      if (value === "") {
        searchParams.delete(key)
      } else {
        searchParams.set(key, value)
      }
    } else {
      const prevValues = searchParams.get(key)?.split(",") || []
      const newValues = prevValues.includes(value)
        ? prevValues.filter((prevValue: string) => prevValue !== value)
        : [...prevValues, value]

      if (newValues.length) {
        searchParams.set(key, newValues.join(","))
      } else {
        searchParams.delete(key)
      }
    }
    router.replace(pathname + "?" + searchParams.toString(), {
      scroll: false,
    })
  }

  const removeParam = (key: string, value: string | undefined | null) => {
    if (!value) {
      searchParams.delete(key)
    } else {
      const prevValues = searchParams.get(key)?.split(",") || []
      const newValues = prevValues.filter((prevValue: string) => prevValue !== value)

      if (newValues.length) {
        searchParams.set(key, newValues.join(","))
      } else {
        searchParams.delete(key)
      }
    }
    router.replace(pathname + "?" + searchParams.toString(), {
      scroll: false,
    })
  }

  const getParam = (key: string) => {
    return searchParams.get(key)
  }

  const clearParams = (callback?: () => void) => {
    callback && callback()
    router.replace(pathname, {
      scroll: false,
    })
  }

  return {
    searchParams,
    pathname,
    queryParams,
    isValueActive,
    router,
    setParam,
    getParam,
    removeParam,
    clearParams,
  }
}
