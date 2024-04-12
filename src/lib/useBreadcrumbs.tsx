import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { useMatches } from 'react-router-dom'
import { useTranslation } from './useTranslation'
import { Fragment } from 'react/jsx-runtime'

export const useBreadcrumbs = () => {
  const matches = useMatches()
  const { t } = useTranslation('breadcrumbs')

  const breadcrumbs = matches
    .filter(({ id }) => !id.startsWith('_'))
    .map((match) => {
      return {
        id: match.id,
        path: match.pathname,
      }
    })

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) =>
          index !== breadcrumbs.length - 1 ? (
            <Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink key={breadcrumb.id} href={breadcrumb.path}>
                  {t(breadcrumb.id)}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </Fragment>
          ) : (
            <BreadcrumbItem key={index} className="text-lg font-medium">
              <BreadcrumbPage>{t(breadcrumb.id)}</BreadcrumbPage>
            </BreadcrumbItem>
          ),
        )}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
