import { AboutPageContent } from "@/components/public/about/about-page-content"
import type { Metadata } from "next"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://semicolon.it.kr"

export const metadata: Metadata = {
  title: "About",
  description:
    "SEMICOLON;DEV is a practical full-stack development team that connects product strategy, engineering, and operations.",
  keywords: ["SEMICOLON;DEV", "about", "full-stack", "product strategy", "engineering"],
  openGraph: {
    title: "About - SEMICOLON;DEV",
    description:
      "A practical full-stack development team connecting business models, operations, growth strategy, and engineering.",
    url: `${baseUrl}/about`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "SEMICOLON;DEV About",
      },
    ],
  },
  alternates: {
    canonical: `${baseUrl}/about`,
  },
}

export default function AboutPage() {
  return <AboutPageContent />
}
