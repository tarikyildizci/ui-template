import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
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

const schema = z
  .object({
    email: z.string().email({
      message: 'pages.auth.errors.invalid_email',
    }),
    password: z
      .string()
      .min(8, {
        message: 'pages.auth.errors.password_min',
      })
      .max(100, {
        message: 'pages.auth.errors.password_max',
      }),
    password_confirmation: z.string(),
    first_name: z.string(),
    last_name: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'pages.auth.errors.passwords_match',
    path: ['password_confirmation'],
  })

type SignupFormInputs = z.infer<typeof schema>

export const Signup = () => {
  const { t } = useTranslation('pages.auth')
  const { toast } = useToast()
  const navigate = useNavigate()

  const methods = useForm<SignupFormInputs>({ resolver: zodResolver(schema) })

  const [login, { isLoading }] = useLoginMutation()
  const onSubmit = (data: SignupFormInputs) => {
    login({ email: data.email, password: data.password })
      .unwrap()
      .then(() => navigate('/'))
      .catch((error) => {
        toast({
          title: 'Error!',
          description: 'Login failed, please try again. ' + error?.data?.detail,
          variant: 'destructive',
        })
      })
  }
  return (
    <Form {...methods}>
      <div className="flex items-center justify-center py-12 h-screen overflow-auto">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">{t('signup.title')}</h1>
            <p className="text-balance text-muted-foreground">
              {t('signup.info')}
            </p>
          </div>

          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="grid gap-4"
          >
            <FormField
              control={methods.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('email')}</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={methods.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('first_name')}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={methods.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('last_name')}</FormLabel>
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
            <FormField
              control={methods.control}
              name="password_confirmation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('password_confirmation')}</FormLabel>
                  <FormControl>
                    <PasswordInput {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {t('signup.create_account')}
            </Button>
            {/* <Button variant="outline" className="w-full">
              Signup with Google
            </Button> */}
          </form>
          <div className="mt-4 text-center text-sm">
            {t('signup.already_account')}{' '}
            <Link to="/login" className="underline">
              {t('login.title')}
            </Link>
          </div>
        </div>
      </div>
    </Form>
  )
}
