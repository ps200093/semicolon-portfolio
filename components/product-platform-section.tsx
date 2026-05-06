"use client"

import Link from "next/link"
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Handshake,
  Megaphone,
  Settings2,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  UsersRound,
} from "lucide-react"
import { platformCopy } from "@/lib/data/platform"
import { useLanguage } from "@/lib/i18n/context"

const productIcons = [CalendarDays, Handshake, Settings2]
const modelIcons = [UsersRound, ShoppingBag, Megaphone]

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

export function ProductPlatformSection() {
  const { language } = useLanguage()
  const copy = platformCopy[language]
  const ui =
    language === "ko"
      ? {
          loopEyebrow: "Platform loop",
          loopTitle: "기념일 데이터에서 커머스 행동까지",
          engineTitle: "공통 추천·소싱 엔진",
          engineDescription: "추천, 소싱, 파트너 정책, 운영 검수를 하나의 제품 루프로 묶습니다.",
          engineTags: ["추천 엔진", "소싱 큐", "파트너 정책", "전환 로그"],
          modelEyebrow: "수익 구조",
        }
      : {
          loopEyebrow: "Platform loop",
          loopTitle: "Relationship data to commerce action",
          engineTitle: "Shared recommendation engine",
          engineDescription: "Recommendations, sourcing, partner rules, and operator review run through one product loop.",
          engineTags: ["Recommendation", "Sourcing queue", "Partner rules", "Conversion log"],
          modelEyebrow: "Business model",
        }

  return (
    <section id="product-platform" className="border-t border-border/30 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="space-y-4 animate-fade-in-up">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary sm:tracking-[0.35em]">
              {copy.eyebrow}
            </p>
            <h2 className="max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {copy.title}
            </h2>
          </div>
          <div className="space-y-5 animate-fade-in-up stagger-2">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {copy.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/product"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:gap-3"
              >
                {copy.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/team"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
              >
                {copy.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {copy.products.map((product, index) => {
            const ProductIcon = productIcons[index] || Sparkles

            return (
              <article
                key={product.title}
                className="rounded-lg border border-border/75 bg-card/65 p-6 shadow-sm shadow-primary/5 glass transition-all duration-300 hover:border-primary/40 hover:bg-card/75 hover-lift"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex flex-1 items-center gap-3">
                    <SignalIcon icon={ProductIcon} />
                    <span className="h-px flex-1 bg-border/70" />
                  </div>
                  <span className="rounded-md border border-border/70 bg-secondary/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {product.label}
                  </span>
                </div>
                <h3 className="text-xl font-bold tracking-tight">{product.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
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

        <div className="mt-6 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-lg border border-border/75 bg-card/65 p-6 shadow-sm shadow-primary/5 glass sm:p-7">
            <div className="mb-5 flex items-center gap-3">
              <SignalIcon icon={Sparkles} strong />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">{ui.loopEyebrow}</p>
                <h3 className="text-xl font-bold tracking-tight">{ui.loopTitle}</h3>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
              <ol className="space-y-2.5">
                {copy.flow.map((step, index) => (
                  <li
                    key={step}
                    className="grid grid-cols-[2.25rem_1fr] items-center gap-3 rounded-lg border border-border/70 bg-card/70 px-3 py-3"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 font-mono text-[10px] text-primary ring-1 ring-primary/15">
                      0{index + 1}
                    </span>
                    <p className="text-sm font-medium leading-snug">{step}</p>
                  </li>
                ))}
              </ol>
              <div className="rounded-lg border border-primary/20 bg-primary/8 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">{ui.engineTitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ui.engineDescription}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {ui.engineTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-primary/20 bg-card/65 px-2.5 py-1 font-mono text-[10px] text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-primary/30 bg-primary/8 p-6 glass sm:p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">{ui.modelEyebrow}</p>
            <div className="mt-5 space-y-4">
              {copy.model.slice(0, 3).map((item, index) => {
                const ModelIcon = modelIcons[index] || SlidersHorizontal

                return (
                <div key={item.title} className="border-b border-border/50 pb-4 last:border-b-0 last:pb-0">
                  <div className="mb-3 flex items-center gap-3">
                    <SignalIcon icon={ModelIcon} />
                    <h4 className="text-sm font-bold">{item.title}</h4>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
