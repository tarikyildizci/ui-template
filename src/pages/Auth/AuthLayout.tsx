import { Navigate, Outlet } from 'react-router-dom'
import visual from '@/assets/onboarding_visual.jpg'
import { Logo } from '@/components/upsupply'
import { useAuth } from '@/lib/useAuth'

export const AuthLayout: React.FC = () => {
  const { token } = useAuth()
  if (token) {
    return <Navigate to="/" />
  }
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <Outlet />
      <div className="absolute left-4 top-4">
        <Logo />
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
