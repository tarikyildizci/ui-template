import React from 'react'
import { Outlet } from 'react-router-dom'

export const Root: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col">
      Root Layout
      <Outlet />
    </main>
  )
}
