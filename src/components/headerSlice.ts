import getConfig from 'next/config'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  CategoryNodesType,
  CategoryType,
  SearchNodesType,
  SearchType,
  fetchAsyncSearchType
} from '../modules/commonType'
const { publicRuntimeConfig } = getConfig()
export const API_URL = publicRuntimeConfig.WP_API_URL

export const fetchAsyncCategories = createAsyncThunk<CategoryNodesType, string>(
  'wp/categories',
  async (query: string) => {
    console.log('fetchAsyncGet')
    const headers = { 'Content-Type': 'application/json' }
    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query })
    })

    const json = await res.json()
    if (json.errors) {
      console.log('error details', query)
      throw new Error('Failed to fetch API')
    }

    return json.data
  }
)

export const fetchAsyncSearch = createAsyncThunk<
  SearchNodesType,
  fetchAsyncSearchType
>('wp/search', async (args) => {
  const { query, variables } = args
  console.log(123, query, variables)
  const headers = { 'Content-Type': 'application/json' }
  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables })
  })

  const json = await res.json()
  console.log(json)
  if (json.errors) {
    throw new Error('Failed to fetch API')
  }

  return json.data
})

interface InitialStateType {
  categories: Partial<CategoryType>
  searchRequest: Partial<SearchType>
}

const wpSlice = createSlice({
  name: 'header',
  initialState: {
    categories: [],
    searchRequest: {}
  } as InitialStateType,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncCategories.fulfilled, (state, { payload }) => {
      return {
        ...state,
        categories: payload.categories.nodes
      }
    })
    builder.addCase(fetchAsyncSearch.fulfilled, (state, { payload }) => {
      console.log('result', payload.posts.nodes)
      return {
        ...state,
        searchRequest: payload.posts.nodes
      }
    })
  }
})

export const selectCategories = (state) => state.header.categories
export const selectSearch = (state) => state.header.search

export default wpSlice.reducer
