import getConfig from 'next/config'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { AppState } from '../app/store'
import {
  CategoryNodesType,
  CategoryType,
  SearchNodesType,
  SearchType,
  FetchAsyncSearchType
} from '../types/common'
import { PostType } from '../types/common'
const { publicRuntimeConfig } = getConfig()
export const API_URL = publicRuntimeConfig.WP_API_URL

export const fetchAsyncCategories = createAsyncThunk<CategoryNodesType, string>(
  'wp/categories',
  async (query: string) => {
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
  FetchAsyncSearchType
>('wp/search', async (args) => {
  const { query, variables } = args
  const headers = { 'Content-Type': 'application/json' }
  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables })
  })

  const json = await res.json()
  if (json.errors) {
    throw new Error('Failed to fetch API')
  }

  return json.data
})

interface InitialStateType {
  categories: Partial<CategoryType>
  search: Partial<SearchType>
  reset: boolean
}

const wpSlice = createSlice({
  name: 'header',
  initialState: {
    categories: [],
    search: [],
    reset: false
  } as InitialStateType,
  reducers: {
    newReset: (state) => {
      state.reset = !state.reset
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncCategories.fulfilled, (state, { payload }) => {
      return {
        ...state,
        categories: payload.categories.nodes
      }
    })
    builder.addCase(fetchAsyncSearch.fulfilled, (state, { payload }) => {
      return {
        ...state,
        search: payload.posts.nodes
      }
    })
  }
})

export const { newReset } = wpSlice.actions

export const selectCategories = (state: AppState): CategoryType[] =>
  state.header.categories as CategoryType[]
export const selectSearch = (state: AppState): PostType[] =>
  state.header.search as PostType[]
export const selectReset = (state: AppState): boolean => state.header.reset

export default wpSlice.reducer
