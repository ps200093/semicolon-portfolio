"use client"

import Link from "next/link"
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Handshake,
  Megaphone,
  Route,
  Settings2,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  UsersRound,
} from "lucide-react"
import { platformCopy } from "@/lib/data/platform"
import { useLanguage } from "@/lib/i18n/context"

const surfaceIcons = [CalendarDays, Handshake, Settings2]
const modelIcons = [UsersRound, ShoppingBag, Megaphone, SlidersHorizontal]

function SignalIcon({
  icon: Icon,
  strong = false,
}: {
  icon: typeof CalendarDays
  strong?: boolean
}) {
  return (
    <span
      className={
        strong
          ? "flex h-9 w-9 shrink-0 items-center justify-center text-primary"
          : "flex h-9 w-9 shrink-0 items-center justify-center text-primary/80"
      }
      aria-hidden="true"
    >
      <Icon className="h-5 w-5 stroke-[1.7]" />
    </span>
  )
}

export function ProductsPageContent() {
  const { language } = useLanguage()
  const copy = platformCopy[language]
  const ui =
    language === "ko"
      ? {
          portfolio: "포트폴리오 보기",
          productMap: "Product map",
          productMapSummary: "B2C 앱 + B2B2C 커머스 + 운영자 콘솔",
          mvp: "MVP",
          sharedEngine: "공통 추천·소싱 엔진",
          surfacesEyebrow: "Product surfaces",
          surfacesTitle: "플랫폼이 제공하는 제품 화면",
          goToMarketEyebrow: "시장 진입 전략",
          goToMarketTitle: "파트너 유입으로 시작하고, 장기적으로 소비자 서비스로 확장합니다",
          goToMarketDescription:
            "초기 진입은 넓은 오픈마켓이 아니라 프리미엄 카테고리와 파트너 초대 흐름에 집중합니다. 공급망이 쌓이기 전에는 명확한 카테고리와 검수된 소싱으로 신뢰를 먼저 확보합니다.",
        }
      : {
          portfolio: "Portfolio artifacts",
          productMap: "Product map",
          productMapSummary: "B2C app + B2B2C commerce + admin console",
          mvp: "MVP",
          sharedEngine: "Shared recommendation engine",
          surfacesEyebrow: "Product surfaces",
          surfacesTitle: "What the platform exposes",
          goToMarketEyebrow: "Market entry",
          goToMarketTitle: "Partner-led first, consumer-friendly long term",
          goToMarketDescription:
            "The first wedge is not a broad open marketplace. It is a focused set of premium categories and partner-led invitation flows that can earn trust before supply expands.",
        }

  return (
    <div className="relative">
      <section className="px-4 pb-16 pt-36 sm:px-6 sm:pb-20 sm:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-6 animate-fade-in-up">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary sm:tracking-[0.35em]">
                {copy.eyebrow}
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {copy.heroTitle}
              </h1>
              <p className="max-w-3xl break-words text-base leading-relaxed text-muted-foreground [overflow-wrap:anywhere] sm:text-lg">
                {copy.heroDescription}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/team"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:gap-3"
                >
                  {copy.ctaSecondary}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
                >
                  {ui.portfolio}
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-border/75 bg-card/70 p-4 shadow-2xl shadow-primary/5 glass animate-scale-in stagger-2 sm:p-5">
              <div className="mb-4 flex items-center justify-between border-b border-border/50 pb-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
                    {ui.productMap}
                  </p>
                  <p className="mt-1 text-sm font-semibold">{ui.productMapSummary}</p>
                </div>
                <span className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[10px] text-primary">
                  {ui.mvp}
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {copy.metrics.map((metric) => (
                  <div key={metric.value} className="rounded-lg border border-border/75 bg-card/70 p-4">
                    <p className="text-2xl font-bold tracking-tight text-primary">{metric.value}</p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-lg border border-primary/25 bg-primary/8 p-4">
                <div className="flex items-center gap-2 text-primary">
                  <SignalIcon icon={Sparkles} strong />
                  <span className="font-mono text-[10px] uppercase tracking-wider">{ui.sharedEngine}</span>
                </div>
                <div className="mt-4 grid gap-2 sm:grid-cols-5">
                  {copy.flow.map((step, index) => (
                    <div key={step} className="rounded-md bg-card/70 px-3 py-3">
                      <span className="font-mono text-[10px] text-primary">0{index + 1}</span>
                      <p className="mt-2 text-xs font-medium leading-snug">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/30 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">{ui.surfacesEyebrow}</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{ui.surfacesTitle}</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {copy.products.map((product, index) => {
              const SurfaceIcon = surfaceIcons[index] || Sparkles

              return (
                <article key={product.title} className="rounded-lg border border-border/75 bg-card/65 p-6 shadow-sm shadow-primary/5 glass hover-lift sm:p-7">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="flex flex-1 items-center gap-3">
                      <SignalIcon icon={SurfaceIcon} />
                      <span className="h-px flex-1 bg-border/70" />
                    </div>
                    <span className="rounded-md border border-border/70 bg-secondary/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {product.label}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">{product.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
                  <ul className="mt-5 space-y-2.5">
                    {product.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border/30 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-lg border border-primary/30 bg-primary/8 p-6 glass sm:p-7">
            <div className="mb-4 flex items-center gap-3">
              <SignalIcon icon={Route} strong />
              <span className="h-px flex-1 bg-primary/20" />
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">{ui.goToMarketEyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">{ui.goToMarketTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {ui.goToMarketDescription}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {copy.model.map((item, index) => {
              const ModelIcon = modelIcons[index] || Sparkles

              return (
              <article key={item.title} className="rounded-lg border border-border/75 bg-card/65 p-6 shadow-sm shadow-primary/5 glass">
                <div className="mb-4">
                  <SignalIcon icon={ModelIcon} />
                </div>
                <h3 className="text-lg font-bold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </article>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
