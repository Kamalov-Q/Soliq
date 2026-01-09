import { organizationStructuredData } from "@/lib/seo"

export function StructuredData() {
  const jsonLd = JSON.stringify(organizationStructuredData)
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  )
}

