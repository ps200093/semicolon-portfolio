"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { cn } from "@/lib/utils"
import { ExternalLink, Sparkles, Search, Filter, Home } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { projectsBase, statusFilters, categories, getProjects, getStatusLabels, getCategoryLabels } from "@/lib/data/projects"
import { useLanguage } from "@/lib/i18n/context"

const statusFiltersList = statusFilters
const categoryFilters = categories

export function ProjectsPageContent() {
  const [activeStatusFilter, setActiveStatusFilter] = useState("all")
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  
  const { getTranslations, t } = useLanguage()
  
  const translations = getTranslations()
  const projects = useMemo(() => {
    if (!translations || !translations.projects) return []
    return getProjects(translations)
  }, [translations])
  const statusLabels = useMemo(() => {
    if (!translations || !translations.projects) {
      return {
        all: "all",
        live: "live",
        development: "development",
        archived: "archived",
      } as Record<typeof statusFilters[number], string>
    }
    return getStatusLabels(translations)
  }, [translations])
  const categoryLabels = useMemo(() => {
    if (!translations || !translations.projects) {
      return {
        all: "all",
        "web & mobile": "web & mobile",
        "ai & ml": "ai & ml",
        "web3 & blockchain": "web3 & blockchain",
        devops: "devops",
      } as Record<typeof categories[number], string>
    }
    return getCategoryLabels(translations)
  }, [translations])
  const allTags = useMemo(() => [...new Set(projects.flatMap((p) => p.tags))], [projects])

  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  // 번역이 로드되지 않았을 때
  if (!translations || !translations.projects) {
    return null
  }

  const filteredProjects = projects.filter((p) => {
    const matchesStatusFilter = activeStatusFilter === "all" || p.status === activeStatusFilter
    const matchesCategoryFilter = activeCategoryFilter === "all" || p.category === activeCategoryFilter
    const matchesSearch =
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => p.tags.includes(tag))
    return matchesStatusFilter && matchesCategoryFilter && matchesSearch && matchesTags
  })

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  return (
    <section ref={sectionRef} className="px-4 sm:px-6 pt-36 sm:pt-40 pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <div className={cn("mb-12 sm:mb-16 space-y-4 opacity-0", isVisible && "animate-fade-in-up")}>
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">Artifacts</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{t("projects.title")}</h1>
          <p className="max-w-4xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            {t("projects.description")}
          </p>
        </div>

        {/* Search and Filters */}
        <div className={cn("mb-10 space-y-6 opacity-0", isVisible && "animate-fade-in-up stagger-2")}>
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card/40 border-border/60 focus:border-primary/50"
            />
          </div>

          {/* Status Filters */}
          <div className="flex flex-wrap gap-2">
            <span className="font-mono text-xs text-muted-foreground self-center mr-2">상태:</span>
            {statusFiltersList.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setActiveStatusFilter(filter)
                }}
                className={cn(
                  "rounded-lg border px-4 py-2 font-mono text-xs tracking-wider transition-all duration-300 active:scale-[0.98] touch-manipulation",
                  activeStatusFilter === filter
                    ? "border-primary bg-primary/15 text-primary shadow-sm shadow-primary/20"
                    : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground hover:bg-secondary/50",
                )}
              >
                {statusLabels[filter]}
              </button>
            ))}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            <span className="font-mono text-xs text-muted-foreground self-center mr-2">카테고리:</span>
            {categoryFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setActiveCategoryFilter(filter)
                }}
                className={cn(
                  "rounded-lg border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-300 active:scale-[0.98] touch-manipulation",
                  activeCategoryFilter === filter
                    ? "border-primary bg-primary/15 text-primary shadow-sm shadow-primary/20"
                    : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground hover:bg-secondary/50",
                )}
              >
                {categoryLabels[filter]}
              </button>
            ))}
          </div>

          {/* Tag Filters */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="font-mono text-xs text-muted-foreground mr-2">기술 스택:</span>
            <Filter className="h-4 w-4 text-muted-foreground" />
            {selectedTags.length > 0 && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setSelectedTags([])
                }}
                className="rounded-md border border-border/60 bg-secondary/40 px-2.5 py-1 font-mono text-xs text-muted-foreground hover:border-red-500/50 hover:text-red-500 hover:bg-red-500/10 transition-all duration-200 touch-manipulation"
              >
                전체 해제
              </button>
            )}
            {allTags.slice(0, 10).map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  toggleTag(tag)
                }}
                className={cn(
                  "rounded-md border px-2.5 py-1 font-mono text-xs transition-all duration-200 touch-manipulation",
                  selectedTags.includes(tag)
                    ? "border-primary/50 bg-primary/10 text-primary"
                    : "border-border/60 bg-secondary/40 text-muted-foreground hover:border-primary/30 hover:text-foreground",
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={cn(
                "group relative overflow-hidden rounded-xl border bg-card/40 p-6 sm:p-7 glass transition-all duration-400 active:scale-[0.99] hover-lift opacity-0",
                isVisible && "animate-fade-in-up",
                hoveredProject === project.id && "border-primary/40 bg-card/70",
                // Highlight projects: 1 row, 2 cols on large screens
                "highlight" in project && project.highlight && "sm:col-span-1 lg:col-span-2 border-primary/30 bg-gradient-to-br from-primary/8 via-card/50 to-primary/8",
                // Non-highlight featured projects: 2 cols on small, 1 col on large
                project.featured && !("highlight" in project && project.highlight) && "sm:col-span-2 lg:col-span-1",
                // Default border for non-highlight
                !("highlight" in project && project.highlight) && "border-border/60",
              )}
              style={{ animationDelay: `${(index % 6) * 80 + 200}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {"highlight" in project && project.highlight && (
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-3.5 py-1.5 animate-pulse-glow">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-medium">
                    Featured
                  </span>
                </div>
              )}

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
                  __html: project.description.replace(/(?:\/n|\n)/g, '<br />')
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

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="font-mono text-sm text-muted-foreground">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  )
}
