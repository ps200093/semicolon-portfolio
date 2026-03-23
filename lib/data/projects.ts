export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  category?: string
  status: "live" | "development" | "archived"
  year: string
  image?: string
  homepage?: string
  live?: string
  url?: string
  stars?: number
  forks?: number
  featured: boolean
  highlight?: boolean
}

export const projectsBase: Omit<Project, 'title' | 'description'>[] = [
  {
    id: 0,
    tags: ["Next.js", "Node.js", "ReactNative", "PostgreSQL", "Redis", "AWS", "AdTech"],
    category: "web & mobile",
    status: "development",
    year: "2026",
    image: "/projects/qro.png",
    homepage: "https://qro-qr.com",
    live: "https://app.qro-qr.com",
    featured: true,
    highlight: true,
  },
  {
    id: 1,
    tags: ["TypeScript", "Next.js", "MySQL", "Supabase", "TailwindCSS", "LangChain"],
    category: "devops",
    status: "live",
    year: "2025",
    image: "/projects/aden.png",
    live: "https://aden-dashboard.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    tags: ["React", "Node.js", "Web3", "Smart Contract"],
    category: "web3 & blockchain",
    status: "live",
    year: "2025",
    image: "/projects/KRC.png",
    live: "https://www.krcryptos.com/",
    featured: true,
  },
  {
    id: 2,
    tags: ["TypeScript", "Next.js", "OpenAI", "LangChain"],
    category: "web & mobile",
    status: "development",
    year: "2026",
    image: "/projects/sitra.png",
    live: "https://sitra-tau.vercel.app/",
    featured: false,
  },
  {
    id: 5,
    tags: ["Next.js", "Supabase", "TypeScript", "Radix UI", "Framer Motion"],
    category: "web & mobile",
    status: "live",
    year: "2026",
    image: "/projects/mamafin.png",
    homepage: "https://mama-fin.com/",
    featured: true,
  },
  {
    id: 6,
    tags: ["Python", "FastAPI", "Llama2", "MCP"],
    category: "web3 & blockchain",
    status: "live",
    year: "2025",
    image: "/projects/tetherpay.png",
    live: "https://tether-pay.vercel.app/",
    featured: true,
  },
  {
    id: 4,
    tags: ["Next.js", "Python", "ML", "Chart.js"],
    category: "ai & ml",
    status: "development",
    year: "2025",
    image: "/projects/StockAI.png",
    live: "https://stock-ai-juit.vercel.app/",
    featured: true,
  },
  {
    id: 7,
    tags: ["React Native", "Node.js", "SDK", "Payment"],
    category: "web & mobile",
    status: "live",
    year: "2025",
    image: "/projects/offerwall.png",
    homepage: "https://aden.ai.kr/",
    featured: true,
  },
  {
    id: 8,
    tags: ["Next.js", "i18n", "Maps API"],
    category: "web & mobile",
    status: "development",
    year: "2025",
    image: "/projects/koreazy.png",
    live: "https://www.koreazy.com/",
    featured: true,
  },

  {
    id: 10,
    tags: ["React Native", "Node.js", "SDK", "Payment"],
    category: "web & mobile",
    status: "development",
    year: "2026",
    image: "/projects/keago.png",
    featured: true,
  },
  {
    id: 9,
    tags: [],
    category: "devops",
    status: "live",
    year: "2024",
    image: "/projects/SAT.png",
    featured: true,
  },
  {
    id: 11,
    tags: [],
    category: "devops",
    status: "archived",
    year: "2024",
    image: "/projects/naverplace.png",
    featured: true,
  },
  {
    id: 12,
    tags: [],
    category: "devops",
    status: "live",
    year: "2025",
    image: "/projects/ybd.png",
    featured: true,
  },
  {
    id: 13,
    tags: [],
    category: "devops",
    status: "live",
    year: "2025",
    image: "/projects/proxmox.png",
    featured: true,
  },
  {
    id: 14,
    tags: [],
    category: "devops",
    status: "archived",
    year: "2024",
    image: "/projects/crawling.png",
    featured: true,
  },
  {
    id: 15,
    tags: [],
    category: "web & mobile",
    status: "archived",
    year: "2025",
    image: "/projects/marketing.png",
    featured: true,
  },
  {
    id: 16,
    tags: [],
    category: "web & mobile",
    status: "live",
    year: "2025",
    image: "/projects/youtbirthday.png",
    homepage: "https://theipeul.cafe24.com/",
    featured: true,
  },
  {
    id: 17,
    tags: [],
    category: "devops",
    status: "live",
    year: "2025",
    image: "/projects/crm.png",
    featured: true,
  },
  {
    id: 18,
    tags: [],
    category: "devops",
    status: "development",
    year: "2025",
    featured: true,
  },
  {
    id: 19,
    tags: [],
    category: "devops",
    status: "development",
    year: "2025",
    featured: true,
  },
  {
    id: 20,
    tags: [],
    category: "devops",
    status: "development",
    year: "2025",
    featured: true,
  },
  {
    id: 21,
    tags: [],
    category: "devops",
    status: "development",
    year: "2025",
    featured: true,
  },
  {
    id: 22,
    tags: [],
    category: "devops",
    status: "development",
    year: "2025",
    featured: true,
  },
]

export const getProjects = (dictionary: any): Project[] => {
  if (!dictionary?.projects?.items) return []
  
  return projectsBase.map(project => ({
    ...project,
    title: dictionary.projects.items[project.id]?.title || "",
    description: dictionary.projects.items[project.id]?.description || "",
  }))
}

export const categories = ["all", "web & mobile", "ai & ml", "web3 & blockchain", "devops"] as const
export const statusFilters = ["all", "live", "development", "archived"] as const

export const getCategoryLabels = (dictionary: any): Record<typeof categories[number], string> => {
  if (!dictionary?.projects?.categories) {
    return {
      all: "all",
      "web & mobile": "web & mobile",
      "ai & ml": "ai & ml",
      "web3 & blockchain": "web3 & blockchain",
      devops: "devops",
    }
  }
  return dictionary.projects.categories
}

export const getStatusLabels = (dictionary: any): Record<typeof statusFilters[number], string> => {
  if (!dictionary?.projects?.status) {
    return {
      all: "all",
      live: "live",
      development: "development",
      archived: "archived",
    }
  }
  return dictionary.projects.status
}
