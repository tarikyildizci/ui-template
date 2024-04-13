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
import { useTranslation } from '@/lib'
import { PasswordInput } from '@/components'

const schema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type LoginFormInputs = z.infer<typeof schema>

export default function AuthenticationPage() {
  const { t } = useTranslation('pages.auth')
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
    <Form {...methods}>
      <div className="flex items-center justify-center py-12 h-screen overflow-auto">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">{t('login.title')}</h1>
            <p className="text-balance text-muted-foreground">
              {t('login.info')}
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
            <Button type="submit" className="w-full" disabled={isLoading}>
              {t('login.title')}
            </Button>
            {/* <Button variant="outline" className="w-full" disabled={isLoading}>
              Login with Google
            </Button> */}
          </form>
          <div className="mt-4 text-center text-sm">
            {t('login.no_account')}{' '}
            <Link to="/signup" className="underline">
              {t('signup.title')}
            </Link>
          </div>
        </div>
      </div>
    </Form>
  )
}
