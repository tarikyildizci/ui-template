import { RouteObject } from 'react-router-dom'
import { Dashboard } from './Dashboard'

export const dashboardRoutes: Array<RouteObject> = [
  {
    index: true,
    element: <Dashboard />,
  },
]
