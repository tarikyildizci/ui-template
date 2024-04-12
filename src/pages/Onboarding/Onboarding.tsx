import { useAuth } from '@/lib/useAuth'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const Onboarding: React.FC = () => {
  const { token } = useAuth()
  if (token) {
    return <Navigate to="/" />
  }
  return (
    <main className="min-h-screen w-full">
      <Outlet />
    </main>
  )
}
