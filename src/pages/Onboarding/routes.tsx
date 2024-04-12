import { RouteObject } from 'react-router-dom'
import { Onboarding } from './Onboarding'
import { CreateOrganization } from './Organization/CreateOrganization'
import { JoinOrganization } from './Organization/JoinOrganization'

export const onboardingRoutes: Array<RouteObject> = [
  {
    path: '/onboarding',
    element: <Onboarding />,
    children: [
      {
        index: true,
        element: <h1>Choose your onboarding</h1>,
        id: 'onboarding',
      },
      {
        path: 'organization',
        element: <CreateOrganization />,
        id: 'onboarding_organization',
      },
      {
        path: 'sme',
        element: <h1>SME</h1>,
        id: 'onboarding_sme',
      },
      {
        path: 'join-organization/:inviteCode',
        element: <JoinOrganization />,
        id: 'onboarding_join_organization',
      },
      {
        path: 'join-project/:inviteCode',
        element: <h1>Join Project</h1>,
        id: 'onboarding_join_project',
      },
    ],
  },
]
