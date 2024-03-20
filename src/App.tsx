import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { authRoutes } from './pages/Auth/routes'
import { Root } from './pages/Root'
import { dashboardRoutes } from './pages/Dashboard/routes'

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [...authRoutes, ...dashboardRoutes],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
