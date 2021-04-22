import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { CategoryType } from '../modules/commonType'
import { allCategories } from '../lib/wp'
const API_URL = process.env.WP_API_URL

export const fetchAsyncGet = createAsyncThunk<CategoryType[], string>(
  'wp/get',
  async (query = allCategories) => {
    const headers = { 'Content-Type': 'application/json' }
    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query })
    })

    const json = await res.json()
    if (json.errors) {
      console.log(json.errors)
      console.log('error details', query)
      throw new Error('Failed to fetch API')
    }
    return json.data
  }
)

interface InitialStateType {
  categories: CategoryType[]
}

const wpSlice = createSlice({
  name: 'wp',
  initialState: {
    categories: []
  } as InitialStateType,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGet.fulfilled, (state, { payload }) => {
      state.categories = payload
    })
  }
})

export default wpSlice.reducer
