import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useBreadcrumbs } from '@/lib/useBreadcrumbs'
import React from 'react'

export const Header: React.FC = () => {
  const breadcrumbs = useBreadcrumbs()

  return (
    <header className="flex h-14 items-center gap-4 border-b px-6">
      <div className="w-full flex-1">{breadcrumbs}</div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="sm">
            Mercedes
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Organization</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Change Organization</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Mercedes</DropdownMenuItem>
              <DropdownMenuItem>Bosch</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}

// responsive sidebar
{
  /* <Sheet>
  <SheetTrigger asChild>
    <Button
      variant="outline"
      size="icon"
      className="shrink-0 md:hidden"
    >
      <Menu className="h-5 w-5" />
      <span className="sr-only">Toggle navigation menu</span>
    </Button>
  </SheetTrigger>
  <SheetContent side="left" className="flex flex-col">
    <nav className="grid gap-2 text-lg font-medium">
      <Link
        to="#"
        className="flex items-center gap-2 text-lg font-semibold"
      >
        <Package2 className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <Link
        to="#"
        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
      >
        <Home className="h-5 w-5" />
        Dashboard
      </Link>
      <Link
        to="#"
        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
      >
        <ShoppingCart className="h-5 w-5" />
        Orders
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          6
        </Badge>
      </Link>
      <Link
        to="#"
        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
      >
        <Package className="h-5 w-5" />
        Products
      </Link>
      <Link
        to="#"
        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
      >
        <Users className="h-5 w-5" />
        Customers
      </Link>
      <Link
        to="#"
        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
      >
        <LineChart className="h-5 w-5" />
        Analytics
      </Link>
    </nav>
    <div className="mt-auto">
      <Card>
        <CardHeader>
          <CardTitle>Upgrade to Pro</CardTitle>
          <CardDescription>
            Unlock all features and get unlimited access to our
            support team.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button size="sm" className="w-full">
            Upgrade
          </Button>
        </CardContent>
      </Card>
    </div>
  </SheetContent>
</Sheet> */
}
