import { RouteObject } from 'react-router-dom'
import Login from './Login'
import { Signup } from './Signup'
import { AuthLayout } from './AuthLayout'

export const authRoutes: Array<RouteObject> = [
  {
    id: '_auth',
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
        id: 'login',
      },
      {
        path: '/signup',
        element: <Signup />,
        id: 'signup',
      },
    ],
  },
]
