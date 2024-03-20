import { RouteObject } from 'react-router-dom'
import Login from './Login'

export const authRoutes: Array<RouteObject> = [
  {
    path: '/login',
    element: <Login />,
  },
]
