import getConfig from 'next/config'
import { PostType, AllIdsType } from '../types/common'
import { allPosts, allIds, post, releatePosts } from './wp'
const { publicRuntimeConfig } = getConfig()
export const API_URL = publicRuntimeConfig.WP_API_URL

async function fetchAPI(query, variables) {
  const headers = { 'Content-Type': 'application/json' }
  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables })
  })

  const json = await res.json()
  console.log(json)

  if (json.errors) {
    console.log(json.errors)
    console.log('error details', query, variables)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getAllPosts(): Promise<PostType[]> {
  const data = await fetchAPI(allPosts, null)

  return data.posts.nodes
}

export async function getAllIds(): Promise<AllIdsType[]> {
  const data = await fetchAPI(allIds, null)

  return data.posts.nodes
}

export async function getPost(id: { id: number }): Promise<PostType> {
  console.log(123, id)
  const data = await fetchAPI(post, id)

  return data.post
}

export async function getReleatePosts(categoryId: {
  categoryId: number
}): Promise<PostType> {
  const data = await fetchAPI(releatePosts, categoryId)

  return data.posts.nodes
}
