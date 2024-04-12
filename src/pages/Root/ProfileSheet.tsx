import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useDispatch } from 'react-redux'
import { loggedOut } from '@/services/slices/authSlice'

export const ProfileSheet: React.FC = () => {
  const dispatch = useDispatch()
  return (
    <div className="w-full h-fit flex gap-2 justify-between items-center">
      <div className="flex gap-2">
        <Avatar className="border">
          <AvatarFallback>TY</AvatarFallback>
          <AvatarImage src="" />
        </Avatar>
        <div className=" flex flex-col items-start">
          <p className="text-sm text-foreground">Tarık Y. Yıldızcı</p>
          <p className="text-xs text-muted-foreground">tarik@upsupply.com</p>
        </div>
      </div>

      <Button size="icon" variant="ghost" onClick={() => dispatch(loggedOut())}>
        <LogOut className="h-4 w-4" />
      </Button>

      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant={'ghost'}>
            <EllipsisVertical className="h-4 w-4 text-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Building className="h-4 w-4 mr-2" />
              Switch Organization
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Mercedes</DropdownMenuItem>
              <DropdownMenuItem>Bosch</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuItem className="text-destructive">
            <LogOut
              className="h-4 w-4 mr-2"
              onClick={() => dispatch(loggedOut())}
            />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}
    </div>
  )
}
