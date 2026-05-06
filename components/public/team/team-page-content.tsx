"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { teamMembers } from "@/lib/data/team"
import { useLanguage } from "@/lib/i18n/context"
import enDictionary from "@/lib/i18n/dictionaries/en.json"
import koDictionary from "@/lib/i18n/dictionaries/ko.json"

const fallbackTeamCopy = {
  en: enDictionary.team,
  ko: koDictionary.team,
}

const memberMarks: Record<string, string> = {
  "hwang-injun": "HJ",
  "commerce-partnership": "CP",
  "payment-infrastructure": "PI",
}

export function TeamPageContent() {
  const { language, getTranslations } = useLanguage()
  const translations = getTranslations()
  const teamCopy = (translations?.team || fallbackTeamCopy[language]) as typeof koDictionary.team

  return (
    <div className="relative">
      <section className="px-4 sm:px-6 pt-36 sm:pt-40 pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl space-y-6 animate-fade-in-up">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
              {teamCopy.hero.badge}
            </p>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight [word-break:keep-all] sm:text-5xl lg:text-6xl text-balance">
              {teamCopy.hero.title}
            </h1>
            <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-muted-foreground">
              {teamCopy.hero.description}
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 sm:mb-14 space-y-3 animate-fade-in-up">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
              {teamCopy.members.title}
            </p>
            <p className="max-w-3xl text-base text-muted-foreground leading-relaxed">
              {teamCopy.members.description}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {teamMembers.map((member, index) => {
              const links = member.links || {}

              return (
                <article
                  key={member.id}
                  className="group rounded-lg border border-border/60 bg-card/40 p-6 sm:p-7 glass transition-all duration-300 hover:border-primary/40 hover:bg-card/70 hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 90 + 150}ms` }}
                >
                  <div className="mb-6 flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border/80 bg-card/70 font-mono text-sm font-semibold tracking-wider text-primary shadow-sm shadow-primary/5 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10">
                      {memberMarks[member.id] || "TM"}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl font-bold tracking-tight">{member.name}</h3>
                      <p className="mt-1 font-mono text-xs uppercase tracking-wider text-primary">
                        {member.role[language]}
                      </p>
                    </div>
                  </div>

                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                    {member.summary[language]}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {member.focus[language].map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-border/80 bg-secondary/60 px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {links.linkedin && (
                      <a
                        href={links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-9 items-center gap-2 rounded-md border border-border/75 bg-secondary/55 px-3 font-mono text-xs text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                      >
                        <Linkedin className="h-4 w-4" />
                        {teamCopy.members.linkedin}
                      </a>
                    )}
                    {links.github && (
                      <a
                        href={links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-9 items-center gap-2 rounded-md border border-border/75 bg-secondary/55 px-3 font-mono text-xs text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                      >
                        <Github className="h-4 w-4" />
                        {teamCopy.members.github}
                      </a>
                    )}
                    {links.email && (
                      <a
                        href={`mailto:${links.email}`}
                        className="inline-flex h-9 items-center gap-2 rounded-md border border-border/75 bg-secondary/55 px-3 font-mono text-xs text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                      >
                        <Mail className="h-4 w-4" />
                        {teamCopy.members.email}
                      </a>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
