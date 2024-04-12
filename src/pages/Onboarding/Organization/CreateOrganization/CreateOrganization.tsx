import { Logo } from '@/components/upsupply'
import React, { useState } from 'react'
import visual from '@/assets/onboarding_visual.jpg'
import {
  OrganizationName,
  OrganizationNameFormInputs,
} from './OrganizationName'
import { OrganizationMembers } from './OrganizationMembers'
import { getValidatedOnboardingDataFromLocalStorage } from './util'

export const CreateOrganization: React.FC = () => {
  const localOnboardingData = getValidatedOnboardingDataFromLocalStorage()

  const [organizationName, setOrganizationName] = useState(
    localOnboardingData.success
      ? localOnboardingData.data.organizationName
      : undefined,
  )

  const organizationStep = organizationName ? 1 : 0

  const onOrganizationNameSubmit = (data: OrganizationNameFormInputs) => {
    setOrganizationName(data.organizationName)
    localStorage.setItem(
      'onboarding_organization',
      JSON.stringify({ organizationName: data.organizationName }),
    )
  }

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <CurrentOnboardingStep
        step={organizationStep}
        onOrganizationNameSubmit={onOrganizationNameSubmit}
      />
      <div className="absolute left-4 top-4">
        <Logo />
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          src={visual}
          alt="An orange circle with a white background."
          className="h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}

const CurrentOnboardingStep: React.FC<{
  step: number
  onOrganizationNameSubmit: (data: OrganizationNameFormInputs) => void
}> = ({ step, onOrganizationNameSubmit }) => {
  switch (step) {
    case 0:
      return <OrganizationName onSubmit={onOrganizationNameSubmit} />
    case 1:
      return <OrganizationMembers />
    default:
      return 'Error with onboarding.'
  }
}
