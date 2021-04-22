import getConfig from 'next/config'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { CategoryType } from '../modules/commonType'
const { publicRuntimeConfig } = getConfig()
export const API_URL = publicRuntimeConfig.WP_API_URL

export const fetchAsyncCategories = createAsyncThunk<CategoryType, string>(
  'wp/post',
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

interface InitialStateType {
  categories: unknown
}

const wpSlice = createSlice({
  name: 'header',
  initialState: {
    categories: []
  } as InitialStateType,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncCategories.fulfilled, (state, { payload }) => {
      console.log('build', payload)
      state.categories = payload.categories.nodes
    })
  }
})

export const selectCategories = (state) => state.header.categories

export default wpSlice.reducer
