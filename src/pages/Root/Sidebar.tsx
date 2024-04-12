import {
  ArrowBigUpDash,
  BookText,
  Hammer,
  LucideIcon,
  Package,
  ShieldQuestion,
  Users,
} from 'lucide-react'
import React from 'react'
import { Link, useMatch } from 'react-router-dom'
import { ProfileSheet } from './ProfileSheet'
import { cn } from '@/lib'

export const Sidebar: React.FC = () => {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-6">
          <Link to="/" className="flex items-center gap-1 font-semibold">
            <ArrowBigUpDash />
            <span className="text-lg font-medium">upsupply</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="flex flex-col gap-0.5 items-start px-4 py-2 text-sm font-medium">
            <SidebarItem label="Projects" to="/projects" Icon={Hammer} />
            <SidebarItem
              label="Questionnaire"
              to="/questionnaire"
              Icon={ShieldQuestion}
            />
            <SidebarItem label="Products" to="/products" Icon={Package} />
            <SidebarItem label="Awareness" to="/awareness" Icon={BookText} />
            <SidebarItem label="Members" to="/members" Icon={Users} />
          </nav>
        </div>
        <div className="mt-auto p-4">
          <ProfileSheet />
        </div>
      </div>
    </div>
  )
}

const SidebarItem: React.FC<{
  label: string
  to: string
  Icon: LucideIcon
}> = ({ label, to, Icon }) => {
  const match = useMatch(to)
  return (
    <Link
      to={to}
      className={cn(
        'w-full text-md flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-all hover:text-primary',
        match && 'text-primary bg-muted',
      )}
    >
      <Icon className="h-5 w-5" />
      {label}
    </Link>
  )
}
