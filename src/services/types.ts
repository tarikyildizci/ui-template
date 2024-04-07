export type ApiErrorResponse = {
  detail: string
}

export type BaseListRequest = {
  limit?: number
  offset?: number
}

export enum OrganizationType {
  OEM = 'oem',
  SUPPLIER = 'supplier',
  SME = 'sme',
}
