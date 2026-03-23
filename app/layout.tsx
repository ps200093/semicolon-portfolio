import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Space_Grotesk, VT323, IBM_Plex_Mono, Inconsolata, Share_Tech_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/lib/i18n/context"
import "./globals.css"

// Configure fonts with proper options
const geist = Geist({
  subsets: ["latin"],
  variable: '--font-geist',
  display: 'swap',
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono',
  display: 'swap',
})
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  display: 'swap',
})
const vt323 = VT323({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-vt323',
  display: 'swap',
})
const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ["latin"],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
})
const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: '--font-inconsolata',
  display: 'swap',
})
const shareTechMono = Share_Tech_Mono({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-share-tech-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://eindev.ir'),
  title: {
    default: "세미콜론 - SEMICOLON;DEV",
    template: "%s | SEMICOLON;DEV",
  },
  description:
    "A digital workshop where code meets curiosity. Experiments, prototypes, and open-source artifacts by SEMICOLON;DEV.",
  keywords: ["Software Engineering", "Web Development", "Next.js", "React", "TypeScript", "AI", "Machine Learning", "Systems Programming", "Code Experiments"],
  authors: [{ name: "Ehsan Ghaffar", url: "https://github.com/ehsanghaffar" }],
  creator: "SEMICOLON;DEV",
  publisher: "SEMICOLON;DEV",
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "세미콜론 - SEMICOLON;DEV",
    description: "A digital workshop where code meets curiosity. Experiments, prototypes, and open-source artifacts by SEMICOLON;DEV.",
    siteName: "SEMICOLON;DEV",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "세미콜론 - SEMICOLON;DEV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "세미콜론 - SEMICOLON;DEV",
    description: "A digital workshop where code meets curiosity. Experiments, prototypes, and open-source artifacts.",
    creator: "@ehsanghaffar",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${vt323.variable} ${ibmPlexMono.variable} ${inconsolata.variable} ${shareTechMono.variable}`}>
      <head>
        <link rel="stylesheet" as="style" crossOrigin="anonymous" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} storageKey="theme-mode">
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
