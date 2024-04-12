import React from 'react'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useTranslation } from '@/lib'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Copy } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'
import { Link } from 'react-router-dom'
import { getValidatedOnboardingDataFromLocalStorage } from './util'
import { organizationMembersSchema } from './schemas'

const TRANSLATION_KEY = 'pages.onboarding.create_organization.members'

export type OrganizationMembersFormInputs = z.infer<
  typeof organizationMembersSchema
>

export const OrganizationMembers: React.FC = () => {
  const localOnboardingData = getValidatedOnboardingDataFromLocalStorage()
  const { t } = useTranslation(TRANSLATION_KEY)
  const methods = useForm<OrganizationMembersFormInputs>({
    resolver: zodResolver(organizationMembersSchema),
  })

  const { toast } = useToast()
  const onSubmit = (data: OrganizationMembersFormInputs) => {
    console.log(data)
  }

  return (
    <Form {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="h-full flex flex-col items-start justify-center gap-8 p-24"
      >
        <div className="space-y-1">
          {localOnboardingData.success &&
            localOnboardingData.data.organizationName && (
              <p className="text-md font-medium text-muted-foreground">
                {localOnboardingData.data.organizationName}
              </p>
            )}
          <h1 className="text-4xl font-semibold">{t('title')}</h1>
          <p className="text-md text-muted-foreground">{t('subtitle')}</p>
        </div>
        <div className="w-full flex gap-1">
          <Input
            className="grow"
            value="https://upsupply.com/join-organization/3423AEAB-5A05-4A59-9800-7D59CC7C0708"
            readOnly
          />
          <Button
            size="icon"
            variant="ghost"
            onClick={() => {
              toast({
                description: t('link_copied'),
              })
            }}
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <Button asChild className="w-full">
          <Link to="/">{t('go_to_dashboard')}</Link>
        </Button>
      </form>
    </Form>
  )
}
