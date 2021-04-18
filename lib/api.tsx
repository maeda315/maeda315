import { PostType } from '../modules/interface'

const API_URL = process.env.WP_API_URL

async function fetchAPI(query, { variables = null } = {}) {
  // Set up some headers to tell the fetch call
  // that this is an application/json type
  const headers = { 'Content-Type': 'application/json' }

  // build out the fetch() call using the API_URL
  // environment variable pulled in at the start
  // Note the merging of the query and variables
  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables })
  })

  // error handling work
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
