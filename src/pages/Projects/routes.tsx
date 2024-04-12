import { RouteObject } from 'react-router-dom'
import { Projects } from './Projects'

export const projectRoutes: Array<RouteObject> = [
  {
    path: '/projects',
    element: <Projects />,
    id: 'projects',
  },
]
