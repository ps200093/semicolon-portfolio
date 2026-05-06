export type Locale = "ko" | "en"

export const platformCopy = {
  ko: {
    eyebrow: "Product Platform",
    title: "기념일·취향 데이터를 커머스 인프라로 바꾸는 플랫폼",
    description:
      "특정 브랜드 하나가 아니라, 생일·기념일·상대와의 관계·취향·예산 같은 생활 데이터를 제휴 혜택, 선물 추천, 프리미엄 소싱과 연결하는 커머스 구조를 설계합니다.",
    heroTitle: "기념일 기반 AI 커머스",
    heroDescription:
      "기념일 관리, VIP 초대형 혜택 커머스, 운영자 컨시어지 콘솔을 각각의 제품 표면으로 두고, 뒤에서는 하나의 추천·소싱 엔진과 파트너 운영 구조를 공유하는 방향입니다.",
    products: [
      {
        title: "Anniversary Intelligence",
        label: "B2C entry",
        description:
          "사용자가 가족, 연인, 동료의 생일과 기념일을 등록하고 관계·취향·예산 정보를 남기면 AI가 선물 후보와 혜택을 추천하는 생활형 진입점입니다.",
        points: ["생일·기념일 알림", "관계·취향 데이터 축적", "AI 선물 후보 추천", "생일 혜택과 제휴 쿠폰 탐색"],
      },
      {
        title: "Partner Benefit Commerce",
        label: "B2B2C growth",
        description:
          "카드사, 브랜드, 복지몰, 제휴사가 고객에게 초대 코드를 제공하고, 고객은 혜택·포인트·프리미엄 상품을 개인화된 흐름에서 확인합니다.",
        points: ["파트너 초대 코드 유입", "VIP 고객 혜택몰", "카드·포인트 정책 연동", "골프·여행·명품·체험 상품 큐레이션"],
      },
      {
        title: "Concierge Operating Layer",
        label: "Admin layer",
        description:
          "운영자는 파트너사, 고객 요청, 컨시어지 티켓, 상품 소싱 상태, 거래 지표를 한 화면에서 관리합니다.",
        points: ["컨시어지 요청 큐", "파트너사·상품 관리", "소싱 상태 추적", "GMV와 전환 지표 확인"],
      },
    ],
    flow: [
      "기념일·관계 입력",
      "AI 추천 후보 생성",
      "제휴 혜택과 공급가 매칭",
      "컨시어지 소싱 및 운영 검수",
      "구매·외부 링크 전환",
    ],
    model: [
      {
        title: "파트너 기반 유입",
        description: "카드사, 브랜드, 복지몰, 제휴사가 고객 획득 채널이 됩니다.",
      },
      {
        title: "커머스 수익",
        description: "제휴 판매 수수료, 소싱 마진, 프리미엄 패키지 판매로 수익화합니다.",
      },
      {
        title: "프로모션·광고",
        description: "생일 혜택과 기념일 수요를 가진 고객에게 브랜드 프로모션을 노출합니다.",
      },
      {
        title: "운영형 SaaS 확장",
        description: "파트너별 혜택 정책, 포인트, 티켓 운영을 관리하는 콘솔로 확장합니다.",
      },
    ],
    metrics: [
      { value: "B2C", label: "기념일 관리와 선물 추천" },
      { value: "B2B2C", label: "파트너 초대와 VIP 혜택" },
      { value: "Admin", label: "컨시어지 운영 콘솔" },
    ],
    ctaPrimary: "제품 상세 보기",
    ctaSecondary: "팀 정보 확인",
  },
  en: {
    eyebrow: "Product Platform",
    title: "A platform idea that turns relationship and occasion data into commerce infrastructure",
    description:
      "Rather than anchoring on one brand, we are shaping a commerce structure that connects birthdays, anniversaries, relationships, preferences, and budgets with partner benefits, recommendations, and premium sourcing.",
    heroTitle: "AI-powered occasion commerce",
    heroDescription:
      "The direction is to separate the user-facing anniversary app, VIP invitation commerce, and operator concierge console while sharing one recommendation, sourcing, and partner operations engine underneath.",
    products: [
      {
        title: "Anniversary Intelligence",
        label: "B2C entry",
        description:
          "A consumer entry point where users register birthdays and anniversaries, then turn relationship, preferences, and budget data into AI-powered gift and benefit recommendations.",
        points: ["Birthday and anniversary reminders", "Relationship and preference data", "AI gift shortlists", "Birthday benefits and partner coupons"],
      },
      {
        title: "Partner Benefit Commerce",
        label: "B2B2C growth",
        description:
          "Partners such as credit card companies, brands, employee benefit malls, and affiliates can invite users with codes. Users discover personalized benefits, points, and premium curated products.",
        points: ["Partner invitation codes", "VIP benefit commerce", "Card and point policy integration", "Golf, travel, luxury, and experience curation"],
      },
      {
        title: "Concierge Operating Layer",
        label: "Admin layer",
        description:
          "Operators manage partners, customer requests, concierge tickets, sourcing status, and transaction metrics in one workflow.",
        points: ["Concierge ticket queue", "Partner and product management", "Sourcing status tracking", "GMV and conversion metrics"],
      },
    ],
    flow: [
      "Capture relationship and event data",
      "Generate AI recommendation shortlists",
      "Match partner benefits and supply pricing",
      "Review sourcing through concierge operations",
      "Convert through purchase, external links, or partner channels",
    ],
    model: [
      {
        title: "Partner-led acquisition",
        description: "Credit card companies, brands, employee benefit malls, and affiliates become acquisition channels.",
      },
      {
        title: "Commerce revenue",
        description: "Revenue comes from affiliate commissions, sourcing margin, and premium package sales.",
      },
      {
        title: "Promotion and ads",
        description: "Brands can reach users with timely birthday and anniversary purchase intent.",
      },
      {
        title: "Operations SaaS expansion",
        description: "Partner-specific benefits, points, and concierge tickets can expand into an operator console.",
      },
    ],
    metrics: [
      { value: "B2C", label: "Anniversary app and gift recommendations" },
      { value: "B2B2C", label: "Partner invitations and VIP benefits" },
      { value: "Admin", label: "Concierge operations console" },
    ],
    ctaPrimary: "View product details",
    ctaSecondary: "Meet the team",
  },
} as const
