import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query'
import { tokenReceived, loggedOut } from '@/services/slices/authSlice'
import { Mutex } from 'async-mutex'
import { RootState } from './store'
import { RefreshTokenResponse } from '@/services/auth'

// create a new mutex
const mutex = new Mutex()
const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = (getState() as RootState).auth.token
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  },
})
export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)
  if (result.error && result.error.status === 401) {
    // checking whether the mutex is locked
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()
      try {
        const refreshResult = await fetchBaseQuery({
          baseUrl: import.meta.env.VITE_BASE_URL,
        })(
          {
            url: '/iam/refresh_token/',
            method: 'POST',
            body: {
              refresh_access_token: (api.getState() as RootState).auth.token,
            },
          },
          api,
          extraOptions,
        )

        if (refreshResult.error) {
          api.dispatch(loggedOut())
        } else {
          const refreshResultData = refreshResult.data as RefreshTokenResponse

          if ('token' in refreshResultData && refreshResultData.token) {
            api.dispatch(tokenReceived(refreshResultData.token))
            // retry the initial query
            result = await baseQuery(args, api, extraOptions)
          }
        }
      } finally {
        // release must be called once the mutex should be released again.
        release()
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }
  return result
}
