import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { Logo } from '@/components/upsupply'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useParams } from 'react-router-dom'
import { z } from 'zod'

const schema = z.object({
  inviteCode: z.string().min(6),
})

type JoinOrganizationFormInputs = z.infer<typeof schema>

export const JoinOrganization: React.FC = () => {
  const params = useParams()
  const inviteCode = params.inviteCode
  const [codeSent, setCodeSent] = React.useState(false)
  const methods = useForm<JoinOrganizationFormInputs>({
    resolver: zodResolver(schema),
  })

  if (!inviteCode) {
    return 'Invalid invite code. Please try again.' // TODO
  }

  const onSubmit = (data: JoinOrganizationFormInputs) => {
    console.log(data)
  }

  return (
    <Form {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="min-h-screen container mx-auto flex gap-8 flex-col justify-center items-center"
      >
        <Logo />
        <h1 className="text-4xl font-semibold text-center text-balance">
          You have been invited to work with Mercedes.
        </h1>
        {!codeSent ? (
          <>
            <p className="text-md text-foreground text-center text-balance">
              We need to verify your email first. Click the button below to
              recieve a verification code to proceed.
            </p>
            <Button type="button" onClick={() => setCodeSent(true)}>
              Send Code to Email <Send className="mx-2 h-4 w-4" />
            </Button>
          </>
        ) : (
          <>
            <p>Please enter the code we've just sent to your email.</p>
            <FormField
              control={methods.control}
              name="inviteCode"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <p className="text-sm text-muted-foreground">
              Didn't receive the email? Check your spam folder or{' '}
              <Link to="#" reloadDocument className="underline">
                request a new one.
              </Link>
            </p>
            <Button>Verfiy Code</Button>
          </>
        )}
      </form>
    </Form>
  )
}
