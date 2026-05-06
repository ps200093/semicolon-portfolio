export interface TeamMember {
  id: string
  name: string
  role: {
    ko: string
    en: string
  }
  summary: {
    ko: string
    en: string
  }
  focus: {
    ko: string[]
    en: string[]
  }
  links?: {
    linkedin?: string
    github?: string
    email?: string
  }
}

export const teamMembers: TeamMember[] = [
  {
    id: "hwang-injun",
    name: "황인준",
    role: {
      ko: "Founder / Product & Engineering",
      en: "Founder / Product & Engineering",
    },
    summary: {
      ko: "관계 기반 AI 커머스 플랫폼의 제품 방향, 서비스 구조, 풀스택 구현을 연결합니다.",
      en: "Connects product direction, service architecture, and full-stack implementation for relationship-based AI commerce platforms.",
    },
    focus: {
      ko: ["Product Strategy", "Full-stack Development", "AI Commerce"],
      en: ["Product Strategy", "Full-stack Development", "AI Commerce"],
    },
    links: {
      linkedin: "https://www.linkedin.com/",
      email: "contact@semicolon.it.kr",
    },
  },
  {
    id: "commerce-partnership",
    name: "Commerce Partnership",
    role: {
      ko: "Partner Network / Commerce Operations",
      en: "Partner Network / Commerce Operations",
    },
    summary: {
      ko: "프리미엄 상품 소싱, 제휴 혜택, B2B2C 유입 구조를 제품 운영 흐름으로 정리합니다.",
      en: "Turns premium sourcing, partner benefits, and B2B2C acquisition flows into product operations.",
    },
    focus: {
      ko: ["Premium Sourcing", "Partner Benefits", "B2B2C"],
      en: ["Premium Sourcing", "Partner Benefits", "B2B2C"],
    },
    links: {
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    id: "payment-infrastructure",
    name: "Payment Infrastructure",
    role: {
      ko: "Payment & Card Integration",
      en: "Payment & Card Integration",
    },
    summary: {
      ko: "카드 혜택, 포인트 사용, 결제 연동 가능성을 검토하고 파트너별 정책 구현을 지원합니다.",
      en: "Explores card benefits, point usage, payment integrations, and partner-specific policy implementation.",
    },
    focus: {
      ko: ["Card Benefits", "Point Flow", "Payment Integration"],
      en: ["Card Benefits", "Point Flow", "Payment Integration"],
    },
    links: {
      linkedin: "https://www.linkedin.com/",
    },
  },
]
