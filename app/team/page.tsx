import { TeamPageContent } from "@/components/public/team/team-page-content"
import type { Metadata } from "next"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://semicolon.it.kr"

export const metadata: Metadata = {
  title: "Team",
  description: "Founder and core team information for SEMICOLON;DEV.",
  keywords: ["SEMICOLON;DEV", "founders", "team", "startup", "software development"],
  openGraph: {
    title: "Team - SEMICOLON;DEV",
    description: "Founder and core team information for SEMICOLON;DEV.",
    url: `${baseUrl}/team`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "SEMICOLON;DEV Team",
      },
    ],
  },
  alternates: {
    canonical: `${baseUrl}/team`,
  },
}

export default function TeamPage() {
  return <TeamPageContent />
}
