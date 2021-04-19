import { PostType } from '../modules/interface'

const API_URL = process.env.WP_API_URL

async function fetchAPI(query, { variables = null } = {}) {
  const headers = { 'Content-Type': 'application/json' }
  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables })
  })

  const json = await res.json()
  if (json.errors) {
    console.log(json.errors)
    console.log('error details', query, variables)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getAllPosts(): Promise<PostType[]> {
  const data = await fetchAPI(
    `
      fragment postData on Post {
        title
        id
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        categories {
          nodes {
            name
            parent {
              node {
                name
                categoryId
              }
            }
            categoryId
          }
        }
      }
      query AllPosts {
        posts(first: 1000) {
          nodes {
            ...postData
          }
        }
      }
    `
  )

  return data.posts.nodes
}
