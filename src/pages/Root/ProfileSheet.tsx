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
          <p className="text-xs text-muted-foreground">tarik@yildizci.com</p>
        </div>
      </div>

      <Button size="icon" variant="ghost" onClick={() => dispatch(loggedOut())}>
        <LogOut className="h-4 w-4" />
      </Button>
    </div>
  )
}
