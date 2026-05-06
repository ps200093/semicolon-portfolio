import { PhilosophyPageContent } from "@/components/public/philosophy/philosophy-page-content";
import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://semicolon.it.kr'; 

export const metadata: Metadata = {
  title: "Philosophy",
  description: "우리의 철학과 접근 방식. 비즈니스 모델·운영 구조·성장 전략까지 고려한 실전형 풀스택 개발팀입니다.",
  keywords: ["philosophy", "tech stack", "expertise", "full-stack", "development team", "business model"],
  openGraph: {
    title: "Philosophy - SEMICOLON;DEV",
    description: "비즈니스 모델·운영 구조·성장 전략까지 고려한 실전형 풀스택 개발팀",
    url: `${baseUrl}/philosophy`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image-philosophy.png`,
        width: 1200,
        height: 630,
        alt: "SEMICOLON;DEV Philosophy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Philosophy - SEMICOLON;DEV",
    description: "비즈니스 모델·운영 구조·성장 전략까지 고려한 실전형 풀스택 개발팀",
    images: [`${baseUrl}/og-image-philosophy.png`],
  },
  alternates: {
    canonical: `${baseUrl}/philosophy`,
  },
};

export default function PhilosophyPage() {
  return <PhilosophyPageContent />;
}
