import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin("./src/app/localization/i18n.ts")

/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4040",
      },
      {
        protocol: "https",
        hostname: "leader.galaxy-it.top",
        pathname: "/api/storage/static/**",
      },
    ],
  },
  sassOptions: {
    prependData: '@import "@/app/styles/scss-utils/index";',
  },
}

export default withNextIntl(nextConfig)
