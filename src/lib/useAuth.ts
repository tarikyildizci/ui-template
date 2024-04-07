import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { selectToken } from '@/services/slices/authSlice'

export const useAuth = () => {
  const token = useSelector(selectToken)

  return useMemo(() => ({ token }), [token])
}
