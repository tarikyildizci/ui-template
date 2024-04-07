import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ApiErrorResponse } from './types'

export type LoginResponse = {
  email: string
  token: string
}

export type LoginRequest = {
  email: string
  password: string
}

export type RefreshTokenRequest = {
  refresh_access_token: string
}

export type RefreshTokenResponse =
  | {
      token: string
    }
  | ApiErrorResponse

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  reducerPath: 'authApi',
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/iam/login/',
        method: 'POST',
        body: credentials,
      }),
    }),
    // refreshToken: builder.mutation<RefreshTokenResponse, RefreshTokenRequest>({
    //   query: (body) => ({
    //     url: '/iam/refresh_token/',
    //     method: 'POST',
    //     body,
    //   }),
    // }),
  }),
})

export const { useLoginMutation } = authApi
