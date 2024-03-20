import { BaseQueryFn } from '@reduxjs/toolkit/query'
import axios, { AxiosRequestConfig } from 'axios'
// import i18n from '@/lib/i18n'

axios.defaults.withCredentials = true
axios.defaults.timeout = 60 * 1000 // 60 seconds

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl?: string } = { baseUrl: '' },
  ): BaseQueryFn<
    {
      url: string
      method: AxiosRequestConfig['method']
      data?: AxiosRequestConfig['data']
      params?: Record<string, unknown>
      errorOverride?: boolean
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const axiosResponse = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
      })

      return axiosResponse
    } catch (axiosError) {
      const err = axiosError
      return { error: err }
      //   if (err.response) {
      //     if (err.response.data && err.response.data.detail) {
      //       return {
      //         error: {
      //           message: err.response.data.detail.message,
      //           data: err.response.data,
      //           errorOverride,
      //           code: err.response.status,
      //         },
      //       }
      //     } else if (err.response.data && err.response.data.message) {
      //       return {
      //         error: {
      //           message: err.response.data.message,
      //           data: err.response.data,
      //           errorOverride,
      //           code: err.response.status,
      //         },
      //       }
      //     } else if (err.response.status >= 500)
      //       return { error: { status: err.response.status, data: err } }
      //     else
      //       return {
      //         error: { message: i18n.t('response.unknown') },
      //       }
      //   } else if (err.code === 'ECONNABORTED') {
      //     if (err.message.startsWith('Request aborted ')) {
      //       return { data: undefined }
      //     } else {
      //       return {
      //         error: { message: i18n.t('response.network') },
      //       }
      //     }
      //   } else if (err.message) {
      //     const { message } = err
      //     return { error: { message } }
      //   } else return { error: { message: i18n.t('response.unknown') } }
    }
  }

export default axiosBaseQuery
