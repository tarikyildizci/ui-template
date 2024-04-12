import { RouteObject } from 'react-router-dom'
import { NotFound } from './NotFound'

export const utilityRoutes: Array<RouteObject> = [
  {
    path: '*',
    element: <NotFound />,
  },
]
