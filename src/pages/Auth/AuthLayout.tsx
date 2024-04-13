import { Link, Navigate, Outlet } from 'react-router-dom'
import visual from '@/assets/onboarding_visual.jpg'
import { useAuth } from '@/lib/useAuth'
import { ArrowBigUpDash } from 'lucide-react'

export const AuthLayout: React.FC = () => {
  const { token } = useAuth()
  if (token) {
    return <Navigate to="/" />
  }
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <Outlet />
      <div className="absolute left-4 top-4">
        <Link to="/" className="flex items-center gap-1 font-semibold">
          <ArrowBigUpDash />
          <span className="text-lg font-medium">ondokuz</span>
        </Link>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          src={visual}
          alt="An orange circle with a white background."
          className="h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
