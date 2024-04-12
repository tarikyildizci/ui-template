import { z } from 'zod'

const TRANSLATION_KEY = 'pages.onboarding.create_organization.organization_name'

export const organizationNameSchema = z.object({
  organizationName: z
    .string({
      required_error: `${TRANSLATION_KEY}.required`,
    })
    .max(255, {
      message: `${TRANSLATION_KEY}.max`,
    })
    .min(3, {
      message: `${TRANSLATION_KEY}.min`,
    }),
})

export const organizationMembersSchema = z.object({
  currentEmail: z.string().email().optional(),
  members: z.array(
    z.object({
      email: z.string().email(),
      role: z.enum(['admin', 'member']),
    }),
  ),
})

export const createOrganizationSchema = z.intersection(
  organizationMembersSchema.omit({ currentEmail: true }).partial(),
  organizationNameSchema.partial(),
)
