import { auth } from '@/services/slices/authSlice'
import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit'
import { authApi } from '@/services/auth'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { organizationApi } from '@/services/organization'

const rootReducer = combineReducers({
  auth,
  [authApi.reducerPath]: authApi.reducer,
  [organizationApi.reducerPath]: organizationApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(organizationApi.middleware),
})

//https://redux-toolkit.js.org/rtk-query/api/setupListeners
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof rootReducer>
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
export type AppDispatch = typeof store.dispatch

export default store
