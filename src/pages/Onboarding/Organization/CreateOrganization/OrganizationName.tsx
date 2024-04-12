import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useTranslation } from '@/lib'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { organizationNameSchema } from './schemas'

const TRANSLATION_KEY = 'pages.onboarding.create_organization.organization_name'

export type OrganizationNameFormInputs = z.infer<typeof organizationNameSchema>

export const OrganizationName: React.FC<{
  onSubmit: (data: OrganizationNameFormInputs) => void
}> = ({ onSubmit }) => {
  const { t } = useTranslation(TRANSLATION_KEY)
  const { t: tCommon } = useTranslation('common')
  const methods = useForm<OrganizationNameFormInputs>({
    resolver: zodResolver(organizationNameSchema),
  })

  return (
    <Form {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="h-full flex flex-col items-start justify-center gap-8 p-24"
      >
        <div className="space-y-1">
          <h1 className="text-4xl font-semibold">{t('title')}</h1>
          <p className="text-md text-muted-foreground">{t('subtitle')}</p>
        </div>
        <FormField
          control={methods.control}
          name="organizationName"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>{t('label')}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  value={field.value || ''}
                  placeholder={t('placeholder')}
                />
              </FormControl>
              <FormDescription>{t('helper')}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full">{tCommon('continue')}</Button>
      </form>
    </Form>
  )
}
