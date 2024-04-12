import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { initI18n } from '@/lib/i18n'
import { PrivateOutlet } from '@/pages/Root'
import {
  authRoutes,
  controlsRoutes,
  dashboardRoutes,
  onboardingRoutes,
  projectRoutes,
  utilityRoutes,
} from '@/pages'

initI18n()

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      id: '_home',
      element: <PrivateOutlet />,
      children: [...dashboardRoutes, ...controlsRoutes, ...projectRoutes],
    },
    ...authRoutes,
    ...onboardingRoutes,
    ...utilityRoutes,
  ])
  return <RouterProvider router={router} />
}

export default App
