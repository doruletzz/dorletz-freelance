import { getArticlePosts } from '@/app/[locale]/case-studies/utils'

export const baseUrl = 'https://dorudoros.com'

export default async function sitemap() {
  let articles = getArticlePosts().map((post) => ({
    url: `${baseUrl}/case-studies/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/case-studies'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...articles]
}