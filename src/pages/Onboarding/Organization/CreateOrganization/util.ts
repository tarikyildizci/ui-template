import { createOrganizationSchema } from './schemas'

export const getValidatedOnboardingDataFromLocalStorage = () => {
  const onboardingData = JSON.parse(
    localStorage.getItem('onboarding_organization') || '{}',
  )
  return createOrganizationSchema.safeParse(onboardingData)
}
