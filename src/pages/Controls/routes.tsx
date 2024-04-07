import { RouteObject } from 'react-router-dom'
import { Controls } from './Controls'

export const controlsRoutes: Array<RouteObject> = [
  {
    path: 'questionnaire',
    element: <Controls />,
    id: 'questionnaire',
  },
]
