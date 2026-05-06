import { ProductsPageContent } from "@/components/public/products/products-page-content"
import type { Metadata } from "next"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://semicolon.it.kr"

export const metadata: Metadata = {
  title: "Product",
  description:
    "AI-powered relationship commerce concept for birthdays, anniversaries, VIP benefits, partner commerce, and concierge operations.",
  keywords: [
    "relationship commerce",
    "AI gift recommendation",
    "B2B2C commerce",
    "birthday benefits",
    "concierge commerce",
  ],
  openGraph: {
    title: "Product - SEMICOLON;DEV",
    description:
      "AI-powered relationship commerce concept connecting birthday data, gift recommendations, partner benefits, and concierge operations.",
    url: `${baseUrl}/product`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "SEMICOLON;DEV Product",
      },
    ],
  },
  alternates: {
    canonical: `${baseUrl}/product`,
  },
}

export default function ProductPage() {
  return <ProductsPageContent />
}
