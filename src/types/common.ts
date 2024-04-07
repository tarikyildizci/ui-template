export type MediaType = {
  id: string
  name: string
  description: string
  url: string
}

export enum ControlItemScopeType {
  ORGANIZATION = 'organization',
  TEAM = 'team',
  PRODUCT = 'product',
}

export enum ControlItemStatus {
  OK = 'ok',
  NOT_OK = 'not_ok',
  NOT_APPLICABLE = 'not_applicable',
  FURTHER_INFORMATION_REQUIRED = 'further_information_required',
}

export enum ControlItemRefresh {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  QUARTERLY = 'quarterly',
  YEARLY = 'yearly',
}

export enum ControlItemCmmi {
  INITIAL,
  MANAGED,
  DEFINED,
  QUANTITATIVELY_MANAGED,
  OPTIMIZING,
}

export enum NistFramework {
  IDENTIFY = 'identify',
  PROTECT = 'protect',
  DETECT = 'detect',
  RESPOND = 'respond',
  RECOVER = 'recover',
}

export enum AssigneeType {
  TEAM = 'team',
  USER = 'user',
}

export type ControlItemType = {
  id: string
  controlId: string
  name: string
  description: string
  guidance: string
  files: Array<MediaType>
  scope: ControlItemScopeType
  status: ControlItemStatus
  refresh?: {
    type: ControlItemRefresh
    period: number
  }
  cmmi?: ControlItemCmmi
  nistFramework?: Array<NistFramework>
  references: Array<string>
  assignee: {
    type: AssigneeType
    id: string
    name: string
  }
}
