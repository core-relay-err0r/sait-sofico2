import type { MetadataRoute } from "next"

import { getSiteUrl } from "@/lib/env"

const publicRoutes = [
  "/",
  "/about",
  "/services",
  "/services/operational-coordination",
  "/services/supplier-alignment",
  "/services/documentation-support",
  "/vendors",
  "/how-we-work",
  "/contact",
  "/compliance",
  "/privacy-policy",
  "/terms-of-use",
  "/cookie-policy",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()
  const lastModified = new Date()

  return publicRoutes.map((path) => ({
    url: new URL(path, siteUrl).toString(),
    lastModified,
  }))
}
