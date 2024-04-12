import { Progress } from '@/components/ui/progress'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const Projects: React.FC = () => {
  return (
    <div className="h-full flex gap-2 p-4 bg-muted">
      <div className="h-fit grow grid grid-cols-3 gap-4 rounded-lg">
        <div className="rounded-md bg-background p-8 space-y-2 h-fit border">
          <h1 className="text-xl font-medium text-foreground">GLB200</h1>
          <p className="text-sm text-muted-foreground">Compliance Progress</p>
          <Progress value={30} />
          <p className="text-sm text-muted-foreground">Suppliers</p>
          <p>Bosch, Beko</p>
        </div>
        <div className="rounded-md bg-background p-8 space-y-2 h-fit border">
          <h1 className="text-xl font-medium text-foreground">GLB200</h1>
          <p className="text-sm text-muted-foreground">Compliance Progress</p>
          <Progress value={30} />
          <p className="text-sm text-muted-foreground">Suppliers</p>
          <p>Bosch, Beko</p>
        </div>
        <div className="rounded-md bg-background p-8 space-y-2 h-fit border">
          <h1 className="text-xl font-medium text-foreground">GLB200</h1>
          <p className="text-sm text-muted-foreground">Compliance Progress</p>
          <Progress value={30} />
          <p className="text-sm text-muted-foreground">Suppliers</p>
          <p>Bosch, Beko</p>
        </div>
        <div className="rounded-md bg-background p-8 space-y-2 h-fit border">
          <h1 className="text-xl font-medium text-foreground">GLB200</h1>
          <p className="text-sm text-muted-foreground">Compliance Progress</p>
          <Progress value={30} />
          <p className="text-sm text-muted-foreground">Suppliers</p>
          <p>Bosch, Beko</p>
        </div>
        <div className="rounded-md bg-background p-8 space-y-2 h-fit border">
          <h1 className="text-xl font-medium text-foreground">GLB200</h1>
          <p className="text-sm text-muted-foreground">Compliance Progress</p>
          <Progress value={30} />
          <p className="text-sm text-muted-foreground">Suppliers</p>
          <p>Bosch, Beko</p>
        </div>
        <div className="rounded-md bg-background p-8 space-y-2 h-fit border">
          <h1 className="text-xl font-medium text-foreground">GLB200</h1>
          <p className="text-sm text-muted-foreground">Compliance Progress</p>
          <Progress value={30} />
          <p className="text-sm text-muted-foreground">Suppliers</p>
          <p>Bosch, Beko</p>
        </div>
      </div>
      <Outlet />
    </div>
  )
}
