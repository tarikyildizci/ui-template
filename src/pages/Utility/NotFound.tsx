import { Button } from '@/components/ui/button'
import { useTranslation } from '@/lib'
import { ArrowBigUpDash, ArrowLeft } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound: React.FC = () => {
  const { t } = useTranslation('pages.common.not_found')
  return (
    <main className="h-screen w-full p-20">
      <div className="absolute left-8 top-8">
        <Link to="/" className="flex items-center gap-1 font-semibold">
          <ArrowBigUpDash />
          <span className="text-lg font-medium">ondokuz</span>
        </Link>
      </div>
      <div className="h-full flex flex-col justify-center gap-4">
        <p className="text-xl font-semibold text-orange-500">{t('error')}</p>
        <h1 className="text-6xl font-semibold text-foreground">{t('title')}</h1>
        <p className="text-sm text-muted-foreground">{t('description')}</p>
        <div className="flex gap-2">
          <Button onClick={() => history.back()} variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" /> {t('go_back')}
          </Button>
          <Button asChild>
            <Link to="/">{t('take_me_home')}</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
