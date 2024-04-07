import { cn } from '@/lib'
import { Link, useNavigate } from 'react-router-dom'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowBigUpDash, Loader } from 'lucide-react'
import { SiGoogle, SiGithub, SiMicrosoft } from '@icons-pack/react-simple-icons'
import { useLoginMutation } from '@/services/auth'
import { useToast } from '@/components/ui/use-toast'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { PasswordInput } from '@/components/upsupply/PasswordInput'
import { useTranslation } from '@/lib'

const schema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type LoginFormInputs = z.infer<typeof schema>

export default function AuthenticationPage() {
  const { t } = useTranslation('pages.login')
  const { toast } = useToast()
  const navigate = useNavigate()

  const methods = useForm<LoginFormInputs>({ resolver: zodResolver(schema) })

  const [login, { isLoading }] = useLoginMutation()
  const onSubmit = (data: LoginFormInputs) => {
    login({ email: data.email, password: data.password })
      .unwrap()
      .then(() => navigate('/'))
      .catch((error) => {
        toast({
          title: 'Error!',
          description: 'Login failed, please try again. ' + error.message,
          variant: 'destructive',
        })
      })
  }
  return (
    <div className="min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        to="/examples/authentication"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute right-4 top-4 md:right-8 md:top-8',
        )}
      >
        Login
      </Link>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1626908013351-800ddd734b8a?q=80&w=3086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className="relative z-20 gap-1 flex items-center text-lg font-medium">
          <ArrowBigUpDash />
          upsupply
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              {/* &ldquo;This library has saved me countless hours of work and
              helped me deliver stunning designs to my clients faster than ever
              before.&rdquo; */}
            </p>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome Back
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <Form {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="grid gap-6"
            >
              <div className="grid gap-2">
                <FormField
                  control={methods.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('email')}</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={methods.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('password')}</FormLabel>
                      <FormControl>
                        <PasswordInput {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <div className="grid gap-1">
                  <Label className="sr-only" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                  />
                </div> */}
                <Button disabled={isLoading}>
                  {isLoading && (
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Login with Email
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button variant="outline" type="button" disabled={isLoading}>
                  {isLoading ? (
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <SiGithub
                      className="h-4 w-4 mr-2"
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    />
                  )}
                  GitHub
                </Button>
                <Button variant="outline" type="button" disabled={isLoading}>
                  {isLoading ? (
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <SiGoogle
                      className="h-4 w-4 mr-2"
                      // will be fixed hopefully
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    />
                  )}
                  Google
                </Button>
                <Button variant="outline" type="button" disabled={isLoading}>
                  {isLoading ? (
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <SiMicrosoft
                      className="h-4 w-4 mr-2"
                      // will be fixed hopefully
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    />
                  )}
                  Microsoft
                </Button>
              </div>
            </form>
          </Form>

          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{' '}
            <Link
              to="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              to="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
