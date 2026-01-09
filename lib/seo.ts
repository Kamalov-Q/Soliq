import { Metadata } from "next"
import { getBaseUrl } from "./get-base-url"

export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  path?: string
  image?: string
  type?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
}

// Multilingual keywords for tax consulting services
const defaultKeywords = {
  uz: [
    "Soliq maslahati",
    "Soliq maslahat yordami",
    "Soliq konsaltingi",
    "Soliq xizmatlari",
    "Buxgalteriya xizmatlari",
    "Soliq maslahatchisi",
    "Soliq yechimlari",
    "Soliq rejalashtirish",
    "Soliq audit",
    "Soliq muammolari",
    "Soliq yuridik yordam",
    "O'zbekistonda soliq xizmatlari",
    "Toshkent soliq maslahati",
    "Professional soliq xizmatlari",
  ],
  ru: [
    "Налоговые консультации",
    "Налоговая помощь",
    "Налоговый консалтинг",
    "Налоговые услуги",
    "Бухгалтерские услуги",
    "Налоговый консультант",
    "Налоговые решения",
    "Налоговое планирование",
    "Налоговый аудит",
    "Налоговые проблемы",
    "Юридическая помощь по налогам",
    "Налоговые услуги в Узбекистане",
    "Налоговые консультации в Ташкенте",
    "Профессиональные налоговые услуги",
  ],
  en: [
    "Tax consulting",
    "Tax advice",
    "Tax consultation",
    "Tax services",
    "Accounting services",
    "Tax consultant",
    "Tax solutions",
    "Tax planning",
    "Tax audit",
    "Tax problems",
    "Tax legal help",
    "Tax services in Uzbekistan",
    "Tax consulting in Tashkent",
    "Professional tax services",
  ],
}

const baseUrl = getBaseUrl()

export function generateSEOMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    path = "",
    image = "/logo.png",
    type = "website",
    publishedTime,
    modifiedTime,
  } = config

  // Combine default keywords with custom keywords
  const allKeywords = [
    ...defaultKeywords.uz,
    ...defaultKeywords.ru,
    ...defaultKeywords.en,
    ...keywords,
  ].join(", ")

  const url = `${baseUrl}${path}`
  const imageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`

  return {
    title: `${title} | TaxOFF Partners - Professional Tax Services`,
    description,
    keywords: allKeywords,
    authors: [{ name: "TaxOFF Partners" }],
    creator: "TaxOFF Partners",
    publisher: "TaxOFF Partners",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
      languages: {
        "uz-UZ": `${baseUrl}/uz${path}`,
        "ru-RU": `${baseUrl}/ru${path}`,
        "en-US": `${baseUrl}/en${path}`,
      },
    },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: "TaxOFF Partners",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "uz_UZ",
      alternateLocale: ["ru_RU", "en_US"],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: "@soliq_uz",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    },
  }
}

// Structured data (JSON-LD) for better SEO
export function generateStructuredData(config: {
  type: "Organization" | "Service" | "Article" | "WebPage"
  data: Record<string, any>
}) {
  const { type, data } = config

  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  }

  return baseStructuredData
}

// Default organization structured data
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TaxOFF Partners",
  alternateName: ["TaxOFF", "Soliq maslahati", "Налоговые консультации", "Tax Consulting"],
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  description: "O'zbekistondagi yetakchi soliq va buxgalteriya xizmatlari provayderi. Soliq maslahati, soliq konsaltingi, buxgalteriya xizmatlari. Ведущий поставщик налоговых и бухгалтерских услуг в Узбекистане. Leading tax and accounting services provider in Uzbekistan.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chilonzor tumani, 17-kvartal, 39-uy, 18-xonadon",
    addressLocality: "Toshkent",
    addressRegion: "Toshkent",
    postalCode: "100131",
    addressCountry: "UZ",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+998-94-754-00-70",
    contactType: "customer service",
    email: "azimovsaidumar@gmail.com",
    availableLanguage: ["Uzbek", "Russian", "English"],
    areaServed: "UZ",
  },
  sameAs: [
    // Add social media links if available
  ],
  areaServed: {
    "@type": "Country",
    name: "Uzbekistan",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tax and Accounting Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Soliq maslahati / Tax Consulting / Налоговые консультации",
          description: "Professional tax consulting and advice services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Buxgalteriya xizmatlari / Accounting Services / Бухгалтерские услуги",
          description: "Full-service accounting and bookkeeping",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Soliq audit / Tax Audit / Налоговый аудит",
          description: "Tax audit and compliance services",
        },
      },
    ],
  },
}

