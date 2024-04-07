import { useState, forwardRef } from 'react'
import { Input, InputProps } from '../ui/input'
import { Eye, EyeOff } from 'lucide-react'

export type PasswordInputProps = InputProps

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (props, ref) => {
    const [isShown, setIsShown] = useState(false)

    const Icon = isShown ? EyeOff : Eye

    return (
      <div className="relative flex items-center">
        <Input
          className="pr-8"
          type={isShown ? 'text' : 'password'}
          {...props}
          ref={ref}
        />
        <Icon
          onClick={() => setIsShown((prev) => !prev)}
          className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 select-none cursor-pointer"
        />
      </div>
    )
  },
)
