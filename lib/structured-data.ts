import type { BlogPost } from './blog-data'

export function generateBlogPostStructuredData(post: BlogPost, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${url}/og-images/${post.slug}.png`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: 'https://semicolon.it.kr/team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SEMICOLON;DEV',
      url: 'https://semicolon.it.kr',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${url}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
    timeRequired: post.readTime,
  }
}

export function generateWebsiteStructuredData(url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SEMICOLON;DEV',
    description: "AI-powered relationship commerce for birthdays, anniversaries, VIP benefits, gift recommendations, and concierge operations.",
    url: url,
    author: {
      '@type': 'Organization',
      name: 'SEMICOLON;DEV',
      url,
    },
  }
}

export function generateOrganizationStructuredData(url = 'https://semicolon.it.kr') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SEMICOLON;DEV',
    description: 'Builder of AI-powered relationship commerce and full-stack digital platforms.',
    url,
    logo: `${url}/semicolonDev-logo.png`,
    image: `${url}/og-image.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@semicolon.it.kr',
      contactType: 'customer support',
    },
  }
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
