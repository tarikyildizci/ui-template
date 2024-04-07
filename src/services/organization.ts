import { createApi } from '@reduxjs/toolkit/query/react'
import { BaseListRequest, OrganizationType } from './types'
import { baseQueryWithReauth } from '@/store/baseQuery'

type OrganizationResponse = {
  id: number
  name: string
  slug: string
  type: OrganizationType
}
type ListOrganizationsRequest = BaseListRequest

type ListOrganizationsResponse = {
  count: number
  next: null
  previous: null
  results: Array<OrganizationResponse>
}

type GetOrganizationRequest = {
  id: number
}

type GetOrganizationResponse = OrganizationResponse

export const organizationApi = createApi({
  baseQuery: baseQueryWithReauth,
  reducerPath: 'organizationApi',
  endpoints: (builder) => ({
    listOrganizations: builder.query<
      ListOrganizationsResponse,
      ListOrganizationsRequest
    >({
      query: ({ limit, offset }) => ({
        url: '/org/',
        method: 'GET',
        params: { limit, offset },
      }),
    }),
    getOrganization: builder.query<
      GetOrganizationResponse,
      GetOrganizationRequest
    >({
      query: ({ id }) => ({
        url: `/org/${id}/`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useListOrganizationsQuery, useGetOrganizationQuery } =
  organizationApi
