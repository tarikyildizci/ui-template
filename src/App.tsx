import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { authRoutes } from '@/pages/Auth/routes'
import { dashboardRoutes } from '@/pages/Dashboard/routes'
import { controlsRoutes } from '@/pages/Controls/routes'
import { Toaster } from '@/components/ui/toaster.tsx'
import { initI18n } from './lib/i18n'
import { PrivateOutlet } from './pages/PrivateOutlet'

initI18n()

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      id: 'home',
      element: <PrivateOutlet />,
      children: [...dashboardRoutes, ...controlsRoutes],
    },
    ...authRoutes,
  ])
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}

export default App
