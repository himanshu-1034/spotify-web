import { configureStore } from '@reduxjs/toolkit'
import accessToken from '../reducers/accessToken';

export const store = configureStore({
  reducer: {
    accessToken
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch