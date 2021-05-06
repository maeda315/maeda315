import getConfig from 'next/config'
import dateformat from 'dateformat'
import { GetServerSidePropsContext } from 'next'
import { getAllPosts } from '../lib/api'
const { publicRuntimeConfig } = getConfig()
export const BASE_URL = publicRuntimeConfig.BASE_URL

export const getServerSideProps = async ({
  res
}: GetServerSidePropsContext): Promise<{ props: null }> => {
  const xml = await generateSitemapXml()

  res.statusCode = 200
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate')
  res.setHeader('Content-Type', 'text/xml')
  res.end(xml)

  return {
    props: null
  }
}

async function generateSitemapXml(): Promise<string> {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>`
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  const posts = await getAllPosts()
  posts.forEach((post) => {
    const date = dateformat(post.date, 'yyyy-mm-dd')
    xml += `
      <url>
        <loc>${BASE_URL}/posts/${post.postId}</loc>
        <lastmod>${date}</lastmod>
        <changefreq>weekly</changefreq>
      </url>
    `
  })

  xml += `</urlset>`
  return xml
}

const Page = (): null => null
export default Page
