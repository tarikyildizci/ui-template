import { useAuth } from '@/lib/useAuth'
import React from 'react'
import { Root } from './Root'

export const PrivateOutlet: React.FC = () => {
  const auth = useAuth()

  if (!auth.token) {
    window.location.href = '/login'
  }

  return <Root />
}
