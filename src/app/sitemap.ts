import { MetadataRoute } from 'next'
import { routing } from '@/lib/i18n/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://talshimoni.com'
  
  // Generate sitemap entries for each locale
  const sitemapEntries: MetadataRoute.Sitemap = []
  
  routing.locales.forEach((locale) => {
    sitemapEntries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: routing.locales.reduce((acc, loc) => {
          acc[loc] = `${baseUrl}/${loc}`
          return acc
        }, {} as Record<string, string>)
      }
    })
  })
  
  // Add root URL
  sitemapEntries.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  })
  
  return sitemapEntries
}
