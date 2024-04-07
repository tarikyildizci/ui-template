import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/store/store'
import { authApi } from '../auth'

type AuthState = {
  token: string | null
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: localStorage.getItem('token'),
  } as AuthState,
  reducers: {
    tokenReceived: (state, { payload }: PayloadAction<string>) => {
      console.log('tokenReceived')
      state.token = payload
      localStorage.setItem('token', payload)
    },
    loggedOut: (state) => {
      console.log('loggedOut')
      state.token = null
      localStorage.removeItem('token')
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token
        localStorage.setItem('token', payload.token)
      },
    )
  },
})

export const auth = authSlice.reducer

export const { tokenReceived, loggedOut } = authSlice.actions

export const selectToken = (state: RootState) => state.auth.token
