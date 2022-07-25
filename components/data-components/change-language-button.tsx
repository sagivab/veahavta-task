/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import Image from 'next/image'

export const ChangeLangButton = ({
  className,
  children,
  lang,
}: {
  className?: string
  children?: React.ReactNode
  lang: string
}) => {
  const router = useRouter()
  const changeLocale = (lang: string) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: lang })
  }
  return (
    <div>
      <button onClick={() => changeLocale(lang)} className="h-8">
        {children}
      </button>
    </div>
  )
}
