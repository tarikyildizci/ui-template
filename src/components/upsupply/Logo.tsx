import { ArrowBigUpDash } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-1 font-semibold">
      <ArrowBigUpDash />
      <span className="text-lg font-medium">upsupply</span>
    </Link>
  )
}
