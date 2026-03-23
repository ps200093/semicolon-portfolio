"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { ExternalLink, Sparkles, Home, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { projectsBase, categories, getProjects, getStatusLabels, getCategoryLabels } from "@/lib/data/projects"
import { useLanguage } from "@/lib/i18n/context"

const filters = categories

interface ProjectsGridProps {
  displayProjectIds?: number[]
}

export function ProjectsGrid({ 
  displayProjectIds = [0, 1, 3, 2, 5, 6, 4, 7],
}: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState("all")
  const { getTranslations, t } = useLanguage()
  
  const translations = getTranslations()
  
  // 번역이 로드되지 않았을 때 빈 배열 반환
  if (!translations || !translations.projects) {
    return null
  }
  
  const projects = getProjects(translations)
  const statusLabels = getStatusLabels(translations)
  const categoryLabels = getCategoryLabels(translations)

  // displayProjectIds가 제공되면 해당 ID의 프로젝트만 표시
  const displayProjects = displayProjectIds 
    ? projects.filter(p => displayProjectIds.includes(p.id))
    : projects

  const filteredProjects = activeFilter === "all" 
    ? displayProjects 
    : displayProjects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 flex flex-col gap-6 sm:gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3 animate-fade-in-up">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">Artifacts</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Projects</h2>
          </div>

          <div className="flex flex-wrap gap-2 sm:overflow-visible animate-fade-in-up stagger-2">
            {filters.map((filter, index) => (
              <button
                key={filter}
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setActiveFilter(filter)
                }}
                className={cn(
                  "shrink-0 rounded-lg border px-4 sm:px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-all duration-300 active:scale-[0.98] touch-manipulation",
                  activeFilter === filter
                    ? "border-primary bg-primary/15 text-primary shadow-sm shadow-primary/20"
                    : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground hover:bg-secondary/50",
                  index >= 3 && "sm:inline-flex",
                )}
              >
                {categoryLabels[filter]}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory scrollbar-hide">
          <div className="grid grid-flow-col auto-cols-[85%] sm:auto-cols-auto grid-rows-2 gap-4 sm:gap-5 sm:grid-flow-row sm:grid-cols-2 lg:grid-cols-3 sm:grid-rows-none">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className={cn(
                  "snap-start group relative overflow-hidden rounded-xl border bg-card/40 p-4 sm:p-6 lg:p-7 glass transition-all duration-400 active:scale-[0.99] hover-lift hover:border-primary/40 hover:bg-card/70 animate-fade-in-up",
                  "highlight" in project && project.highlight
                    ? "sm:row-span-2 sm:col-span-2 lg:row-span-1 lg:col-span-2 border-primary/30 bg-gradient-to-br from-primary/8 via-card/50 to-primary/8"
                    : "border-border/60",
                  project.featured && !("highlight" in project && project.highlight) && "sm:col-span-2 lg:col-span-1",
                )}
                style={{ animationDelay: `${(index % 6) * 100 + 200}ms` }}
              >
              {"highlight" in project && project.highlight && (
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-3.5 py-1.5 animate-pulse-glow">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-medium">
                    Featured
                  </span>
                </div>
              )}

              {/* Status indicator */}
              <div
                className={cn(
                  "absolute right-5 top-5 flex items-center gap-2.5",
                  "highlight" in project && project.highlight && "top-5",
                )}
              >
                <span
                  className={cn(
                    "h-2.5 w-2.5 rounded-full transition-shadow duration-300",
                    project.status === "live" && "bg-emerald-500 shadow-sm shadow-emerald-500/50",
                    project.status === "development" && "bg-blue-500 animate-pulse shadow-sm shadow-blue-500/50",
                    project.status === "archived" && "bg-gray-500 shadow-sm shadow-gray-500/50",
                  )}
                />
                <span className="font-mono text-xs text-muted-foreground">
                  {statusLabels[project.status]}
                </span>
              </div>

              <div
                className={cn(
                  "mb-5 font-mono text-xs text-muted-foreground",
                  "highlight" in project && project.highlight && "mt-10",
                )}
              >
                {project.year}
              </div>

              <div className="flex items-end gap-4 mb-5">
                {project.image && (
                  <div className="shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                  </div>
                )}
                <h3
                  className={cn(
                    "font-bold tracking-tight transition-all duration-300 group-hover:text-gradient",
                    "highlight" in project && project.highlight ? "text-xl sm:text-2xl" : "text-lg sm:text-xl",
                  )}
                >
                  {project.title}
                </h3>
              </div>

              <p
                className={cn(
                  "mb-5 text-sm leading-relaxed text-muted-foreground",
                  "highlight" in project && project.highlight ? "line-clamp-3" : "line-clamp-2",
                )}
                dangerouslySetInnerHTML={{
                  __html: project.description.replace(/\/n/g, '<br />')
                }}
              />

              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border/80 bg-secondary/60 px-2.5 py-1 font-mono text-xs text-secondary-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-all duration-300 group/link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Home className="h-4 w-4 transition-transform group-hover/link:scale-110 group-hover/link:rotate-12" />
                    <span className="underline-animate">Visit Site</span>
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-xs text-primary hover:text-foreground transition-all duration-300 group/link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="h-4 w-4 transition-transform group-hover/link:scale-110 group-hover/link:rotate-12" />
                    <span className="underline-animate">Live</span>
                  </a>
                )}
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-primary/80 to-transparent transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>

        <div className="mt-12 flex justify-center animate-fade-in-up" style={{ animationDelay: "600ms" }}>
          <Link
            href="/projects"
            className="group flex items-center gap-3 rounded-xl border border-primary/40 bg-primary/10 px-8 py-4 font-mono text-sm font-medium text-primary transition-all duration-300 hover:bg-primary/20 hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 active:translate-y-0"
          >
            <span>{t("projects.viewAll")}</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
