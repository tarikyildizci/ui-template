import { useAuth } from '@/lib/useAuth'
import React from 'react'
import { Root } from './Root'
import { Navigate } from 'react-router-dom'

export const PrivateOutlet: React.FC = () => {
  const auth = useAuth()

  if (!auth.token) {
    return <Navigate to="/login" />
  }

  return <Root />
}
