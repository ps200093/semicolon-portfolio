import { HeroSection } from "@/components/hero-section"
import { ProductPlatformSection } from "@/components/product-platform-section"
import { ProjectsGrid } from "@/components/projects-grid"
import { Workbench } from "@/components/workbench"
import { generateWebsiteStructuredData, generateOrganizationStructuredData } from "@/lib/structured-data"

export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://semicolon.it.kr'
  const websiteStructuredData = generateWebsiteStructuredData(baseUrl)
  const organizationStructuredData = generateOrganizationStructuredData(baseUrl)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />
      <HeroSection />
      <ProductPlatformSection />
      <ProjectsGrid displayProjectIds={[0, 1, 3, 2, 5, 6, 4, 7]} />
      <Workbench />
    </>
  )
}
