import { configureStore } from '@reduxjs/toolkit'
import headerReducer from '../components/headerSlice'

export const store = configureStore({
  reducer: {
    header: headerReducer
  }
})

export type AppState = ReturnType<typeof store.getState>
