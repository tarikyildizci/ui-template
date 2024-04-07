import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Sidebar } from './Root/index'

export const Root: React.FC = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[220px_1fr]">
      <Sidebar />
      <div className="flex flex-col max-h-screen h-screen">
        <Header />
        <main className="flex-1 max-h-full overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
