export interface TeamMember {
  id: string
  name: {
    ko: string
    en: string
  }
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
    name: {
      ko: "황인준",
      en: "Injun Hwang",
    },
    role: {
      ko: "대표",
      en: "CEO",
    },
    summary: {
      ko: "SEMICOLON;DEV의 사업 방향과 팀 운영을 이끌며, 제품 기획과 실행 전략을 총괄합니다.",
      en: "Leads SEMICOLON;DEV's business direction and team operations while overseeing product planning and execution strategy.",
    },
    focus: {
      ko: ["사업 운영", "사업 전략", "제품 방향성"],
      en: ["Business Operations", "Business Strategy", "Product Direction"],
    },
    links: {
      email: "contact@semicolon.it.kr",
    },
  },
  {
    id: "park-sangjun",
    name: {
      ko: "박상준",
      en: "Sangjun Park",
    },
    role: {
      ko: "개발자",
      en: "Developer",
    },
    summary: {
      ko: "제품 기획부터 서비스 기능 구현까지 개발 흐름을 함께 설계하며, 실제 운영 가능한 시스템을 만드는 데 집중합니다.",
      en: "Shapes development flows from product planning to service implementation, focusing on systems that can run in production.",
    },
    focus: {
      ko: ["제품 기획", "서비스 개발", "풀스택 구현"],
      en: ["Product Planning", "Service Development", "Full-stack Implementation"],
    },
    links: {
      linkedin: "https://www.linkedin.com/in/sangjun-park-b9a17421b/?isSelfProfile=false",
    },
  },
  {
    id: "park-seunggyo",
    name: {
      ko: "박승교",
      en: "Seunggyo Park",
    },
    role: {
      ko: "개발자",
      en: "Developer",
    },
    summary: {
      ko: "제품 요구사항을 안정적인 기능으로 옮기고, 웹 서비스 구현과 개선 작업을 함께 담당합니다.",
      en: "Turns product requirements into stable features and supports web service implementation and iteration.",
    },
    focus: {
      ko: ["백엔드 개발", "기능 구현", "서비스 고도화"],
      en: ["Backend Development", "Feature Implementation", "Service Enhancement"],
    },
    links: {
      linkedin: "https://www.linkedin.com/in/seunggyo-park-53041b40a/?isSelfProfile=false",
    },
  },
  {
    id: "jeong-dawon",
    name: {
      ko: "정다원",
      en: "Dawon Jeong",
    },
    role: {
      ko: "개발자",
      en: "Developer",
    },
    summary: {
      ko: "서비스 개발 전반에 참여하며, 안정적인 기능 구현과 사용자 경험 개선을 함께 지원합니다.",
      en: "Contributes across service development, supporting stable feature implementation and user experience improvements.",
    },
    focus: {
      ko: ["소프트웨어 개발", "통합 테스트", "앱 개발"],
      en: ["Software Development", "Integration Testing", "App Development"],
    },
    links: {
      linkedin: "https://www.linkedin.com/in/dawon-jeong-37a79924a/?isSelfProfile=false",
    },
  },
]
